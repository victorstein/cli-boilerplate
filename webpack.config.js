const path = require('path')

module.exports = {
  entry: {
    server: ['@babel/polyfill', './src/cli.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'cli.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env']
      }
    }]
  },
  externals: ['bufferutil', 'utf-8-validate'],
  watch: true,
  mode: 'development',
  target: 'node'
}
