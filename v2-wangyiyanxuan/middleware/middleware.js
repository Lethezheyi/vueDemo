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

// cateList组件默认数据接口
app.get('/cateList_default_list',(req,res)=>{
    // console.log(req.query.index);
    let _n = [
        {
            img:'https://yanxuan.nosdn.127.net/30a3eaeaa8b7955dc2a151d1345a4b1f.png',
            txt:'必买清单'
        },
        {
            img:'https://yanxuan.nosdn.127.net/2fe45c20ef65a05755588f28c048a39c.png',
            txt:'新品速递'
        },
        {
            img:'https://yanxuan.nosdn.127.net/076a28810809721a782d4de715624f37.png',
            txt:'换季清仓'
        },
    ]
    res.send(_n);
})
// cateList组件根据点击选择不同的数据接口
app.get('/cateList_other_list',(req,res)=>{
    let _inx = req.query.index;
    // console.log(req.query.index);
    let _n = [
        [
            {
                div_txt:'床品件套',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png',
                    img_txt:'床品件套'
                }]
            },
            {
                div_txt:'被枕褥毯',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png',
                    img_txt:'被枕褥毯'
                },{
                    img:'https://yanxuan.nosdn.127.net/b91e14afc5a138df8dbc3236146d24e6.png',
                    img_txt:'床垫床褥'
                },]
            },
            {
                div_txt:'卧室家具',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/29a60124243be40301a571e09f8c935c.png',
                    img_txt:'卧室家具'
                },{
                    img:'https://yanxuan.nosdn.127.net/9bc4cae742e2b2709974ad074f897493.png',
                    img_txt:'灯具'
                },{
                    img:'https://yanxuan.nosdn.127.net/becde30fadf4ec335cd7ad8078798acf.png',
                    img_txt:'小件家具'
                },{
                    img:'https://yanxuan.nosdn.127.net/28179231bfca5100b8efc2b55daa4d64.png',
                    img_txt:'北欧原木'
                }]
            },
        ],[
            {
                div_txt:'居家内搭',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/68e6cc39b25f99e6a093a87046db0a91.png',
                    img_txt:'女式家居服'
                }]
            },
            {
                div_txt:'男装',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/b0692e7ecf8f37a6eabb2618dae55307.png',
                    img_txt:'男式衬衫'
                },{
                    img:'https://yanxuan.nosdn.127.net/5531f4735349efaca26a7312bc6fead3.png',
                    img_txt:'男士牛仔裤'
                },]
            },
            {
                div_txt:'女装',
                img_detail:[{
                    img:'https://yanxuan.nosdn.127.net/2b9cd686ac178327115648fdcf3bd8b1.png',
                    img_txt:'女式毛衫'
                },{
                    img:'https://yanxuan.nosdn.127.net/52f93f17ed5e781fe3eff15ea8b03d6a.png',
                    img_txt:'女式外套'
                },{
                    img:'https://yanxuan.nosdn.127.net/21639ee3343c32055ab4c885bb63aa86.png',
                    img_txt:'女式裤装'
                },{
                    img:'https://yanxuan.nosdn.127.net/cf637619671e8029900087a162a69efa.png',
                    img_txt:'女式西装'
                }]
            },
        ]
    ]
    res.send(_n[_inx-1]);
})

// list组件必买清单数据接口
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

