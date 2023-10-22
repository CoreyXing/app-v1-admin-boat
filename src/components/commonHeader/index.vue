<template>
  <div class="header-container">
      <div class="l-content">
        <el-button 
          icon="el-icon-menu" 
          size="mini"
          @click="handleMenu"></el-button>
        <!-- 面包屑 不知道实现不-->
        <span class="text">首页</span>
      </div>
      <div class="r-content">
        <el-menu
            class="el-menu-top"
            mode="horizontal"
            background-color="#23262E"
            text-color="#fff"
            active-text-color="#409EFF"
          >
            <el-submenu index="1">
              <template slot="title">
                <!-- 头像 -->
                <img src="../../assets/images/user.png" alt="" class="avatar" />
                <span>个人中心</span>
              </template>
              <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>基本资料</el-menu-item>
              <el-menu-item index="1-2"><i class="el-icon-camera"></i>更换头像</el-menu-item>
              <el-menu-item index="1-3"><i class="el-icon-key"></i>重置密码</el-menu-item>
            </el-submenu>
            <el-menu-item index="2" @click="logoutFn"><i class="el-icon-switch-button"></i>退出</el-menu-item>
          </el-menu>
      </div>
  </div>
</template>

<script>

export default {
  name: "my-header",
  methods: {
    handleMenu() {
      // 这里;跳过了派发action 后期可以优化
      this.$store.commit('collapseMenu');
    },
    logoutFn () {
      // 询问用户是否退出登录
      this.$confirm('您确认退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // TODO：执行退出登录的操作
          // 1. 清空 token
          this.$store.commit('updateToken', '')
          // 2. 跳转到登录页面
          this.$router.push('/login')
        })
        .catch((err) => err)
    }
  }
}

</script>

<style lang="less" scoped>
  .header-container {
    padding: 0 20px;
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l-content {
      .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .r-content {
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>