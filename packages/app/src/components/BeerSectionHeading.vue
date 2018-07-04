<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'beer-section-heading'
}
</script>

<style scoped>
h2 {
  font-weight: 500;
  margin: 0 0 .5rem;
}
</style>
