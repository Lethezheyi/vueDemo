<template>
    <div class="headerCptWrap">
      <van-search
        v-model="value"
        show-action
        background="red"
        shape='round'
        placeholder="Ming或与RNG续约 | 曝Knight签约BLG"
      >
        <template #action>
          <van-icon name="add-o" />
          <span>发布</span>
        </template>
      </van-search>
    </div>
</template>

<script>
export default{
    name:"headerCpt",
    data(){
        return{
            msg:"headerCpt 组件",
            value:'',
            titleBarValue:[]
        }
    },
    created(){

    }
}
</script>