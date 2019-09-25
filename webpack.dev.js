const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

require('dotenv').config()

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist")
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // translates CSS into CommonJS
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: true
            }
          }
          // Please note we are not running postcss here
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/img'
            }
          }
        ]
      },
      {
        // Load all icons
        test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new webpack.EnvironmentPlugin([])
  ]
};
