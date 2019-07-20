import VueRouter from 'vue-router'

// 导入组件
import comment from './components/comment.vue'
import player from './components/player.vue'
import result from './components/results.vue'
import mv from './components/viedo.vue'

const router = new VueRouter({
    routes: [
        { path: '/comment', component: comment },
        { path: '/player/:id/:songName', component: player },
        { path: '/result/:name', component: result },
        { path: '/mv/:id', component: mv }
    ]
})

export default router