import axios from '@/utils/axios'
// demo1
export function demo1(params) {
  return axios.requestGet(`h5server/rest/v1/agent/home`, params)
}
// demo2
export function demo2(params) {
  return axios.requestPost(`h5server/rest/v1/agent/score`, params)
}
