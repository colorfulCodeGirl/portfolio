<template>
  <div class="app">
    <Navigation />
    <transition @leave="leave" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import gsap from "gsap";
import Navigation from "@/components/molecules/Navigation.vue";
import Footer from "@/components/molecules/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  data: () => ({
    scrollBarColor: "rgba(255, 255, 255, 0.5)"
  }),
  methods: {
    leave: function(el, done) {
      gsap.to(el.children, {
        duration: 0.6,
        autoAlpha: 0,
        y: "+=30",
        stagger: 0.2,
        onComplete: done
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,600,700&display=swap");

.app {
  background-color: #141618;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  box-sizing: border-box;
}

.app *,
.app *::before,
.app *::after {
  font-family: inherit;
  color: #ffffff;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255, 213, 0, 0.1);
}

.emfasized {
  color: rgba(255, 213, 0, 0.75);
  font-weight: 400;
}
</style>
