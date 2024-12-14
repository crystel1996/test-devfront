const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
        primary: generatePalette('#BF2A6B'),
        accent: generatePalette('#c02b6b'),
        success: generatePalette('#08BF26'),
        textColor: generatePalette('#1E1E1E'),
        googleRating: generatePalette('#FFD43B')
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
                                accent: customPalettes.accent,
                                success: customPalettes.success,
                                textColor: customPalettes.textColor,
                                googleRating: customPalettes.googleRating
                        },

                        fontFamily: {
                                'sans': ['Nunito', 'sans-serif'],
                                'display': ['Nunito'],
                                'mono': ['Nunito'],
                                'body': ['Nunito', 'sans-serif'],
                                'title': ['Lato', 'sans-serif']
                        },
                        screens: {
                                'lg': '1024px'
                        },
                },
        },
        plugins: [],
}

