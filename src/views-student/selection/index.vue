<script setup>
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import {queryPageApi,selectCourseApi} from "@/api/selection";

const searchCourse=ref({
    date:'',
    time:'',
    empName:'',
    conflictsFilter:false
})
const dates=[
    {label:'周一',value:1},
    {label:'周二',value:2},
    {label:'周三',value:3},
    {label:'周四',value:4},
    {label:'周五',value:5},
]
const times=[
    {label:'第1节',value:1},
    {label:'第2节',value:2},
    {label:'第3节',value:3},
    {label:'第4节',value:4}
]
const chooseSwitch=ref(false)
const dateMarks={
    1:'周一',
    2:'周二',
    3:'周三',
    4:'周四',
    5:'周五'
}
const timeMarks={
    1:'第1节',
    2:'第2节',
    3:'第3节',
    4:'第4节'
}
const formatPeriod = (p) => {
  if (!p || p < 1 || p > 20) return '未知时段'

  const dayIndex = Math.floor((p - 1) / 4) + 1   // 1-5
  const classIndex = ((p - 1) % 4) + 1          // 1-4

  const dayMap = ['周一', '周二', '周三', '周四', '周五']

  return `${dayMap[dayIndex - 1]} 第${classIndex}节`
}

onMounted(()=>{ 
  queryPage()
})
const clearData=()=>{ 
  searchCourse.value={
    date:'',
    time:'',
    empName:'',
    conflictsFilter:false
  }
  queryPage()
}
const tableData=ref([])
//分页组件
const pagination = ref({currentPage: 1, pageSize: 10, total: 0})
//每页展示记录数发生变化时触发
const handleSizeChange = (pageSize) => {
  pagination.value.pageSize = pageSize
  queryPage()
}
//当前页码发生变化时触发
const handleCurrentChange = (page) => {
  pagination.value.currentPage = page
  queryPage()
}
const queryPage=async()=>{ 
  const loginUser = localStorage.getItem('loginUser')
  const id = JSON.parse(loginUser).id
  const result=await queryPageApi(
    id,
    searchCourse.value.date,
    searchCourse.value.time,
    searchCourse.value.empName,
    searchCourse.value.conflictsFilter,
    pagination.value.currentPage,
    pagination.value.pageSize
  )
    if(result.code){
      tableData.value=result.data.rows
      pagination.value.total = result.data.total
    }
    
}
const handleSelection=async(row) => { 
  const loginUser = localStorage.getItem('loginUser')
  const id = JSON.parse(loginUser).id
  const result=await selectCourseApi(id,row.id)
  if(result.code){
    ElMessage.success('选课成功')
    queryPage()
  }else{
    ElMessage.error(result.msg)

  }
}
</script>

<template>
    <h1>我的选课</h1> <br>
    <!-- {{ searchCourse }} -->
    
  <el-form :inline="true" :model="searchCourse">
    <el-form-item label="时间">
        <el-select v-model="searchCourse.date" placeholder="想上周几的课？" style="width: 240px">
            <el-option
            v-for="item in dates"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>

    </el-form-item>
    <el-form-item label="时段">
        <el-select v-model="searchCourse.time" placeholder="想上哪节课？" style="width: 240px">
            <el-option
            v-for="item in times"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
        </el-select>

    </el-form-item>

    <el-form-item label="老师姓名">
      <el-input v-model="searchCourse.empName" placeholder="想上谁的课？"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="searchCourse.conflictsFilter" label="过滤冲突" size="large" />
    </el-form-item>
    <h3>当然，你也可以用一种全新的方式来选择~（实验性功能）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-switch
      v-model="chooseSwitch"
      class="ml-2" 
      style="--el-switch-on-color: #c223d7; --el-switch-off-color: #2332d7"
      />
    </h3>
    <div v-if="chooseSwitch">
      <div class="slider-demo-block">
      <el-slider v-model="searchCourse.date"  :marks="dateMarks" 
      :min="1" :max="5"/>
      </div>
      <br><br>
      <div class="slider-demo-block2">
      <el-slider v-model="searchCourse.time"  :marks="timeMarks" 
      :min="1" :max="4"/>
      </div>
    </div>
    <br>
    

    <el-form-item>
      <el-button type="primary" @click="queryPage">查询</el-button>
      <el-button @click="clearData">清空</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="tableData" border style="width: 100%" fit>
      <el-table-column type="index" label="序号" width="55" align="center"/>
      <el-table-column prop="courseName" label="课程名" align="center" width="300px" />
      <el-table-column prop="empName" label="授课老师" align="center" width="200px"/>
      <el-table-column prop="period" label="时段" align="center" width="300px"
      :formatter="(row) => formatPeriod(row.period)"/>
      <el-table-column label="操作" align="center">
        <template #default={row}>
          <el-button type="primary" size="small" @click="handleSelection(row)">选课</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br><br>
     <!-- 分页组件Pagination -->
    <el-pagination
      v-model:current-page="pagination.currentPage"
      v-model:page-size="pagination.pageSize"
      :page-sizes="[5, 10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

  

</template>

<style scoped>
/* h3{
  color: #2332d7;
} */
</style>