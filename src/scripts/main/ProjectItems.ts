import Sample  from '@/components/projects/Sample.vue'
import Another from '@/components/projects/Another.vue'

const Projects = [
    {
        path: "sample",
        name: "Sample",
        component: Sample,

        title: "A Sample!",
        blurb: "this is a sample project",
        thumb: "",
    },
    {
        path: "another",
        name: "Another",
        component: Another,

        title: "Y.A.P.",
        blurb: "YAP: yet another project",
        thumb: "",
    }
];

const ProjectMap = {
    sample:  Projects.filter(
        (elem) => elem.component == Sample  )[0],
    another: Projects.filter(
        (elem) => elem.component == Another )[0]
}

export default Projects;

export {
    Projects,
    ProjectMap
}