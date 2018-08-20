const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/tunes.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};