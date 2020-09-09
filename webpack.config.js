const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[hash:base64:5]' },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|woff|woff2)$/,
        use: { loader: 'file-loader', options: { name: 'assets/[name].[ext]' } },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },

  plugins: [
    new LoadablePlugin(),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.ejs',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css', chunkFilename: 'css/[id].css' }),
  ],

  devServer: {
    historyApiFallback: { disableDotRule: true },
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    open: false,
    port: 9090,
  },
};
