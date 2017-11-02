var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const output = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.js',
  output: {
    path: output,
    filename: 'main.bundle.js'
  },
  module : {
    rules: [{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin('notes.js')
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: output
  }
};
