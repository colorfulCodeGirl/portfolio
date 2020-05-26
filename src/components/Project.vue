<template>
  <section class="projectWrapper">
    <img :src="img" :alt="title" />
    <h2 class="title">{{ title }}</h2>
    <p>technologies</p>
    <p>description</p>
    <p>buttons</p>
  </section>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    title: String
  }
};
</script>

<style scoped>
.projectWrappe {
  border: 0.2rem solid #ffd500;
  border-radius: 2rem;
  background-color: transparent;
  margin-top: 3rem;
  margin-right: 3rem;
  width: 100%;
}

.prevue {
  position: relative;
  top: -3rem;
  right: -3rem;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.11);
}
</style>
