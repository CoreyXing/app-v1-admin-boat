<template>
  <div class="container">
    <div class="top-section">
      <!-- <div class="left-section">
        
      </div> -->
      <el-card class="box-card1">
        <div class="vertical-div">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="text">
                <label for="weight">请输入你的身高（cm）：</label>
                <el-input v-model="input" placeholder="请输入身高"></el-input>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="text">
                <label for="weight">请输入你的体重（kg）：</label>
                <el-input v-model="input" placeholder="请输入体重"></el-input>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="vertical-div">
          <el-row>
            <el-col :span="12">
              <span class="custom-span">一日三餐记录</span>
            </el-col>
            <el-col :span="12">
              <el-button @click="showForm">新增进餐记录</el-button>
            </el-col>
          </el-row>
          <el-dialog :visible.sync="dialogVisible" title="本餐次的食物记录">
            <el-form :model="intake_record" ref="intake_record" label-width="100px" class="demo-dynamic">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="日期" prop='date' :rules="{ required: true, message: '请选择日期', trigger: 'change' }">
                    <div class="block">
                      <el-date-picker v-model="intake_record.date" type="date" placeholder="选择日期">
                      </el-date-picker>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="餐次">
                    <el-select v-model="value" placeholder="请选择餐次：">
                      <el-option v-for="item in intake_record.meals" :key="item.value" :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item v-for="dish in intake_record.dishes" label="食物名称" :key="dish.id" :prop="dish.name" :rules="{
                required: true, message: '食物名称不能为空', trigger: 'blur'
              }">
                <el-row :gutter="4">
                  <el-col :span="6">
                    <el-select v-model="dishesName.name" @focus="getDishesName" placeholder="请选择">
                      <el-option v-for="item in dishesName" :key="item.id" :label="item.name" :value="item.name">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="6">
                    <el-input-number v-model="intake_record.dishes.intake_num" @change="handleChange" :min="1" :max="10"
                      label="描述文字"></el-input-number>
                  </el-col>
                  <el-col :span="6">
                    <el-button @click.prevent="removeDish(dish)">删除</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('intake_record')">提交</el-button>
                <el-button @click="addDish">新增食物</el-button>
                <el-button @click="resetForm('intake_record')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
        <div>
          <el-table :data="total_data" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="日期">
                    <span>{{ props.row.intake_date }}</span>
                  </el-form-item>
                  <el-form-item  label="餐次">
                    <span>{{ props.row.meals_id }}</span>
                  </el-form-item>
                  <el-form-item  label="热量（千卡）">
                    <span>{{ props.row.intake_data.main_ingredient.热量 }}</span>
                  </el-form-item>
                  <el-form-item label="碳水化合物（克）">
                    <span>{{ props.row.intake_data.main_ingredient.碳水化合物 }}</span>
                  </el-form-item>
                  <el-form-item label="蛋白质（克）">
                    <span>{{ props.row.intake_data.main_ingredient.蛋白质 }}</span>
                  </el-form-item>
                  <el-form-item label="脂肪（克）">
                    <span>{{ props.row.intake_data.main_ingredient.脂肪 }}</span>
                  </el-form-item>
                  <!-- <el-form-item label="z">
                    <span>{{ props.row.intro }}</span>
                  </el-form-item> -->
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="日期" prop="intake_date">
            </el-table-column>
            <el-table-column label="餐次" prop="meals_id">
            </el-table-column>
            <el-table-column label="总热量" prop="intake_data.main_ingredient.热量">
            </el-table-column>
          </el-table>
        </div>
      </el-card>
      <!-- </div> -->
    </div>
    <div class="content">
      <!-- 下方内容 内容为详细的营养分析-->
      <el-row :gutter="4">
        <el-col :span="8">
          <el-card>
            <el-divider direction="vertical"></el-divider>
            热量分析
            <div class="dashboard">
              <div class="dashboard-item">
                <div class="progress-wrapper">
                  <el-progress type="circle" :percentage="25"></el-progress>
                </div>
                <div class="content-wrapper">
                  <p>卡路里（kcal）</p>
                  <div class="rate">
                    <h6>+1.78%</h6>
                    <h3>{{ total_cal }}</h3>
                  </div>
                  <p>实际摄入量</p>

                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card>
            <el-divider direction="vertical"></el-divider>
            三大营养素分析
            <div class="dashboard">
              <div class="dashboard-item">
                <div class="progress-wrapper">
                  <el-progress type="circle" :percentage="100" status="success"></el-progress>
                </div>
                <div class="content-wrapper">
                  <p>碳水化合物（g）</p>
                  <div class="rate">
                    <h6>+1.78%</h6>
                    <h3>37.9</h3>
                  </div>
                  <p>实际摄入量</p>
                </div>

              </div>
              <div class="dashboard-item">
                <div class="progress-wrapper">
                  <el-progress type="circle" :percentage="70" status="warning"></el-progress>
                </div>
                <div class="content-wrapper">
                  <p>蛋白质（g）</p>
                  <div class="rate">
                    <h6>-10.8%</h6>
                    <h3>38</h3>
                  </div>

                  <p>实际摄入量</p>
                </div>
              </div>
              <div class="dashboard-item">
                <div class="progress-wrapper">
                  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
                </div>
                <div class="content-wrapper">

                  <p>脂肪（g）</p>
                  <div class="rate">
                    <h6>+1.78%</h6>
                    <h3>10</h3>
                  </div>
                  <p>实际摄入量</p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="nutrition-card">

            <div class="important">
              <el-divider direction="vertical"></el-divider>
              重点营养素分析
            </div>
            <el-progress class="nutrition-progress" :percentage="50"></el-progress>
            <el-progress class="nutrition-progress" :percentage="100" :format="format"></el-progress>
            <el-progress class="nutrition-progress" :percentage="100" status="success"></el-progress>
            <el-progress class="nutrition-progress" :percentage="100" status="warning"></el-progress>
            <el-progress class="nutrition-progress" :percentage="50" status="exception"></el-progress>
          </el-card>
        </el-col>
      </el-row>


    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      total_data:[],
      dialogVisible: false, // 控制对话框的显示和隐藏
      // num: 1,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      intake_record: {
        dishes: [{
          id: '',
          name: '',
          intake_num: ''
        }],
        meals: [{
          value: '选项1',
          label: '早餐'
        }, {
          value: '选项2',
          label: '午餐'
        }, {
          value: '选项3',
          label: '晚餐'
        }],
        date: ''
      },
      value: '',
      input: ''
    };
  },
  methods: {
    //   showDishList(index) {
    //   this.dishesName = this.dishesName[index].name;
    // },
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    showForm() {
      this.dialogVisible = true; // 点击按钮时显示表单对话框
    },
    handleChange(value) {
      console.log(value);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // this.getMeals(); //调用创建餐次记录的api方法
          this.$store.dispatch("getMeals",formName);
          this.total_data.push(this.tableData[0]);
          this.showForm = false; // 隐藏表单
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDish(item) {
      var index = this.intake_record.dishes.indexOf(item)
      if (index !== -1) {
        this.intake_record.dishes.splice(index, 1)
      }
    },
    addDish() {
      this.intake_record.dishes.push({
        value: '',
        key: Date.now()
      });
    },
    getDishesName() {
      this.$store.dispatch("getDishesName");
    },
    getMeals() {
      this.$store.dispatch("getMeals");
    },
    getCurrentDate() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);
      let formattedDate = year + '-' + month + '-' + day;
      return formattedDate;
    }
  },
  mounted() {
    // this.$store.dispatch("getDishesName");
  },
  computed: {
    ...mapState({
      dishesName: (state) => state.foodtrack.dishesName,
      tableData:(state) =>state.meals.meals || []
    }),
    total_cal(){
      let date = this.getCurrentDate();
      let newarr = this.total_data.filter(item => item.intake_date === date);
      console.log('hivgcfcf',this.total_data)
      console.log('hihuih',newarr)
      let num = 0;
      newarr.forEach(element => {
        num += parseInt(element.total_intake.main_ingredient.热量);
      });
      return num;
    },
  }
}
</script>
<style scoped>
.important {
  margin-bottom: 10px;
}

