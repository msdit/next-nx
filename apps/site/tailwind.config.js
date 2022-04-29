const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')
const { join } = require('path')

module.exports = {
    presets: [require('../../tailwind-workspace-preset.js')],
    content: [
        join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
        join(__dirname, 'templates/**/*.{js,ts,jsx,tsx}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
