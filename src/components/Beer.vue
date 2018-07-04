<template>
  <article class="Beer">
    <h1>{{ name }}</h1>
    <beer-attribute-list
      title="Malts"
      v-bind:items="malts"
    />
    <beer-attribute-list
      title="Hops"
      v-bind:items="hops"
    />
    <beer-attribute-list
      title="Yeast"
      v-bind:items="yeasts"
    />
    <beer-gravities-list v-bind:gravities="gravities" />
  </article>
</template>

<script>
import BeerAttributeList from '@/components/BeerAttributeList'
import BeerGravitiesList from '@/components/BeerGravitiesList'

export default {
  components: {
    'beer-attribute-list': BeerAttributeList,
    'beer-gravities-list': BeerGravitiesList
  },
  name: 'beer',
  props: [
    'name',
    'malts',
    'hops',
    'yeasts',
    'gravities'
  ]
}
</script>

<style scoped>
article {
  text-align: left;
}
h1 {
  font-size: 200%;
  font-weight: 200;
  margin: 0 0 1rem;
}
</style>
