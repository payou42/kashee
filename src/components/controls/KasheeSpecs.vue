<template>
  <v-layout row wrap fluid v-bind:style="{ width: width + 'px' }">
    <v-flex xs12>
      <p class="text-xs-center"><strong>~ Caractéristiques ~</strong></p>
    </v-flex>
    <v-flex xs12 v-if="specs">
      <v-layout row wrap class="ma-0 pa-0">
        <template v-for="(spec, index) in specs">
          <v-flex xs6 :key="index + '_name'" class="mt-1">
            <code>{{ spec.name }}</code>
          </v-flex>
          <v-flex xs2 :key="index + '_index'" class="mt-1">
            <code>{{ index.toUpperCase() }}</code>
          </v-flex>
          <v-flex xs2 :key="index + '_value'" class="mt-1">
            <code><strong>{{ spec.value }}</strong></code>
          </v-flex>
          <v-flex xs2 :key="index + '_test'">
            <kashee-dice-roll :name="spec.name" :current="spec.value"></kashee-dice-roll>
          </v-flex>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeDiceRoll from '@/components/controls/KasheeDiceRoll.vue'

export default {
  name: 'kashee-specs',
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
    specs: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.specs
      }
      return null
    }
  }
}
</script>
