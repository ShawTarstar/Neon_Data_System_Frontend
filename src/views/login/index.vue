<script setup>
import { ref } from 'vue'
import { LoginApi } from '@/api/login'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { StudentLoginApi } from '../../api/login'

let loginForm = ref({username:'', password:''})
let studentLoginForm = ref({no:'', password:''})
let router = useRouter()

//登录
const login = async () => {
  console.log(radio.value)
  let result;
  if(radio.value == 1){
    result = await LoginApi(loginForm.value)
    if (result.code) {// 登录成功
      ElMessage.success('登录成功')
      localStorage.setItem('loginUser', JSON.stringify(result.data))
      router.push('/admin')
    }else {
      ElMessage.error(result.msg)
    }
  }else{
    studentLoginForm.value = {
      no:loginForm.value.username, 
      password:loginForm.value.password}
    result = await StudentLoginApi(studentLoginForm.value)//这里之后要改
    if (result.code) {// 登录成功
      ElMessage.success('登录成功')
      localStorage.setItem('loginUser', JSON.stringify(result.data))
      router.push('/student')
    }else {
      ElMessage.error(result.msg)
    }
  }
}

//取消
const cancel = () => {
  loginForm.value = {
    username: '',
    password: ''
  }
}
const radio = ref('1')
</script>

<template>
  <div id="container">
    <div class="login-form">
      <el-form label-width="80px">
        <p class="title">霓虹信息管理系统</p>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="radio">
            <el-radio label="1" size="large">管理员</el-radio>
            <el-radio label="2" size="large">学生</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="login">登 录</el-button>
          <el-button class="button" type="info" @click="cancel">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
#container {
  padding: 10%;
  height: 410px;
  background-image: url('../../assets/bg2.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.login-form {
  max-width: 400px;
  padding: 30px;
  margin: 0 auto;
  border: 1px solid #252424;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(58, 53, 67);
}

.title {
  font-size: 30px;
  font-family: '钉钉进步体';
  src: url('../fonts/DingTalk JinBuTi.ttf') format('truetype');
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

.button {
  margin-top: 30px;
  width: 120px;
}
</style>