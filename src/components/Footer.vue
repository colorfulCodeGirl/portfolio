<template>
  <footer class="footer">
    <Logo class="logo" />
    <div class="navigation">
      <router-link to="/projects" class="navLink">Projects</router-link>
      <span>|</span>
      <router-link to="/technologies" class="navLink">Technologies</router-link>
      <span>|</span>
      <router-link to="/contact" class="navLink">Contact</router-link>
    </div>
    <hr class="line" />
    <div class="contactLinks">
      <a class="link" href="https://github.com/Vanilna">
        <img class="contactLink" src="../assets/contact/github.svg" alt="github" />
      </a>
      <a class="link" href="https://www.linkedin.com/in/o-vytiahlovska/">
        <img class="contactLink" src="../assets/contact/linkedin.svg" alt="linkedin" />
      </a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 0.8rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (orientation: landscape) and (min-width: 600px) {
  .footer {
    padding-top: 5rem;
  }
}
.logo {
  max-width: 30%;
  height: 10vh;
}
.navigation {
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;
}
.navLink {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  color: #ffffff;
}
@media (min-width: 700px) and (orientation: portrait) {
  .navigation {
    max-width: 90%;
    width: auto;
  }
  .navLink {
    padding: 0 0.9rem;
  }
}
.line {
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(112, 112, 112, 0),
    rgba(112, 112, 112, 0.75),
    rgba(112, 112, 112, 0)
  );
}
.contactLinks {
  padding: 1rem 0;
  width: 25%;
  display: flex;
  justify-content: space-between;
}
.contactLink {
  height: 5vh;
}
@media (orientation: landscape) {
  .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
  .navigation {
    width: 35%;
  }
  .navLink {
    font-size: 1.2rem;
  }
  .contactLinks {
    width: 8%;
  }
}
</style>

<script>
import Logo from "@/components/UI/Logo.vue";

export default {
  name: "Footer",
  components: {
    Logo
  }
};
</script>
