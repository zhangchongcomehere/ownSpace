import httpAxios from "../axios/http"

export function testApi(){
    return httpAxios({
        url:'/posts',
        method:'get',
        params:{}
    })
}