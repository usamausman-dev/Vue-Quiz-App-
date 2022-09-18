<template>
  <div class="row my-5">
    <div
      class="col-md-6 px-5 my-3"
      v-for="(options, index) in $store.getters.setOptions"
      :key="index"
    >
      <button
        class="btn btn-outline-dark w-100"
        type="button"
        :disabled="$store.state.isDisabled"
        @click="checkAnswer(index)"
      >
        {{ decodeURIComponent(options) }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["checkAnswer"]),
  },
};
</script>

<style>
</style>