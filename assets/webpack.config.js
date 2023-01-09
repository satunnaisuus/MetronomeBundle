const path = require('path');

module.exports = {
    mode: 'production',
    entry: './admin.js',
    output: {
        filename: 'admin.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: 'metronome',
        libraryTarget:'umd',
    },
};