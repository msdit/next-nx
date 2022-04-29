const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')
const { join } = require('path')

module.exports = {
    presets: [require('../../../tailwind-workspace-preset.js')],
    darkMode: 'class',
    content: [
        join(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
