<template>
  <el-menu :router='true'
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#BFCBD9"
    active-text-color="#409eff"
    @select="handleSelect"
    @close="handleClose">
    <el-menu-item index="search">
      <i class="el-icon-menu"></i>
      <span slot="title">食物营养成分查询</span>
    </el-menu-item>
    <el-menu-item index="plate">
      <i class="el-icon-document"></i>
      <span slot="title">餐盘计算</span>
    </el-menu-item>
    <el-submenu index="weight">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>体重管理</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="1-1">非赛季</el-menu-item>
          <el-menu-item index="1-2">赛季</el-menu-item>
        </el-menu-item-group> -->
        <el-menu-item index="inseason">
          <i class="el-icon-dish"></i>非赛季</el-menu-item>
        <el-menu-item index="noseason">
          <i class="el-icon-dish-1"></i>赛季</el-menu-item>
      </el-submenu>
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
      this.$router.push({ name: index })
    }
  }

}
</script>
<style lang="less" scoped>

</style>
