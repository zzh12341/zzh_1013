import http from './http'

export const myList = (data) => http(`user/list`, data, 'POST',); // 列表
export const addMyList = (data) => http(`user/save_json`, data, 'POST',); // 新增
export const dropList = (data) => http(`/user/drop`, data, 'GET',); // 下拉
export const searchOne = (data) => http(`/user/path/${data}`, data, 'GET',); // 查询一个
export const exportData = (data) => http(`/user/excel/export`, data, 'POST',); // 导出
export const deleteList = (data) => http(`/user/delete/${data}`, data, 'DELETE',); // 删除
export const updateList = (data) => http(`/user/update`, data, 'PUT',); // 编辑



