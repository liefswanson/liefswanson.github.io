import Vue from 'vue';
import Router from 'vue-router';
//@ts-ignore
import Vue2TouchEvents from 'vue2-touch-events';

import { SectionsMap } from '../scripts/nav/NavItems'

import Featured from '@/components/main/Featured.vue';
import Projects from '@/components/main/Projects.vue';
import Contact from '@/components/main/Contact.vue';
import About from '@/components/main/About.vue';
import Resume from '@/components/main/Resume.vue';

import NotFound from '@/components/main/NotFound.vue'

Vue.use(Router);
Vue.use(Vue2TouchEvents);

export default new Router({
    mode: 'history',
    routes:     [ 
        {
            path: "/",
            redirect: { path: SectionsMap.featured.path }
        },
        SectionsMap.featured,
        SectionsMap.projects,
        SectionsMap.resume,
        SectionsMap.contact,
        SectionsMap.about,
        {
            path:     '*',
            name:     "not found",
            component: NotFound
        }
    ]
})
