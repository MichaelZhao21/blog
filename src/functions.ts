// Calculate the amount of time it takes to read, in minutes
export function computeReadingTime(input: string): number {
    const wc = calcWords(input);
    return Math.round(wc / 200);
}

// Calculate the number of words in a string, stripping non alphanumeric characters
export function calcWords(input: string): number {
    // Replace all non-alphanumeric characters
    const replaced = input.replaceAll(/[^A-Za-z0-9 ]/g, '');
    const split = replaced.split(" ").map(s => s.trim()).filter(s => s !== "");
    return split.length;
}
