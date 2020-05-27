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
        @before-leave="animateProjects('leave', $event)"
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

    <transition
      @appear="enterProject"
      @enter="enterProject"
      @leave="leaveProject"
      :css="false"
    >
      <Project
        class="projectFull"
        :project="projects[activeId]"
        :key="projects[activeId].name"
      />
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
      projects
    };
  },
  methods: {
    changeProject: function(id) {
      this.activeId = id;
    },
    changeProjectMobile: function(direction) {
      const newId =
        direction === "left" ? this.activeId - 1 : this.activeId + 1;
      if (newId >= 0 && newId < this.projects.length) {
        this.activeId = newId;
      }
    },
    checkLandscape: function() {
      this.isLandscape = window.matchMedia(
        "(orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px)"
      ).matches;
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
    },
    enterProject: function(el, done) {
      const img = el.querySelector(".prevue__img");
      const tl = gsap.timeline({ duration: 1 });
      tl.from(el, {
        opacity: 0,
        y: "-=30"
      }).from(
        img,
        {
          opacity: 0,
          y: "-=30",
          onComplete: done
        },
        "-=0.5"
      );
    },
    leaveProject: function(el, done) {
      const img = el.querySelector(".prevue__img");
      const tl = gsap.timeline({ duration: 1 });
      tl.to(img, {
        opacity: 0,
        y: "+=30"
      }).to(
        el,
        {
          opacity: 0,
          y: "+=30",
          onComplete: done
        },
        "-=0.5"
      );
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
