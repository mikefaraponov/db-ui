'use strict'
const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//noinspection JSUnresolvedFunction
module.exports = {
  entry: ['babel-polyfill', __dirname + '/app/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'db.js'
  },
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  resolve: {
    extensions: ['', '.js', '.sass', '.css'],
    fallback: path.join(__dirname, 'node_modules')
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css?minimize!sass?indentedSyntax')
        loader: 'style!css?minimize!sass?indentedSyntax'
      },
      {
        test: /\.css$/,
        loader: 'style!css?minimize'
        // loader: ExtractTextPlugin.extract('style-loader', 'css?minimize')
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      API: JSON.stringify('http://localhost:3000/api'),
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.ProvidePlugin({React: 'react'}),
    new webpack.optimize.DedupePlugin()
  ]
}

if (NODE_ENV == 'production') {
  //noinspection JSUnresolvedFunction
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}
