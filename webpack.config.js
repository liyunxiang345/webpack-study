const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack  = require("webpack")
module.exports = {
  /*
  * 入口文件 (如果多个入口，以entry: { app: './src/app.js', vendor: './src/vendor.js'}这种对象形式形式)
  * */
  entry: './src/index.js',
  /*
  * 出口
  * */
  output: {
    /*
    * 指定输入目录的绝对路径
    * */
    path: path.resolve(__dirname, 'dist'),
    publicPath: "./",
    filename: '[name].bundle.js'
  },
  devServer: {
    publicPath: "/",
    // inline: true, //打包后生成websocket客户端
    contentBase: path.resolve(__dirname, 'dist'), //开发服务运行时的文件根目录
    host: 'localhost', //主机地址
    hot: true,
    hotOnly: true,
    port: 8086, //端口号
    // compress: true, //开发服务器是否启动gzip等压缩
    open: true, // 自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 用了
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        })
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader','postcss-loader'] //顺序从右向左
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      // {
      //   test: /\.(jpg|png|jpeg|gif)$/,
      //   loader: 'file-loader',
      //   options: {
      //     limit: 30000,
      //     name: 'static/image/[name].[ext]'
      //   }
      // },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          //小于指定字节数转为base64
          limit: 30000,
          name: '[name]_[hash].[ext]',
          outputPath: "static/image/"
        }
      },
      {
        test: /\.(html|htm)$/,
        loader: ['html-withimg-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: '/src/',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({ use: ['css-loader'], fallback: 'vue-style-loader' }),
            less: ExtractTextPlugin.extract({ use: ['css-loader', 'less-loader'], fallback: 'vue-style-loader' })
          }
        }
      }
    ]
  }, //处理模块，loader都在这里
  plugins: [
    new HtmlWebpackPlugin({
      // 选择一个html文件作为模板
      template: path.resolve(__dirname,'index.html'),
      // 在打包好的bundle.js后面添加hash
      hash: true
    }),
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    /*
    * 引入时可省略的后缀名
    * */
    extensions: ['.js','.css','.less','.vue'],
    /*
    * 定义别名，方便于引入
    * */
    alias: {
      '@': path.resolve('src')
    }
  },
  mode: 'development', //模式配置， webpack4新增特性，有development/production
}