import Vue from 'vue';
import Router from 'vue-router';
//@ts-ignore
import Vue2TouchEvents from 'vue2-touch-events';

import { SectionsMap } from '../scripts/nav/NavItems'

import Another from '../components/projects/Another.vue'
import Sample from '../components/projects/Sample.vue'


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
        {
            path: SectionsMap.projects.path,
            name: SectionsMap.projects.name,
            component: SectionsMap.projects.component,
            children: [
                {
                    path: 'another',
                    name: 'Another',
                    component: Another
                },
                {
                    path: "sample",
                    name: 'Sample',
                    component: Sample
                }
            ]
        },
        SectionsMap.featured,
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
