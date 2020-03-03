<template>
  <main class="content">
    <p class="decorText">Projects</p>
    <iframe class="iframe" :src="projects[activeId].web"></iframe>
    <Project
      v-for="(project, index) in projects"
      :isActive="index === activeId"
      :project="project"
      :key="project.name"
    />
  </main>
</template>
<style scoped></style>
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
