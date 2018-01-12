const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        library: 'thk2b-test',
        libraryTarget: 'commonjs2'

    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader']
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
}