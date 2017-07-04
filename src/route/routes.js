import Login from '../modules/index/views/Login.vue'
import NotFound from '../modules/index/views/404.vue'
import Home from '../modules/index/views/Home.vue'
import Table from '../modules/index/views/nav1/Table.vue'
import Info from '../modules/index/views/nav1/Info.vue'
import Form from '../modules/index/views/nav1/Form.vue'
import User from '../modules/index/views/nav1/user.vue'
import Page4 from '../modules/index/views/nav2/Page4.vue'
import TelManage from '../modules/index/views/nav2/TelManage.vue'
import Page5 from '../modules/index/views/nav2/Page5.vue'
import Page6 from '../modules/index/views/nav3/Page6.vue'
import echarts from '../modules/index/views/charts/echarts.vue'
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

const routers = new VueRouter({
    // mode: 'history',
    routes:[
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    /*{
        path: '/',
        redirect: '/table',
        hidden: true
    },*/
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '投诉管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
        { path: '/table', component: Table, name: 'Table' },
        { path: '/info', component: Info, name: 'Info列表' },
        { path: '/form', component: Form, name: 'Form' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '后台编辑',
        iconCls: 'fa fa-id-card-o',
        children: [
        { path: '/page4', component: TelManage, name: '联系我们' },
        { path: '/page5', component: Page5, name: '公园广场' },
        { path: '/page5', component: Page4, name: '公厕' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
        { path: '/user', component: User, name: '用户管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '订阅号管理',
        iconCls: 'fa fa-bar-chart',
        children: [
        { path: '/echarts', component: echarts, name: '微矩阵管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts1',
        iconCls: 'fa fa-bar-chart',
        children: [
        { path: '/echarts', component: echarts, name: 'echarts' },
        { path: '/echarts2', component: echarts, name: 'echarts2' }
        ]
    }
    ]
})

export default routers;