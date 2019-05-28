const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: {
    app: `${SRC_DIR}/Index.jsx`,
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [SRC_DIR],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ]
  }
}

