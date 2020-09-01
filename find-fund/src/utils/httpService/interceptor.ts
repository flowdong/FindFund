import axios, { AxiosRequestConfig } from 'axios'
import Constant from '../constant'

const service = axios.create({
    timeout: 5000,
    timeoutErrorMessage: 'time out',
    //baseURL: Constant.IS_DEBUG ? Constant.HTTP_URL_DEBUG : Constant.HTTP_URL_PROD
})

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        // 请求发送前进行处理
        config = complementUrl(config)
        return config
    }, (error) => {
        // 请求错误处理
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        // console.log('请求接受进行处理' + JSON.stringify(value))
        const status = response.status
        let msg = ''
        if (status < 200 || status >= 300) {
            // 处理http错误，抛到业务代码
            msg = showStatus(status)
            if (typeof response.data === 'string') {
                response.data = {msg}
            } else {
                response.data.msg = msg
            }
        }
        return response
    },
    (error) => {
        //  console.error('请求响应错误处理', error)
        error.data = {}
        error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
        return Promise.reject(error)
    }
)

function complementUrl(config: AxiosRequestConfig) {
    let baseUrl = config.url

    baseUrl = Constant.IS_DEBUG ? '/api/' + baseUrl : baseUrl
    /*  if (!baseUrl.startsWith('http')) {
        let serverUrl = Constant.IS_DEBUG ? Constant.HTTP_URL_DEBUG : Constant.HTTP_URL_PROD
        serverUrl = serverUrl.endsWith('/') ? serverUrl : serverUrl.concat('/')
        serverUrl = serverUrl.startsWith('http') ? serverUrl : 'http://'.concat(serverUrl)
        baseUrl = baseUrl.startsWith('/') ? baseUrl.substr(1, baseUrl.length - 1) : baseUrl
        baseUrl = serverUrl.concat(baseUrl)
      } */
    config.url = baseUrl
    return config
}

// 根据不同的状态码，生成不同的提示信息
const showStatus = (status: number) => {
    let message = ''
    // 这一坨代码可以使用策略模式进行优化
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

export default function () {
    return service
}
