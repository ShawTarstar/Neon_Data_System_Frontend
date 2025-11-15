import request from '@/utils/request'

//查询全部部门
export const queryAllApi = () => request.get('/admin/depts')

//添加部门
export const addDeptApi = (data) => request.post('/admin/depts', data)

//根据ID查询
export const queryInfoApi = (id) => request.get(`/admin/depts/${id}`)

//修改部门
export const updateDeptApi = (data) => request.put('/admin/depts', data)

//删除部门
export const deleteDeptApi = (id) => request.delete(`/admin/depts?id=${id}`)