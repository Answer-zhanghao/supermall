import axios from "axios";
export function request(config){
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000/api/hy',
        // baseURL:'http://106.54.54.237:8000/api/hy',
        timeout:5000
    })
    //拦截请求
    instance.interceptors.request.use(config=>{
        // console.log(config)
        return config
    },err=>{
        console.log(err)
    })

    //拦截响应
    instance.interceptors.response.use(results=>{
        // console.log(results)
        return results.data
    },err=>{
        console.log(err)

    })
    // instance(config).then(res=>{success(res)}).catch(err=> {failure(err)})
    return new Promise((resolve,reject)=>{
        instance(config).then(res=>resolve(res)).catch(err=>reject(err))
    })
}