# vue2.0 + webpack 2.0  多页面构建

> base construction for mutilpage
# 项目结构
![src目录示例](http://inimg01.jiuyan.info/0463fa67-6c8e-4bea-b531-5e383746b0e6)
基础结构参考了vue2.0官方的架构vue-cli
src中目录说明：
views里面放的其实是我们所理解的各个页面
比如index  compt里是index自己模块所需要的vue模块，没有公用性
入口js文件 index.js  如若需要引入其他js，请不要放在这一层，另起一个子目录存放
src外层的目录存放公共的东西

访问方式：
http://localhost:8080/second/index
http://localhost:8080/second/
都可访问  second下的index.html
若想访问index下则输入  http://localhost:8080/index
默认都为views曾经下的页面对应的 index.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
