const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: { index: path.resolve(__dirname, "./src/assets/js", "index.js") },
    output: {
        path: path.resolve(__dirname, "build"),
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: path.resolve(__dirname, "./src/assets/svg", "favicon.svg"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: ["babel-loader"],
            },
        ],
    },
};