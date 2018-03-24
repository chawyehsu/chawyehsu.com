var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/css/main.styl",
  output: {
    path: __dirname + "/source/static",
    publicPath: "",
    filename: "type.css"
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: (loader) => [
                  require('postcss-import')(),
                  require('autoprefixer')({browsers: ['> 1%', 'last 2 versions']}),
                  require('cssnano')()
                ]
              }
            },
            "stylus-loader"
          ]
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: "url-loader",
        options: {
          limit: 81920
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin("./source/static"),
    new ExtractTextPlugin("type.css")
  ]
}
