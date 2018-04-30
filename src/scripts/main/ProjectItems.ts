import Sample from '@/components/projects/Sample.vue'
import Another from '@/components/projects/Another.vue'

const Projects = [
    {
        path: "sample",
        name: "Sample",
        description: "this is a sample project",
        thumb: "",
        component: Sample
    },
    {
        path: "another",
        name: "Another",
        description: "YAP: yet another project",
        thumb: "",
        component: Another
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