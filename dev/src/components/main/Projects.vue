<template>
<div class='projects-root'>
    <transition name='focus' mode='out-in'>

        <div v-if='leftActive'
             key='left'
             class='panel'>
            <sticky-bar :overlay="false">

                <div class='filter-bar'>
                    <div class='spacer'></div>

                    <label v-for='elem in tags'
                           :key='elem.name'
                           :for='elem.name'
                           :title='elem.name'>
                        <input type='checkbox'
                               :id='elem.name'
                               :value='elem.name'
                               class='filter'
                               v-model='filters'>
                            <i :class='[elem.fa, elem.icon]'/>
                    </label>
                </div>

            </sticky-bar>
            <ul class='project-grid main-content'
                :style='style'
                ref='container'>
                <project-item v-for='(project, key) in projects'
                              :ref='project.name'
                              :key='key'
                              :properties="project"
                              :autoRows='autoRows'
                              :gap='gap'
                              :filters='filters'
                              class='project-card'/>
            </ul>
        </div>

        <div v-else
             key='right'
             class='panel'>
             <sticky-bar>
                <div class='action-bar'>
                    <div class='spacer'></div>
                    <button title='Back to Projects'
                            class='btn x'>
                        <router-link to='/projects'
                                     exact
                                     class='override-color'>
                            <i class='fas fa-times'/>
                        </router-link>
                    </button>
                </div>
            </sticky-bar>
            <div class='main-content project-focused'>
                <router-view/>
            </div>
        </div>

    </transition>
</div>
</template>

<script lang="ts">
import Vue         from 'vue';
import ProjectItem from '@/components/projects/ProjectItem.vue';
import StickyBar   from '@/components/nav/StickyBar.vue';

import TagItems       from '@/scripts/main/TagItems';
import Tag            from '@/scripts/main/Tag';
import Project        from '@/scripts/main/Project';
import ProjectList    from '@/scripts/main/ProjectItems';
import { SectionMap } from '@/scripts/nav/NavItems';

import { std } from '@/style/ts/StandardUnits';

export default Vue.extend({
    name: "Projects",
    data() {
        return {
            projects: ProjectList,
            autoRows: 1, //measurements assume use of std
            gap: 1,
            filters: Object.keys(Tag) as Tag[],
            tags: TagItems
        }
    },
    computed: {
        leftActive(): boolean {
            this.$refs.ProjectList
            return this.$route.path == SectionMap.projects.path;
        },
        style(): object {
            return {
                "grid-auto-rows": this.autoRows + std,
                "grid-gap": this.gap + std,
            }
        }
    },
    components: {
        'project-item': ProjectItem,
        'sticky-bar': StickyBar,
    },

});
</script>


<style lang="scss" scoped>
@import '@/style/master.scss';

.action-bar {
    height: 0;
}

.filter-bar {
    display: flex;
    background: transparentize($medium, 1);
    transition: background $action-bar-animation-time ease;

    &:hover {
        @include on-laptop-or-up{
            background: transparentize($medium, 0.5);
        }

        .filter {
            + i {
                color: $dark;
            }

            &:checked + i {
                color: $projects-swatch;
            }
        }
    }
}

.filter {
    position: absolute;
    visibility: hidden;

    + i {
        color: transparentize($dark, 0.5);
        @include on-tablet-or-down {
            color: $dark
        }
        transition: color $action-bar-animation-time ease;

        font-size: $icon-size;
        line-height: $icon-size * 1.5;
        padding: 0.5rem;
        width: $icon-size * 1.5; // compensate for how wide code icon is
        text-align: center;
        cursor: pointer;

        @include on-laptop-or-up {
            &:hover {
                color: $bright !important;
            }
        }
    }

    &:checked + i {
        color: transparentize($projects-swatch, 0.5);
        @include on-tablet-or-down {
            color: $projects-swatch;
        }

        @include on-laptop-or-up {
            &:hover {
                color: lighten($projects-swatch, 10%) !important;
            }
        }
    }
}

.btn {
    color: $medium;
    background: none;
    border-style: none;
    padding: 0.5rem;

    transition: color $action-bar-animation-time ease;
}

.x {
    @extend .btn;
    color: $xlight;
}

.btn:hover {
    color: $projects-swatch;
    border-style: none;
    cursor: pointer;
}

.override-color {
    color: inherit;
}

.action-bar {
    padding-right: 0.4rem;
    font-size: 1.25rem;
    display: flex;
    background: none;
}

.panel {
    height: calc(100% - $header-height);
}


.project-grid {

    @supports (display: grid) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    }


    @include on-phone {
        column-count: 1;
    }

    @include on-tablet {
        column-count: 2;
    }

    @include on-laptop {
        column-count: 3;
    }

    @include on-desktop {
        column-count: 4;
    }

    list-style-type: none;
}

.project-focused {
    max-width: $medium-size;
    margin: auto;
    @supports (display: grid){
        max-width: none;
        margin: none;
    }
}

.project-card {
    display: inline-block;
}

.focus-enter-active,
.focus-leave-active {
    transition: all $content-swap-animation-time ease;
}

.focus-enter,
.focus-leave-to {
    transform: translateX(50vw);
    opacity: 0;
}
</style>
