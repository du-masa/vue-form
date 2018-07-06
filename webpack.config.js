const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    form: './assets/form.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'vue-loader',
            options: {
              // extractCSS: true,
              loaders: {
                js: 'babel-loader'
              }
            }
          }
        ]
      },
      {
        test:/.js$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader',options: {sourceMap: true}},
            { loader: 'sass-loader',options: {sourceMap: true}},
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/[name].css'),
  ]
}

