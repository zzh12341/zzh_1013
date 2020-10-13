import Vue from 'vue'
import Vuex from 'vuex'

const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)
const store = new Vuex.Store({
  modules : {
    ...modules,
  }
})
window.localStorage.setItem('stateInit',JSON.stringify(store.state))
export default store;