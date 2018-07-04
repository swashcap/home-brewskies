<template>
  <section>
    <beer-section-heading>{{ title }}</beer-section-heading>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
import BeerSectionHeading from '@/components/BeerSectionHeading'

export default {
  components: {
    'beer-section-heading': BeerSectionHeading
  },
  name: 'beer-attribute-list',
  props: ['title', 'items']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
