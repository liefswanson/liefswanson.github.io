import Sample  from '@/components/projects/Sample.vue'
import Another from '@/components/projects/Another.vue'
import Tag from '@/scripts/main/Tag';

import code   = Tag.code;
import design = Tag.design;
import misc   = Tag.misc


const Projects = [
    {
        path: "sample",
        name: "Sample",
        component: Sample,

        title: "A Sample!",
        blurb: "this is a sample project",
        thumb: "https://picsum.photos/200/350/?=random",
        tags: [code]
    },
    {
        path: "another",
        name: "Another",
        component: Another,

        title: "Y.A.P.",
        blurb: "YAP: yet another project",
        thumb: "https://picsum.photos/150/250/?=random",
        tags: [design]
    },
    {
        path: "this",
        name: "This",
        component: Another,

        title: "this",
        blurb: "YAP: yet another project wow lots of text oooh wow such long wow text more text yep, more text derp derp derp... another project wow lots of text oooh wow such long wow text.",
        thumb: "https://picsum.photos/500/250/?=random",
        tags: [misc]
    },
    {
        path: "that",
        name: "That",
        component: Another,

        title: "that",
        blurb: "YAP: yet another project",
        thumb: "https://picsum.photos/250/?=random",
        tags: [code, design]
    },
    {
        path: "a",
        name: "A",
        component: Another,

        title: "A",
        blurb: "Fugiat aliquip elit esse laboris cillum ad laboris velit laborum ullamco veniam amet ullamco. Irure qui reprehenderit deserunt fugiat veniam exercitation fugiat sint exercitation proident eu. Non qui excepteur sint anim culpa. Esse sunt voluptate veniam dolor ea veniam pariatur pariatur in dolore ex. Non ea labore enim id incididunt. Fugiat fugiat cupidatat sint occaecat proident. Nisi id aliqua fugiat in deserunt cupidatat duis. Dolore quis est tempor esse ullamco culpa minim culpa minim cillum minim excepteur. Occaecat tempor voluptate voluptate ad labore veniam fugiat et cupidatat reprehenderit reprehenderit. Eiusmod nostrud ex incididunt elit id consequat consectetur mollit officia. Quis ipsum adipisicing ea ut pariatur qui quis sit excepteur. Cupidatat sunt occaecat proident esse. Et eiusmod exercitation laboris ullamco est.",
        thumb: "https://picsum.photos/200/450/?=random",
        tags: [design, misc]
    },
    {
        path: "b",
        name: "B",
        component: Another,

        title: "B",
        blurb: "Ut laborum sit labore enim in sunt aute. Cillum mollit commodo in ea veniam non officia. Est ullamco officia irure occaecat officia veniam sit aute do nostrud. Lorem tempor quis Lorem magna sit veniam eu eu elit cupidatat. Pariatur est nostrud reprehenderit labore reprehenderit velit labore sit minim dolor id laboris. Et aliquip cillum sint eiusmod consequat minim.",
        thumb: "https://picsum.photos/350/?=random",
        tags: [code, design, misc]
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