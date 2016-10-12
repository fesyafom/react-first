'use strict';

var	webpack	= require('webpack');
var	path = require('path');

module.exports = {
    devtool: null,            

    context: __dirname,
    entry: [
        'babel-polyfill',
        './app/index'
    ],
    output: {
        path: './static',
        filename: 'bundle.js'
    },

    plugins: [
        new	webpack.optimize.OccurenceOrderPlugin(),
        new	webpack.NoErrorsPlugin()
    ],

    resolve: {                                  
        moduleDirectories: ['node_modules'],
        extensions: ['','.js']
    },

    resolveLoader: {                           
        moduleDirectories: ['node_modules'],
        extensions: ['','.js']
    },

    module:	{
        loaders: [
            {
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname,	"app")
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            }
        ]
    },
    watch: true,                

    watchOptions: {
        aggregateTimeout: 100   
    }
};