/* webpack configuration file */

const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ['style-loader', 'css-loader']},
            { 
                test: require.resolve('jquery'), 
                use: [
                    {loader: 'expose-loader', options: 'jQuery'},
                    {loader: 'expose-loader', options: '$'}
                ]
            },
            { test: require.resolve('tether'), loader: 'expose-loader', options: 'Tether'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}