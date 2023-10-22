<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="bottomContent">
          <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'name', order: 'descending'}"
          >
          <a>
            <el-table-column
              prop="name"
              label="食物名称"
              sortable
              width="180">
              <template slot-scope="tableData">
                <a style="text-decoration:none;color:#000;" @click="clickName">
                  {{tableData.row.name}}
                </a>
              </template>
            </el-table-column>
          </a>
          <el-table-column
            prop="otherName"
            label="别名或俗名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="English"
            label="英文名称"
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
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
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
  methods: {
     clickName() {
      // 只有a标签点击才会进入详细的页面
      this.$router.push({name:'detailSmall'})
    }
  }
}
</script>

<style>
  .bottomContent {
    margin-top: 20px;
  }
</style>