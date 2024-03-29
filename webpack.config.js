const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  performance: {
    hints: false,
  },
  mode: 'development', // Изменено на 'development'
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy-policy.html',
      filename: 'privacy-policy.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/service-cost.html',
      filename: 'service-cost.html',
    }),

    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
        { from: 'src/js', to: 'js' },
        { from: 'src/favicon.ico', to: 'favicon.ico' },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),

    compress: true,
    port: 9000,
    hot: true, // Включение HMR
    liveReload: false, // Отключение обычного liveReload при включенном HMR
  },
};
