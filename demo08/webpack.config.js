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
            },
            { test: /\.css$/, loader: "style!css" },
            {test: /\.(eot|woff|woff2|ttf|svg)$/, loader: "file-loader?name=file/[name].[hash:8].[ext]" }
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
