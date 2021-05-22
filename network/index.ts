import axios, { AxiosRequestConfig } from 'axios'

//作请求使用此函数，返回Promise
export function net(config: AxiosRequestConfig) {
  const http = axios.create({
    //axios全局配置，bashURL设置代理
    baseURL: 'https://netease-cloud-music-api-khaki-nine.vercel.app/',
    // baseURL: 'http://59.68.29.108:19905/api/1.0/',
    timeout: 30000
  });
  return http(config);
}

export async function request(config: AxiosRequestConfig) {
  const rawData = await net(config);
  if (rawData.data.code === 200) {
    return rawData.data;
  }
  else {
    return Promise.reject(rawData.data.code);
  }
}