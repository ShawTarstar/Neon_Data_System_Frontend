import request from '@/utils/request'

//分页条件查询
export const queryPageApi = (begin, end, name, page, pageSize) => 
  request.get(`/admin/clazzs?begin=${begin}&end=${end}&name=${name}&page=${page}&pageSize=${pageSize}`)

//新增班级
export const addApi = (clazz) => request.post('/admin/clazzs', clazz)

//根据ID查询班级
export const queryInfoApi = (id) => request.get(`/admin/clazzs/${id}`)

//更新班级
export const updateApi = (clazz) => request.put(`/admin/clazzs`, clazz)

//删除班级
export const deleteApi = (id) => request.delete(`/admin/clazzs/${id}`)

//查询全部班级信息
export const queryAllApi = () => request.get('/admin/clazzs/list') 
