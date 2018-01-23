<template>
  <v-layout row wrap>
    <v-flex md4 sm6 xs12>
      <kashee-skills :width="400" what="Médecine"></kashee-skills>
      <kashee-skills :width="400" what="Culture"></kashee-skills>
      <kashee-skills :width="400" what="Langues"></kashee-skills>
    </v-flex>
    <v-flex md4 sm6 xs12>
      <kashee-skills :width="400" what="Combat"></kashee-skills>
      <kashee-skills :width="400" what="Furtivité"></kashee-skills>
      <kashee-skills :width="400" what="Survie"></kashee-skills>
      <kashee-skills :width="400" what="Physique"></kashee-skills>
    </v-flex>
    <v-flex md4 sm6 xs12>
      <kashee-skills :width="400" what="Savoir-faire"></kashee-skills>
      <kashee-skills :width="400" what="Social"></kashee-skills>
      <kashee-skills :width="400" what="Surnaturel"></kashee-skills>
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeSkills from '@/components/controls/KasheeSkills.vue'

export default {
  name: 'kashee-all-stats',
  components: {
    KasheeSkills
  }
}
</script>
