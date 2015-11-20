var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        '__DEBUG__': JSON.stringify(true)
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve('./src')
    },{
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'autoprefixer?browsers=last 2 version',
        'sass-loader'
      ]
    }]
  },
  sassLoader: {
    includePaths: path.resolve('./src/styles')
  }
};
