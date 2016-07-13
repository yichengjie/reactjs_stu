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
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015','react']
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