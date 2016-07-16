var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
         // 写在入口文件之前
        "webpack-dev-server/client?http://0.0.0.0:3000",
        "webpack/hot/only-dev-server",
        // 这里是你的入口文件
        './src/main.jsx'
    ],
    output: {
        path: __dirname+"/dist",
        filename: 'bundle.js',
        publicPath:'./dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
              }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};