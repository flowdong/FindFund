import intercepotor from './interceptor'
import {Loading} from 'element-ui'
import store from '../../store/index'

const http = intercepotor()

async function mGet(url: string, param: any, isShowLoading = true) {
    return new Promise((resolve, reject) => {
        initParams(param, isShowLoading).then((paramMap) => {
            http.get(url, {params:paramMap}).then(data => {
                resolve(data)
            }).catch(data => {
                reject(data)
            })
        })
    })
}

async function Get(url: string, param: any) {
    return new Promise((resolve, reject) => {
            http.get(url, {params:param}).then(data => {
                resolve(data.data)
            }).catch(data => {
                reject(data)
            })
    })
}
async function mPost(url: string, param: any, isShowLoading: boolean | undefined) {
    return new Promise((resolve, reject) => {
        initParams(param, isShowLoading).then((paramMap) => {
            http.post(url, paramMap).then(data => {
                resolve(data)
            }).catch(data => {
                reject(data)
            })
        })
    })
}

async function Post(url: string, param: any) {
    return new Promise((resolve, reject) => {
            http.post(url, param).then(data => {
                resolve(data)
            }).catch(data => {
                reject(data)
            })

    })
}

async function initParams(params: any, isShowLoading = true) {
    const paramsMap = JSON.parse(JSON.stringify(params))
    // console.log('initParams http')
    if (isShowLoading) {
        showLoading()
    }
    paramsMap.token = store.state.token
    for (const key in paramsMap) {
        const value = paramsMap[key]
        if (value instanceof Date) {
            console.log('日期格式处理')
        }
        paramsMap[key] = value
    }
    console.log('paramsMap', paramsMap)
    return paramsMap
}

const showLoading = () => {
    const load = Loading.service({
        lock: true,
        text: 'loading...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    setTimeout(() => {
        load.close()
    }, 3000)
}

export {mGet, mPost,Post,Get}

