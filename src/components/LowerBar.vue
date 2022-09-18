<template>
  <footer>
    <div className="progress my-5 border border-dark ">
      <div
        className="progress-bar bg-dark progress-bar-striped"
        role="progressbar"
        :style="{ width: $store.getters.setCurrentPercentage + '%' }"
        aria-valuenow="15"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        Current - {{ $store.getters.setCurrentPercentage }}
      </div>
      <div
        className="progress-bar bg-secondary progress-bar-striped"
        role="progressbar"
        :style="{ width: $store.getters.setMaxPercentage + '%' }"
        aria-valuenow="30"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        Max - {{ $store.getters.setMaxPercentage }}
      </div>
      <div
        className="progress-bar lightgray progress-bar-striped"
        role="progressbar"
        :style="{ width: $store.getters.setMinPercentage + '%' }"
        aria-valuenow="20"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        Min - {{ $store.getters.setMinPercentage }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.lightgray {
  background-color: #a2a9af;
}
</style>