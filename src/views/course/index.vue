<script setup>
import { ref, onMounted } from "vue";
import { querySchdApi } from "../../api/course";
// 初始化课表数据（4 行 × 5 列）
const tableData = ref([
  { section: "第 1 节", mon: "", tue: "", wed: "", thu: "", fri: "" },
  { section: "第 2 节", mon: "", tue: "", wed: "", thu: "", fri: "" },
  { section: "第 3 节", mon: "", tue: "", wed: "", thu: "", fri: "" },
  { section: "第 4 节", mon: "", tue: "", wed: "", thu: "", fri: "" },
]);
// const backendData = [
//   { courseName: "C001", period: 3 },   // 周一第三节
//   { courseName: "C002", period: 5 },   // 周二第一节
//   { courseName: "C003", period: 12 },  // 周三第四节
//   { courseName: "C004", period: 17 },  // 周五第一节
// ];
const getSchd=async()=>{ 
  const loginUser = localStorage.getItem('loginUser')
  const id = JSON.parse(loginUser).id
  const result = await querySchdApi(id)
  if(result.code){
    fillTable(result.data);
  }
  console.log(result)
}
function fillTable(data) {
  data.forEach(item => {
    const t = item.period;

    const dayIndex = Math.floor((t - 1) / 4); // 0~4（周一~周五）
    const secIndex = (t - 1) % 4;             // 0~3（第1~4节）

    const dayMap = ["mon", "tue", "wed", "thu", "fri"];

    tableData.value[secIndex][dayMap[dayIndex]] = item.courseName;
  });
}

onMounted(() => {
  getSchd()
  
});
</script>
<template>
    <el-table
    class="course-table"
    :data="tableData"
    border
    style="width: 850px"
    >
    <el-table-column prop="section" label="节次" width="80"></el-table-column>

    <el-table-column prop="mon" label="周一" width="150"></el-table-column>
    <el-table-column prop="tue" label="周二" width="150"></el-table-column>
    <el-table-column prop="wed" label="周三" width="150"></el-table-column>
    <el-table-column prop="thu" label="周四" width="150"></el-table-column>
    <el-table-column prop="fri" label="周五" width="150"></el-table-column>
  </el-table>
</template>
<style scoped>
.el-table{
    margin: 40px auto;
}
.course-table :deep(.el-table__cell) {
  padding: 20px 0; 
  font-size: 18px;  
  text-align: center;
}
</style>