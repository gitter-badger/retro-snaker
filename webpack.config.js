var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry:'./app',
    output:{
        path:__dirname+'/dist/',
        filename:'./bundles/app.bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract('css!less')
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('./css/main.css')
    ]
}