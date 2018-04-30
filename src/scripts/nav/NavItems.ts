import Section from './Section'

import Featured from '@/components/main/Featured.vue';
import Projects from '@/components/main/Projects.vue';
import Resume from '@/components/main/Resume.vue';
import Contact from '@/components/main/Contact.vue';
import About from '@/components/main/About.vue';

const Sections = [
    {
        path: "/featured",
        name: "Featured",
        icon: "./assets/featured.min.svg",
        color: "#4bb4ff",
        component: Featured
    },
    {
        path: "/projects",
        name: "Projects",
        icon: "./assets/projects.min.svg",
        color: "#39e859",
        component: Projects      
    },
    {
        path: "/resume",
        name: "Résume",        
        icon: "./assets/resume.min.svg",
        color: "#ffec31",
        component: Resume
    },
    {
        path: "/contact",
        name: "Contact",
        icon: "./assets/contact.min.svg",
        color: "#f27827",
        component: Contact
    },
    {
        path: "/about",
        name: "About",
        icon: "./assets/about.min.svg",
        color: "#f84ce6",
        component: About
    },

]

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