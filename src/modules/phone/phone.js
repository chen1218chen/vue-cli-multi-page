// import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import Grid from './phone/Grid.vue'
import App from './Phone.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router'
import store from '../../vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import router from '../../route/routesPhone'
import Mock from '../../mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
// Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

/*const router = new VueRouter({
  routesPhone
})*/

//routerP.afterEach(transition => {
//NProgress.done();
//});

const app1 = new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#phone')

