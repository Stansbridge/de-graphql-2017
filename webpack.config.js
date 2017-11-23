var path = require('path');

const DE_TALK_OUTPUT = process.env.DE_TALK_OUTPUT;
const output = DE_TALK_OUTPUT ? path.resolve(process.cwd(), DE_TALK_OUTPUT) : path.resolve(__dirname, 'dist');

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
  devServer: {
    hot: true,
    inline: true,
    contentBase: output
  }
};
