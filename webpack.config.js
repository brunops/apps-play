const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  devServer: {
    contentBase: './src',
    noInfo: true
  },

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    pathinfo: false,
    path: resolve(__dirname, 'dist')
  },

  context: resolve('./src'),

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: ['babel']
      },

      {
        test: /\.html/,
        exclude: /node_modules/,
        loader: 'file',
        query: {
          name: '[name].html'
        }
      },

      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },

  resolve: {
    extensions: [ '', '.js' ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
