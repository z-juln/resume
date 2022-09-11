const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: 'src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../site'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript'
              },
              minify: {
                compress: true,
              },
            },
            env: {
              coreJs: 3
            },
            minify: true,
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                auto: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 800,
            },
          },
        ],
      },
      {
        test: /\.raw\.md/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        minifyCSS: true,
        minifyJS: true,
      },
    })
  ].concat(isDev ? [] : [new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })]),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'], // 可以省略的后缀名
    plugins: [new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json')
    })]
  },
};
