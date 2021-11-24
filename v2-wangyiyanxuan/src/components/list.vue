<template>
    <div>
        <!-- 顶部导航栏 -->
        <div class="listTitleWrap">
            <van-icon name="wap-home-o" size="50" class="listTitleIcon_chat" @click="gotoIndexBtn"/>
            <img src="../assets/logo-img.png" alt="" class="listTitleImg">
            <van-icon name="search" size="50" class="listTitleIcon_search"/>
            <van-icon name="cart-o" size="50" class="listTitleIcon_cart"/>
            <!-- 标签栏 -->
            <div>
                <van-tabs v-model="active" class="listTitleTab" title-active-color='red'>
                    <van-tab 
                    v-for="(n,inx) in tabValueArr"
                    :key="inx"
                    :title="n" >
                    </van-tab>
                </van-tabs>
            </div>
            <!-- 分隔栏 -->
            <div class="tabGridDevideFence"></div>
        </div>

        <!-- 产品宫格展示 -->
        <div class="listGridWrap">
            <van-grid :column-num="2" >
                <van-grid-item v-for="(n,inx) in listGridObj" 
                :key="inx" @click="gotoGoodsDetailBtn(n)">
                    <div class="listGridProduct">
                        <i ><img :src="n.goods_img" alt=""></i>
                        <span class="gridItemTxt">{{n.goods_name}}</span>
                        <span class="gridItemPrice">{{'￥'+n.goods_price}}</span>
                    </div>
                </van-grid-item>
            </van-grid>
        </div>

    </div>
</template>
<script>import axios from "axios"

export default{
    name:'list',
    data(){
        return{
            msg:'list 商品列表组件',
            tabValueArr:['必买清单','新品速递','换季清仓'],
            listGridObj:{},
            active:0,
        }
    },
    // vue生命周期，页面加载完成后执行
    created(){
        axios.get("http://localhost:3344/cate_goods_list_0")
                .then(_d=>{
                    // console.log(_d.data);
                    this.listGridObj = _d.data;
                })
    },
    methods:{
        gotoGoodsDetailBtn(_n){
            // 点击时获取产品数据_n
            // console.log(_n);
            // 这是单纯的路由跳转
            // this.$router.push('goodsDetail');
            // 路由跳转传参
            this.$router.push({
                name:'goodsDetail',
                params:{
                    goodsInfo:_n
                }
            })
        },
        // 返回首页点击按钮
        gotoIndexBtn(){
            localStorage.setItem('save_inx',0);
            this.$router.push('/');
        }
    },
    computed:{
    },
}
</script>

<style scoped>
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
.listTitleTab{
    position: absolute;
    top: 1rem;
    width: 100%;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}
/* tabGridDevideFence 分隔栏样式 */
.tabGridDevideFence{
    height: .3rem;
    width: 100%;
    background-color: #eeeeee;
    top: 2rem;
    position: absolute;
    border-top: solid 2px #e8e8e8;
}

/* list宫格组件产品展示样式 */
.listGridWrap{
    position: absolute;
    top: 10.3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    /* padding: 0 .5rem; */
}
.listGridProduct{
    font-size: .4rem;
    padding: 0 .1rem;
}
.listGridProduct i{
    height: auto;
    display: block;
}
.listGridProduct img{
    background-color: #f4f4f4;
    border-radius: .2rem;
}
.listGridProduct .gridItemTxt{
        padding: .2rem 0;
}
.listGridProduct .gridItemPrice{
    font-weight: bolder;
    font-size: .5rem;
    color: red;
    display: block;

}
</style>