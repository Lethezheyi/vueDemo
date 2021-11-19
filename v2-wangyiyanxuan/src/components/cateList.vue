<template>
    <div>
        <!-- 搜索框 -->
        <div class="cateListSearchWrap">
            <searchBtn class="cateListSearch"></searchBtn>
        </div>
        <!-- 侧边导航栏+产品展示 -->
        <div class="cateListSidebarWrap">
            <!-- 侧边导航栏 -->
            <div class="cateListSidebar">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item v-for="(n,inx) in sidebarValue_Arr" :key="inx" :title="n.txt" />
                </van-sidebar>
            </div>
            <!-- 产品轮播+宫格展示 -->
            <div class="productListWrap">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(n,inx) in cateListSwipe_Arr" :key="inx">
                        <img :src="n.img" alt="">
                    </van-swipe-item>
                </van-swipe>
                <van-grid :column-num="3" >
                    <van-grid-item v-for="(n,inx) in cateListProductGrid_arr" 
                    :key="inx" 
                    :icon="n.img" 
                    :text="n.txt" 
                    @click="cateListGridBtnFn"/>
                </van-grid>
            </div>
        </div>

        <!-- 底部标签栏 -->
        <footerBar></footerBar>
    </div>
</template>
<script>
import searchBtn from './searchBtn.vue'
import footerBar from './footerBar.vue'
import axios from 'axios';
export default{
    name: "cateList",
    data() {
        return {
            msg: "cateList组件",
            activeKey:0,//sidebar侧边导航栏
            sidebarValue_Arr:[
                {
                    txt:'为你推荐'
                },{
                    txt:'居家生活'
                },{
                    txt:'服饰鞋包'
                },{
                    txt:'美食酒水'
                },{
                    txt:'个护清洁'
                },{
                    txt:'母婴亲子'
                },{
                    txt:'运动旅行'
                },{
                    txt:'数码家电'
                },{
                    txt:'严选全球'
                },
            ],
            cateListSwipe_Arr:[
                {
                    img:'https://yanxuan.nosdn.127.net/b0e5be94403d5a48e541765e3165fa10.png?type=webp&imageView&quality=75&thumbnail=0x196'
                },
                {
                    img:'https://yanxuan.nosdn.127.net/a526839dc92707bc26866ecda3158f45.jpeg?type=webp&imageView&quality=75&thumbnail=0x196'
                },],
            cateListProductGrid_arr:[
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
        };
    },
    methods:{
        // 右侧产品图点击事件
        cateListGridBtnFn(){
            // console.log("xxx");
            this.$router.push('list')
            // axios.get('http://localhost:3344/cate_goods_list_0')
            //         .then(_d=>{
            //             console.log(_d.data);
            //         })
        }
    },
    components: { footerBar,searchBtn }
}
</script>
<style scoped>
.cateListSearchWrap{
    width: 100%;
    height: 1rem;
    padding-bottom: .26rem;    
    text-align: center;
}
.cateListSidebarWrap{
    position: relative;
}
.cateListSidebar{
    float: left;
}
.cateListSearch{
    display: inline-block;
    padding: 0 1.6rem;
    text-align: center;
}
.productListWrap{
    background: #fff;
}
</style>