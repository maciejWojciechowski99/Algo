const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/another.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "another.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/download.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "download.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      inject: true,
      chunks: ["index", "another", "download"],
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jurney.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "jurney.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/offer.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "offer.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/opinions.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "opinions.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/start.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "start.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "about_en.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "contact_en.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/jurney_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "jurney_en.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/offer_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "offer_en.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/opinions_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "opinions_en.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/download_en.html",
      inject: true,
      chunks: ["index", "another"],
      filename: "download_en.html",
    }),
  ],
};
