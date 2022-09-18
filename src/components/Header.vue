<template>
  <h3>
    Question {{ $store.state.current + 1 }} of
    {{ $store.state.questions.length }}
  </h3>

  <p className="text-secondary">
    {{
      decodeURIComponent($store.state.questions[$store.state.current].category)
    }}
  </p>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
</style>