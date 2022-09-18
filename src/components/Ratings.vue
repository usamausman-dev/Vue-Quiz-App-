<template>
  <div
    className="mb-3"
    v-if="$store.state.questions[$store.state.current].difficulty == 'easy'"
  >
    <Easy />
  </div>
  <div
    className="mb-3"
    v-else-if="
      $store.state.questions[$store.state.current].difficulty == 'medium'
    "
  >
    <Medium />
  </div>
  <div className="mb-3" v-else>
    <Hard />
  </div>
</template>

<script>
import Easy from "./Easy.vue";
import Medium from "./Medium.vue";
import Hard from "./Hard.vue";

export default {
  name: "Ratings",
  components: {
    Easy,
    Medium,
    Hard,
  },
};
</script>

<style>
</style>