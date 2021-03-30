import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (err) => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (err) => {
  // 对响应错误做点什么
  Message({
    showClose: true,
    message: err,
    type: 'error',
    duration: 1500
  })
  return Promise.reject(err)
})

export default {
  // 封装axios
  axios,
  // 封装get
  requestGet(url, params = {}) {
    return axios.get(url, { params }).then(res => res.data).catch(err => { return Promise.reject(err) })
  },
  // 封装post
  requestPost(url, params = {}) {
    return axios.post(url, params).then(res => res.data).catch(err => { return Promise.reject(err) })
  }
}
