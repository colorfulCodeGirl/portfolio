import Projects from "../views/Projects.vue";
import Technologies from "../views/Technologies.vue";
import Contact from "../views/Contact.vue";

const routs = [
  {
    path: "/",
    redirect: "/projects"
  },
  { path: "/projects", component: Projects },
  { path: "/technologies", component: Technologies },
  { path: "/contact", component: Contact }
];

export default routs;
