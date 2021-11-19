<template>
        <div class="title_middle">
        <van-icon name="search" class="searchIcon"/>
        <span class="searchSpan">搜索商品, 共119918款好物</span>
        </div>
</template>
<script>
export default{
    name:'searchBtn',
    data(){
        return{
            msg:'searchBtn组件，搜索框'
        }
    },
    methods:{

    }
}
</script>
<style scoped>

.title_middle{
  width: 5.8rem;
  height: .8rem;
  text-align: center;
  position: relative;
  top: 0.26rem;
  background: #ededed;
  border-radius: .1rem;
  color: #666666;
}
.title_middle{
  font-size: .3rem;
  top: .26rem;
  
}
.title_middle .searchIcon {
    position: absolute;
    top: .2rem;
    left: .3rem;
    font-size: .5rem;
}
.title_middle span {
    font-size: .377rem;
    top: .16rem;
    position: absolute;
    left: .8rem;
}
</style>