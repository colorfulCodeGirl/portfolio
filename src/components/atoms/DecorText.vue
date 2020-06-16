<template>
  <transition @appear="enter">
    <p ref="text" class="decorText" v-html="textSeparated"></p>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "DecorText",
  props: {
    text: String
  },
  computed: {
    textSeparated: function() {
      const text = this.text.split("").join("</span><span>");
      return `<span>${text}</span>`;
    }
  },
  methods: {
    enter: function(el, done) {
      if (el.innerText === "Projects") return;
      const els = el.children;
      gsap.set(els, {
        display: "inline-block"
      });
      gsap.from(els, {
        transformOrigin: "100% 0",
        x: -20,
        y: 50,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.7,
        onComplete: done
      });
    }
  }
};
</script>

<style scoped>
.decorText {
  display: none;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  font-size: 3rem;
  letter-spacing: 1.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 0;
  margin: 0;
  margin-left: 1rem;
  margin-top: 1.5rem;
  justify-self: center;
  color: #000;
  opacity: 0.8;
  font-weight: 700;
}
@media (min-width: 600px) {
  .decorText {
    margin: 0;
  }
}
@media (min-width: 700px) and (orientation: portrait) {
  .decorText {
    display: block;
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .decorText {
    display: block;
  }
}
</style>
