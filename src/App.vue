<template>
  <div class="app">
    <Navigation />
    <main></main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,700&display=swap");

.app {
  background-color: #141618;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
}

.app > * {
  font-family: inherit;
}
</style>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
