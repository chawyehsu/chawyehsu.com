const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const outputBaseDir = 'source/static'

module.exports = {
  entry: {
    mina: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, outputBaseDir),
    publicPath: "",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, 'src')]
        // exclude: /node_modules/
      },
      {
        test: /\.styl|\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: devMode ? [
                require('postcss-import'),
                require('autoprefixer')
              ] : [
                require('postcss-import'),
                require('autoprefixer'),
                require('cssnano')
              ]
            }
          },
          "stylus-loader"
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },

  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: {
        condition: false
      }
    })]
  },

  plugins: [
    new CleanWebpackPlugin("./source/static"),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}
