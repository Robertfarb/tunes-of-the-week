const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/app.jsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};