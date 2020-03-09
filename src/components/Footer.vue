<template>
  <footer class="footer">
    <Logo class="logo" />
    <div class="navigation">
      <a href="#" class="navLink">Projects</a>
      <span>|</span>
      <a href="#" class="navLink">Technologi</a>
      <span>|</span>
      <a href="#" class="navLink">Contact</a>
    </div>
    <hr class="line" />
    <div class="contactLinks">
      <img
        class="contactLink"
        src="../assets/contact/github.svg"
        alt="github"
      />
      <img
        class="contactLink"
        src="../assets/contact/linkedin.svg"
        alt="linkedin"
      />
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 0.8rem;
  padding-top: 5rem;
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
  padding: 1rem 0;
  width: 90%;
  justify-content: space-between;
}
.navLink {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  color: #ffffff;
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
