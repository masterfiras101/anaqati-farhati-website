import { createRouter, createWebHistory } from 'vue-router'


import welcome from '@/views/welcome.vue';
import error_404 from '@/views/pages/error_404.vue';
const routes =
[
        {
            path: "/",
            name: "index",
            component: welcome,
            meta: {
                title: "index page",
            },
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error404',
            component: error_404,
        },
      
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     return savedPosition || { left: 0, top: 0 }
    // }
     scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            };
        }
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    document.title = `أناقة فرحتي ${to.meta.title} | waw `
    next()
});

export default router