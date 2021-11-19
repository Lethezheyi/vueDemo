<template>
    <div>
        <!-- 顶部导航栏 -->
        <div class="listTitleWrap">
            <van-icon name="wap-home-o" size="50" class="listTitleIcon_chat"/>
            <img src="../assets/logo-img.png" alt="" class="listTitleImg">
            <van-icon name="search" size="50" class="listTitleIcon_search"/>
            <van-icon name="cart-o" size="50" class="listTitleIcon_cart"/>
        <!-- 标签栏 -->
        <div>
            <van-tabs v-model="active" class="listTitleTab" title-active-color='red'>
                <van-tab 
                v-for="(n,inx) in tabValueArr"
                :key="inx"
                :title="n" ></van-tab>
            </van-tabs>
        </div>
        </div>
        <!-- 产品宫格展示 -->
        <div class="listGridWrap">
            <van-grid :column-num="2">
                <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
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
    created(){
        axios.get("http://localhost:3344/cate_goods_list_0")
                .then(_d=>{
                    console.log(_d.data);
                })
    }
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
/* list宫格组件产品展示样式 */
.listGridWrap{
    position: absolute;
    top: 3.8rem;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>