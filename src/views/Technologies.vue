<template>
  <main class="content">
    <p class="decorText">Technologies</p>
    <section class="technologies">
      <technology v-for="technology in webTechnologies" :key="technology" :tech="technology" />
    </section>
    <h2 class="sectionHeading">Design</h2>
    <section class="technologies">
      <technology v-for="technology in design" :key="technology" :tech="technology" />
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
      ],
      design: ["Photoshop", "Adobe XD", "CorelDraw", "inDesign"]
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
  margin-left: 1rem;
  margin-top: 1.5rem;
  justify-self: center;
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column: 2 / 7;
  margin: 1.5rem 1rem;
}
.sectionHeading {
  grid-column: 2 / -1;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 2rem;
}
@media (min-width: 600px) and (orientation: landscape) {
  .decorText {
    margin: 0;
  }
  .technologies {
    grid-column: 3 / 6;
    margin: 0;
  }
}
</style>
