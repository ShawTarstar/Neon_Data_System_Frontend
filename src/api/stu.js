import request from '@/utils/request'

//分页条件查询
export const queryPageApi = (clazzId, degree, name, page, pageSize) => 
  request.get(`/admin/students?clazzId=${clazzId}&degree=${degree}&name=${name}&page=${page}&pageSize=${pageSize}`)

//新增学生
export const addApi = (stu) => request.post('/admin/students', stu)

//根据ID查询学生
export const queryInfoApi = (id) => request.get(`/admin/students/${id}`)

//修改学生
export const updateApi = (stu) => request.put(`/admin/students`, stu)

//删除学生
export const deleteApi = (ids) => request.delete(`/admin/students/${ids}`)

//违纪处理
export const handleViolationApi = (id, score) => request.put(`/admin/students/violation/${id}/${score}`) 
