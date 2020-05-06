import {testApi} from "@/api/firstPage"
const firstPage = {
    state: {
        data:''
    },
    mutations: {
        setFirst(state, res: any){
            console.log(res);
            state.data = res;
        }
    },
    actions:{
        async testApi({commit}){
            let result = await testApi();
            commit("setFirst",result)
        }
    }
}
export default firstPage