<template>
  <v-layout row wrap fluid v-bind:style="{ width: width + 'px' }">
    <v-flex xs12>
      <p class="text-xs-center"><strong>{{ title }}</strong></p>
    </v-flex>
    <v-flex xs12 v-if="skills">
      <v-layout row wrap class="ma-0 pa-0">
        <template v-for="(skill, index) in skills">
          <v-flex xs8 :key="index + '_name'" class="mt-1">
            <code>{{ skill.name }}</code>
          </v-flex>
          <v-flex xs2 :key="index + '_value'" class="mt-1">
            <code><strong>{{ skill.value }}</strong></code>
          </v-flex>
          <v-flex xs2 :key="index + '_test'">
            <kashee-dice-roll :name="skill.name" :current="skill.value"></kashee-dice-roll>
          </v-flex>
          <template v-for="(speciality, index) in skill.specialities">
            {{speciality.name}}: {{speciality.value}}
          </template>
        </template>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import KasheeDiceRoll from '@/components/controls/KasheeDiceRoll.vue'

export default {
  name: 'kashee-skills',
  components: {
    KasheeDiceRoll
  },
  props: {
    width: {
      default: 500,
      type: Number
    },
    what: {
      default: 'all',
      type: String
    }
  },
  computed: {
    title: function () {
      if (this.what === 'all') {
        return '~ Compétences ~'
      }
      if (this.what === 'main') {
        return '~ Compétences principales ~'
      }
      if (this.what === 'secondary') {
        return '~ Compétences secondaires ~'
      }
      return this.what
    },
    skills: function () {
      if (this.$store.state.character.current) {
        let filtered = []
        switch (this.what) {
          case 'all': {
            filtered = this.$store.state.character.current.skills
            break
          }
          case 'main': {
            filtered = this.$store.state.character.current.skills.filter(s => s.main)
            break
          }
          case 'secondary': {
            filtered = this.$store.state.character.current.skills.filter(s => !s.main)
            break
          }
          default: {
            filtered = this.$store.state.character.current.skills.filter(s => s.group === this.what)
          }
        }
        return filtered.sort((a, b) => a.name.localeCompare(b.name))
      }
      return null
    }
  }
}
</script>
