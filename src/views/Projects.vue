<template>
  <main class="content">
    <scale-transition><p class="decorText">Projects</p></scale-transition>
    <div class="projectsContainer">
      <vue-simple-scrollbar
        :scrollbarColor="scrollBarColor"
        v-if="isLandscape"
        style="overflov-x: hidden"
      >
        <transition-group tag="section" @appear="appearProjects" :css="false">
          <Project
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
      <transition @appear="appearProjects" v-else :css="false">
        <Project
          :isActive="true"
          :project="projects[activeId]"
          :isLandscape="isLandscape"
          @changeProjectMobile="changeProjectMobile"
          :isLast="activeId === projects.length - 1"
          :isFirst="activeId === 0"
          data-index="0"
        />
      </transition>
    </div>
    <transition
      @appear="appearCover"
      @leave="leaveCover"
      v-if="isCoverShown"
      :css="false"
    >
      <div class="iframe__cover">
        <inline-svg
          class="iframe__cover-logo"
          :src="require('@/assets/logo.svg')"
        ></inline-svg>
      </div>
    </transition>
    <transition @enter="enterIframe" :css="false" v-show="!isCoverShown">
      <iframe class="iframe" :src="projects[activeId].web" ref="iframe">
      </iframe>
    </transition>
  </main>
</template>
<script>
import VueSimpleScrollbar from "vue-simple-scrollbar";
import gsap from "gsap";
import InlineSvg from "vue-inline-svg";
import Project from "@/components/Project.vue";
import ScaleTransition from "@/utils/ScaleTransition.vue";

export default {
  name: "Projects",
  components: { VueSimpleScrollbar, Project, ScaleTransition, InlineSvg },
  data: function() {
    return {
      activeId: 0,
      scrollBarColor: "rgba(255, 255, 255, 0.5)",
      isLandscape: false,
      isCoverShown: true,
      projects: [
        {
          name: "Art gallery",
          technologies: ["HTML5", "CSS3", "JavaScript", "Webpack"],
          description:
            "An art gallery for a family of a famous Ukrainian artists. Such technologi stack was choosen to deepen my knowlage about fundamental technologies.",
          web: "https://vytiahlovski.netlify.com/",
          code: "https://github.com/Vanilna/Vytiahlovski"
        },
        {
          name: "Quiz",
          technologies: ["React", "Redux", "CSS3"],
          description:
            "Little quiz game to practice React, Redux and working with REST API.",
          web: "https://quiz-vanilna.netlify.com/",
          code: "https://github.com/Vanilna/quiz"
        },
        {
          name: "Check-in form",
          technologies: ["HTML5", "Bootstrap", "JavaScript"],
          description:
            "A check-in form for hotel guest. Made for practising Semantik HTML and Bootstrap.",
          web: "https://hotel-check-in.netlify.com/",
          code: "https://github.com/Vanilna/online-check-in-form"
        },
        {
          name: "Advanced React form",
          technologies: ["React", "CSS3"],
          description:
            "An advanced form made for practising form validation in React.",
          web: "https://vanilna-react-form.netlify.com",
          code: "https://github.com/Vanilna/react-form"
        },
        {
          name: "Mobile navigation",
          technologies: ["SASS", "JavaScript", "HTML5"],
          description:
            "Mobile navigation created by the project of Aurélien Salomon for Orizon.",
          web: "https://vanilna.github.io/mobileNav/app/index.html",
          code: "https://github.com/Vanilna/mobileNav"
        },
        {
          name: "Template from Dribble",
          technologies: ["Bootstrap", "HTML5"],
          description:
            "Copied design from dribble template to practise Bootstrap.",
          web: "https://vanilna.github.io/template-bootstrap/build/index.html",
          code: "https://github.com/Vanilna/template-bootstrap"
        },
        {
          name: "Memory Game",
          technologies: ["React", "CSS3"],
          description: "Simple game to practice React and CSS animations.",
          web: "https://memory-game-vanilna.netlify.com/",
          code: "https://github.com/Vanilna/memory-game"
        },
        {
          name: "Balls and Desk Game",
          technologies: ["JavaScript", "HTML5", "CSS3"],
          description:
            "First game in JavaScript using Canvas. Inspired by an exersice from course on CodeCademy.",
          web: "https://vanilna.github.io/balls-and-desk/",
          code: "https://github.com/Vanilna/balls-and-desk"
        },
        {
          name: "Kate Blog",
          technologies: ["Bootstrap", "HTML5"],
          description:
            "Copied blog from the original for learning reasons (learning Bootstrap).",
          web: "https://vanilna.github.io/Kate-blog/",
          code: "https://github.com/Vanilna/Kate-blog"
        },
        {
          name: "Captcha",
          technologies: ["JavaScript", "HTML5", "CSS3"],
          description: "My attemp to make a capcha which I saw on other site.",
          web: "https://vanilna.github.io/capcha/",
          code: "https://github.com/Vanilna/capcha"
        }
      ]
    };
  },
  methods: {
    changeProject: function(id) {
      if (!this.isCoverShown) {
        this.toggleCover();
        console.log("change function");
        setTimeout(this.toggleCover, 100);
      }
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
    toggleCover: function() {
      this.isCoverShown = !this.isCoverShown;
      console.log(this.isCoverShown, "cover");
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
    appearCover: function(el, done) {
      gsap.from(el, {
        scale: 1.1,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
        onComplete: done
      });
    },
    enterIframe: function(el, done) {
      gsap.from(el, {
        opacity: 0,
        delay: 1.2,
        duration: 15,
        onComplete: done
      });
    },
    appearProjects: function(el, done) {
      const delay = 0.7 + el.dataset.index * 0.05;
      gsap.from(el, {
        scaleY: 0,
        y: -60,
        delay,
        duration: 0.9,
        ease: "back.out(1)",
        onComplete: done
      });
    }
  },
  beforeMount() {
    this.checkLandscape();
  },
  mounted() {
    const context = this;
    this.$refs.iframe.addEventListener(
      "load",
      function() {
        context.toggleCover();
        console.log("event");
      },
      {
        once: true
      }
    );
    window.addEventListener("resize", this.checkLandscape);
  },
  beforeDestroy() {
    const context = this;
    this.$refs.iframe.removeEventListener(
      "load",
      function() {
        context.toggleCover();
        console.log("event");
      },
      {
        once: true
      }
    );
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
.iframe,
.iframe__cover {
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  border: 1px solid #ffffff;
  width: 90%;
  height: 57vh;
  margin: 0 auto;
}
.iframe__cover {
  background-color: #141618;
  z-index: 3;
  display: grid;
}
.iframe__cover-logo {
  width: 60%;
  height: 60%;
  justify-self: center;
  align-self: center;
}
@media (min-width: 700px) {
  .iframe,
  .iframe__cover {
    max-width: 60vw;
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .iframe,
  .iframe__cover {
    height: 60vh;
    grid-column: 2 / 5;
    grid-row: 1 / 4;
    width: 100%;
    max-width: auto;
    margin: 0;
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
