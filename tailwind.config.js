module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark-bkg': '#212121',
                'primary': '#b3f1ff'
            },
            fontFamily: {
                title: ['"Ubuntu Mono"', 'sans-serif'],
                header: ['Ubuntu', 'sans-serif'],
                text: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
