<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#BFCBD9"
    active-text-color="#409eff"
    @select="handleSelect"
    @close="handleClose">
    <!-- 这样存放index其实有个问题，如果一样的话，就难以区分，最好是索引，以后再改吧 -->

    <el-menu-item index="search">
      <i class="el-icon-menu"></i>
      <span slot="title">食物营养成分查询</span>
    </el-menu-item>
    <el-menu-item index="plate">
      <i class="el-icon-document"></i>
      <span slot="title">餐盘计算</span>
    </el-menu-item>
    <el-menu-item index="weight">
      <i class="el-icon-setting"></i>
      <span slot="title">体重转换</span>
    </el-menu-item>
    <el-menu-item index="knowledge">
      <i class="el-icon-setting"></i>
      <span slot="title">知识图谱展示</span>
    </el-menu-item>
  </el-menu>
</template>
<script>

export default {
  name: 'TypeNav',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (index, keyPath) {
      console.log(index)
      this.$router.push({ name: index })
    }
  }

}
</script>
<style lang="less" scoped>

</style>
