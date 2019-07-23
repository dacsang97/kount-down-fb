const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const reslv = p => path.resolve(__dirname, p)

module.exports = {
  entry: {
    override: reslv('src/override.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new CopyPlugin([{ from: reslv('public'), to: reslv('build') }])],
}
