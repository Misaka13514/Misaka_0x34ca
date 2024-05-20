const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },

  devtool: "inline-source-map",

  entry: {
    index: "./index.js",
  },

  module: {
    rules: [
      {
        test: /\.(eot|jpg|png|svg|ttf|webp|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("cssnano")({ preset: "default" }),
                  require("postcss-preset-env")(),
                ],
              },
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "en.html",
      filename: "en.html",
    }),
    new HtmlWebpackPlugin({
      template: "zhs.html",
      filename: "zhs.html",
    }),
    new HtmlWebpackPlugin({
      template: "zht.html",
      filename: "zht.html",
    }),
    new HtmlWebpackPlugin({
      template: "ja.html",
      filename: "ja.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: "eo.html",
    //   filename: "eo.html",
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
    }),
  ],
};
