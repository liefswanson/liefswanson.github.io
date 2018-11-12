import Section from './Section'

import Featured from '@/components/main/Status.vue';
import Projects from '@/components/main/Projects.vue';
import Resume   from '@/components/main/Resume.vue';
import Contact  from '@/components/main/Contact.vue';
import About    from '@/components/main/About.vue';

import Swatch from '@/style/ts/Swatch';

const Sections = [
    {
        path: "/projects",
        name: "Projects",
        color: Swatch.projects,
        component: Projects
    },
    {
        path: "/resume",
        name: "Résumé",
        color: Swatch.resume,
        component: Resume
    },
    {
        path: "/contact",
        name: "Contact",
        color: Swatch.contact,
        component: Contact
    },
    {
        path: "/status",
        name: "Status",
        color: Swatch.status,
        component: Featured
    },
    {
        path: "/about",
        name: "About",
        color: Swatch.about,
        component: About
    },

]

// NOTE: the method signature is true evil, this is better for everyone
const SectionMap = {
    featured: Sections.filter(
        (elem) => elem.component == Featured )[0],
    projects: Sections.filter(
        (elem) => elem.component == Projects )[0],
    resume:   Sections.filter(
        (elem) => elem.component == Resume   )[0],
    contact:  Sections.filter(
        (elem) => elem.component == Contact  )[0],
    about:    Sections.filter(
        (elem) => elem.component == About    )[0],
}

export default Sections;

export {
    Sections,
    SectionMap
};