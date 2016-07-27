var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js',
        publicPath:'./dist'
    },
    module: {
        loaders: [
            {
                test: /.(jsx|js)?$/,
                loader: 'babel',
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
