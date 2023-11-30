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
    <el-row>
      <el-col :span="24">
        <div class="bottom">
          <img style="width:1 00%;" src="@/assets/images/detailFood.jpg"/>
          <div>
          <el-row>
            <el-col :span="24">
              <div class="bottomContent">
                <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'name', order: 'descending'}"
                >
                <el-table-column
                    prop="name"
                    label="食物名称"
                    sortable
                    width="180">
                    <template slot-scope="tableData">
                      <a style="text-decoration:none;color:#000;">
                        {{tableData.row.name}}
                      </a>
                    </template>
                </el-table-column>
                <el-table-column
                  prop="otherName"
                  label="项目"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="English"
                  label="含量"
                  >
                </el-table-column>
                <el-table-column
                  prop="Edible"
                  label="食部Edible"
                  >
                </el-table-column>
                  <el-table-column
                  prop="water"
                  label="水分"
                  >
                </el-table-column>
                  <el-table-column
                  prop="energy"
                  label="能量"
                  >
                </el-table-column>
              </el-table>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="bottomContent">
                <el-table
                :data="detailData.jibenyingyang"
                style="width: 100%"
                >
                <el-table-column
                  prop="碳水化合物"
                  label="项目"
                  sortable
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="English"
                  label="含量"
                  >
                </el-table-column>
              </el-table>
              </div>
            </el-col>
          </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {reqGetFoodData,regGetFood} from '@/api/index'
export default {
    
    name:'detailSmall',
    data() {
      return {
        detailData:[],
        tableData: [
          {
            name:'小麦粉（标准粉）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'12.7g',
            energy:'1497kJ',
          },
          {
            name:'小麦粉（富强粉，特一粉）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'12.7g',
            energy:'1494kJ',
          },,
          {
            name:'挂面（均值）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'12.3g',
            energy:'1493kJ',
          },
          {
            name:'挂面（标准粉）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'12.4g',
            energy:'1490kJ',
          },
          {
            name:'挂面（富强粉）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'12.7g',
            energy:'1477kJ',
          },
          {
            name:'面条（均值）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'28.5g',
            energy:'1219kJ',
          },
          {
            name:'面条（标准面，切面）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'29.7g',
            energy:'1215kJ',
          },
          {
            name:'面条（富强粉，切面）',
            otherName:'',
            English:'',
            Edible:'100%',
            water:'29.2g',
            energy:'1217kJ',
          }
        ]
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

<style lang='less' scoped>
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

  .bottom {
    margin-top: 20px;
  }
</style>