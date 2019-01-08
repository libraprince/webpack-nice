//该配置公用一般配置
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(css|sass|scss)(\?.*)?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['url-loader']
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
        ]
    },
    plugins: [ //以下插件需要npm安装
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
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