<template>
    <div>
        <van-sticky>
            <!-- 搜索框 -->
            <div class="cateListSearchWrap">
                <searchBtn class="cateListSearch"></searchBtn>
            </div>
        </van-sticky>
        
        <!-- 侧边导航栏+产品展示 -->
        <div class="cateListSidebarWrap">
            <!-- 侧边导航栏 -->
            <div class="cateListSidebar" >
                <van-sidebar v-model="activeKey" @change="cateListChange(activeKey)">
                    <van-sidebar-item v-for="(n,inx) in sidebarValue_Arr" :key="inx" :title="n.txt" />
                </van-sidebar>
            </div>
        </div>
        <!-- 右侧产品轮播+宫格展示 -->
            <div class="productListWrap">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(n,inx) in cateListSwipe_Arr" :key="inx">
                        <img :src="n.img" alt="">
                    </van-swipe-item>
                </van-swipe>
                <van-grid :column-num="3" v-if="defalutGridShow">
                    <div class="defalutGridWrap">
                            <van-grid-item v-for="(n,inx) in cateListProductGrid_arr" 
                            :key="inx" 
                            :icon="n.img" 
                            :text="n.txt" 
                            @click="cateListGridBtnFn"/>
                    </div>
                </van-grid>
                <van-grid v-else>
                    <div class="listOtherPduWrap" v-for="(n,inx) in cateListProductGrid_arr" 
                        :key="inx">
                        <div class="hd">{{n.div_txt}}</div>
                            <ul >
                                <!-- 加载数据 -->
                                <li v-for="(m,index) in n.img_detail" :key="index">
                                    <img :src="m.img" alt="">
                                    <span>{{m.img_txt}}</span>
                                </li>
                            </ul>
                    </div>

                </van-grid>
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
            defalutGridShow:true,
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
            cateListProductGrid_arr:[]
        };
    },
    created(){
        axios.get('http://localhost:3344/cateList_default_list')
                .then(_d=>{
                    this.cateListProductGrid_arr = _d.data;
                });
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
        },
        // 侧边导航栏点击切换事件
        cateListChange(activeKey){
            // console.log(activeKey);
            if(activeKey !== 0){
                this.defalutGridShow =false;
                        axios.get(`http://localhost:3344/cateList_other_list`,{
                            params:{
                                index:activeKey
                            }
                        })
                            
                            .then(_d=>{
                                console.log(_d.data);
                                this.cateListProductGrid_arr = _d.data;
                            });
            }else{
                this.defalutGridShow =true;
                // 当点击的cateList组件侧边导航栏第一个时，抓取默认数据
                axios.get('http://localhost:3344/cateList_default_list')
                        .then(_d=>{
                            this.cateListProductGrid_arr = _d.data;
                        });
            }
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
    background-color: #fff;
}
.cateListSidebarWrap{
    position: fixed;
    z-index: 10;
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
/* cateList点击其他分类按钮时的宫格样式 */
.listOtherPduWrap{
    text-align: left;
    width: 4.3rem;
}
.hd{
    font-size: .4rem;
    font-weight: bolder;
    display: block;
    padding: .2rem 2.66rem .1rem 0;
    text-align: left;
    width: 100%;
    margin-left: .1rem;
    border-bottom: solid 1px #aeaeae;
}
.listOtherPduWrap ul{
    display: block;
    font-size: .32rem;
    text-align: center;
    overflow: hidden;
    width: 8rem;
    height: auto;
}
.listOtherPduWrap ul li{
    margin: 0 .1rem;
    width: 2.2rem;
    float: left;
    margin: .3rem 0;
}
.listOtherPduWrap ul li img{
    width: 2rem;
}
.listOtherPduWrap ul li span{
    display: block;
}
</style>