// TODO: vue2-touch-events doesn't provide types
// send pull request with some once I figure it out
import VueTouch from 'vue-touch';
import Router       from 'vue-router';
import Vue          from 'vue';

import { SectionMap }  from '@/scripts/nav/NavItems';
import ProjectList     from '@/scripts/main/ProjectItems';

import NotFound        from '@/components/main/NotFound.vue';

Vue.use(Router);
Vue.use(VueTouch);

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
    children: ProjectList, // adds sub-routes
};

export default new Router({
    routes:     [
        landing,
        projects,
        SectionMap.ongoing,
        SectionMap.resume,
        SectionMap.contact,
        SectionMap.about,
        notFound
    ]
})
