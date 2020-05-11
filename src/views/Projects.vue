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
        <transition-group tag="section" @appear="animateProjects('appear', $event)" :css="false">
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
      <transition
        @appear="animateProjects('enter', $event)"
        @enter="animateProjects('enter', $event)"
        @leave="animateProjects('leave', $event)"
        mode="out-in"
        v-else
        :css="false"
      >
        <Project
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
    <transition @appear="appearCover" @leave="leaveCover" v-if="isCoverShown" :css="false">
      <div class="iframe__cover">
        <inline-svg class="iframe__cover-logo" :src="require('@/assets/logo.svg')"></inline-svg>
      </div>
    </transition>
    <transition @enter="enterIframe" :css="false" v-show="!isCoverShown">
      <iframe class="iframe" :src="projects[activeId].web" ref="iframe"></iframe>
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
          name: "Mars Rovers",
          technologies: [
            "React",
            "Styled Components",
            "Storybook",
            "Jest",
            "React Testing Library",
            "GSAP"
          ],
          description: `<p>The project was build to practice some new technologies in my stack and also to <span class="emfasized">learn to test</span>.</p>
          <p>Site fetches info about Mars rovers and photos made by them from NASA API and displays them.</p>
          <p>Some details:</p>
          <ul>
          <li>using <span class="emfasized">atomic design</span> patter and <span class="emfasized">Storybook</span>;</li>
          <li>styling components with <span class="emfasized">Styled Components</span>;</li>
          <li>working with <span class="emfasized">REST API</span>;</li>
          <li>unit and integration tests with <span class="emfasized">Jest</span> and <span class="emfasized">React testing library</span>;</li>
          <li>animating with <span class="emfasized">GSAP</span>;</li>
          <li>handle image <span class="emfasized">lazy loading</span> and adding content on scroll.</li>
          </ul>`,
          web: "https://rovers.netlify.com",
          code: "https://github.com/Vanilna/mars"
        },
        {
          name: "Art gallery",
          technologies: ["HTML5", "CSS3", "JavaScript", "Webpack"],
          description: `<p>An art gallery for a family of famous Ukrainian artists.</p>
          <p>The site was written using almost only <span class="emfasized">HTML, CSS, and JavaScript</span>.</p>
          <p>Some details:</p>
          <ul>
          <li>I've <span class="emfasized">deepened my knowledge about fundamental technologies</span>;</li>
          <li>I've practiced <span class="emfasized">DOM manipulations</span>;</li>
          <li>the site was split into modules and <span class="emfasized">build with Webpack</span>;</li>
          <li>I've learned <span class="emfasized">code splitting</span> and <span class="emfasized">lazy loading</span> techniques;</li>
          <li>the biggest challenge was <span class="emfasized">image optimization</span>, which I've handled using Cloudinary.</li>
          </ul>`,
          web: "https://vytiahlovski.netlify.com/",
          code: "https://github.com/Vanilna/Vytiahlovski"
        },
        {
          name: "Quiz",
          technologies: ["React", "Redux", "CSS3"],
          description:
            "<p>Little quiz game to practice React, Redux and working with REST API.</p>",
          web: "https://quiz-vanilna.netlify.com/",
          code: "https://github.com/Vanilna/quiz"
        },
        {
          name: "Check-in form",
          technologies: ["HTML5", "Bootstrap", "JavaScript"],
          description:
            "<p>A check-in form for hotel guest.</p><p>Made for practising Semantik HTML and Bootstrap.</p>",
          web: "https://hotel-check-in.netlify.com/",
          code: "https://github.com/Vanilna/online-check-in-form"
        },
        {
          name: "Advanced React form",
          technologies: ["React", "CSS3"],
          description:
            "<p>An advanced form made for practising form validation in React.</p>",
          web: "https://vanilna-react-form.netlify.com",
          code: "https://github.com/Vanilna/react-form"
        },
        {
          name: "Mobile navigation",
          technologies: ["SASS", "JavaScript", "HTML5"],
          description:
            "<p>Project for practising SASS. Design created by the project of Aurélien Salomon for Orizon.</p>",
          web: "https://vanilna.github.io/mobileNav/app/index.html",
          code: "https://github.com/Vanilna/mobileNav"
        },
        {
          name: "Template from Dribble",
          technologies: ["Bootstrap", "HTML5"],
          description:
            "<p>Copied design from dribble template to practise Bootstrap.</p>",
          web: "https://vanilna.github.io/template-bootstrap/build/index.html",
          code: "https://github.com/Vanilna/template-bootstrap"
        },
        {
          name: "Memory Game",
          technologies: ["React", "CSS3"],
          description:
            "<p>Simple game to practice React and CSS animations.</p>",
          web: "https://memory-game-vanilna.netlify.com/",
          code: "https://github.com/Vanilna/memory-game"
        },
        {
          name: "Kate Blog",
          technologies: ["Bootstrap", "HTML5"],
          description:
            "<p>Copied blog from the original for learning reasons (learning Bootstrap).</p>",
          web: "https://vanilna.github.io/Kate-blog/",
          code: "https://github.com/Vanilna/Kate-blog"
        }
      ]
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
    const context = this;
    this.$refs.iframe.addEventListener(
      "load",
      function() {
        context.toggleCover();
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
