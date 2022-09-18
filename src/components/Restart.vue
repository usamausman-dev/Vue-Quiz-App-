<template>
  <div class="conatiner text-center">
    <h1 class="my-5">Thank you for Attempting the Quiz</h1>
    <h3>Score - {{ $store.state.score }}</h3>
    <h4>Percentage - {{ $store.getters.setCurrentPercentage }}%</h4>
    <button class="btn btn-dark mt-5" @click="this.$router.go(0)">
      Restart Quiz
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>