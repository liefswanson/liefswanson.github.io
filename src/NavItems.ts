import Route from './Route';


import Featured from '@/components/main/Featured.vue';
import Projects from '@/components/main/Projects.vue';
import Contact from '@/components/main/Contact.vue';
import About from '@/components/main/About.vue';
import Resume from '@/components/main/Resume.vue';

export const routeList: Route[] = [
    {
        path: "/featured",
        name: "Featured",
        icon: "./assets/featured.min.svg",
    },
    {
        path: "/projects",
        name: "Projects",
        icon: "./assets/projects.min.svg",
    },
    {
        path: "/contact",
        name: "Contact",
        icon: "./assets/contact.min.svg",
    },
    {
        path: "/about",
        name: "About Me",
        icon: "./assets/about.min.svg",
    },
    {
        path: "/resume",
        name: "Résume",        
        icon: "./assets/resume.min.svg",
    },
]

export default routeList;