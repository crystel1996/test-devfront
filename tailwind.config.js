const path = require('path');
const generatePalette = require(path.resolve(__dirname, ('dev/tailwind/utils/generate-palette')));

const customPalettes = {
        primary: generatePalette('#BF2A6B'),
        accent: generatePalette('#c02b6b'),
        success: generatePalette('#08BF26'),
        textColor: generatePalette('#1E1E1E'),
        textColor2: generatePalette('#424242'),
        textColor3: generatePalette('#585858'),
        googleRating: generatePalette('#FFD43B'),
        gray: generatePalette('#F4F4F4'),
        blue: generatePalette('#36578A'),
        slateGray: generatePalette('#7A7878'),
        lightGray: generatePalette('#E9E9E9')
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
                                textColor2: customPalettes.textColor2,
                                textColor3: customPalettes.textColor3,
                                googleRating: customPalettes.googleRating,
                                gray: customPalettes.gray,
                                blue: customPalettes.blue,
                                slateGray: customPalettes.slateGray,
                                lightGray: customPalettes.lightGray
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
                        boxShadow: {
                                'custom-shadow': '0px 3px 6px rgba(0, 0, 0, 0.16)',  // Correspond à '0px 3px 6px #00000029'
                        },
                },
        },
        plugins: [],
}

