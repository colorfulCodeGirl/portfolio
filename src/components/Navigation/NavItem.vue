<template>
  <li class="item" @click="$emit('changeTab', item.index)">
    <a class="itemLink" :class="{ activeLink: active }" href="#">{{
      item.name
    }}</a>
    <hr class="line" :class="{ activeLine: active }" />
  </li>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-top: 0.9rem;
}

.itemLink {
  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.05rem;
}

.itemLink:focus,
.itemLink:active {
  border: none;
}

@media (min-width: 900px) {
  .itemLink {
    font-size: 1.3rem;
  }
}

.activeLink {
  color: #ffd500;
  transition: color 0.4s 0.3s linear;
}

.line {
  width: 100%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 213, 0, 0),
    rgba(255, 213, 0, 0.75),
    rgba(255, 213, 0, 0)
  );
  transform: scaleX(0);
  transition: transform 0.1s linear;
}

.activeLine {
  transform: scaleX(1);
  transition: transform 0.4s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>

<script>
export default {
  name: "NavItem",
  props: {
    item: Object,
    active: Boolean
  }
};
</script>