.nutrition-progress {
  margin-bottom: 10px;
  /* 添加底部间距为10像素 */
}

.nutrition-card {
  margin-bottom: 20px;
  /* 添加底部间距为20像素 */
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.custom-span {
  font-size: 16px;
  font-weight: bold;
  /* 修改字体大小为 16px */
}

.vertical-div {
  margin-bottom: 20px;
  /* 调整竖直方向的间距，这里设为 20px */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.top-section {
  width: 100%;
  height: auto;
  /* display: flex; */
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  /* 可根据需要调整仪表板项的间距 */
  width: 400px;
  /* 设置仪表盘宽度为600px */
  height: 400px;
  /* 设置仪表盘高度为400px */
}

.dashboard-item {
  padding: 10px;
  /* 可根据需要调整仪表板项的内边距 */
  display: flex;
  align-items: center;
}

.progress-wrapper {
  margin-right: 10px;
  /* 可选样式，用于控制进度条与文字之间的间距 */
}

.content-wrapper {
  flex: 1;

  .rate {
    position: relative;
  }

  .rate h6 {
    position: absolute;
    top: 0;
    right: 60%;
    margin: 0;
    color: rgb(37, 166, 37);
  }
}

.content-wrapper p {
  font-size: 16px;
  /* 设置字体大小 */
  color: rgb(111, 111, 123);
  /* 设置字体颜色 */
}

.content {
  margin-top: 10px;
  /* 可根据需要调整内容与上方部分的间距 */
}</style>