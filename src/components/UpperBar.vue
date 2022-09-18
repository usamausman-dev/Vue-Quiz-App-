<template>
  <div class="progress my-5">
    <div
      class="progress-bar bg-secondary progress-bar-striped"
      role="progressbar"
      :style="{ width: $store.getters.setBarPercentage + '%' }"
      aria-valuenow="10"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  name: "UpperBar",
  props: {
    question: String,
  },
};
</script>

<style>
</style>