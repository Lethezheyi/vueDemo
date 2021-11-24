<template>
    <div class="listWrap">
        <ul>
            <li >
                <h1>习近平出席并主持中国-东盟纪念峰会</h1>
                <b>置顶</b>
                <span>新华网客户端</span>
                <span>1953评论</span>
            </li>

        </ul>
    </div>
</template>
<script>
export default{
    name:"listWrap",
    data(){
        return{
            msg:"listWrap组件",
            tabBarValue:[]
        }
    },
    props:["titleTxt"],
    // 生命周期函数，页面加载前执行
    created(){
        this.tabBarValue=this.titleTxt;
        console.log(this.tabBarValue);
    }
}
</script>

<style scoped>
.listWrap{
    padding: .3rem 0 .5rem 0;
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
}
</style>