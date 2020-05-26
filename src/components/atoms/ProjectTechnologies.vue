<template>
  <div>
    <inline-svg
      v-for="{ src, name } in techSrces"
      :src="src"
      :key="name"
      class="technologie"
      :aria-label="name"
      height="32px"
      width="32px"
    />
    <img
      v-for="{ src, name } in pngTech"
      :src="src"
      :key="name"
      :alt="name"
      class="technologie"
    />
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  name: "ProjectTechnologies",
  props: {
    technologies: Array
  },
  data: function() {
    return {
      pngTech: []
    };
  },
  components: { InlineSvg },
  computed: {
    techSrces: function() {
      const srces = this.technologies.reduce((srcArray, tech) => {
        try {
          const src = require(`@/assets/technologies/${tech}.svg`);
          if (src) {
            srcArray.push({ src, name: tech });
          }
        } catch {
          const src = require(`@/assets/technologies/${tech}.png`);
          this.pngTech.push({ src, name: tech });
        }
        return srcArray;
      }, []);
      return srces;
    }
  }
};
</script>

<style scoped>
.technologie {
  width: 2rem;
  padding-right: 0.5rem;
}
@media (orientation: landscape) and (max-width: 1000px) {
  .technologie {
    width: 1.8rem;
    padding-right: 0.3rem;
  }
}
</style>
