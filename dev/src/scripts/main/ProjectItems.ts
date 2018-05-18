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
import Sudoku                from '@/components/projects/Sudoku.vue';
import gtr                   from '@/components/projects/gtr.vue';
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

import Tag     from '@/scripts/main/Tag';
import Project from '@/scripts/main/Project';

import code   = Tag.code;
import design = Tag.design;
import misc   = Tag.misc


const Projects:Project[] = [
    {
        path: "optimizing-keyboards",
        name: "OptimizingKeyboards",
        component: OptimizingKeyboards,

        title: "Optimizing Gesture Keyboards",
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
        thumb: "static/writing-a-compiler/thumb.svg",
        tags: [code]
    },
    {
        path: "teachers-assistant",
        name: "TeachersAssistant",
        component: TeachersAssistant,

        title: "1 TA / 90 Students",
        blurb: "I was the only TA for a second year course in OOP which had 90 students. It was hard work, but well worth it.",
        thumb: 'static/teachers-assistant/thumb.jpg',
        tags: [code, misc]
    },
    {
        path: "photography-2014-summer",
        name: "Photography2014Summer",
        component: Photography2014Summer,

        title: "Taking Photos in the Summer Time",
        blurb: "I took a class in photography, as an excuse to use my DSLR. It turned into a lot of fun; a summer well spent.",
        thumb: "static/photography-2014-summer/thumb.jpg",
        tags: [design]
    },
    {
        path: "recursive-plug",
        name: "RecursivePlug",
        component: RecursivePlug,

        title: "The Portfolio You are Currently Viewing",
        blurb: "I am by no means above using recursion, especially when I worked hard on this website and want to show it off... inside this website.",
        thumb: "static/recursive-plug/thumb.svg",
        tags: [code, design, misc]
    },
    {
        path: "hdr",
        name: "HDR",
        component: HDR,

        title: "Implementing HDR Instead of Just Using It",
        blurb: "In a class in computer media protocols and algorithms I implemented a simple custom algorithm for creating HDR images.",
        thumb: "static/hdr/thumb.png",
        tags: [code]
    },
    {
        path: "ray-tracer",
        name: "RayTracer",
        component: RayTracer,

        title: "Implementing a Ray Tracer",
        blurb: "For a class in computer graphics, I implemented a ray tracer. It looks pretty good, but I think I would do it differently if I did it again.",
        thumb: "static/ray-tracer/thumb.png",
        tags: [code]
    },
    {
        path: 'font',
        name: 'font',
        component: Font,

        title: 'My Own Font (WIP)',
        blurb: "Bauhaus style fonts are so cool, but really hard to read. That hasn't stopped me from trying to make my own. There is a lot of work left to go, but check out the logo in the top right, I used a modified version of it there.",
        thumb: "static/font/thumb.png",
        tags: [design]
    },
    {
        path: 'tetris',
        name: 'Tetris',
        component: Tetris,

        title: 'A Crazy Version of Tetris in OpenGL',
        blurb: "For a class in computer graphics, I made a weird version of tetris using only OpenGL, C++, and glfw3.",
        thumb: "static/tetris/thumb.png",
        tags: [code]
    },
    {
        path: 'sudoku',
        name: 'Sudoku',
        component: Sudoku,

        title: 'Automatic Sudoku Solver',
        blurb: 'I like sudokus but I am pretty slow at them. To solve this problem, I wrote a program that solves sudokus for me.',
        thumb: 'static/sudoku/thumb.png',
        tags: [code]
    },
    {
        path: 'gtr',
        name: 'gtr',
        component: gtr,

        title: 'Automated Feature Testing',
        blurb: "It turns out that building a compiler from scratch is difficult, and it's difficult to test... So I built my own automated testing harness to save me lots of headaches.",
        thumb: 'static/gtr/thumb.svg',
        tags: [code]
    },
    {
        path: 'bcma',
        name: 'BCMA',
        component: BCMA,

        title: 'Working for the BCMA',
        blurb: 'I did a brief stint working IT at the British Columbia Medical Association (BCMA), which has since changed its name to Doctors of BC.' ,
        thumb: 'static/bcma/thumb.jpg',
        tags: [misc]
    },
    {
        path: 'whittington-it',
        name: 'WhittingtonIT',
        component: WhittingtonIT,

        title: 'Working for Whittington IT',
        blurb: "I worked for a small IT company in Brisbane Australia which provided support for Doctor's offices.",
        thumb: 'static/whittington-it/thumb.jpg',
        tags: [misc]
    },
    {
        path: 'big-team-project',
        name: 'BigTeamProject',
        component: BigTeamProject,

        title: 'A Large Team Project for School',
        blurb: "I worked on a semester long team project where we took a client's specifications, and built a product for them.",
        thumb: 'static/big-team-project/thumb.jpg',
        tags: [code, design]
    },
    {
        path: 'cog-sci-lab',
        name: 'CogSciLab',
        component: CogSciLab,

        title: 'Cognitive Science Lab at SFU',
        blurb: 'I have spent some of my time volunteering in a research lab at SFU that looks at how people allocate attention during a task, as a function of their mastery of that task.',
        thumb: 'static/cog-sci-lab/thumb.jpg',
        tags: [code, misc]
    },
    {
        path: 'sosy',
        name: 'SoSy',
        component: SoSy,

        title: 'SoSy Undergrad at SFU',
        blurb: 'An overview of my experience in the Software Systems (SoSy) undergraduate program at SFU',
        thumb: 'static/sosy/thumb.jpg',
        tags: [code, design, misc]
    },
    {
        path: 'siat',
        name: 'SIAT',
        component: SIAT,

        title: 'SIAT Undergrad at SFU',
        blurb: 'An overview of my experience in the School of Interactive Arts and Technology (SIAT) undergraduate program at SFU',
        thumb: 'static/siat/thumb.jpg',
        tags: [code, design, misc]
    },
    {
        path: 'arch-linux',
        name: 'ArchLinux',
        component: ArchLinux,

        title: 'Arch Linux : My Primary OS',
        blurb: 'I use Arch Linux every day, and barely ever use Windows or OSX... or even other linux distros. I find it very convenient actually, as unlikely as that may sound.',
        thumb: 'static/arch-linux/thumb.png',
        tags: [misc]
    },
    {
        path: 'project-euler',
        name: 'ProjectEuler',
        component: ProjectEuler,

        title: 'Math Problems and Programming Languages',
        blurb: 'Project Euler is a set of math problems online that I sometimes play around with while I teach myself new programming languages.',
        thumb: 'static/project-euler/thumb.jpg',
        tags: [code, misc]
    },
    {
        path: 'audio-books',
        name: 'AudioBooks',
        component: AudioBooks,

        title: 'I Listen to a Lot of Audio Books',
        blurb: "I have dyslexia, which means I read a bit too slowly to easily make it through a some books. However, I still like a good book, so I listen to lots of audio books.",
        thumb: 'static/audio-books/thumb.jpg',
        tags: [misc]
    },
    {
        path: 'video-games',
        name: 'VideoGames',
        component: VideoGames,

        title: 'I Play Video Games',
        blurb: "I really like playing video games, when they make you think... or if they have truly enthralling stories and mechanics.",
        thumb: 'static/video-games/thumb.jpg',
        tags: [misc]

    }

];

export default Projects;