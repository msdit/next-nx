const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
