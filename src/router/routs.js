import Home from "../views/Home.vue";
import Technologies from "../views/Technologies.vue";
import Contact from "../views/Contact.vue";

const routs = [
  { path: "/", component: Home },
  { path: "/technologies", component: Technologies },
  { path: "/contact", component: Contact }
];

export default routs;
