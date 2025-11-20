import request from '@/utils/request'

//分页条件查询
export const queryPageApi = (page, pageSize) => request.get(`/admin/log/page?page=${page}&pageSize=${pageSize}`)

export const studentQueryPageApi = (id, page, pageSize) => request.get(`/student/log/page?id=${id}&page=${page}&pageSize=${pageSize}`)
