<template>
  <v-layout row wrap fluid v-bind:style="{ width: width + 'px' }">
    <v-flex xs12>
      <p class="text-xs-center"><strong>~ Profil psychologique ~</strong></p>
    </v-flex>
    <v-flex xs12 v-if="traits">
      <v-layout row wrap class="ma-0 pa-0">
        <v-flex xs12>
          <code>Idéologie: {{ traits.ideology }}</code>
        </v-flex>
        <v-flex xs12 class="mt-2">
          <code>Personnes importantes: </code>
        </v-flex>
        <v-flex xs12 class="ml-4" v-for="(people, index) in traits.people" :key="'people-' + index">
          <code>- {{ people }}</code>
        </v-flex>
        <v-flex xs12 class="mt-2">
          <code>Biens importants: </code>
        </v-flex>
        <v-flex xs12 class="ml-4" v-for="(good, index) in traits.goods" :key="'goods-' + index">
          <code>- {{ good }}</code>
        </v-flex>
        <v-flex xs12 class="mt-2">
          <code>Traits: </code>
        </v-flex>
        <v-flex xs12 class="ml-4" v-for="(trait, index) in traits.traits" :key="'traits-' + index">
          <code>- {{ trait }}</code>
        </v-flex>
        <v-flex xs12 class="mt-2">
          <code>Phobies: </code>
        </v-flex>
        <v-flex xs12 class="ml-4" v-for="(phobia, index) in traits.phobias" :key="'phobias-' + index">
          <code>- {{ phobia }}</code>
        </v-flex>
        <v-flex xs12 class="mt-2"></v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'kashee-traits',
  props: {
    width: {
      default: 500,
      type: Number
    }
  },
  computed: {
    traits: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.profil
      }
      return null
    }
  }
}
</script>
