import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Configuration
const IMAGE_DIR_PATH = './images';
const BUCKET_NAME = 'mikey-blog';
const KEY_PREFIX = 'blog';
const REGION = 'us-east-1';
const CDN_URL = 'https://cdn.mikz.dev';
const MAX_DIMENSION = 800;
const INPUT_FORMATS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];

// Initialize S3 client
const s3 = new S3Client({ region: REGION });

// Function to upload file to S3
const uploadToS3 = async (buffer, fileName) => {
    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: `${KEY_PREFIX}/${fileName}`,
        Body: buffer,
        ContentType: 'image/webp',
    };

    try {
        await s3.send(new PutObjectCommand(uploadParams));
        return true;
    } catch (error) {
        console.error(`Failed to upload ${fileName}:`, error);
        return false;
    }
};

// Function to resize an image
async function resizeImage(filePath, file) {
    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Resize if w/h is greater than MAX_DIMENSION
        // then convert to webp
        const shouldResize = metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION;
        const resizedImageBuffer = shouldResize
            ? await image
                .resize({
                    width: metadata.width > metadata.height ? MAX_DIMENSION : null,
                    height: metadata.height >= metadata.width ? MAX_DIMENSION : null,
                    fit: 'inside',
                })
                .webp()
                .toBuffer()
            : await image.webp().toBuffer();

        return resizedImageBuffer;
    } catch (error) {
        console.error(`Failed to process ${file}:`, error);
        return null;
    }
}

// Process all files in directory
try {
    const files = fs.readdirSync(IMAGE_DIR_PATH);

    for (const file of files) {
        const filePath = path.join(IMAGE_DIR_PATH, file);
        const ext = path.extname(file).toLowerCase();

        // Ignore all files that are not images
        if (!INPUT_FORMATS.includes(ext)) continue;

        // Resize the image
        const resizedImageBuffer = await resizeImage(filePath, file);
        if (!resizedImageBuffer) continue;

        // Upload the resized image to S3
        const webpFileName = file.replace(ext, '.webp');
        const res = await uploadToS3(resizedImageBuffer, webpFileName);
        if (!res) continue;

        // Log
        console.log(`Uploaded ${file} to S3 as ${CDN_URL}/${KEY_PREFIX}/${webpFileName}`);

        // Delete the original image
        fs.unlinkSync(filePath);
    }
} catch (error) {
    console.error('Error reading directory:', error);
}
