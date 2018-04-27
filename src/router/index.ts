import Vue from 'vue';
import Router from 'vue-router';
//@ts-ignore
import Vue2TouchEvents from 'vue2-touch-events';

import routeList from '../NavItems'
import Featured from '@/components/main/Featured.vue';
import Projects from '@/components/main/Projects.vue';
import Contact from '@/components/main/Contact.vue';
import About from '@/components/main/About.vue';
import Resume from '@/components/main/Resume.vue';

import NotFound from '@/components/NotFound.vue'

Vue.use(Router);
Vue.use(Vue2TouchEvents);

export default new Router({
    mode: 'history',
    routes:     [ 
        {
            path: "/",
            redirect: { path: "Featured" }
        },
        {
            path:    "/featured",
            name:     "Featured",
            component: Featured
        },
        {
            path:    "/projects",
            name:     "Projects",
            component: Projects
        },
        {
            path:    "/contact",
            name:     "Contact",
            component: Contact
        },
        {
            path:    "/about",
            name:     "About Me",
            component: About
        },
        {
            path:    "/resume",
            name:     "Résume",        
            component: Resume
        },
        {
            path:     '*',
            name:     "not found",
            component: NotFound
        }
    ]
})
