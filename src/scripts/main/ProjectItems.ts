import Sample  from '@/components/projects/Sample.vue';
import Another from '@/components/projects/Another.vue';

import OptimizingKeyboards   from '@/components/projects/OptimizingKeyboards.vue';
import WritingACompiler      from '@/components/projects/WritingACompiler.vue';
import TeachersAssistant     from '@/components/projects/TeachersAssistant.vue';
import Photography2014Summer from '@/components/projects/Photography2014Summer.vue';
import RecursivePlug         from '@/components/projects/RecursivePlug.vue';
import HDR                   from '@/components/projects/HDR.vue';
import RayTracer             from '@/components/projects/RayTracer.vue';
import Font                  from '@/components/projects/Font.vue';
import Tetris                from '@/components/projects/Tetris.vue';


import Tag from '@/scripts/main/Tag';

import code   = Tag.code;
import design = Tag.design;
import misc   = Tag.misc


const Projects = [
    {
        path: "optimizing-keyboards",
        name: "OptimizingKeyboards",
        component: OptimizingKeyboards,

        title: "Optimizing Gesture Keyboards for Clarity, Done Dirt Cheap",
        blurb: "I received a grant to do some undergrad research; I came up with a heuristic for determining if any individual person would be likely to make errors given a keyboard layout. The heuristic is orders of magnitude faster than other existing methods.",
        thumb: "static/optimizing-keyboards/thumb.png",
        tags: [code, misc]
    },
    {
        path: "writing-a-compiler",
        name: "WritingACompiler",
        component: WritingACompiler,

        title: "Writing a Compiler, the Hard Way",
        blurb: "I took a class at SFU in compilers. In it I wrote approximately 15,000 lines of Java without the aid of external libraries, building up a compiler and optimizer for Pika. Pika is a language designed specifically for that class.",
        thumb: "https://picsum.photos/150/250/?=random",
        tags: [code]
    },
    {
        path: "teachers-assistant",
        name: "TeachersAssistant",
        component: TeachersAssistant,

        title: "1 TA / 90 Students",
        blurb: "I was the only TA for a second year course in OOP which had 90 students. It was hard work, but well worth it.",
        thumb: "https://picsum.photos/500/250/?=random",
        tags: [code, misc]
    },
    {
        path: "photography-2014-summer",
        name: "Photography2014Summer",
        component: Photography2014Summer,

        title: "Taking Photos in the Summer Time",
        blurb: "I took a class in photography, as an excuse to use my DSLR. It turned into a lot of fun; a summer well spent.",
        thumb: "https://picsum.photos/250/?=random",
        tags: [design]
    },
    {
        path: "recursive-plug",
        name: "RecursivePlug",
        component: RecursivePlug,

        title: "This Portfolio You Are Currently Viewing",
        blurb: "I am by no means above using recursion, especially when I worked hard on this website and want to show it off... inside this website.",
        thumb: "https://picsum.photos/200/450/?=random",
        tags: [code, design, misc]
    },
    {
        path: "hdr",
        name: "HDR",
        component: HDR,

        title: "Implemented HDR Instead of Just Using It",
        blurb: "In a class in computer media protocols and algorithms I implemented a simple custom algorithm for creating HDR images.",
        thumb: "static/hdr/thumb.png",
        tags: [code]
    },
    {
        path: "ray-tracer",
        name: "RayTracer",
        component: RayTracer,

        title: "Implementing a RayTracer",
        blurb: "For a class in computer graphics, I implemented a ray tracer. It looks pretty good, but I think I would do it differently if I did it again.",
        thumb: "static/ray-tracer/thumb.png",
        tags: [code]
    },
    {
        path: 'font',
        name: 'font',
        component: Font,

        title: 'Making my own font from scratch (WIP)',
        blurb: "Bauhaus style fonts are so cool, but really hard to read. That hasn't stopped me from trying to make my own. There is a lot of work left to go, but check out the logo in the top right, I used a modified version of it there.",
        thumb: "static/font/thumb.png",
        tags: [design]
    },
    {
        path: 'tetris',
        name: 'tetris',
        component: Tetris,

        title: 'Making a Crazy Version of Tetris in OpenGL',
        blurb: "For a class in computer graphics, I made a weird version of tetris using only OpenGL, C++, and glfw3.",
        thumb: "static/tetris/thumb.png",
        tags: [code]
    }
];

export default Projects;