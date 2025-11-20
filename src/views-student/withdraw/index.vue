<script setup>
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import { querySelectedPageApi,withdrawApi } from "../../api/selection";
const formatPeriod = (p) => {
  if (!p || p < 1 || p > 20) return '未知时段'

  const dayIndex = Math.floor((p - 1) / 4) + 1   // 1-5
  const classIndex = ((p - 1) % 4) + 1          // 1-4

  const dayMap = ['周一', '周二', '周三', '周四', '周五']

  return `${dayMap[dayIndex - 1]} 第${classIndex}节`
}
const tableData=ref([])
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

onMounted(()=>{ 
  queryPage()
})
const queryPage=async()=>{ 
    const loginUser = localStorage.getItem('loginUser')
    const id = JSON.parse(loginUser).id
    const result=await querySelectedPageApi(
        id,
        pagination.value.currentPage,
        pagination.value.pageSize
    )
    if(result.code){
      tableData.value=result.data.rows
      pagination.value.total = result.data.total
    }
}
const withdraw=async(row)=>{ 
    const loginUser = localStorage.getItem('loginUser')
    const id = JSON.parse(loginUser).id
    const result=await withdrawApi(row.id,id)
     if(result.code){
        ElMessage.success('选课成功')
        queryPage()
    }else{
        ElMessage.error(result.msg)

    }
    queryPage()
}
</script>

<template>
    <h1>我的退选</h1>
    <br>
    <el-table :data="tableData" border style="width: 100%" fit>
      <el-table-column type="index" label="序号" width="55" align="center"/>
      <el-table-column prop="courseName" label="课程名" align="center" width="300px" />
      <el-table-column prop="empName" label="授课老师" align="center" width="200px"/>
      <el-table-column prop="period" label="时段" align="center" width="300px"
      :formatter="(row) => formatPeriod(row.period)"/>
      <el-table-column label="操作" align="center">
        <template #default={row}>
          <el-button type="primary" size="small" @click="withdraw(row)">退选</el-button>
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

</style>