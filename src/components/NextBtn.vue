<template>
  <div class="d-grid gap-2 col-6 mx-auto" v-if="$store.state.isDisabled">
    <h3 class="text-center">
      {{ $store.state.remarks ? "Correct" : "Incorrect" }}
    </h3>

    


    <button
      class="btn btn-light border-dark text-dark"
      type="button"
      @click="$store.dispatch('nextQuestion')"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>