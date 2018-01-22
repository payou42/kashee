<template>
  <v-layout row fluid wrap>
    <v-flex xs4>
      <kashee-civil-status :width="400"></kashee-civil-status>
      <kashee-traits :width="400"></kashee-traits>
    </v-flex>
    <v-flex xs4>
      <kashee-stats :width="400"></kashee-stats>
      <kashee-specs :width="400"></kashee-specs>
    </v-flex>
    <v-flex xs4>
      <kashee-skills :width="400" what="main"></kashee-skills>
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeCivilStatus from '@/components/controls/KasheeCivilStatus.vue'
import KasheeTraits from '@/components/controls/KasheeTraits.vue'
import KasheeSpecs from '@/components/controls/KasheeSpecs.vue'
import KasheeStats from '@/components/controls/KasheeStats.vue'
import KasheeSkills from '@/components/controls/KasheeSkills.vue'

export default {
  name: 'kashee-home',
  components: {
    KasheeCivilStatus,
    KasheeTraits,
    KasheeSpecs,
    KasheeStats,
    KasheeSkills
  }
}
</script>
