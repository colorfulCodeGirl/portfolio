<template>
  <section class="projectWrapper">
    <img :src="img" :alt="title" class="prevue" />
    <article class="contentWrapper">
      <h2 class="title">{{ title }}</h2>
      <p>technologies</p>
      <div v-html="description"></div>
      <p>buttons</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Project",
  props: {
    img: String,
    title: String,
    description: String
  }
};
</script>

<style scoped>
.projectWrapper {
  border: 0.1rem solid #ffd500;
  border-radius: 1rem;
  background-color: transparent;
  margin-top: 3rem;
  margin-right: 3rem;
  width: calc(100% - 3rem);
  padding: 2rem;
  display: grid;
}

.prevue {
  grid-area: 1/ -1 / 1 / -1;
  justify-self: end;
  margin: -5rem -5rem 0 0;
  width: 80%;
  border-radius: 1rem;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.03);
}

.contentWrapper {
  grid-area: 1 / -1 / 1 / -1;
}
</style>
