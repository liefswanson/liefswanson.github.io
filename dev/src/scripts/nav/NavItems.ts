import Section from './Section'

import Projects from '@/components/main/Projects.vue';
import Ongoing  from '@/components/main/Ongoing.vue';
import Resume   from '@/components/main/Resume.vue';
import Contact  from '@/components/main/Contact.vue';
import About    from '@/components/main/About.vue';

import Citations from '@/components/main/Citations.vue';
import Guide from '@/components/main/Guide.vue';

import Swatch from '@/style/ts/Swatch';

const Sections = [
    {
        path: "/projects",
        name: "Projects",
        color: Swatch.projects,
        component: Projects,
    },
    {
        path: "/ongoing",
        name: "Ongoing",
        color: Swatch.ongoing,
        component: Ongoing
    },
    {
        path: "/contact",
        name: "Contact",
        color: Swatch.contact,
        component: Contact
    },
    {
        path: "/resume",
        name: "Résumé",
        color: Swatch.resume,
        component: Resume
    },
    {
        path: "/about",
        name: "About",
        color: Swatch.about,
        component: About
    },

    {
        path: '/citations',
        name: 'Citations',
        color: Swatch.citations,
        component: Citations
    },
    {
        path: '/guide',
        name: 'Guide',
        color: Swatch.guide,
        component: Guide
    }
]

// NOTE: the method signature is true evil, this is better to infer it
const SectionMap = {
    ongoing: Sections.filter(
        (elem) => elem.component == Ongoing )[0],
    projects: Sections.filter(
        (elem) => elem.component == Projects)[0],
    resume:   Sections.filter(
        (elem) => elem.component == Resume  )[0],
    contact:  Sections.filter(
        (elem) => elem.component == Contact )[0],
    about:    Sections.filter(
        (elem) => elem.component == About   )[0],

    citations: Sections.filter(
        (elem) => elem.component == Citations)[0],
    guide:    Sections.filter(
        (elem) => elem.component == Guide    )[0],
}

export default Sections;

export {
    Sections,
    SectionMap
};