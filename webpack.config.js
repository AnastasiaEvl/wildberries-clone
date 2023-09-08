const path = require('path') // импортируем модуль path
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')

// описание настроек webpack, которые экспортируем
module.exports = {
  context: path.resolve(__dirname, 'src'), // прописываем путь, чтобы не прописывать его каждый раз
  entry: './scripts/index.js', // указание файла (точки входа)
  // указываем файл, куда собираем
  output: {
    filename: 'main.js', // создастся файл main.js
    path: path.resolve(__dirname, 'dist'), // создастся папка dist
    clean: true
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: ['imagemin-gifsicle', 'imagemin-mozjpeg', 'imagemin-pngquant', 'imagemin-svgo']
          }
        },
        generator: [
          {
            type: 'asset',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp']
            }
          }
        ]
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/pictures/'),
          to: path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src/assets/icons/'),
          to: path.resolve(__dirname, 'dist/images')
        }
      ]
    }),
    new FaviconWebpackPlugin({
      logo: './assets/favicn.png',
      mode: 'webapp',
      devMode: 'webapp',
      prefix: 'images/favicon/',
      cache: true,
      inject: true,
      favicons: {
        background: '#AAA',                                          
        theme_color: '#BBB' 
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]]
          }
        }
      }
    ]
  }
}
