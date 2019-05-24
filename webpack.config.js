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
  devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.js', '.ts', '.json']
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        include: [SRC_DIR],
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
}