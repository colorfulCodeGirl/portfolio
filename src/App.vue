<template>
  <div class="app">
    <vue-simple-scrollbar :scrollbarColor="scrollBarColor">
      <Navigation />
      <Projects />
      <Footer />
    </vue-simple-scrollbar>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,600,700&display=swap");

.app {
  background-color: #141618;
  font-family: "Open Sans", sans-serif;
  height: 100vh;
}

.app > * {
  font-family: inherit;
  color: #ffffff;
}
</style>

<script>
import VueSimpleScrollbar from "vue-simple-scrollbar";
import Navigation from "@/components/Navigation/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Projects from "@/views/Projects.vue";

export default {
  name: "App",
  components: {
    VueSimpleScrollbar,
    Navigation,
    Footer,
    Projects
  },
  data: () => ({
    scrollBarColor: "rgba(255, 255, 255, 0.5)"
  })
};
</script>
