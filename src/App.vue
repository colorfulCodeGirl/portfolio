<template>
  <div class="app">
    <Navigation />
    <transition @leave="leave" mode="out-in">
      <router-view />
    </transition>
    <Footer />
    <div class="credentials">
      <a href="https://www.freepik.com/free-photos-vectors/background"
        >Background by Harryarts - www.freepik.com</a
      >
    </div>
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
  background-image: linear-gradient(140deg, #141618 60%, transparent 99%),
    linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
    url("./assets/background.svg");
  background-size: 60%;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  font-family: "Open Sans", sans-serif;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
}

@media (orientation: portrait) {
  .app {
    background-size: 100%;
    background-image: linear-gradient(120deg, #141618 70%, transparent 99%),
      linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
      url("./assets/background.svg");
  }
}

@media (orientation: portrait) and (min-width: 700px) {
  .app {
    background-image: linear-gradient(120deg, #141618 50%, transparent 99%),
      linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
      url("./assets/background.svg");
  }
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

.credentials {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem;
  font-size: 0.9rem;
}
.credentials a {
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: #ffd500;
}
</style>
