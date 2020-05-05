<template>
    <div>
        <div>{{thisPageText}}</div>
        <div>{{routeText}}</div>
    </div>
</template>
<script lang="ts">
    import {Component,Vue} from "vue-property-decorator"

    @Component({
        name: 'yellow'
    })
    export default class yellow extends Vue {
        private thisPageText: string = "我过来了";
        private get routeText(){
            return this.$route.query.routeText
        }
    }
</script>