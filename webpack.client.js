const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, './dist/public'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
