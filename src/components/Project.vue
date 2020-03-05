<template>
  <div class="project" :class="{ active: isActive }">
    <div class="heading">
      <h2 class="name">{{ project.name }}</h2>
      <img
        v-for="techSrc in techSrces"
        :src="techSrc"
        :key="techSrc"
        class="technologie"
      />
    </div>
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
  margin-right: 1rem;
}
.heading {
  display: flex;
}
.name {
  margin: 0;
  margin-bottom: 0.5rem;
  padding-right: 0.7rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
}
.technologie {
  width: 2rem;
  padding-right: 0.5rem;
}
.description {
  margin: 0;
  color: #ffffff;
}
.links {
  display: flex;
  justify-content: flex-end;
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
  },
  computed: {
    techSrces: function() {
      const srces = this.project.technologies.map(tech =>
        require(`../assets/technologies/${tech}.svg`)
      );
      return srces;
    }
  }
};
</script>
