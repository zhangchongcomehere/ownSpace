<template>
    <div @click="goYellow('草拟吗')">{{tetText}}</div>
</template>
<script lang="ts">
    import {Component,Vue} from "vue-property-decorator";

    @Component({
        name: 'hello'
    })
    export default class hello extends Vue {
        private tetText: string = '卧槽？';
        
        private goYellow(params:string):void{
            this.$router.push({name: 'yellow', query:{routeText:params}})
        }
    }
</script>