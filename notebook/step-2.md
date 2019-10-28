### 学习webpack的第二章
#### 清空dist文件夹

```
安装依赖

npm install clean-webpack-plugin -D

```
* reqire引入插件并再plugin项配置
* 这样每次运行npm run build就不会重复在dist文件夹内生成文件了。

#### webpack-dev-server
```
module.exports = {
  mode: 'development',
  devServer: {           //配置此静态文件服务器，可以用来预览打包后项目
    inline:true,         //打包后加入一个websocket客户端
    contentBase: path.resolve(__dirname, 'dist'),     //开发服务运行时的文件根目录
    host: 'localhost',   //主机地址
    port: 8086,          //端口号
    compress: true       //开发服务器是否启动gzip等压缩
    open:true,           // 自动打开浏览器
  },
  entry: './src/index.js',
}
```
* 这个用于方便本地调试,上一章已经安装了依赖，直接配置即可