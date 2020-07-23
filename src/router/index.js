import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Blog from "../views/Blog.vue";
import Store from "../views/Store.vue";
import Services from "../views/Services.vue";
import Experience from "../views/Experience.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/store",
    name: "store",
    component: Store
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  },
  {
    path: "/skills",
    name: "skills",
    component: Skills
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
