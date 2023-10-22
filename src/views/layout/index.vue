<template>
  <div>
      <el-container>
        <el-aside width="auto">
          <!-- 侧边栏 -->
          <common-aside/>
        </el-aside>
        <el-container>
          <!-- 顶部内部 -->
          <el-header>
            <common-header/>
          </el-header>
          <!-- 内容主区域 -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import commonAside from '@/components/commonAside'
import commonHeader from '@/components/commonHeader'

export default {
  name: 'my-layout',
  components: {
    commonAside,
    commonHeader,
  },
  methods: {
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
          this.$store.user.commit('updateToken', '')
          // 2. 跳转到登录页面
          this.$router.push('/login')
        })
        .catch((err) => err)
    }
  }
}
</script>

<style lang="less" scoped>

  .el-header {
    padding: 0;
  }

  .el-main {
    overflow-y: scroll;
    height: 0;
    background-color: #F2F2F2;
  }
  .el-footer {
    background-color: #eee;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
