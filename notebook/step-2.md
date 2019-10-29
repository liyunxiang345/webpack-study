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

#### 图片资源配置
```
安装依赖
npm install url-loader file-loader -D
npm install html-withimg-loader -D

```

* file-loader 可以解析项目中url的引入，根据配置将图片copy到相应的路径，修改打包后文件引入路径,使之指向正确的地方
* url-loader 是基于file-loader的另一层封装，可以在图片超过limit时使之转为base64，大于limit使用file-loader处理图片，这样可以减少图片http的请求
* 不仅仅图片，媒体资源和字体文件也可以用这个loader
* 出了css内和js内引入图片，html文件内使用img标签或者内联样式的background来引入图片，可以使html-withimg-loader来处理这种情况(这个loader在npm两年一直没有更新，而且vue脚手架也没有这个loader)

#### ES6转义
```
安装依赖
npm install babel-core babel-loader babel-preset-env -D

```
* 这三个包用来将ES6转换为ES5，同时方便兼容低版本浏览器的同时也不影响使用ES6语法
* babel-preset-env功能强大，可以指定兼容浏览器，可以单独建一个.babelrc文件