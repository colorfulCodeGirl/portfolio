import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router/routs";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ selector: to.hash });
        }, 2000);
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

Vue.config.productionTip = false;

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
