<template>
  <div class="Dashboard">
    <beer
      v-bind:key="beer.name"
      v-for="beer in beers"
      v-bind:name="beer.name"
      v-bind:malts="beer.malts"
      v-bind:hops="beer.hops"
      v-bind:yeasts="beer.yeasts"
      v-bind:gravities="beer.gravities"
    />
  </div>
</template>

<script>
import Beer from '@/components/Beer'
export default {
  components: {
    'beer': Beer
  },
  name: 'Dashboard',
  data: function () {
    return {
      beers: [{
        'name': 'Old Ale 1',
        'malts': [
          '7 lbs. Amber LME',
          '7 lbs. Light LME',
          '32 oz. Crystal 15°',
          '20 oz. Crystal 60°',
          '8 oz. Crystal 120°',
          '4 oz. Black patent'
        ],
        'hops': [
          '2.25 oz. German Northern Brewer (9.3% AA) @ 60 min.',
          '1.0 oz. Fuggle (5.0% AA, 2.8% BA) @ 30 min.',
          '1.0 oz. Fuggle (5.0% AA, 2.8% BA) @ 15 min.'
        ],
        'yeasts': ['Imperial A01 House'],
        'gravities': [
          ['20180408', 1.089],
          ['20180427', 1.022]
        ]
      }]
    }
  }
}
</script>

<style scoped>

</style>
