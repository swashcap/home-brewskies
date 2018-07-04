<template>
  <section>
    <beer-section-heading>Gravities</beer-section-heading>
    <table>
      <tbody>
        <tr
          v-bind:key="gravity[0]"
          v-for="(gravity, index) in gravities"
        >
          <th scope="row">{{ formatDate(gravity[0]) }}:</th>
          <td>
            {{ gravity[1] }}
            <em v-if="index > 0">({{ getAbv(gravities[0][1], gravity[1]) }}%)</em>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import BeerSectionHeading from '@/components/BeerSectionHeading'

export default {
  components: {
    'beer-section-heading': BeerSectionHeading
  },
  methods: {
    /**
     * @param {string} date Expects a "YYYYMMDD" formatted date string
     * @returns {string} Hyphen-formatted date
     */
    formatDate: function (date) {
      return date.replace(/^(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
    },

    /**
     * @param {number} originalGravity Original gravity of wort, measured in degrees Plato
     * @param {number} specificGravity Final gravity of beer, measured in degrees Plato
     * @returns {number} Alcohol by volume
     */
    getAbv: function (originalGravity, specificGravity) {
      const og = originalGravity * 1000
      const tg = specificGravity * 1000
      return Math.round((og - tg) * 131.25 / 10) / 100
    }
  },
  name: 'beer-gravities-list',
  props: ['gravities']
}
</script>
