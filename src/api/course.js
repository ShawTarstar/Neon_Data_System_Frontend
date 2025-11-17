import request from '@/utils/request'

export const querySchdApi=(id)=>request.get(`/admin/schd?id=${id}`)

export const queryStudentSchdApi=(id)=>request.get(`/student/schd?id=${id}`)