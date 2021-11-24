<template>
    <div>
        <!-- 顶部导航栏 -->
        <div class="listTitleWrap">
            <van-icon name="wap-home-o" size="50" class="listTitleIcon_chat" @click="gotoIndexBtn"/>
            <img src="../assets/logo-img.png" alt="" class="listTitleImg">
            <van-icon name="search" size="50" class="listTitleIcon_search"/>
            <van-icon name="cart-o" size="50" class="listTitleIcon_cart"/>
        </div>
        <!-- 商品详情描述 -->
        <div class="goodsDetialWrap">
            <img :src="goodsInfo.goods_img"/>
            <div class="priceArea">
                <i style="font-size:.8rem;margin-right:0;">￥</i>
                {{goodsInfo.goods_price}}
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="baseInfo" >
            <div class="name">{{goodsInfo.goods_name}}</div>
            <div class="simpleBrandInfo">
                <div class="preLogo"></div>
                <img class="brandLogo" src="https://yanxuan-item.nosdn.127.net/87e08c87410fb13b6e42a077ccd15165.png" alt="">
                <span>网易严选</span>
            </div>
            <div></div>
        </div>

        <van-goods-action class="goodsActionCls">
            <van-goods-action-icon icon="chat-o" color="#ee0a24" />
            <van-goods-action-button type="warning" text="立即购买" color="#fff" @click="buyBtn"/>
            <van-goods-action-button type="danger" text="加入购物车" />
        </van-goods-action>

        <!-- sku商品规格组件 -->
        <div class="skuWrap">
            <van-sku
            v-model="skuShow"
            :sku="sku"
            :goods="goods"
            goods-id="goodsId"
            @buy-clicked="onBuyClicked"
            >
                <template slot="sku-actions-top">
                    <van-uploader 
                    v-model="fileList"
                    :after-read="afterRead">
                    </van-uploader>
                </template>
            </van-sku>
        </div>
    </div>
</template>
<script>
export default{
    name:'goodsDetail',
    data(){
        return{
            msg:'goodsDetail组件，商品购买页',
            goodsInfo:{},
            skuShow:false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                    k: '颜色', // skuKeyName：规格类目名称
                    k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [
                        {
                        id: '1', // skuValueId：规格值 id
                        name: '红色', // skuValueName：规格值名称
                        imgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png', // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '2',
                        name: '蓝色',
                        imgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        previewImgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        }
                    ],
                    largeImageMode: true, //  是否展示大图模式
                    },
                    {
                    k: '尺码', // skuKeyName：规格类目名称
                    k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    v: [
                        {
                        id: '3', // skuValueId：规格值 id
                        name: '-S', // skuValueName：规格值名称
                        imgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png', // 规格类目图片，只有第一个规格类目可以定义图片
                        previewImgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png', // 用于预览显示的规格类目图片
                        },
                        {
                        id: '4',
                        name: '-M',
                        imgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        previewImgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        },
                        {
                        id: '5',
                        name: '-L',
                        imgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        previewImgUrl: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png',
                        }
                    ],
                    largeImageMode: true, //  是否展示大图模式
                    },
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [                    
                    {
                    id: 2260, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 333 // 当前 sku 组合对应的库存
                    },
                    {
                    id: 2260, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 666 // 当前 sku 组合对应的库存
                    },{
                    id: 2260, // skuId
                    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '5', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 666 // 当前 sku 组合对应的库存
                    },
                    {
                    id: 2260, // skuId
                    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '3', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 333 // 当前 sku 组合对应的库存
                    },
                    {
                    id: 2260, // skuId
                    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '4', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 666 // 当前 sku 组合对应的库存
                    },{
                    id: 2260, // skuId
                    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '5', // 规格类目 k_s 为 s2 的对应规格值 id
                    price: 100, // 价格（单位分）
                    stock_num: 666 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                messages: [
                    {
                    // 商品留言
                    datetime: '1', // 留言类型为 time 时，是否含日期。'1' 表示包含
                    multiple: '1', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                    name: '留言', // 留言名称
                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                    required: '1', // 是否必填 '1' 表示必填
                    placeholder: '', // 可选值，占位文本
                    extraDesc: ''  // 可选值，附加描述文案
                    }
                ],
                hide_stock: false // 是否隐藏剩余库存
                },
            goods: {
                // 数据结构见下方文档
                picture: 'https://yanxuan-item.nosdn.127.net/50987f5b3a71dcd93372557250cbba06.png'
            },
            messageConfig: {
            // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
            uploadImg: () => {
                return new Promise((resolve) => {
                setTimeout(() => resolve('https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
                });
                }
            },
            fileList: [
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
        }
    },
    created(){
        // 使用this.$route进行参数的接收
        let _n = this.$route.params.goodsInfo;
        console.log(_n);
        this.goodsInfo = _n;
    },
    methods:{
        // 导航栏返回主页面点击按钮
        gotoIndexBtn(){
            localStorage.setItem('save_inx',0);
            this.$router.push('/')
        },
        // 加入购物车点击按钮
        buyBtn(){
            this.skuShow=true;
        },
        // 立即购买
        onBuyClicked(_skuData){
            console.log(_skuData);
        },
         afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
    }
}
</script>
<style scoped>
/* 顶部导航栏listTitle  */
.listTitleWrap{
    position: relative;
    text-align: center;

}
.listTitleIcon_chat{
    position:absolute;
    top:.2rem;
    left: .2rem;
}
.listTitleImg{
    position:absolute;
    top: .56rem;
    left: 50%;
    transform: translate(-50%, -50%);
    height: .62rem;
}
.listTitleIcon_search{
    position:absolute;
    top:.2rem;
    right: 1.2rem;
}
.listTitleIcon_cart{
    position:absolute;
    top:.2rem;
    right: .2rem;
}
/* 商品详情描述 */
.goodsDetialWrap{
    width: 100%;
    height: auto;
    display: block;
    position: absolute;
    /* background-color: #000; */
    top: 1rem;
}
.goodsDetialWrap img{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    
}
.priceArea{
    position:absolute;
    top:10rem;
    background-color: #fa1e32;
    color: #fff;
    width: 100%;
}
/* 产品文字信息样式 */
.baseInfo{
    position: absolute;
    top: 12.4rem;
    padding-left: .2rem;
}
.simpleBrandInfo{
    margin-top: .2rem;
}
.preLogo{
    width: .74rem;
    height: .38rem;
    background: url('https://yanxuan.nosdn.127.net/6366944e4ac00118969787dedf9520e7.png');
    background-size: 100% 100%;
    float: left;
    margin-right: .2rem;
    margin-top: .02rem;
}
.brandLogo{
    width: .32rem;
    height: .32rem;
    padding-top: .05rem;
    float: left;
}
.baseInfo .name{
    font-size: .4rem;
    font-weight: bolder;
}
.baseInfo span{
    font-size: .3rem;
    float: left;
    margin-left: .2rem;
    color: #947f94;
}
.skuWrap{
    font-size: .37rem;
}
</style>