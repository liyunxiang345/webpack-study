### 学习webpack的第三章

#### Hot Module Replacement 热模块更新

* webpack.config.js 引入 webpackrequire("webpack")
* devServe中配置hot项为true 可选择配置hotOnly
* 配置插件 new webpack.HotModuleReplacementPlugin()
* 实现无刷新更新（配置热更新后发现修改html文件不会进行自动刷新了）

#### 尝试vue

* 需要插件 vue-loader vue-style-loader
