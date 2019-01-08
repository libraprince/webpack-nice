/*jshint esversion:6*/
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            }
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    }
};