import Vue from 'vue'
import Vuex from 'vuex'
import firstPage from './module/firstPage'
import second from './module/second'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        test: '1111'
    },
    modules: {
        firstPage,
        second
    }
})