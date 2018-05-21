// TODO: vue2-touch-events doesn't provide types
// send pull request with some once I figure it out
// @ts-ignore
import Vue2TouchEvents from 'vue2-touch-events';
//@ts-ignore
import imagesLoaded    from 'vue-images-loaded';
import Router          from 'vue-router';
import Vue             from 'vue';


import { SectionMap }  from '@/scripts/nav/NavItems';
import ProjectList     from '@/scripts/main/ProjectItems';

import NotFound        from '@/components/main/NotFound.vue';

Vue.use(Router);
Vue.use(Vue2TouchEvents);

const landing = {
    path: "/",
    redirect: { path: SectionMap.projects.path }
};

const notFound = {
    path:     '*',
    name:     "not found",
    component: NotFound
};

const projects = {
    path: SectionMap.projects.path,
    name: SectionMap.projects.name,
    component: SectionMap.projects.component,
    children: ProjectList // adds sub-routes
};

export default new Router({
    routes:     [
        landing,
        projects,
        SectionMap.featured,
        SectionMap.resume,
        SectionMap.contact,
        SectionMap.about,
        notFound
    ]
})
