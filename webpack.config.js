var	path = require('path');
var	webpack	= require('webpack');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './app/index'
    ],
    output:	{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new	webpack.optimize.OccurenceOrderPlugin(),
        new	webpack.HotModuleReplacementPlugin(),
        new	webpack.NoErrorsPlugin()
    ],
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
    }
};
