<template>
  <v-layout row fluid wrap>
    <v-flex xs6>
      <kashee-civil-status :width="600"></kashee-civil-status>
      <kashee-traits :width="600"></kashee-traits>
    </v-flex>
    <v-flex xs6>
      <kashee-specs :width="600" class="mb-4"></kashee-specs>
      <kashee-stats :width="600"></kashee-stats>      
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeCivilStatus from '@/components/controls/KasheeCivilStatus.vue'
import KasheeTraits from '@/components/controls/KasheeTraits.vue'
import KasheeSpecs from '@/components/controls/KasheeSpecs.vue'
import KasheeStats from '@/components/controls/KasheeStats.vue'

export default {
  name: 'kashee-home',
  components: {
    KasheeCivilStatus,
    KasheeTraits,
    KasheeSpecs,
    KasheeStats
  }
}
</script>
