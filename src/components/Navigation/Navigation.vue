<template>
  <header class="header">
    <Logo class="logo-img" />
    <h1 class="logo-text">ALEX VYTIAHLOVSKA</h1>
    <nav class="navItems">
      <NavItem v-for="item in items" :item="item" :key="item.index" />
    </nav>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  align-items: center;
  padding-bottom: 3rem;
}
.logo-text {
  flex-basis: 80%;
  font-weight: 300;
  font-size: 2rem;
  color: #ffffff;
  flex-basis: 30%;
}
.logo-img {
  max-width: 100%;
  height: 10vh;
}
.navItems {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
@media (orientation: landscape) {
  .header {
    max-width: 1200px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
  .logo-text {
    flex-basis: 30%;
  }
  .logo-img {
    flex-basis: 15%;
  }
  .navItems {
    width: auto;
    flex-basis: 40%;
    margin-left: auto;
  }
}
@media (min-width: 1200) {
  .header {
    padding: 0.8rem 0;
  }
}
</style>
<script>
import NavItem from "@/components/Navigation/NavItem.vue";
import Logo from "@/components/UI/Logo.vue";

export default {
  name: "Navigation",
  components: { NavItem, Logo },
  data: () => {
    return {
      items: [
        { name: "projects", index: 0 },
        { name: "technologies", index: 1 },
        { name: "contact", index: 2 }
      ]
    };
  }
};
</script>
