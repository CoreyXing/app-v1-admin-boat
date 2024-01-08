<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="isRouter"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h3>{{ isCollapse ? '饮食' : '饮食管理系统' }}</h3>
      <el-menu-item
        v-for="item in nochildren " :key="item.name"
        :index="item.path">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in children" :key="item.label" index='1'>
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="child in item.children" :key="child.name">
          <el-menu-item :index="child.path">{{child.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isRouter: true,
        // 这样写可以用来进行权限管理 利用后台返回回来的对于权限的列表
        menuData: [
          {
            path:"/home",
            name:"home",
            label:'首页',
            icon: 's-home',
          },
          {
            path:"/knowledge",
            name:"knowledge",
            label:'知识图谱展示',
            icon: 'data-line',
          },
          {
            path:"/search",
            name:"search",
            label:'食物成分查询',
            icon: 'search',
          },
          {
            path:"/plate",
            name:"plate",
            label:'我的餐盘',
            icon: 'data-line',
          },
          {
            label:'营养监控',
            icon: 's-home',
            children: [
              {
                path:"/foodtrack",
                name:"foodtrack",
                label:'日常营养',
                icon: 's-home',
              },
              {
                path:"/echarts",
                name:"echarts",
                label:'echarts测试',
                icon: 's-home',
              }
            ]
          },
          {
            path:"/bigModel",
            name:"bigModel",
            label:'问答模式',
            icon: 'ship',
          },
          
        ]
      };
    },
    computed:{
      // 有子菜单的
      children() {
        return this.menuData.filter(item => item.children);
      },
      // 没有子菜单的
      nochildren() {
        return this.menuData.filter(item => !item.children);
      },
      isCollapse() {
        return this.$store.state.tab.isCollapse;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击菜单
      clickMenu(item) {
        console.log(item);
        // this.$router.push({ name: index })
      }
    }
  }
</script>

<style lang='less' scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      height: 100vh;
      border-right: none;
      h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
      }
  }
</style>
