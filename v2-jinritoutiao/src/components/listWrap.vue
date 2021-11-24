<template>
    <div class="listWrap">
        <ul>
            <li v-for="(n,inx) in tabBarValue.bangumi" :key="inx">
                <h1>{{n.title}}</h1>
                <b>置顶</b>
                <span>新华网客户端</span>
                <span>1953评论</span>
            </li>

        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default{
    name:"listWrap",
    data(){
        return{
            msg:"listWrap组件",
            tabBarValue:{}
        }
    },
    props:["titleTxt"],
    // 生命周期函数，页面加载前执行
    created(){
        axios.get('/index/ding.json')
                .then(_d=>{
                    console.log(_d.data);
                    this.tabBarValue=_d.data;
                })
        // console.log(this.tabBarValue);
    }
}
</script>

<style scoped>
.listWrap{
    padding: .3rem 0 .5rem 0;
}
.listWrap ul li{
   display: block;
   height: 2.1rem;
}
.listWrap ul li h1{
    font-size: .55rem;
    font-weight: 500;
    text-align: left;
    margin-left: .25rem;
}
.listWrap ul li b,span{
    font-size: .35rem;
    font-weight: 500;
    text-align: left;
    margin-left: .25rem;
    float: left;
    color: red;
}
.listWrap ul li span{
    color: #9a9a9a;
}
</style>