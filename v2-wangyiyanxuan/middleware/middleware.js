/* 
项目的中间件 middleware.js
用来和后端的数据进行对接
*/

// 引入express框架
let express = require('express');
let app = express();

// 跨域解决方案
app.all('*',function(req,res,next){
    // 任何网址都可以访问
    res.header("Access-Control-Allow-Origin","*");
    // 允许的请求方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DE;ETE,OPTIONS");
    // X-Requester-With,判断请求方式是普通请求还是ajax请求
    res.header("Access-Control-Allow-Headers","X-Requester-With");
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})

app.get('/search',(req,res)=>{
    console.log(req.query);
    let _searchKey = req.query.searchKey;
    // 临时数据，先把流程走通
    let _tempGoods = [{
        name:'好看的男装',
        price:99
    },{
        name:'美丽的女装',
        price:98
    },{
        name:'可爱的童装',
        price:97
    },{
        name:'干活的工作服',
        price:96
    }]
    // console.log(req.query.searchKey);
    // 过滤结果
    let _filterGoods = _tempGoods.filter(n=>{
        return n.name.indexOf(_searchKey) !==-1;
    })
    // 因为filter只返回结果为true的，所以需要二次判断
    let _resultObj = _filterGoods.length > 0?_filterGoods:{msg:"找不到商品！"}
    res.send(_resultObj);
    // 本意是要在这个中间件里去操作mmysql的crud的，
    // 但是,我们还没有mysql，
    // 所以,我们在这里写一些假数据,用于模拟搜索过程,这只是一个思路,并不是真实生产开发环境的搜索过程,
    // 因为真实的生产环境,它的后台的搜素功能由java /.net来负责的，咱们前端只负责传入参数，调用接口

})

app.get('/get_tabBtn_list',(req,res)=>{
    let _d=['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','严选全球']
    res.send(_d);
})

// 首页轮播图数据接口
app.get('/get_swipe_img',(req,res)=>{
    let _n = [
        'https://yanxuan.nosdn.127.net/ec238d46b95175c470f1c915e29b145a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/1a787b6a273f34130e36d76624007432.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/18dcbeddd9506e27c4c3c5f06783ea61.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/fc89464500e6efe7d56c86f715bc2e3c.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/84f3805a7d831f5e9e9165646f403232.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    ]
    res.send(_n);
})

// 必买清单数据接口
app.get('/cate_goods_list_0',(req,res)=>{
    let _d = [{
        goods_img:'https://yanxuan-item.nosdn.127.net/b14f4581176318d1a646640cc952ee02.png',
        goods_name:'米饭革命，好吃不胖，日式咖喱鸡魔芋粗粮饭',
        goods_price:11.8
    },{
        goods_img:'https://yanxuan-item.nosdn.127.net/4c6bbe337d719fedcf08283472c9ba73.png',
        goods_name:'女式咖啡碳保暖内衣2.0',
        goods_price:59
    },{
        goods_img:'https://yanxuan-item.nosdn.127.net/d9c8d2923bbb1eb5c8572b57bb3a5ecf.png',
        goods_name:'净水花洒好搭档 韩国花洒替换滤芯2只装',
        goods_price:49
    },{
        goods_img:'https://yanxuan-item.nosdn.127.net/db72654fb2dc000fa0054b486666a3ac.png',
        goods_name:'看得见的吸水力 速干防潮天然硅藻土地垫',
        goods_price:79.9
    },]
    res.send(_d);
})


app.listen(3344,()=>{
    console.log("高仿网易严选第二版中间件已经启动");
})

