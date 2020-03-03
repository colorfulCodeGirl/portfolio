<template>
  <div class="project" :class="{ active: isActive }">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <a :href="project.web">web</a>
    <a :href="project.code">code</a>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "Project",
  props: {
    project: Object,
    isActive: Boolean
  }
};
</script>
