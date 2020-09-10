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
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: (filepath) => filepath.endsWith('.module.css'),
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
        test: (filepath) => filepath.endsWith('.css') && !filepath.endsWith('.module.css'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|woff|woff2)$/,
        use: { loader: 'file-loader', options: { name: 'assets/[name].[ext]' } },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
    modules: [path.resolve(__dirname, 'src/app'), 'node_modules'],
    // alias: {
    //   pages: path.resolve(__dirname, 'src/app/pages'),
    //   routes: path.resolve(__dirname, 'src/app/routes'),
    //   containers: path.resolve(__dirname, 'src/app/containers'),
    //   components: path.resolve(__dirname, 'src/app/components'),
    //   store: path.resolve(__dirname, 'src/app/store'),
    // },
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
