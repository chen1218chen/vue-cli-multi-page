### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

github上找到某大神的一个基于vue-cli模板的vueAdmin后台管理的模板，根据项目需求改成一个多页面多路由的vue项目。
PC端：后台管理页面，单独的页面入口，单独的路由。
移动端：业务展示页面，单独的页面入口，单独的路由。
踩了无数的坑，终于是初见效果了，随后继续优化更新

## Install

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

```

PC端 [http://localhost:8088/modules/index.html][1]

移动APP [http://localhost:8088/modules/index.html][2]

## 多页面配置
vue2.0版本多页面入口,是由webpack配置来完成的，我的项目文件结构如下
```
    webpack
      |---build
      |---config
      |---dist 
      |---route 路由
      |---src
        |---api axios请求
        |---assets 资源
        |---common 公共js资源目录
        |---components组件
        |---modules各个模块
          |---index    index模块
            |---views 组件
            |---index.html
            |---index.js
            |---index.vue
          |---phone       phone模块
            |---phone.html
            |---phone.js
            |---phone.vue
            |---phone 组件
  ```


### Browser Support

Modern browsers and Internet Explorer 10+.

## snapshots
![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/login.png)

![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/main.png)

![image](https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/edit.jpg)

### License
[MIT](http://opensource.org/licenses/MIT)


  [1]: http://localhost:8088/modules/index.html
  [2]: http://localhost:8088/modules/phone.html