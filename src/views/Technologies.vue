<template>
  <main class="content">
    <decor-text text="Technologies" class="decorText" />
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
import Technology from "@/components/molecules/Technology.vue";
import DecorText from "@/components/atoms/DecorText.vue";

export default {
  name: "Technologies",
  components: { Technology, DecorText },
  data: () => {
    return {
      webTechnologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux",
        "Redux Saga",
        "Vue",
        "TypeScript",
        "React Native",
        "Webpack",
        "Jest",
        "React Testing Library",
        "Git",
        "SASS",
        "Styled Components",
        "Storybook",
        "BEM",
        "Bootstrap",
        "npm",
        "ESLint",
        "Prettier"
      ],
      design: ["Photoshop", "Adobe XD", "CorelDraw", "inDesign"]
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
        ease: "back.out(1)"
      });
      done();
    }
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
  padding-top: 10.5rem;
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-column: 1 / 7;
  margin: 1.5rem 1rem;
}
.sectionHeading {
  grid-column: 1 / -1;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  padding-bottom: 2rem;
}
@media (min-width: 600px) {
  .content {
    padding-top: 15rem;
  }
  .technologies {
    grid-column: 3 / 6;
    margin: 0;
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .content {
    padding-top: 12rem;
  }
  .technologies,
  .sectionHeading {
    grid-column: 2 / 7;
    margin: 0 5rem;
  }
}
</style>
