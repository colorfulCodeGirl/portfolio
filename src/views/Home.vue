<template>
  <main>
    <first-screen />
    <projects />
  </main>
</template>

<script>
import FirstScreen from "@/components/organisms/FirstScreen.vue";
import Projects from "@/components/organisms/Projects/Projects.vue";

export default {
  name: "Home",
  components: {
    FirstScreen,
    Projects
  }
};
</script>

<style></style>
