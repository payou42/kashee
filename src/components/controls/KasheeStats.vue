<template>
  <v-layout row wrap fluid v-bind:style="{ width: width + 'px' }">
    <v-flex xs12>
      <p class="text-xs-center"><strong>~ Statistiques ~</strong></p>
    </v-flex>
    <v-flex xs12 v-if="stats">
      <v-layout row wrap class="ma-0 pa-0">
        <template v-for="(stat, index) in stats">
          <v-flex xs6 :key="index + '_name'" class="mt-1">
            <code>{{ stat.name }}</code>
          </v-flex>
          <v-flex xs4 :key="index + '_value'" class="mt-1">
            <code v-if="stat.max != undefined"><strong>{{ stat.current + ' / ' + stat.max }}</strong></code>
            <code v-if="stat.current != undefined && !stat.max"><strong>{{ stat.current }}</strong></code>
            <code v-if="stat.temporary != undefined"><strong>{{ stat.temporary + ' temp' }}</strong></code>
            <code v-if="stat.permanent != undefined"><strong>{{ stat.permanent + ' perm' }}</strong></code>
          </v-flex>
          <v-flex xs2 :key="index + '_test'">
            <kashee-dice-roll :name="stat.name" :current="stat.current" :disabled="!stat.current || !stat.max"></kashee-dice-roll>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeDiceRoll from '@/components/controls/KasheeDiceRoll.vue'

export default {
  name: 'kashee-stats',
  components: {
    KasheeDiceRoll
  },
  props: {
    width: {
      default: 500,
      type: Number
    }
  },
  computed: {
    stats: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.stats
      }
      return null
    }
  }
}
</script>
