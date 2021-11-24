<template>
    <div>
        {{msg}}
        <!-- 底部导航栏 -->
        <footerCpt></footerCpt>
    </div>
</template>
<script>
import footerCpt from './footerCpt'
export default{
    name:'screeningRoom',
    data(){
        return{
            msg:"screeningRoom组件"
        }
    },
    components:{
        footerCpt
    }
}
</script>
<style scoped>
</style>