import NotFound from '../modules/index/views/404.vue'
import UploadInfo from '../modules/phone/phone/UploadInfo.vue'
import Grid from '../modules/phone/phone/Grid.vue'
import Timeline from '../modules/phone/phone/timeline.vue'
import Map from '../modules/phone/phone/map.vue'
import List from '../modules/phone/phone/list.vue'
import Element from '../modules/phone/phone/element.vue'
import Telephone from '../modules/phone/phone/telephone.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    // mode: 'history',
    routes:[
    {
        path: '/',
        redirect: '/grid'
    },
    {
        path: '/grid',
        component: Grid,
        name: 'Grid',
        // hidden: true
    },
    {
        path: '/grid/uploadInfo',
        component: UploadInfo,
        name: '上传',
        // hidden: true
    },
    {
        path: '/grid/timeline',
        component: Timeline,
        name: '时间轴',
        // hidden: true
    },
    {
        path: '/grid/telephone',
        component: Telephone,
        name: '联系电话',
        // hidden: true
    },
    {
        path: '/grid/map',
        component: Map,
        name: '地图',
        // hidden: true
    },
    {
        path: '/grid/list',
        component: List,
        name: 'list',
        hidden: true
    },
    {
        path: '/grid/element',
        component: Element,
        name: 'element',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    }/*,
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }*/
]
});

export default router;