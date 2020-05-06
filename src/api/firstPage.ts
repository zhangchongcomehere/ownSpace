import httpAxios from "../axios/http"

export function testApi(code:string){
    return httpAxios({
        url:'/parameter/query',
        method:'get',
        params:{
            code
        }
    })
}