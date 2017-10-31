var path = require('path');


const output = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/index.js',
  output: {
    path: output,
    filename: 'main.bundle.js'
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: output
  }
};
