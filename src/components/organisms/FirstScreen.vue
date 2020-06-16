<template>
  <section class="first-screen">
    <vanilna class="vanilna" />
    <div class="greating">
      <transition @appear="appearGreationg">
        <h2 class="greating__heading">
          <span>Hi,</span><span> I'm <span class="emfasized">Alex</span></span
          ><span> and</span><span> I'm</span><span> looking</span
          ><span> for</span><span> new</span><span> challenges</span>
        </h2>
      </transition>
      <transition @appear="appearText">
        <p class="greating__body">
          I'm determined, I love to study and I love to code. I'm looking for
          great challenges and a great team to work and grow with.
        </p>
      </transition>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import Vanilna from "@/components/atoms/Vanilna.vue";

export default {
  name: "FirstScreen",
  components: {
    Vanilna
  },
  methods: {
    appearGreationg: function(el, done) {
      gsap.from(el.children, {
        x: -10,
        y: 20,
        autoAlpha: 0,
        delay: 1,
        duration: 0.5,
        stagger: 0.1,
        onComplete: done
      });
    },
    appearText: function(el, done) {
      gsap.from(el, {
        y: 50,
        delay: 2,
        autoAlpha: 0,
        duration: 1,
        onComplete: done
      });
    }
  }
};
</script>

<style scoped>
.first-screen {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 10.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #141618;
  background-image: linear-gradient(40deg, #141618 60%, transparent 99%),
    linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
    url("../../assets/background.svg");
  background-size: 100%;
  background-position: 100% 100%;
  background-repeat: no-repeat;
}
@media (orientation: portrait) {
  .first-screen {
    background-size: 200%;
    background-image: linear-gradient(20deg, #141618 70%, transparent 99%),
      linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
      url("../../assets/background.svg");
  }
}

@media (orientation: portrait) and (min-width: 700px) {
  .first-screen {
    background-image: linear-gradient(20deg, #141618 50%, transparent 99%),
      linear-gradient(140deg, rgba(20, 22, 24, 0.4), rgba(20, 22, 24, 0.6)),
      url("../../assets/background.svg");
  }
}
.first-screen::before,
.first-screen::after {
  position: absolute;
  top: 0;
  content: "";
  height: 100%;
  width: 2px;
  opacity: 0.2;
  background: #3f4564;
}
.first-screen::before {
  left: 8px;
}
.first-screen::after {
  right: 8px;
}
@media (min-width: 767px) {
  .first-screen::before {
    left: 16px;
  }
  .first-screen::after {
    right: 16px;
  }
}
@media (min-width: 1150px) {
  .first-screen::before {
    left: 64px;
  }
  .first-screen::after {
    right: 64px;
  }
}
.greating {
  margin: 4rem 0;
}
.greating__heading {
  font-size: 1.4rem;
  margin: 0;
}
.greating__heading span {
  display: inline-block;
  padding: 0 0.2rem;
}
.greating__body {
  display: none;
  opacity: 0.8;
}
.emfasized {
  font-weight: 700;
}
@media (min-width: 700px) and (orientation: portrait) {
  .first-screen {
    padding: 10.5rem 3rem 0;
  }
  .greating__heading span {
    padding: 0 0.2rem;
    font-size: 2rem;
  }
  .greating__body {
    display: block;
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .first-screen {
    flex-direction: row;
    padding: 0 7rem;
    align-items: center;
  }
  .vanilna {
    flex-basis: 55%;
    justify-self: start;
  }
  .greating {
    flex-basis: 45%;
    padding-left: 4rem;
  }
  .greating__heading {
    font-size: 2.5rem;
    margin: 0;
  }
  .greating__heading span {
    padding: 0 0.4rem;
  }
}
</style>
