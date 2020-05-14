// import {testApi} from "@/api/firstPage"
import { Commit} from 'vuex'

abstract class typeModal {
    constructor(public name:number){

    }
    setStr<i>(res:i):i{
        return res
    }
    abstract setUrl(): void
}

class suns extends typeModal {
    constructor(){
        super(1)
    }
    setStr<i>(res:i):i{
        return res
    }
    setUrl(){
        console.log(this.name)
    }
}

let i = new suns();

i.setUrk();


const state : any = {
    menu: {
        on:2
    }
}

const mutations : any = {
    setFirst(states: any,result:object){
        states.menu = result
    }
}

const actions : any = {
    async testApi(content: {commit: Commit}){
        content.commit('setFirst',{on:1})
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}