import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/httpService/index'
import ElementUI from 'element-ui'
import './plugins/element.js'
import './assets/css/main.scss'
import '../mock/index'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(http)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

/**
 * 抛出全局异常
 * @param err
 * @param vm
 * @param info
 */
Vue.config.errorHandler = (err, vm, info) => {
    console.error('抛出全局异常')
    console.error(vm)
    console.error(err)
    console.error(info)
}

/**
 * 路由前处理
 */
router.beforeEach((to, from, next) => {
    // console.log('主beforeEach', to, from, next)
    next()
})
router.beforeResolve((to, from, next) => {
    // console.log('主beforeResolve', to, from, next)
    next()
})
router.afterEach((to, from) => {
    // console.log('主afterEach', to, from)
})

//主题选择
export function switchTheme(theme: string) {
  console.log(  document.querySelectorAll('style'))
  document.querySelectorAll('style')
    import (`./assets/css/${theme}.scss`).then((e) => {
    })
}

