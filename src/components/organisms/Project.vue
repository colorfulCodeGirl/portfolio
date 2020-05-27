<template>
  <section class="projectWrapper">
    <img :src="project.img" :alt="project.name" class="prevue" />
    <div class="lead">
      <h2 class="title">{{ project.name }}</h2>
      <project-technologies :technologies="project.technologies" />
    </div>
    <article class="content">
      <div v-html="project.description"></div>
      <web-buttons :code="project.code" :web="project.web" />
    </article>
  </section>
</template>

<script>
import ProjectTechnologies from "@/components/atoms/ProjectTechnologies.vue";
import WebButtons from "@/components/atoms/WebButtons.vue";

export default {
  name: "Project",
  props: {
    project: {
      name: String,
      technologies: Array,
      description: String,
      web: String,
      code: String,
      img: String
    }
  },
  components: {
    ProjectTechnologies,
    WebButtons
  }
};
</script>

<style scoped>
.projectWrapper {
  border: 0.1rem solid #ffd500;
  border-radius: 1rem;
  background-color: transparent;
  margin-top: 3rem;
  margin-right: 5rem;
  width: calc(100% - 5rem);
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 2fr 5fr;
}
.prevue {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
  margin: -4.5rem -4.5rem 0 0;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.05);
}
.lead {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin-right: -4rem;
}
.content {
  grid-column: 1 / -1;
}
.title {
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
}
</style>
