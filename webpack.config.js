const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: {
    app: `${SRC_DIR}/Index.tsx`,
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        include: [SRC_DIR],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ]
  }
}

