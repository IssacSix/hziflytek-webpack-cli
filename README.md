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
npm install hziflytek-webpack-cli -D
```

安装以后 先检查 node_modules 目录下 包的目录结构是否为如下所示（自测过程中有发现错误的情况），如果没有正确下载，删除后重新下载一次

```json
├── README.md
├── lib
│   ├── base.config.js
│   ├── buildAnalyze.config.js
│   ├── dev.config.js
│   └── prod.config.js
├── node_modules
└── package.json
```



## Quick Example

1. **安装 hziflytek-webpack-cli 工具**

   ```
   npm install hziflytek-webpack-cli D
   ```

   

2. **安装 webpack、webpack-dev-server、babel**

   ```
   npm install webpack webpack-dev-server @babel/core -D
   ```

   

3. **package.json 添加脚本命令，如下：**

   ```json
   scripts: {
     "dev": "webpack-dev-server --config ./node_modules/hziflytek-webpack-cli/lib/dev.config.js --host x.x.x.x --port 3000",
       "build": "webpack --config ./node_modules/hziflytek-webpack-cli/lib/prod.config.js"，
       "build:analyze": "webpack --config ./node_modules/hziflytek-webpack-cli/lib/buildAnalyze.config.js",
   }
   ```

   

3. **babel 配置及多页面插件配置**

   3. 方法一：创建.babelrc

      ```json
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

      ```json
      "babel": {
      	"presets": [
      		"@babel/preset-env",
          "@babel/preset-react"
      	],
      	"plugins": [
      		"@babel/plugin-syntax-dynamic-import"
      	]
      }
      ```

      

   **tips:**

   1. 因为 scripts 中仍要使用到webpack, webpack-dev-server, 仍需提前 install 

   2. dev 的环境配置如 ip、port 可通过 “--host” 等形式配置，也可以到源码 ./node_modules/hziflytek_webpack_cli/lib/dev.config.js 此配置文件进行修改

      

4. **配置页面结构**

   由于此脚手架支持多页面配置，多页面实现原理是遍历入口文件，因此对目录结构有一定程度的约束，所以这里要按照规定设计页面模块的结构，如下配置：

   ```
   root // 根目录
    ├──src  // 源码
       ├── entry // 入口文件夹（不能重命名）
       │   └── index // 页面名字（index / home / detail）
       │       └── index.js // 固定名称 index.js
       └── pages // 多页面模版文件夹
           └── index.html // 与entry 目录下的页面名字一一对应
   ```

   **tip**

   1. 若为 SPA entry 目录下仅新建一个文件夹防止对应入口文件即可

   2. 考虑到多页面需求下，不同的页面可能会需要不能自定义的模版，因此目前设计为 一个入口文件 对应相应的模版页面

      

5. **编译、构建、分析**

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



















