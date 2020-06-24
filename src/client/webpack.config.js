const path = require('path');
require('dotenv').config();

const BrowsersyncWebpackPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/client/index.ts',
  output: {
    path: path.resolve(__dirname, '../../dist/public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/public/index.html'
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new BrowsersyncWebpackPlugin({
      host: 'localhost',
      port: 3010,
      proxy: 'localhost:3000',
      open: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  }
};
