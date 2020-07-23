<template>
  <div class="card-skill">
    <div class="card-head">
      <div class="container-icon" v-for="(icon,key) in item.icon_urls" :key="`icon-language-${key}`">
        <img class="icon-language" :src="icon" />
      </div>
    </div>
    <div class="card-body">
      <div>
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">Experience: {{item.count_years}} years</p>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            :style="`width: ${item.percentage}%`"
            :aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSkill",
  props: ["item"]
};
</script>