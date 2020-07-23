<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">{{data.navTitle}}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav">
          <li v-if="menu.home" class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li v-if="menu.experience" class="nav-item">
            <router-link class="nav-link" to="/experience">Experience</router-link>
          </li>
          <li v-if="menu.skills" class="nav-item">
            <router-link class="nav-link" to="/skills">Skills</router-link>
          </li>
          <li v-if="menu.services" class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li v-if="menu.projects" class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li v-if="menu.store" class="nav-item">
            <router-link class="nav-link" to="/store">Store</router-link>
          </li>
          <li v-if="menu.blog" class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li v-if="menu.contact" class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<script>
import Data from "@/config/landing.json";
import Menu from "@/config/menu.json";
export default {
  name: "Page",
  data() {
    return {
      menu: Menu,
      data: Data
    };
  }
};
</script>