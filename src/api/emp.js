import request from '@/utils/request'

//查询员工列表
export const queryPageApi = (name,gender,begin,end,page,pageSize) => request.get(`/admin/emps?name=${name}&gender=${gender}&begin=${begin}&end=${end}&page=${page}&pageSize=${pageSize}`)

//添加员工
export const addEmpApi = (data) => request.post('/admin/emps', data)

//根据ID查询员工信息
export const queryInfoApi = (id) => request.get(`/admin/emps/${id}`)

//修改员工信息
export const updateEmpApi = (data) => request.put('/admin/emps', data)

//删除员工
export const deleteEmpApi = (ids) => request.delete(`/admin/emps?ids=${ids}`)

//查询所有员工
export const queryAllApi = () => request.get(`/admin/emps/list`)
