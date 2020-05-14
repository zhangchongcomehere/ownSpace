import { Commit} from 'vuex'

const state : any = {
    menu: {
        haha:2
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