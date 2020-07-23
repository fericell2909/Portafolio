<template>
  <div class="img-card-project">
    <div
      class="card-img-top"
      :style="`background:url('${project.image}');   background-repeat: no-repeat;
    background-size: 100% 100%; height:200px;`"
    ></div>
    <div class="card-body">
      <div>
        <h5 class="card-title">{{project.name}}</h5>
        <p
          class="card-text"
        >{{project.description.length>90?project.description.slice(0,90)+'...':project.description}}</p>
      </div>
      <a :href="project.url" target="_blank" class="btn btn-primary" style="margin-top:10px;">Go Project</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProject",
  props: ["project"]
};
</script>
<style>
</style>