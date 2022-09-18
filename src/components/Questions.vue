<template>
  <h5>
    {{
      decodeURIComponent($store.state.questions[$store.state.current].question)
    }}
  </h5>
</template>

<script>
export default {};
</script>

<style>
</style>