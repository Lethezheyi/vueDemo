/* 
node.js中间件文件
*/
// 引入express,require函数里面的参数为string,需要加上引号！！
var express = require('express');
// 创建一个app应用
var app = express();

// 跨域解决方案
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DE;ETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requester-With");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})

// tabWrap组件tab标题接口
app.get('/tab_title',(req,res)=>{
    let _n = ['关注','推荐','热榜','视频','小说','广州','抗疫','小视频'];
    res.send(_n);
});

// listWrap组件数据接口
app.get('/list_detail',(req,res)=>{
    let _n = [{
        article_title:"党的二十大代表怎么选？",
        default_state:1,//0不置顶，1为置顶新闻
        article_source:'新华网客户端',
        discuss_number:2372
    }]
    res.send(_n);
})


app.listen(3344,function(){
    console.log("我的第一个接口");
})