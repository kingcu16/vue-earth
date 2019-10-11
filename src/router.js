import Vue from 'vue'
import VueRouter from 'vue-router'
import CesiumViewer from './components/CesiumViewer'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: { path: '/cesiumViewer' }
        },
        {
            path: '/cesiumViewer',
            name: 'cesium-viewer',
            component: CesiumViewer
        }
    ]
})

export default router;
