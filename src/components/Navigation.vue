<template>
  <header class="header">
    <logo class="logo-img" />
    <h1 class="logo-text">ALEX VYTIAHLOVSKA</h1>
    <NavItem
      v-for="item in items"
      :item="item"
      :active="item.index === curentlyActiveInd"
      :key="item.index"
      @changeTab="handleTab"
    />
  </header>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  align-items: baseline;
}
.logo-text {
  font-weight: 300;
  font-size: 2rem;
  color: #ffffff;
  flex-basis: 40%;
}
</style>
<script>
import NavItem from "@/components/NavItem";
import Logo from "@/assets/logo.svg";

export default {
  name: "Navigation",
  components: { NavItem },
  data: () => {
    return {
      logo: Logo,
      items: [
        { name: "Projects", index: 0 },
        { name: "Technologies", index: 1 },
        { name: "Contact", index: 2 }
      ],
      curentlyActiveInd: 0
    };
  },
  methods: {
    handleTab: function(ind) {
      this.curentlyActiveInd = ind;
    }
  }
};
</script>
