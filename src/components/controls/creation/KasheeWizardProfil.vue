<template>
  <v-container>
    <h2>Profil, traits, etc.</h2>
  </v-container>
</template>
<script>
export default {
  name: 'kashee-wizard-profil',

  computed: {
    civilStatus: function () {
      return this.$store.state.character.current.civilStatus
    },
    firstName: {
      get: function () {
        return this.civilStatus.firstName
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            firstName: value
          }
        })
      }
    }
  }
}
</script>

