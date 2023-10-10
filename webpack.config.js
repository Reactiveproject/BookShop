let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PugPlugin = require("pug-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/Js/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bookshop Project",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
    // new PugPlugin(),
  ],
  optimization: {
    minimizer: [
      // Следующая строка нужна для того, чтобы настройки optimization.minimizer добавились к настройкам по умолчанию, а не переписывали их
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
    ],
  },
};
