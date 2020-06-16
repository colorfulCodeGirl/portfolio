<template>
  <section class="content" id="projects" ref="content">
    <decor-text
      text="Projects"
      class="decorText"
      v-scroll="handleScroll"
      v-if="!isMobile"
    />
    <div class="projectsContainer" v-scroll="handleScroll">
      <vue-simple-scrollbar
        :scrollbarColor="scrollBarColor"
        v-if="isLandscape"
        style="overflov-x: hidden"
      >
        <section>
          <ProjectName
            v-for="(project, index) in projects"
            :isActive="index === activeId"
            :project="project"
            :isLandscape="isLandscape"
            :key="project.name"
            :data-index="index"
            @changeProject="changeProject(index)"
          />
        </section>
      </vue-simple-scrollbar>
      <transition
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
          v-scroll="handleScroll"
        />
      </transition>
    </div>

    <transition @enter="enterProject" @leave="leaveProject" :css="false">
      <Project
        class="projectFull"
        :project="projects[activeId]"
        :key="projects[activeId].name"
        v-scroll="handleScroll"
      />
    </transition>
  </section>
</template>
<script>
import VueSimpleScrollbar from "vue-simple-scrollbar";
import gsap from "gsap";
import ProjectName from "@/components/organisms/ProjectName.vue";
import Project from "@/components/organisms/Project.vue";
import DecorText from "@/components/atoms/DecorText.vue";
import { projects } from "@/data/projects";

export default {
  name: "Projects",
  components: {
    VueSimpleScrollbar,
    ProjectName,
    Project,
    DecorText
  },
  data: function() {
    return {
      activeId: 0,
      scrollBarColor: "rgba(255, 255, 255, 0.5)",
      isLandscape: false,
      isMobile: false,
      projects,
      animationDelay: 0.3,
      isProjectAnimated: false
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
      this.isMobile = window.matchMedia(
        "(max-width: 700px) and (orientation: portrait)"
      ).matches;
    },
    animateProjects: function(type, el, done) {
      const config = {
        scaleY: 0,
        y: -60,
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
    },
    handleScroll: function(evn, el) {
      let animated = false;
      if (el.offsetTop < window.scrollY + window.innerHeight) {
        if (el.classList[0] === "projectWrapper" && this.isProjectAnimated)
          return;
        gsap.set(el, {
          autoAlpha: 0
        });
        gsap.fromTo(
          el,
          {
            x: -20,
            y: 50,
            autoAlpha: 0,
            duration: 1,
            delay: this.animationDelay,
            ease: "power3.out"
          },
          { autoAlpha: 1, x: 0, y: 0 }
        );
        if (el.children && el.classList[0] !== "projectsContainer") {
          gsap.from(el.children, {
            x: -20,
            y: 50,
            autoAlpha: 0,
            duration: 1,
            delay: this.animationDelay + 0.2,
            stagger: 0.1,
            ease: "power3.out"
          });
        }
        animated = true;
        this.animationDelay += 0.3;
        if (el.classList[0] === "projectWrapper") this.isProjectAnimated = true;
      }
      return animated;
    }
  },
  beforeMount() {
    this.checkLandscape();
  },
  mounted() {
    window.addEventListener("resize", this.checkLandscape);
    gsap.set(this.$refs.content.children, { autoAlpha: 0 });
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
.projectFull {
  grid-column: 1 / -1;
  grid-row: 2 / 4;
  margin-bottom: 3rem;
}
@media (min-width: 700px) and (orientation: portrait) {
  .decorText {
    grid-row-start: 2;
  }
  .projectFull {
    grid-column: 2 / -1;
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .content {
    padding-top: 7rem;
  }
  .projectFull {
    grid-column: 2 / 5;
    grid-row: 1 / 4;
    align-self: start;
  }
  .projectsContainer {
    height: 80vh;
    grid-column: 5 / 7;
    grid-row: auto;
  }
}
</style>
