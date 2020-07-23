<template>
  <x-page>
    <h1>Skills</h1>
    <div class="row">
      <div v-for="(skill,key) in skills" :key="key" class="col-lg-4" style="margin-top:10px">
        <CardSkill :item="skill" />
      </div>
    </div>
  </x-page>
</template>
<script>
import Skills from "@/config/skills.json";
import CardSkill from "@/components/CardSkill.vue";
export default {
  name: "Skills",
  components: { CardSkill },
  data() {
    return {
      skills: Skills
    };
  }
};
</script>