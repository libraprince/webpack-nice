//该配置为代码生产配置
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = merge(common, {
    mode: 'production', //生产模式 执行代码压缩
    optimization: {
        moduleIds:'named',
        chunkIds: 'total-size',
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        concatenateModules: true,
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vender-bundle',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    //reuseExistingChunk: true
                },
                default: {
                    name: 'common-bundle',
                    test:'/src/',
                    priority: -20,
                    //reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        wrappedContextRecursive: false,

        rules: [{
                test: /\.(css|sass|scss)(\?.*)?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html(\?.*)?$/,
                exclude: /index\.html(\?.*)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        useRelativePath: true,
                        name: 'components/[name].html'
                    }
                }, {
                    loader: "extract-loader",
                    options: {
                        attrs: [':src', ':data-src', ':href'],
                    }
                }, {
                    loader: 'html-loader',
                    options: {
                        root: '..',
                        attrs: [':src', ':data-src', ':href'],
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new webpack.AutomaticPrefetchPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        })
    ]
});

/*需要安装的包npm extract-text-webpack-plugin@next flie-loader 
'html-loader?attrs[]=img:src&attrs[]=img:data-src&attrs[]=:href!extract-loader'
*/