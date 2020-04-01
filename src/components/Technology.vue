<template>
  <div class="technology">
    <div class="imgWrapper">
      <inline-svg
        :src="src"
        class="techImg"
        v-if="isSvg"
        :aria-label="tech"
        height="6rem"
        width="6rem"
      ></inline-svg>
      <img :src="src" class="techImg" :alt="tech" v-else />
    </div>
    <p class="techText">{{ tech }}</p>
  </div>
</template>
<script>
import InlineSvg from "vue-inline-svg";

export default {
  name: "Technology",
  props: { tech: String },
  components: {
    InlineSvg
  },
  computed: {
    src: function() {
      let src;
      try {
        src = require(`../assets/technologies/${this.tech}.svg`);
      } catch {
        src = require(`../assets/technologies/${this.tech}.png`);
      }
      return src;
    },
    isSvg: function() {
      return this.src.includes(".svg");
    }
  }
};
</script>
<style scoped>
.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  padding: 0 0.5rem 2rem 0.5rem;
}
.imgWrapper {
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.techImg {
  max-width: 100%;
  max-height: 100%;
}
.techText {
  margin: 0;
  text-align: center;
}
@media (min-width: 600px) {
  .technology {
    width: 5rem;
    padding: 0 1rem 3rem 1rem;
  }
}
</style>
