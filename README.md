# hziflytek-webpack-cli

>This is a simple webpack-cli for our team.
>
>It mightbe fit your team



## Features

hziflytek-webpack-cli 满足一般团队的普通需求，在webpack4.0 的基础上，真正实现开箱即用。

hziflytek-webpack-cli 可提供：

- 多页面构建（根据入口文件自动配置）
- 公共文件提取、分包（import 的次数超过2次）	 
- es6，es7 语法转换	
- 支持 jsx 语法	
- sass 预处理
- css 前缀自动补全
- px 单位自动转换rem
- file-loader
- css 文件提取	• 每次打包之前自动删除旧代码
- 文件指纹
- css，js 文件压缩
- html 内联css,js压缩并删除所有注释代码
- 构建速度分析
- 文件体积大小分析



## Install

```
npm install hziflytek-webpack-cli
```



## Quick Example

1. 安装 webpack dev-webpack-cli

   ```
   npm install webpack dev-webpack-cli -S
   ```

2. package.json 添加脚本命令，如下：

```js
scripts: {
  "dev": "webpack-dev-server --config ./node_modules/hziflytek_webpack_cli/lib/dev.config.js --host x.x.x.x --port 3000",
    "build": "webpack --config ./node_modules/hziflytek_webpack_cli/lib/prod.config.js"，
    "build:analyze": "webpack --config ./node_modules/hziflytek_webpack_cli/lib/buildAnalyze.config.js",
}
```

3. babel 配置及多页面插件配置

   3. 方法一：创建.babelrc

      ```
      {
          "presets": [
              "@babel/preset-env",
              "@babel/preset-react"
          ],
          "plugins": [
              "@babel/plugin-syntax-dynamic-import"
          ]
      }
      ```

      方法二：package.json 配置，新增babel 配置项

      ```
      "babel": {
      	"presets": [
      		"@babel/preset-env",
          "@babel/preset-react"
      	],
      	"plugins": [
      		"@babel/plugin-syntax-dynamic-import"
      	],
      }
      ```

      

   **tips:**

   1. 因为 scripts 中仍要使用到webpack, webpack-dev-server, 仍需提前 install 
   2. dev 的环境配置如 ip、port 可通过 “--host” 等形式配置，也可以到源码 ./node_modules/hziflytek_webpack_cli/lib/dev.config.js 此配置文件进行修改

4. 编译、构建、分析

   开发环境编译

   ```js
   npm run dev
   ```

   打包构建

   ```
   npm run build
   ```

   文件分析

   ```
   npm run build:analyze
   ```

   

​	**关于以上功能，如果各位同学有额外的诉求或者意见，欢迎一起来讨论，我们一起把这个前端脚手架工具优化的更加完美。。。**



















