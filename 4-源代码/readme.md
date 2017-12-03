### 准备开始
---
#### 学员反馈
slot之前很清楚，之后讲的resource和axios一塌糊涂
*** 知道怎么用,原理整不了
*** promise api是啥 
    xxx.get()
    .then()
    .catch();

还有引入文件不带后缀js还是没搞懂 
    import './xxx'  还是require ,都可以省略后缀，自动补上js

    import Vue from 'vue';
        vue不是node核心对象
        逐级查找node_modules,找vue文件夹中的package.json文件中的
            main属性或者module
            module比main属性优先级更高


呜呜呜 自从学配置这一块一直都是懵比状态
    细节点: npm run xxx
        配置好了当前目录下的node_module/.bin到环境变量中





*** 感觉好乱，不知道怎么下手，
*** 1、怎么（设置）管理全局命令安装目录 比如 怎么把json-server 下载到指定目录 
        * 1:通过命令修改 下载的路径  `npm config set prefix "路径A"`
        * 2:查看全局命令行工具路径 `npm root -g`
            - 显示 `路径A/node_modules`
        * 3:修改环境变量  `路径A`

2、怎么编辑环境变量 3、vue-resource 不是很懂 4、感觉今天懵懵得，能不能在捋一下

 一天都是懵懵的状态；

 上午讲的命令行的操作还是很懵
#### 复习

#### 今日重点

#### 默认设置
* `xsrfCookieName:"XSRF-TOKEN"`
* `xsrfHeaderName:"X-XSRF-TOKEN"`
* 服务器将一个cookie，名称叫做XSRF-TOKEN，value安全加密码
* axios则自动存储名称叫做XSRF-TOKEN的cookie所对应的value安全码
* 下次去访问该服务器的时候，自动将该安全码发送到服务器
    - 头信息的方式 `X-XSRF-TOKEN:安全码`

#### 拦截器
* 全局设置分为 : 拦截器 和默认设置
    - 拦截器威力最大,最后执行
    - 默认设置威力最小,最先执行
    - 单次请求的options参数，当前的请求生效，威力中
* options -> defaults -> config -> response.config
    - options: `axios.post(url,data,options);`
    - default: `this.$axios.default`
    - config : `请求拦截器中的参数`
    - response.config `响应拦截器中的参数`
* options
    - baseURL 基础URL路径
    - params 查询字符串（对象）
    - transformRequest 转换请求体数据
    - transformResponse 转换响应体数据
    - headers 头信息
    - data 请求体数据
    - timeout 请求超时，请求多久以后没有响应算是超时（毫秒）


#### 合并请求
* `this.$axios.all([请求1,请求2]).then(this.$axios.spread(fn) )`
* `fn:(res1,res2)=>{}`


#### 顺序请求
* 在then函数中发起下一个请求，并且return

```javascript
 请求1
 .then( res=>{  
    处理请求1的响应
     return 请求2;
})
.then( res=>{   
    处理请求2的响应
    return 请求3;
})
.catch(err=>{
    任意请求失败
})
```
#### 顺序请求与合并请求的差异
* 合并请求注重的结果，多个请求是否成功(不保证顺序)
    - 要么全成功->then
    - 要么其一失败->catch
* 顺序请求注重的是顺序，保证每一个顺序执行
    - 一个成功->then
    - 一个失败,进入catch，后续无法执行

#### 应用场景
* 合并请求更多用在必须保证多个请求都响应成功的场景
    - 比如省、市动态数据获取
    - 简化代码
* 顺序请求
    - 逻辑上有必须依赖的都需要顺序请求

#### 取消请求
* 请求发至一半，用户点击，立刻断开请求的连接
* 上传文件,点击取消

### 总结
---
#### 拦截器
* 时间节点
    - 全局设置、单次请求、拦截器
    - 全局设置 baseURL
    - 拦截器中（大家都能用） 
        + 请求拦截器加自定义头信息
            * 原生app应用是没有cookie机制的，自定义头，替代cookie功能
    - 单次请求（个性化）

#### 合并请求
* 合并请求重点在于结果，所有请求都成功，算成功
    - 一个失败就算失败
* 顺序请求，重点是顺序发起请求

```javascript
请求1
.then(res=>{
    return 请求2; 
})
.then(res=>{
    return 请求3;
})
.catch( err=>{
    console.log(err);
})

```

#### options总结
* baseURL 基础URL ,  this.$axios.请求方式(与baseURL拼接,data,options)
* data 请求体数据
* 转换请求体 transformRequest -> fn
* 转换响应体 transformResponse => fn
* cancelToken:source.token 标识当前请求的记号
* onUploadProgress-> fn  上传或者下载进度控制
    - loaded、total
* method 请求方式
* headers 请求头
* params 查询字符串

#### 搭建项目建构
* 区分开发生产依赖
* 就是区分与webpack打包相关的包和程序必须的包的一种分类方式
* 不是规定，不成文的约定