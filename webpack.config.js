const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./package.json", to: "./" }],
    }),
    new MiniCssExtractPlugin(),
  ],
  entry: "/src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "commonjs-module",
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "react",
  },
  devtool: "inline-source-map",
};
