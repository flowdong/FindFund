import * as http from './http'

const install = function (Vue: any) {
    // @ts-ignore
    if (install.installed) return
    // @ts-ignore
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $http: {
            get () {
                return http
            }
        }
    })
}

export default {
    install
}
