<template>
  <v-layout row fluid wrap>
    <v-flex xs12>
      <kashee-main-wizard></kashee-main-wizard>
    </v-flex>
  </v-layout>
</template>
<script>
import Characters from '@/assets/characters'
import KasheeMainWizard from '@/components/controls/creation/KasheeMainWizard.vue'
export default {
  name: 'kashee-creation-wizard',

  components: {
    KasheeMainWizard
  },

  computed: {
    all: function () {
      return Characters.all
    }
  }
}
</script>
