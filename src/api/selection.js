import request from '@/utils/request'

//分页查询
export const queryPageApi=
    (id,date,time,empName,conflictsFilter,page,pageSize)=>
        request.get(`/student/selection?id=${id}&date=${date}
            &time=${time}&empName=${empName}
            &conflictsFilter=${conflictsFilter}
            &page=${page}&pageSize=${pageSize}`)
