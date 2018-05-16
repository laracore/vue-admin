// 引入依赖
import Vue from 'vue'
import JsonVue from '../packages/json-vue/src/index.js'
import ContainerVueIview from '../packages/container-vue-iview/src/index.js'
import JsonVueIview from '../packages/json-vue-iview/src/index.js'

Vue.use(ContainerVueIview)
Vue.use(JsonVueIview)

JsonVue.start()
