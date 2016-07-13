var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/scripts/main.jsx',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
        publicPath:'./dist'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }/*,
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
    ]*/
};