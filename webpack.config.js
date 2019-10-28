const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js', //入口文件 (如果多个入口，以entry: { app: './src/app.js', vendor: './src/vendor.js'}这种对象形式形式)
  output: {
    path: path.resolve(__dirname, 'dist'), //指定输入目录的绝对路径
    filename: '[chunkhash].bundle.js'
  }, //出口
  devServer: {
    inline: true, //打包后生成websocket客户端
    contentBase: path.resolve(__dirname, 'dist'), //开发服务运行时的文件根目录
    host: 'localhost', //主机地址
    port: 8086, //端口号
    compress: true, //开发服务器是否启动gzip等压缩
    open: true, // 自动打开浏览器
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 选择一个html文件作为模板
      template: './src/index.html',
      // 在打包好的bundle.js后面添加hash
      hash: true
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //顺序从右向左
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }, //处理模块，loader都在这里
  mode: 'development', //模式配置， webpack4新增特性，有development/production
}