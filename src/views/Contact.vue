<template>
  <main class="content">
    <decor-text text="Contact" />
    <transition @appear="appear" :css="false">
      <div class="info-block">
        <div class="text">
          <p class="margin-top-0">
            Couple of years ago Web Development had become my true love. I've
            started a self-directed study, made 3 personal projects, and got a
            job as Middle Frontend Engineer at Anixe.
          </p>
          <p>
            I love the JAMstack approach and my main passions are React, Vue,
            React Native, and of course vanilla JavaScript. I'm also heavy into
            animations and the overall perfect look of projects.
          </p>
        </div>
        <a class="link" target="_blank" href="https://github.com/Vanilna">
          <inline-svg
            class="linkImg"
            :src="require('@/assets/contact/github.svg')"
            alt="github"
          />
          PORTFOLIO
        </a>
        <a
          class="link"
          target="_blank"
          href="https://www.linkedin.com/in/o-vytiahlovska/"
        >
          <inline-svg
            class="linkImg"
            :src="require('@/assets/contact/linkedin.svg')"
            alt="linkedin"
          />
          LINKEDIN
        </a>
        <a class="link" href="mailto:o.vytiahlovska@gmail.com">
          <inline-svg
            class="linkImg"
            :src="require('@/assets/contact/mail.svg')"
            aria-label="mail"
          />
          o.vytiahlovska@gmail.com
        </a>
      </div>
    </transition>
    <transition @appear="appear" :css="false">
      <picture class="portrait__wrapper">
        <source
          srcset="https://res.cloudinary.com/vanilna/image/upload/c_scale/dpr_auto/f_auto/q_auto/w_400/v1605551203/Portfolio/Alex"
          media="(min-width: 600px)"
          alt="Alex Vytiahlovska"
          class="portrait__img portrait__img-big"
        />
        <img
          src="https://res.cloudinary.com/vanilna/image/upload/f_auto,q_auto,w_250,h_250,r_max/v1605551200/Portfolio/Alex_sq"
          alt="Alex Vytiahlovska"
          class="portrait__img"
        />
      </picture>
    </transition>
  </main>
</template>

<script>
import gsap from "gsap";
import InlineSvg from "vue-inline-svg";
import DecorText from "@/components/atoms/DecorText.vue";

export default {
  name: "Contact",
  components: { DecorText, InlineSvg },

  methods: {
    appear: function(el, done) {
      gsap.from(el.children, {
        autoAlpha: 0,
        y: "-=30",
        duration: 0.5,
        stagger: 0.2,
        onComplete: done
      });
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
  padding-top: 10.5rem;
}
.info-block {
  grid-column: 1 / 7;
  max-width: 80%;
  justify-self: center;
}
.portrait__img {
  width: 10rem;
  height: 10.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.2rem solid #ffd500;
  box-shadow: 5px 5px 7px rgba(255, 255, 255, 0.05);
}
.portrait__wrapper {
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  margin: 0 auto;
}
.portrait__img-big {
  border: none;
}
.link {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.linkImg {
  height: 3rem;
  padding: 0.7rem 0.5rem 0.7rem 0;
}
@media (min-width: 600px) {
  .content {
    padding-top: 15rem;
  }
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
    border-radius: 0.5rem;
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.07);
  }
}
@media (orientation: landscape) and (min-aspect-ratio: 4/3) and (min-width: 500px) {
  .content {
    padding-top: 12rem;
  }
  .info-block {
    grid-column: 3 / 5;
  }
  .portrait__wrapper {
    grid-column: 5 / 6;
  }
}
</style>
