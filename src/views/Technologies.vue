<template>
  <main class="content">
    <p class="decorText">Technologies</p>
    <section class="technologies">
      <technology
        v-for="technology in webTechnologies"
        :key="technology"
        :tech="technology"
      />
    </section>
  </main>
</template>

<script>
import Technology from "@/components/Technology.vue";

export default {
  name: "Technologies",
  components: { Technology },
  data: () => {
    return {
      webTechnologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux",
        "Webpack",
        "SASS",
        "Bootstrap",
        "BEM",
        "Git",
        "Vue",
        "npm",
        "ESLint",
        "Prettier"
      ]
    };
  }
};
</script>
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
.technologies {
  display: flex;
  flex-wrap: wrap;
  grid-column: 3 / 6;
}
</style>
