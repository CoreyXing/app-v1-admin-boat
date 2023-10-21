<template>
  <div>
    <el-page-header @back="goBack" content="小麦粉详情页面" style="margin-bottom:20px;">
    </el-page-header>
    <img style="width:1200px" src="@/assets/images/detailFood.jpg"/>
  </div>
</template>

<script>

export default ({
  name:'detailFood',
  methods: {
     goBack(){
        this.$router.go(-1);
      }
  },
})
</script>

<style lang="less" scoped>

</style>