//该配置为开发模式配置
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true //服务开启热模块
    },
    plugins: [
        new webpack.NamedModulesPlugin(),//名字补丁工具
        new webpack.HotModuleReplacementPlugin()//热模块插件
    ]
});