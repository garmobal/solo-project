const path = require('path');
const webpack = require('webpack');

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

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
<<<<<<< HEAD
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
=======
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
>>>>>>> 75fd73065507e703a7dcc176595b00b7e555070c
      },
    ],
  },

<<<<<<< HEAD
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

=======
>>>>>>> 75fd73065507e703a7dcc176595b00b7e555070c
  devServer: {
    open: true,
    host: 'localhost',
  },
};
