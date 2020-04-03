<template>
  <main class="content">
    <scale-transition>
      <p class="decorText">Contact</p>
    </scale-transition>
    <div class="info-block">
      <div class="text">
        <p class="margin-top-0">
          I’m a goal-oriented person, who really wants to change career! I've
          self-studied web development for 2 years, made 1 big project and a
          couple of smaller ones, using JavaScript, React, CSS and HTML. I'm
          determined, I love to study and I love to code.
        </p>
        <p>
          Thanks to my previous work experience I’ve developed great
          communicative skills both with colleagues and with clients.
        </p>
      </div>
      <a class="link" href="https://github.com/Vanilna">
        <img class="linkImg" src="../assets/contact/github.svg" alt="github" />
        PORTFOLIO
      </a>
      <a class="link" href="https://www.linkedin.com/in/o-vytiahlovska/">
        <img
          class="linkImg"
          src="../assets/contact/linkedin.svg"
          alt="linkedin"
        />
        LINKEDIN
      </a>
      <a class="link" href="mailto:o.vytiahlovska@gmail.com">
        <img class="linkImg" src="../assets/contact/mail.svg" alt="mail" />
        o.vytiahlovska@gmail.com
      </a>
    </div>
    <transition @appear="appear">
      <picture class="portrait__wrapper">
        <source
          srcset="../assets/contact/oleksandra.jpg"
          media="(min-width: 600px)"
          alt="Alex Vytiahlovska"
          class="portrait__img portrait__img-big"
        />
        <img
          src="../assets/contact/oleksandra_250x250.jpg"
          alt="Alex Vytiahlovska"
          class="portrait__img"
        />
      </picture>
    </transition>
  </main>
</template>

<script>
import ScaleTransition from "@/utils/ScaleTransition.vue";
import gsap from "gsap";

export default {
  name: "Contact",
  components: { ScaleTransition },
  methods: {
    appear: function(el, done) {
      gsap.from(el, {
        transformOriginY: "0%",
        scale: 0.9,
        y: -60,
        duration: 1,
        ease: "back.out(1)"
      });
      done();
    }
  }
};
</script>
<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 15% repeat(5, 1fr);
  grid-template-rows: auto;
}
.decorText {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 0;
  margin: 0;
  justify-self: center;
}
.info-block {
  grid-column: 2 / 7;
  max-width: 80%;
  justify-self: center;
}
.portrait__img {
  width: 10rem;
  height: 10.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.2rem solid #ffd500;
}
.portrait__img-big {
  border: none;
}
.portrait__wrapper {
  grid-row: 1 / 2;
  grid-column: 2 / -1;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.linkImg {
  max-height: 100%;
  max-width: 100%;
  height: 1.7rem;
  padding: 0.7rem 0.5rem 0.7rem 0;
}
@media (min-width: 600px) {
  .margin-top-0 {
    margin-top: 0;
  }
  .info-block {
    grid-column: 3 / 5;
    max-width: 90%;
    justify-self: stretch;
  }
  .portrait__wrapper {
    grid-column: 5 / 6;
  }
  .portrait__img {
    width: 100%;
    height: auto;
    border-radius: 0;
    border: none;
  }
}
</style>
