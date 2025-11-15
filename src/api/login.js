import request from '@/utils/request'

//登录
export const LoginApi = (data) => request.post('/admin/login', data)
export const StudentLoginApi = (data) => request.post('/student/login', data)