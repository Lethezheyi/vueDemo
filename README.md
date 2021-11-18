# demo
飞船大战，采用原型设计模式制作的小demo，用来熟悉javascript的一些基本的dom操作。

技术栈：

HTML

CSS

CSS3

javascript高级设计-原型模式

# v2-booszp2
高仿boss直聘，采用vue-cli + vant 编写，用来熟悉vue2的初步使用方法。

技术栈：
HTML
CSS
CSS3
Vue
Vant
Vue-cli

# v2-wangyiyanxuan

网易严选demo，

技术栈

html 

css 

rem页面布局 

node

mysql

ajax

vue

## v2-wangyiyanxuan-1-5节

主要针对移动端适配、vant库的使用、router配置、watch监听部分的使用；

## v2-wangyiyanxuan-6- 节

#### node.js中间件的使用（知识点：基于node.js的express框架）：

```javascript
//在项目目录下创建middleware文件夹，并在文件资源管理器中打开powershell(按住shift加鼠标右键即可)
npm i express -S //全局安装express express，是基于Node的web开发框架
```

```javascript
//创建middleware.js文件，并编写模板接口——以下为middleware.js文件内容
let express = require('express'); //引入express框架
let app = express(); //创建一个应用
app.get('/xxx',(req,res)=>{
    res.send("xxx");
})
app.listen(3344,()=>{
   	console.log('网易严选middleware中间件已经启动！')
})
/*写完后，可在powershell中键入命令
node ./middleware.js 运行该文件，提示“网易严选middleware中间件已经启动！”即可在本地使用localhost:3344/xxx来访问该接口*/
```

#### 前端的接口访问(知识点：axios、跨域解决方案)：

在接口写好后，使用axios进行访问

```
//题外话——axios和ajax的区别：
传统ajax,是指XMLHttpRequest(XHR)，jQuery ajax是jQuery库对ajax的二次封装，本身具有不合理性；
axios,是基于Promise用于浏览器和nodejs的HTTP客户端，本质也是对ajax的封装，只不过它是Promise的实现版本，符合最新的ES规范。
```

```javascript
//在需要使用axios的组件中引入axios
import axios from 'axios'

axios.get("http://localhost:3344/aaa")
		.then(_d=>{
    	console.log(_d.data)
})
```

跨域报错图片：

![](.\programImg\CORS_error.jpg)

解决方案：

```javascript
在middleware.js文件中添加跨域解决方案
// 跨域解决方案
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DE;ETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requester-With");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})
```

