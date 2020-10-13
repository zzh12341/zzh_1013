import { myList, addMyList, dropList, searchOne, deleteList, updateList, exportData } from '../../lib/api'
import { Notification } from 'element-ui'
import router from '../../router/index'
import axios from 'axios'
const state = {
    searchFrom: {
        userId: '',
        pagingDto: {
            pageNo: 1,
            pageSize: 10,
            pageTotal: 0,
        }
    },
    retsearchFrom: {
        userId: '',
        pagingDto: {
            pageNo: 1,
            pageSize: 10,
            pageTotal: 0,
        }},
    form: {
        id: '',
        code: '',
        name: '',
        password: '',
        photoUrl: '',
    },
    myListData: [], //列表数据
    dropData: {},   //下拉列表
}

const actions = {
    async myListA({ commit, state }) {
        let res = await myList(state.searchFrom)
        if (res.flag) {
            commit('myListM', res)
        }
    },
    async addMyListA({ state, dispatch}) {
        let res = await addMyList(state.form)
        if (res.flag) {
            Notification({ title: '成功', message: res.msg, type: 'success' })
            dispatch('myListA')
            router.push({ path: '/' })
        } else {
            Notification({ title: '失败', message: res.msg, type: 'error' })
        }
    },
    async dropListA({ commit }) {
        let res = await dropList()
        commit('dropListM', res)
    },
    async searchOneA({ commit, state }) {
        let res = await searchOne(state.searchFrom.userId)
        commit('searchOneM', res)
    },
    async deleteListA({ dispatch }, params) {
        let res = await deleteList(params)
        if (res.flag) {
            Notification({ title: '成功', message: res.msg, type: 'success' })
            dispatch('myListA')
        } else {
            Notification({ title: '失败', message: res.msg, type: 'error' })
        }
    },
    async updateListA({ state,dispatch}) {
        let res = await updateList(state.form)
        if (res.flag) {
            Notification({ title: '成功', message: res.msg, type: 'success' })
            dispatch('myListA')
            router.push({ path: '/' })
        } else {
            Notification({ title: '失败', message: res.msg, type: 'error' })
        }
    },
    // async exportDataA({ state }) {
    //     const obj = JSON.parse(JSON.stringify(state.searchFrom))
    //     delete obj.pagingDto
    //     // let res = await exportData(obj)
    //     axios.post(`http://localhost:8769/demo//user/excel/export`, obj)
    //     .then(res=>{
    //         const blob = new Blob([res.data])
    //         const downloadElement = document.createElement('a');
    //         const href = window.URL.createObjectURL(blob); //创建下载的链接
    //         downloadElement.href = href;
    //         downloadElement.download = `文档.xlsx`; //下载后文件名
    //         document.body.appendChild(downloadElement);
    //         downloadElement.click(); //点击下载
    //         document.body.removeChild(downloadElement); //下载完成移除元素
    //         window.URL.revokeObjectURL(href); //释放掉blob对象
    //     })
        
       

    // },

    async exportDataA({ state }) {
        const obj = JSON.parse(JSON.stringify(state.searchFrom))
        delete obj.pagingDto
        // let res = await exportData(obj)
        axios.post(`http://localhost:8769/demo//user/excel/export`, obj)
        .then(res=>{
            const blob = new Blob([res.data])
            const downloadElement = document.createElement('a');
            const href = window.URL.createObjectURL(blob); //创建下载的链接
            downloadElement.href = href;
            downloadElement.download = `文档.xlsx`; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放掉blob对象
        })
        
       

    },
}

const mutations = {
    myListM(state, data) {
        state.myListData = data.rows
        state.searchFrom.pagingDto.pageTotal = data.total
    },
    dropListM(state, data) {
        state.dropData = data.obj
    },
    searchOneM(state, data) {
        state.myListData = data.rows
        state.searchFrom.pagingDto.pageTotal = data.total
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}