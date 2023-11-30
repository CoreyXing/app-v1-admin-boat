<template>
  <div>
      <el-row class="top">
        <el-col :span="8">
            <el-card>
              <div slot="header" class="clearfix">
                <i class="el-icon-menu"></i>
                <span>谷类及制品</span>
              </div>
              <div class="detail">
                <a>小麦</a>
                <a>稻米</a>
                <a>玉米</a>
                <a>大麦</a>
                <a>小米黄米</a>
                <a>其他</a>
              </div>
            </el-card>
        </el-col>
        <el-col :span="16">
          <div class="topContent">
            <img src="@/assets/images/imgNone.png"/>
            <div>
              <div class="r-content">
                <div class="r-content-top">
                  <h1>小麦粉(标准粉)</h1>
                  <span>食物类：谷类及制品</span>
                  <span>亚类:小麦</span>
                </div>
                <div class="statement">
                    <p>
                      <i>声明:</i>
                      本网站食物营养成分数据来源于中国疾病预防控制中心营养与健康所建立的中国食物成分表，
                      未经中国疾病预防控制中心营养与健康所允许，任何单位和个人不得用于商业目的。
                    </p>
                </div>
              </div>
            </div>
        </div>
        </el-col>
      </el-row>
      <!-- 五个card -->
      <div id="content">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>基本营养</h3>
          </div>
          <div v-for="(o,index) in detailData[0].jibenyingyang" :key="index" class="text item">
            {{index}} : {{o}}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>矿物质</h3>
          </div>
          <div v-for="(o,index) in detailData[0].kuangwuzhi" :key="index" class="text item">
            {{index}} : {{o}}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>脂类</h3>
          </div>
          <div v-for="(o,index) in detailData[0].zhilei" :key="index" class="text item">
            {{index}} : {{o}}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>维生素</h3>
          </div>
          <div v-for="(o,index) in detailData[0].weishengsu" :key="index" class="text item">
            {{index}} : {{o}}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>基本营养</h3>
          </div>
          <div v-for="(o,index) in detailData[0].gongxiao" :key="index" class="text item">
            {{o}}
          </div>
        </el-card>
      </div>
  </div>
</template>

<script>
import {regGetFood} from '@/api/index'
export default {
  name:'searchDetail',
  data(){
    return {
      detailData:[],
    }
  },
  mounted() {
      this.getData();
      console.log('详细信息',this.detailData);
    },
  methods:{
      async getData() {
        let result = await regGetFood();
        if (result.code === 200) {
          console.log(result.data);
          this.detailData = result.data;
        }
      }
    }
}
</script>

<style lang="less" scoped>
.top{
    margin-top: 20px;
    .el-card {
      height: 250px;
      .detail {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        a {
          font-size: 16px;
          margin-bottom: 20px;
          width: 32%;
          display: inline-block;
        }
      }
    }
    .topContent {
      display: flex;
      flex-direction: row;
      margin-left: 10px;
      img {
        width: 250px;
        height: 250px;
      }
      .r-content {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .r-content-top {
          display: flex;
          flex-direction: column;
        }
        .statement {
          width: 100%;
          border: 1px solid #98d281;
          background-color: #f5fceb;
          i {
            font-style: normal;
            color: #ef6519;
          }
          p {
            padding: 0 10px 10px 10px;
          }
        }
        span {
          margin-bottom: 20px;
        }
      }
    }
  }
#content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:20px;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 500px;
    margin:10px 0;
  }
}
</style>