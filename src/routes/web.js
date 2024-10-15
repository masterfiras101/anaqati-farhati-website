import { createRouter, createWebHistory } from 'vue-router'


import welcome from '@/views/welcome.vue';
import error_404 from '@/views/pages/error_404.vue';



import IndexContent from '@/views/pages/pagescontent/IndexContent.vue';
import DressesContent from '@/views/pages/pagescontent/DressesContent.vue';
import AccessoriesContent from '@/views/pages/pagescontent/AccessoriesContent.vue';
import BeautyCareContent from '@/views/pages/pagescontent/BeautyCareContent.vue';
import ShoesContent from '@/views/pages/pagescontent/ShoesContent.vue';

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
            path: "/#index-section",
            name: "indexcontent",
            component: IndexContent,
            meta: {
                title: "index page",
            },
        },
        {
            path: "/#dresses-section",
            name: "dresses_section",
            component: DressesContent,
            meta: {
                title: "dresses page",
            },
        },
        {
            path: "/#accessories-section",
            name: "accressories_section",
            component: AccessoriesContent,
            meta: {
                title: "accessories page",
            },
        },
        {
            path: "/#beautycare-section",
            name: "beautycare_section",
            component: BeautyCareContent,
            meta: {
                title: "beautycare page",
            },
        },
        {
            path: "/#shoes-section",
            name: "shoes_section",
            component: ShoesContent,
            meta: {
                title: "shoes page",
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