const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
        primary: generatePalette('#BF2A6B'),
        accent: generatePalette('#c02b6b'),
};

module.exports = {
        content: [
                "./resources/**/*.blade.php",
                "./resources/**/*.js",
                "./resources/**/*.vue",
        ],
        theme: {
                extend: {
                        colors: {
                                primary: customPalettes.primary,
                                accent: customPalettes.accent
                        },

                        fontFamily: {
                                'sans': ['Nunito'],
                                'display': ['Nunito'],
                                'mono': ['Nunito'],
                                'body': ['Nunito'],
                                'title': ['Lato']
                        },
                        screens: {
                                'lg': '1024px'
                        },
                },
        },
        plugins: [],
}

