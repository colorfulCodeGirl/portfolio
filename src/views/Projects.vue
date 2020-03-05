<template>
  <main class="content">
    <p class="decorText">Projects</p>
    <iframe class="iframe" :src="projects[activeId].web"></iframe>
    <Project
      v-for="(project, index) in projects"
      :isActive="index === activeId"
      class="poject"
      :project="project"
      :key="project.name"
    />
  </main>
</template>
<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15% repeat(5, 1fr);
  grid-template-rows: auto;
}
.decorText {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 0;
  margin: 0;
  justify-self: center;
}
.iframe {
  grid-column: 2 / 5;
  grid-row: 1 / 4;
  border: 1px solid #ffffff;
  height: 60vh;
  width: 100%;
}
.project {
  grid-column: 5 / 7;
  grid-row: span 1;
}
</style>
<script>
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: { Project },
  data: function() {
    return {
      activeId: 0,
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
          web: "https://vanilna.github.io/react-form/",
          code: "https://github.com/Vanilna/react-form"
        },
        {
          name: "Mobile navigation",
          technologies: ["SASS", "JavaScript", "HTML5"],
          description:
            "Mobile navigation created by the project of Aurélien Salomon for Orizon.",
          web: "https://vanilna.github.io/mobileNav/",
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
          web: "https://vanilna.github.io/balls-and-desk/",
          code: "https://github.com/Vanilna/balls-and-desk"
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
  }
};
</script>
