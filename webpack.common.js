const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({ patterns: [{ from: "src/parsons", to: "parsons" }] }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/puzzle.html",
      filename: "puzzle.html",
    }),
  ],
  output: {
    library: {
      name: "ParsonsUI",
      type: "umd",
    },

    filename: "parsonsUI.js",
    auxiliaryComment: "ParsonsUI",
  },
};
