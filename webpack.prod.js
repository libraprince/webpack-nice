//该配置为代码生产配置
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'production',//生产模式 执行代码压缩
    optimization: {
        splitChunks: {//此api 开箱即用 执行代码分离
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vender',
                    enforce: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'commons',
                    enforce: true
                }
            }
        }
    }
});