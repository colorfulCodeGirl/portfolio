<template>
  <main class="content">
    <scale-transition>
      <p class="decorText">Projects</p>
    </scale-transition>
    <div class="projectsContainer">
      <vue-simple-scrollbar
        :scrollbarColor="scrollBarColor"
        v-if="isLandscape"
        style="overflov-x: hidden"
      >
        <transition-group
          tag="section"
          @appear="animateProjects('appear', $event)"
          :css="false"
        >
          <ProjectName
            v-for="(project, index) in projects"
            :isActive="index === activeId"
            :project="project"
            :isLandscape="isLandscape"
            :key="project.name"
            :data-index="index"
            @changeProject="changeProject(index)"
          />
        </transition-group>
      </vue-simple-scrollbar>
      <transition
        @appear="animateProjects('enter', $event)"
        @enter="animateProjects('enter', $event)"
        @leave="animateProjects('leave', $event)"
        mode="out-in"
        v-else
        :css="false"
      >
        <ProjectName
          :isActive="true"
          :project="projects[activeId]"
          :isLandscape="isLandscape"
          @changeProjectMobile="changeProjectMobile"
          :isLast="activeId === projects.length - 1"
          :isFirst="activeId === 0"
          :key="projects[activeId].name"
          data-index="0"
        />
      </transition>
    </div>

    <transition :css="false" v-show="isCoverShown">
      <Project class="projectFull" :project="projects[activeId]" />
    </transition>
  </main>
</template>
<script>
import VueSimpleScrollbar from "vue-simple-scrollbar";
import gsap from "gsap";
import ProjectName from "@/components/organisms/ProjectName.vue";
import Project from "@/components/organisms/Project.vue";
import ScaleTransition from "@/utils/ScaleTransition.vue";
import { projects } from "@/data/projects";

export default {
  name: "Projects",
  components: {
    VueSimpleScrollbar,
    ProjectName,
    Project,
    ScaleTransition
  },
  data: function() {
    return {
      activeId: 0,
      scrollBarColor: "rgba(255, 255, 255, 0.5)",
      isLandscape: false,
      isCoverShown: true,
      projects
    };
  },
  methods: {
    changeProject: function(id) {
      if (!this.isCoverShown) {
        this.toggleCover();
        setTimeout(this.toggleCover, 100);
      }
      this.activeId = id;
    },
    changeProjectMobile: function(direction) {
      const newId =
        direction === "left" ? this.activeId - 1 : this.activeId + 1;
      if (newId >= 0 && newId < this.projects.length) {
        this.activeId = newId;
        if (!this.isCoverShown) {
          this.toggleCover();
          setTimeout(this.toggleCover, 200);
        }
      }
    },
    checkLandscape: function() {
      this.isLandscape = window.matchMedia(
        "(orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px)"
      ).matches;
    },
    toggleCover: function() {
      this.isCoverShown = !this.isCoverShown;
    },
    leaveCover: function(el, done) {
      const tl = gsap.timeline();
      tl.addLabel("start")
        .to(
          el,
          {
            scale: 1.03,
            delay: 0.7,
            duration: 0.7,
            ease: "back.out(1.4)",
            onComplete: done
          },
          "start"
        )
        .to(
          el,
          {
            opacity: 0,
            delay: 0.7,
            duration: 0.3
          },
          "start"
        );
    },
    animateProjects: function(type, el, done) {
      const delay = type === "appear" ? 0.7 + el.dataset.index * 0.05 : 0;
      const config = {
        scaleY: 0,
        y: -60,
        delay,
        duration: 0.9,
        ease: "back.out(1)",
        onComplete: done
      };
      if (type === "leave") {
        gsap.to(el, config);
      } else {
        gsap.from(el, config);
      }
    }
  },
  beforeMount() {
    this.checkLandscape();
  },
  mounted() {
    window.addEventListener("resize", this.checkLandscape);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkLandscape);
  }
};
</script>
<style scoped>
@import "~vue-simple-scrollbar/dist/vue-simple-scrollbar.css";
@import "./Projects.css";

.content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15% repeat(5, 1fr);
  grid-template-rows: auto;
}
.projectsContainer {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  width: 100%;
  display: flex;
}
.decorText {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 0;
  margin: 0;
  margin-left: 1rem;
  justify-self: center;
}
.projectFull {
  grid-column: 2 / -1;
  grid-row: 2 / 4;
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .projectFull {
    grid-column: 2 / 5;
    grid-row: 1 / 4;
    align-self: start;
  }
  .decorText {
    grid-row: 1 / 4;
  }
  .projectsContainer {
    height: 80vh;
    grid-column: 5 / 7;
    grid-row: auto;
  }
}
</style>
