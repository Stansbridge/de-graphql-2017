var path = require('path');

const output = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.js',
  output: {
    path: output,
    filename: 'main.bundle.js'
  },
  module : {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|reveal\.js/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-react', 'babel-preset-env']
      }
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.flow$/,
      loader: 'ignore-loader',
    }]
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: output
  }
};
