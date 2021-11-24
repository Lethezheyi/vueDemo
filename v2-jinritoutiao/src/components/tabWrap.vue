<template>
    <div class="tabWrap">
        <van-tabs v-model="active" class="tabCls">
            <van-tab 
            v-for="(n,inx) in tabValue"
            :key="inx"  
            :title="n" ></van-tab>
        </van-tabs>
        <van-button icon="bars" type="default" class="btnCls"/>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:"tabWrap",
    data(){
        return{
            msg:"tabWrap标签栏组件",
            active:1,
            tabValue:[]
        }
    },
    created(){
        // console.log("xxx");
        axios.get("http://localhost:3344/tab_title")
                .then(_d=>{
                    // console.log(_d.data);
                this.tabValue = _d.data;
                })
    }
}
</script>

<style scoped>
.tabWrap .tabCls{
    display: inline-block;
    width: 90%;
}
.btnCls{
    /* position: absolute; */
    display: block;
    font-size: .44rem;
    width: 10%;
    height: 1rem;
    float: right;
}

</style>