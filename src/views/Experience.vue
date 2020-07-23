<template>
  <x-page>
    <h1 class="title">Experiences</h1>
    <a-timeline mode="alternate">
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="calendar" style="font-size: 16px;"  twoToneColor="#eb2f96" />
        <div class="card">
          <div class="card-body">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </div>
        </div>
      </a-timeline-item>
      <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>
        <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Technical testing 2015-09-01
      </a-timeline-item>
    </a-timeline>
  </x-page>
</template>
<script>
export default {
  name: "Experience"
};
</script>