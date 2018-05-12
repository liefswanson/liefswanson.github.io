<template>
<div class='projects-root'>
    <transition name='focus' mode='out-in'>

        <div v-if='leftActive'
             key='left'
             class='panel'>
            <sticky-bar :overlay="false">
                <div class='filter-bar'>
                    <div class='spacer'></div>

                    <!-- these are unfortunately hardcoded,
                         some more research may present a workaround
                         may be nice to do with a v-for,
                         but each needs a different class eg "fa-code" -->
                    <input type='checkbox'
                           id='code'
                           value='code'
                           class='filter'
                           v-model='filters'>
                    <label for='code'
                           title='code'>
                        <i class='fa fa-code'/>
                    </label>

                    <input type='checkbox'
                           id='design'
                           value='design'
                           class='filter'
                           v-model='filters'>
                    <label for='design'
                           title='design'>
                        <i class='fa fa-paint-brush'/>
                    </label>

                    <input type='checkbox'
                           id='misc'
                           value='misc'
                           class='filter'
                           v-model='filters'>
                    <label for='misc'
                           title='miscellaneous'>
                        <i class='fa fa-asterisk'/>
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
                            class='btn'>
                        <router-link to='/projects'
                                     exact
                                     class='override-color'>
                            <i class='fa fa-window-close'/>
                        </router-link>
                    </button>
                </div>
            </sticky-bar>
            <div class='main-content'>
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
    watch: {

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
        background: transparentize($medium, 0.5);

        .filter {
            + label {
                color: $dark;
            }

            &:checked + label {
                color: $projects-swatch;
            }
        }
    }
}

.filter {
    position: absolute;
    visibility: hidden;

    + label {
        color: transparentize($dark, 0.5);
        @include on-phone {
            color: $dark
        }
        transition: color $action-bar-animation-time ease;

        font-size: $icon-size;
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

    &:checked + label {
        color: transparentize($projects-swatch, 0.5);
        @include on-phone {
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

.btn:hover {
    color: $projects-swatch;
    border-style: none;
    cursor: pointer;
}

.override-color {
    color: inherit;
}

.action-bar {
    font-size: 3rem;
    padding-right: 1rem;
    display: flex;
    background: none;
}

.panel {
    height: calc(100% - $header-height);
    //overflow-y: auto;
}


.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    list-style-type: none;

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
