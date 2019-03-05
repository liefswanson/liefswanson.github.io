import Sample  from '@/components/projects/Sample.vue';
import Another from '@/components/projects/Another.vue';

import OptimizingKeyboards   from '@/components/projects/OptimizingKeyboards.vue';
import WritingACompiler      from '@/components/projects/WritingACompiler.vue';
import TeachersAssistant     from '@/components/projects/TeachersAssistant.vue';
import Photography2014Summer from '@/components/projects/Photography2014Summer.vue';
import RecursivePlug         from '@/components/projects/RecursivePlug.vue';
import HDR                   from '@/components/projects/HDR.vue';
import RayTracer             from '@/components/projects/RayTracer.vue';
import MyFont                from '@/components/projects/MyFont.vue';
import Tetris                from '@/components/projects/Tetris.vue';
import Sudoku                from '@/components/projects/Sudoku.vue';
import GTR                   from '@/components/projects/GTR.vue';
import BCMA                  from '@/components/projects/BCMA.vue';
import WhittingtonIT         from '@/components/projects/WhittingtonIT.vue';
import BigTeamProject        from '@/components/projects/BigTeamProject.vue';
import CogSciLab             from '@/components/projects/CogSciLab.vue';
import SIAT                  from '@/components/projects/SIAT.vue';
import SoSy                  from '@/components/projects/SoSy.vue';
import ArchLinux             from '@/components/projects/ArchLinux.vue';
import ProjectEuler          from '@/components/projects/ProjectEuler.vue';
import AudioBooks            from '@/components/projects/AudioBooks.vue';
import VideoGames            from '@/components/projects/VideoGames.vue';

import nullProjectVue        from '@/components/util/ProjectTemplate.vue';


import Tag     from '@/scripts/main/Tag';
import Project from '@/scripts/main/Project';

import code   = Tag.code;
import design = Tag.design;
import misc   = Tag.miscellaneous;

const nullProject:Project =
{
    path: "",
    name: "",
    next: "",
    component: nullProjectVue,

    title: "",
    blurb: "",
    img: {
        path:"",
        alt:"",
        width:1,
        height:1
    },
    tags: []
};

function getProject(name: string) {
    for (let project of Projects) {
        if(project.name == name) {
            return project
        }
    }
    console.error("Incorrect name \"" + name + "\" given to getProject");
    return nullProject
}

