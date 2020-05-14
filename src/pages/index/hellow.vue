<template>
    <div @click="goYellow('草拟吗')">{{tetText}}</div>
</template>
<script lang="ts">
    import {Component,Vue} from "vue-property-decorator"
    
    import {namespace } from "vuex-class"

    const someModule = namespace('firstPage')

    @Component({
        name: 'hello'
    })
    export default class hello extends Vue {
        @someModule.State(state => state.menu) menu: any

		@someModule.Action('testApi') testApi: any

        private tetText: string = '卧槽？';
        
        private goYellow(params:string):void{
            this.$router.push({name: 'yellow', query:{routeText:params}})
        }

        private mounted(){
            this.testApi().then(()=>{
                
            })
        }
    }
</script>