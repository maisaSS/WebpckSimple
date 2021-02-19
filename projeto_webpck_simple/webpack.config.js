const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtraxtPlugin =  require('mini-css-extract-plugin')

module.exports={
    entry: './src/js/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtraxtPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:'./src/index.html'
        }),
        new MiniCssExtraxtPlugin({
            filename: "styles.css"
        })
    ]
}
