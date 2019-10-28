### 学习webpack的第一步骤
#### 基础配置

```
依赖安装

npm install webpack webpack-cli --save-dev
npm install webpack-dev-server --save-dev

```
* webpack.config.js中的mode选项一定要配置，不能配置"",如果不配置那就不要写mode这个选项
* entry 配置入口，output配置出口
* output.filename下支持指定输出文件名，文件名的规则可随心所欲的拼接

模版 | 描述 |
---|---
[hash] | 模块标识符(module identifier)的 hash 
[chunkhash] |chunk 内容的 hash
[name] | 模块名称
[id] | 模块标识符(module identifier)
[query] | 模块的 query，例如，文件名 ? 后面的字符串

#### 配置html模版

```
依赖安装

npm install html-webpack-plugin -D

```
* 引入插件html-webpack-plugin
* plugins配置项是一个数组，可以写入插件，实例化后的插件传两个参数，选择的模版和打包后的bundle.js是否添加hash

#### 配置CSS文件(包含less)
```
依赖安装

npm install css-loader style-loader -D
npm install less less-loader -D

```
* css-loader是负责解释require()和import后再解析
* style-loader是将样式放入 style标签 
* less-loader则是将less解析为css
* 配置css的loader时，use的顺序是从右向左 所以顺序应该为["style-loader","css-loader","less-loader"]

#### 拆分css

```
安装依赖

npm install extract-text-webpack-plugin@next -D

```
* 到目前为止，该插件的稳定版还不支持webpack4.0 ,所以安装他的beta版本
* 拆分css会让css以文件形式引入，而非直接放入style标签