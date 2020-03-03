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
  max-height: 65vh;
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
          technologies: ["html", "css", "js", "webpack"],
          description:
            "An art gallery for a family of a famous Ukrainian artists. Such technologi stack was choosen to deepen my knowlage about fundamental technologies",
          web: "https://vytiahlovski.netlify.com/",
          code: "https://github.com/Vanilna/Vytiahlovski"
        },
        {
          name: "Quiz",
          technologies: ["html", "css", "js", "webpack"],
          description:
            "An art gallery for a family of a famous Ukrainian artists. Such technologi stack was choosen to deepen my knowlage about fundamental technologies",
          web: "https://vytiahlovski.netlify.com/",
          code: "https://github.com/Vanilna/Vytiahlovski"
        },
        {
          name: "Check-in form",
          technologies: ["html", "css", "js", "webpack"],
          description:
            "An art gallery for a family of a famous Ukrainian artists. Such technologi stack was choosen to deepen my knowlage about fundamental technologies",
          web: "https://vytiahlovski.netlify.com/",
          code: "https://github.com/Vanilna/Vytiahlovski"
        }
      ]
    };
  }
};
</script>
