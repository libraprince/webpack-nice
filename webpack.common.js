//该配置公用一般配置
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'null',
    resolve: {
        alias: {
            // 解析模块请求的选项（不适用于对 loader 解析）
            "@": path.resolve(__dirname, "src"),
            "cp":path.resolve(__dirname, "src","components")
        },
        extensions: [".js", ".json", ".jsx", ".css", "scss", "sass", "html"] // 使用的扩展名
    },
    entry: {
        main: '@/index',
        other: '@/model/name'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "js/[name].[hash:8].js", // 长效缓存(/guides/caching)
        //crossOriginLoading: "anonymous",
        /*library`:"MyLibrary",
        libraryTarget: "umd"*/
    },
    module: {
        rules: [{
                test: /\.(css|sass|scss)(\?.*)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    /* config.module.rule('images').use('url-loader') */
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: '/img/[name].[hash:8].[ext]' //相对根目录下的img目录
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: ['url-loader']
            },
            {
                test: /\.(csv|tsv)(\?.*)?$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml(\?.*)?$/,
                use: ['xml-loader']
            }
            ,/*{
                            test: /\.html(\?.*)?$/,
                            loader:'html-loader'
                        }*/
        ]
    },
    plugins: [ //以下插件需要npm安装
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false,
            hash: true,
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                /* Will generate: <meta name="viewport" content="width=device-width,
                initial-scale=1, shrink-to-fit=no">*/
            }
        })
    ]

};

/*需要安装的包npm install --save-dev style-loader css-loader
 node-sass url-loader csv-loader xml-loader html-webpack-plugin
 clean-webpack-plugin webpack-merge extract-text-webpack-plugin*/