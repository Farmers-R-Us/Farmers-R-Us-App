const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './client/index.ts',
//   output: {
//     path: path.resolve(__dirname, '/build'),
//     filename: 'bundle.js',
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: './client/index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       // {
//       //   test: /\.ts$|tsx/,
//       //   exclude: /node_modules/,
//       //   use: {
//       //     loader: 'babel-loader',
//       //     options: {
//       //       presets: ['@babel/preset-env', '@babel/preset-react'],
//       //     },
//       //   },
//       // },
//       {
//         test: /.s[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
//   devServer: {
//     static: {
//       publicPath: '/build',
//       directory: path.join(__dirname, 'build'),
//     },
//     port: 8080,
//     proxy: {
//       context: ['/'],
//       target: 'http://localhost:3000',
//     },
//   },
// };

// add below

module.exports = {
  entry: './client/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build'),
    },
    port: 8080,
    proxy: {
      context: ['/'],
      target: 'http://localhost:3000',
    },
  },
};
