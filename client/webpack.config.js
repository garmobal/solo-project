const path = require('path');
const webpack = require('webpack');

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',

  plugins: [
    new webpack.ProgressPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  devServer: {
    open: true,
    host: 'localhost',
  },
};
