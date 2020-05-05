export default [
    {
        path:"/",
        name:'hello',
        component: () => import('@index/hellow.vue')
    },
    {
        path:"/yellow",
        name:'yellow',
        component: () => import('@index/yellow.vue')
    }
]