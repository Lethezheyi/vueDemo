/* 
项目的中间件 middleware.js
用来和后端的数据进行对接
*/

// 引入express框架
let express = require('express');
let app = express();

// 跨域解决方案
// app.all('*',function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DE;ETE,OPTIONS");
//     res.header("Access-Control-Allow-Headers","X-Requester-With");
//     res.header("Content-Type","application/json;charset=utf-8");
//     next();
// })

app.get('/aaa',(req,res)=>{
    res.send("aaa");

})
app.get('/bbb',(req,res)=>{
    res.send('/bbb');
})
app.listen(3344,()=>{
    console.log("高仿网易严选第二版中间件已经启动");
})

