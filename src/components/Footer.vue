<template>
  <footer class="footer">
    <Logo class="logo" />
    <div class="navigation">
      <a>Projects</a>
      <span>|</span>
      <a>Technologi</a>
      <span>|</span>
      <a>Contact</a>
    </div>
    <hr class="line" />
    <div class="contatLinks">
      <img src="../assets/contact/github.svg" alt="github" />
      <img src="../assets/contact/linkedin.svg" alt="linkedin" />
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  max-width: 30%;
  height: 10vh;
}
.navigation {
  display: flex;
  flex-basis: 80%;
  justify-content: space-between;
}
.line {
  width: 80%;
}
.contactLinks {
  margin: 0 auto;
}
@media (orientation: landscape) {
  .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
  .navigation {
    flex-basis: 50%;
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
