<template>
  <div class="project" :class="{ active: isActive }">
    <h2 class="heading">{{ project.name }}</h2>
    <p class="description">{{ project.description }}</p>
    <div class="links">
      <a class="link" :href="project.web" target="_blank">web</a>
      <a class="link" :href="project.code" target="_blank">code</a>
    </div>
    <hr class="line" />
  </div>
</template>
<style scoped>
.project {
  margin-left: 2rem;
}
.heading {
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
}
.description {
  margin: 0;
}
.links {
  display: flex;
  justify-content: end;
}
.link {
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  background-color: #ffd500;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  margin-left: 0.5rem;
}
.line {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 213, 0, 0),
    rgba(255, 213, 0, 0.75),
    rgba(255, 213, 0, 0)
  );
}
</style>
<script>
export default {
  name: "Project",
  props: {
    project: Object,
    isActive: Boolean
  }
};
</script>
