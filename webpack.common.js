const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { // For images with local file path sources in HTML template
        test: /\.html$/i,
        loader: "html-loader",
      },
      { // For images with local file path sources in JavaScript
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },      
    ],
  },
};
