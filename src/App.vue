<template>
  <div class="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

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

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  data: () => ({
    scrollBarColor: "rgba(255, 255, 255, 0.5)"
  })
};
</script>
