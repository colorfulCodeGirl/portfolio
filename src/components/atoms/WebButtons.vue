<template>
  <div class="links">
    <a class="link" :href="web" target="_blank">web</a>
    <a class="link" :href="code" target="_blank">code</a>
  </div>
</template>

<script>
export default {
  name: "WebButtons",
  props: {
    web: String,
    code: String
  }
};
</script>

<style scoped>
.links {
  display: flex;
  justify-content: flex-end;
}
.link {
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  background-color: #ffd500;
  border: none;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  margin-left: 0.5rem;
}
.link:focus {
  border: 1px solid #ffffff;
}
</style>
