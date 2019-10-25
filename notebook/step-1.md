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
npm i html-webpack-plugin -D

```
