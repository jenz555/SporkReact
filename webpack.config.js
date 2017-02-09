var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devServer: {
    inline:true,
    contentBase: './src',
    port: 3333,
    outputPath: path.join(__dirname, './dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },    
  plugins: [
      new ExtractTextPlugin("./styles.css"),
      new webpack.optimize.OccurenceOrderPlugin(),
      new WriteFileWebpackPlugin()
    ],
}