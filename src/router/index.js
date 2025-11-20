import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index/index.vue';
import Clazz from '@/views/clazz/index.vue';
import Stu from '@/views/stu/index.vue';
import Dept from '@/views/dept/index.vue';
import Emp from '@/views/emp/index.vue';
import EmpReport from '@/views/report/emp/index.vue';
import StuReport from '@/views/report/stu/index.vue';
import Log from '@/views/log/index.vue';
import Login from '@/views/login/index.vue';
import Layout from '@/views/layout/index.vue';
import StudentLayout from '@/views-student/layout/index.vue';
import Course from '@/views/course/index.vue';

import StudentIndex from '@/views-student/index/index.vue';
import StudentCourse from '@/views-student/course/index.vue';
import StudentSelection from '@/views-student/selection/index.vue';
import StudentWithdraw from '@/views-student/withdraw/index.vue';
import StudentLog from '@/views-student/log/index.vue';


import { ElMessage } from 'element-plus';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/admin', 
    component: Layout,
    redirect: '/admin/index',
    children: [
      { path: '/admin/index', component: Index },
      { path: '/admin/clazz', component: Clazz },
      { path: '/admin/stu', component: Stu },
      { path: '/admin/dept', component: Dept },
      { path: '/admin/emp', component: Emp },
      { path: '/admin/report/emp', component: EmpReport },
      { path: '/admin/report/stu', component: StuReport },
      { path: '/admin/log', component: Log },
      { path: '/admin/course', component: Course }
    ]
  },
  { path: '/student', 
    component: StudentLayout,
    redirect: '/student/index',
    children: [
      { path: '/student/index', component: StudentIndex },
      { path: '/student/course', component: StudentCourse },
      { path: '/student/selection', component: StudentSelection },
      { path: '/student/withdraw', component: StudentWithdraw },
      { path: '/student/log', component: StudentLog }
    ]
  },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const loginUser = localStorage.getItem('loginUser')  // 获取登录token
  const token = loginUser ? JSON.parse(loginUser).token : null
  const type = loginUser ? JSON.parse(loginUser).type : null
  // console.log(to);
  console.log('type=:',type);
  
  if ((to.path.startsWith('/admin') || to.path.startsWith('/student'))&& !token) {
    // 如果要去的页面需要登录但没登录
    console.log('未登录')
    alert('未登录')
    next('/login')
  } else if (to.path === '/login' && token) {
    // 已登录用户禁止再访问登录页
    ElMessage.info('您已登录')
    if(type==1) {next('/admin')}
    else {next('/student')}
  }else if(to.path.startsWith('/admin')){
    //如果想要直接通过网址访问，需要校验type
    if(type!=1) {
      alert('您没有权限访问此页面')
      next('/student')
    }else next()
  }
  else if(to.path.startsWith('/student')){
    //如果想要直接通过网址访问，需要校验type
    if(type!=2) {
      alert('您没有权限访问此页面')
      next('/admin')
    }else next()
  }
  else {
    next() // 放行
  }
})

export default router;