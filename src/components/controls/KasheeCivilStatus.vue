<template>
  <v-layout row wrap fluid v-bind:style="{ 'max-width': width + 'px' }">
    <v-flex xs12>
      <p class="text-xs-center"><strong>~ État Civil ~</strong></p>
    </v-flex>
    <v-flex xs8 v-if="civilStatus">
      <v-layout row wrap class="ma-0 pa-0">
        <v-flex xs12 class="mb-2">
          <code>{{ civilStatus.firstName + " \"" + civilStatus.codeName + "\" " + civilStatus.lastName }}</code>
        </v-flex>
        <v-flex xs12 class="mb-2">
          <code>Né le {{ civilStatus.birthDate }} à {{ civilStatus.birthPlace }}</code>
        </v-flex>
        <v-flex xs12 class="mb-2">
          <code>{{ civilStatus.sex === "M" ? "Homme" : "Femme" }}, {{ civilStatus.age }} ans, {{ civilStatus.place }}</code>
        </v-flex>
        <v-flex xs12 class="mb-2">
          <code>{{ civilStatus.job }}, {{ civilStatus.hobby }}</code>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs4 v-if="civilStatus">
      <img class="portrait" :src=" '/static/characters/' + civilStatus.picture ">     
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  name: 'kashee-civil-status',
  props: {
    width: {
      default: 500,
      type: Number
    }
  },
  computed: {
    civilStatus: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.civilStatus
      }
      return null
    }
  }
}
</script>

<style scoped>
.portrait {
  transform-origin: 0% 0%;
  transform: rotate(10deg) scale(0.5, 0.5);
}
</style>