const Projects:Project[] = [
    {
        path: "optimizing-keyboards",
        name: "OptimizingKeyboards",
        next: "WritingACompiler",
        component: OptimizingKeyboards,

        title: "Optimizing Gesture Keyboards, Done Dirt Cheap",
        blurb: "I came up with a heuristic for determining the likelihood of a user making gesture-typing errors given a keyboard layout. The heuristic is orders of magnitude faster than other existing methods.",
        img: {
            path:"static/optimizing-keyboards/thumb.jpg",
            alt:"illustration of gesturing on a mobile keyboard",
            width:346,
            height:196
        },
        tags: [code, misc]
    },
    {
        path: "writing-a-compiler",
        name: "WritingACompiler",
        next: "GTR",
        component: WritingACompiler,

        title: "Writing a Compiler, the Hard Way",
        blurb: "I in a compilers class I wrote a feature rich compiler without the aid of external libraries. Everything was done from scratch in a semester long project.",
        img: {
            path:"static/writing-a-compiler/thumb.svg",
            alt:"high level illustration of compiling code",
            width:744,
            height:319
        },
        tags: [code]
    },
    {
        path: "teachers-assistant",
        name: "TeachersAssistant",
        next: "RecursivePlug",
        component: TeachersAssistant,

        title: "Teaching 90 Students to Write Clear Code",
        blurb: "I was the only TA for a second year course in OOP which had 90 students. It was hard work, but well worth it.",
        img: {
            path:"static/teachers-assistant/thumb.jpg",
            alt:"picture of a two people studying together",
            width:736,
            height:491
        },
        tags: [code, misc]
    },
    {
        path: "photography-2014-summer",
        name: "Photography2014Summer",
        next: "MyFont",
        component: Photography2014Summer,

        title: "Taking Photos in the Summer Time",
        blurb: "I took a class in photography, as an excuse to use my DSLR. It turned into a lot of fun; a summer well spent.",
        img: {
            path:"static/photography-2014-summer/thumb.jpg",
            alt:"stylized picture of me hanging off the side of a building with a high contrast clouds in the background",
            width:640,
            height:427
        },
        tags: [design]
    },
    {
        path: "recursive-plug",
        name: "RecursivePlug",
        next: "WritingACompiler",
        component: RecursivePlug,

        title: "Designing and Implementing this Portfolio",
        blurb: "I am by no means above using recursion, especially when I worked hard on this website and want to show it off... inside this website.",
        img: {
            path:"static/recursive-plug/thumb.svg",
            alt:"my logo as seen in the favicon",
            width:120,
            height:120
        },
        tags: [code, design, misc]
    },
    {
        path: "hdr",
        name: "HDR",
        next: "Photography2014Summer",
        component: HDR,

        title: "Implementing HDR Instead of Just Using It",
        blurb: "In a class in computer media protocols and algorithms I implemented a simple custom algorithm for creating HDR images.",
        img: {
            path:"static/hdr/thumb.jpg",
            alt:"a high dynamic range image of the St. Louis",
            width:388,
            height:292
        },
        tags: [code, design]
    },
    {
        path: "ray-tracer",
        name: "RayTracer",
        next: "Tetris",
        component: RayTracer,

        title: "Implementing a Ray Tracer",
        blurb: "For a class in computer graphics, I implemented a ray tracer. It looks pretty good, but I think I would do it differently if I did it again.",
        img: {
            path:"static/ray-tracer/thumb.jpg",
            alt:"render of a simple scene by a ray tracer I built",
            width:642,
            height:351
        },
        tags: [code]
    },
    {
        path: 'my-font',
        name: 'MyFont',
        next: "HDR",
        component: MyFont,

        title: 'Making My Own Font From Scratch',
        blurb: "Bauhaus style fonts are so cool, but really hard to read. That hasn't stopped me from trying to make my own. Check out the logo in top right, I use a modified version of it there.",
        img: {
            path:"static/font/thumb.jpg",
            alt:"a picture of the letter e from the font I designed",
            width:484,
            height:484
        },
        tags: [design]
    },
    {
        path: 'tetris',
        name: 'Tetris',
        next: "RayTracer",
        component: Tetris,

        title: 'Writing A Crazy Version of Tetris in OpenGL',
        blurb: "For a class in computer graphics, I made a weird version of tetris using only OpenGL, C++, and glfw3.",
        img: {
            path:"static/tetris/thumb.jpg",
            alt:"a picture of a very colourful game of tetris I made",
            width:375,
            height:375
        },
        tags: [code]
    },
    {
        path: 'sudoku',
        name: 'Sudoku',
        next: "ProjectEuler",
        component: Sudoku,

        title: 'Making An Automatic Sudoku Solver',
        blurb: 'I like sudokus but I am pretty slow at them. To solve this problem, I wrote a program that solves sudokus for me.',
        img: {
            path:"static/sudoku/thumb.jpg",
            alt:"a picture of an unsolved sudoku",
            width:361,
            height:361
        },
        tags: [code]
    },
    {
        path: 'gtr',
        name: 'GTR',
        next: "TeachersAssistant",
        component: GTR,

        title: 'Making My Own Feature Testing Harness',
        blurb: "It turns out that building a compiler from scratch is difficult, and it's difficult to test... So I built my own automated testing harness to save me lots of headaches.",
        img: {
            path:"static/gtr/thumb.svg",
            alt:"an illustration of a bug with a red line through it",
            width:744,
            height:744
        },
        tags: [code]
    },
    {
        path: 'bcma',
        name: 'BCMA',
        next: "WhittingtonIT",
        component: BCMA,

        title: "Working IT for Doctors of BC",
        blurb: 'I did a brief stint working IT for what can sort of be thought of as a union for doctors in British Columbia Canada.' ,
        img: {
            path:"static/bcma/thumb.jpg",
            alt:"a picture of a stethoscope",
            width:600,
            height:400
        },
        tags: [misc]
    },
    {
        path: 'whittington-it',
        name: 'WhittingtonIT',
        next: "BCMA",
        component: WhittingtonIT,

        title: 'Working for Whittington IT',
        blurb: "I worked for a small IT company in Brisbane Australia which provided support for many local doctor's offices.",
        img: {
            path:"static/whittington-it/thumb.jpg",
            alt:"picture of someone working on the ports of a networking switch",
            width:842,
            height:491
        },
        tags: [misc]
    },
    {
        path: 'big-team-project',
        name: 'BigTeamProject',
        next: "TeachersAssistant",
        component: BigTeamProject,

        title: 'Applying Scrum in a 13 Week Team Project',
        blurb: "I worked on a semester long team project where we took a client's specifications, and built a product for them.",
        img: {
            path:"static/big-team-project/thumb.jpg",
            alt:"A zoomed in picture of several people working around a single table",
            width:684,
            height:456
        },
        tags: [code, design]
    },
    {
        path: 'cog-sci-lab',
        name: 'CogSciLab',
        next: "OptimizingKeyboards",
        component: CogSciLab,

        title: 'Volunteering At The SFU Cognitive Science Lab',
        blurb: 'I have spent some of my time volunteering in a research lab at SFU that looks at how people allocate attention during a task, as a function of their mastery of that task.',
        img: {
            path:"static/cog-sci-lab/thumb.jpg",
            alt:"an illustration of the human brain on a chalkboard",
            width:640,
            height:360
        },
        tags: [code, misc]
    },
    {
        path: 'sosy',
        name: 'SoSy',
        next: "TeachersAssistant",
        component: SoSy,

        title: 'Obtaining My BSc in Software Systems',
        blurb: 'An overview of my experience in the Software Systems (SoSy) undergraduate program at SFU',
        img: {
            path:"static/sosy/thumb.jpg",
            alt:"picture of some very colorful code in a dark theme",
            width:960,
            height:516
        },
        tags: [code, misc]
    },
    {
        path: 'siat',
        name: 'SIAT',
        next: "MyFont",
        component: SIAT,

        title: 'Obtaining My BSc in SIAT',
        blurb: 'An overview of my experience in the School of Interactive Arts and Technology (SIAT) undergraduate program at SFU',
        img: {
            path:"static/siat/thumb.jpg",
            alt:"picture of pencil and paper design mockups, neatly layout out",
            width:800,
            height:533
        },
        tags: [design, misc]
    },
    {
        path: 'arch-linux',
        name: 'ArchLinux',
        next: "OptimizingKeyboards",
        component: ArchLinux,

        title: 'Using Arch Linux As My Primary OS',
        blurb: 'I have been using Linux as my primary OS since 2011. As such I have picked up a few things about Linux, and I am quite comfortable in it. More specifically, I use Arch Linux which I have found to be a great experience.',
        img: {
            path:"static/arch-linux/thumb.jpg",
            alt:"the Arch Linux logo",
            width:930,
            height:425
        },
        tags: [misc]
    },
    {
        path: 'project-euler',
        name: 'ProjectEuler',
        next: "Sudoku",
        component: ProjectEuler,

        title: 'I Solve Online Math & Coding Problems',
        blurb: 'Project Euler is a set of math problems online that I sometimes play around with while I teach myself new programming languages. Project Euler is named after the mathematician in the painting here!',
        img: {
            path:"static/project-euler/thumb.jpg",
            alt:"oil portrait of Leonhard Euler",
            width:461,
            height:600
        },
        tags: [code, misc]
    },
    {
        path: 'audio-books',
        name: 'AudioBooks',
        next: "VideoGames",
        component: AudioBooks,

        title: 'I Listen to a Lot of Audio Books',
        blurb: "I have dyslexia, which means I read a bit too slowly to easily make it through a some books. However, I still like a good book, so I listen to lots of audio books.",
        img: {
            path:"static/audio-books/thumb.jpg",
            alt:"screenshot of myself playing The Witcher 3: Wild Hunt",
            width:684,
            height:456
        },
        tags: [misc]
    },
    {
        path: 'video-games',
        name: 'VideoGames',
        next: "AudioBooks",
        component: VideoGames,

        title: 'I Play Video Games, While I Study Them',
        blurb: "I really like playing video games, when they make you think... or if they have truly enthralling stories and mechanics.",
        img: {
            path:"static/video-games/thumb.jpg",
            alt:"picture of a phone connected to over ear headphones",
            width:960,
            height:540
        },
        tags: [misc]
    }

];

export {
    Projects,
    nullProject,
    getProject
};
export default Projects;