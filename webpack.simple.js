//该配置公用一般配置
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    devtool: 'null',
    resolve: {
        alias: {
            // 解析模块请求的选项（不适用于对 loader 解析）
            "@": path.resolve(__dirname, "src")
        },
        extensions: [".js", ".json", ".jsx", ".css","scss","sass","html"]// 使用的扩展名
    },
    entry: {
        main: '@/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        //chunkFilename: '[name].js',
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
            },
            {
                test: /\.html(\?.*)?$/,
                loader:['url-loader','extract-loader','html-loader']
            }
        ]
    },
    plugins: [ //以下插件需要npm安装
        new CleanWebpackPlugin(['dist'])
    ]

};

/*需要安装的包npm install --save-dev style-loader css-loader
 node-sass url-loader csv-loader xml-loader html-loader
 clean-webpack-plugin webpack-merge*/