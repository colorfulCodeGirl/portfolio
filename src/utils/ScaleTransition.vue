<template>
  <transition @appear="appear">
    <slot></slot>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "ScaleTransition",
  methods: {
    appear: function(el, done) {
      gsap.from(el, {
        transformOrigin: "0% 0%",
        scaleY: 0,
        duration: 1.5
      });
      done();
    }
  }
};
</script>
