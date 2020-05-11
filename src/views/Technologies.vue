<template>
  <main class="content">
    <scale-transition><p class="decorText">Technologies</p></scale-transition>
    <transition-group
      class="technologies"
      name="technologies"
      tag="section"
      @appear="appear"
      :css="false"
    >
      <technology
        v-for="(technology, index) in webTechnologies"
        :key="technology"
        :tech="technology"
        :data-index="index"
      />
    </transition-group>
    <h2 class="sectionHeading">Design</h2>
    <transition-group
      class="technologies"
      name="technologies"
      tag="section"
      @appear="appear"
      :css="false"
    >
      <technology
        v-for="(technology, index) in design"
        :key="technology"
        :tech="technology"
        :data-index="index"
      />
    </transition-group>
  </main>
</template>

<script>
import gsap from "gsap";
import Technology from "@/components/Technology.vue";
import ScaleTransition from "@/utils/ScaleTransition.vue";

export default {
  name: "Technologies",
  components: { Technology, ScaleTransition },
  data: () => {
    return {
      webTechnologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux",
        "Webpack",
        "Jest",
        "React Testing Library",
        "Git",
        "Vue",
        "SASS",
        "Styled Components",
        "Storybook",
        "Bootstrap",
        "BEM",
        "npm",
        "ESLint",
        "Prettier",
      ],
      design: ["Photoshop", "Adobe XD", "CorelDraw", "inDesign"],
    };
  },
  methods: {
    appear: function(el, done) {
      const delay = el.dataset.index * 0.05;
      gsap.from(el, {
        scale: 0,
        y: -60,
        delay,
        duration: 1.5,
        ease: "back.out(1)",
      });
      done();
    },
  },
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
@media (min-width: 600px) {
  .decorText {
    margin: 0;
  }
  .technologies {
    grid-column: 3 / 6;
    margin: 0;
  }
}
</style>
