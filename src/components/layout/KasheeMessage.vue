<template>
  <v-snackbar
    :timeout="timeout"
    :success="context === 'success'"
    :info="context === 'info'"
    :warning="context === 'warning'"
    :error="context === 'error'"
    :primary="context === 'primary'"
    :secondary="context === 'secondary'"
    v-model="visible"
  >
    {{ text }}
    <v-btn light flat @click.native="hideMe">Fermer</v-btn>
  </v-snackbar> 
</template>

<script>
export default {
  name: 'kashee-message',
  computed: {
    timeout: function () {
      return this.$store.state.layout.snackbar.timeout
    },
    text: function () {
      return this.$store.state.layout.snackbar.text
    },
    context: function () {
      return this.$store.state.layout.snackbar.context
    },
    visible: {
      get: function () {
        return this.$store.state.layout.snackbar.visible
      },
      set: function (newValue) {
        if (!newValue) {
          this.hideMe()
        }
      }
    }
  },
  methods: {
    hideMe: function () {
      this.$store.dispatch('layout/hideMessage')
    }
  }
}
</script>
