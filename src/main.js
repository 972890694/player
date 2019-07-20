// 导入 vue 模块
// 导入的 vue 是阉割版的 功能不全
// import Vue from "vue"
import Vue from 'vue/dist/vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 手动安装 路由
Vue.use(VueRouter)
// 导入 axios 模块
import axios from 'axios'
Vue.prototype.axios = axios

// 导入 主组件
import App from './App.vue'
// 导入 css 样式
import './assets/css/index.css'
import './assets/css/iconfont.css'
import './assets/css/comment.css'
import './assets/css/player.css'
import './assets/css/results.css'
import './assets/css/video.css'


// // 导入路由实例
import router from './router'


// 手动安装 路由
Vue.use(VueRouter)

// 创建 Vue 实例
const vm = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  },
  render: c => c(App),
  // 挂载 router
  router
})