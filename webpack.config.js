const { resolve } = require('path')

module.exports = env => ({
  entry: './index.js',

  output: {
    filename: 'bundle.[name].js',
    path: resolve(__dirname, 'dist')
  },

  context: resolve('./src'),

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
})
