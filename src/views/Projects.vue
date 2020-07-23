<template>
  <x-page>
    <h1 class="title-pages" style="text-align:center; color:#1890ff">Projects Open Source</h1>
    <div class="row">
      <div v-for="(project,key) in projects" :key="key" class="col-lg-4" style="margin-top:10px">
        <CardProject :project="project" />
      </div>
    </div>
  </x-page>
</template>
<script>
import CardProject from "@/components/CardProject";
import Projects from "@/config/projects.json";
export default {
  name: "Projects",
  components: { CardProject },
  data() {
    return {
      projects: Projects
    };
  }
};
</script>
<style scoped>
.title-pages {
  font-family: "Bree Serif", serif;
}
</style>