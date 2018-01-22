7<template>
  <v-toolbar fixed>
    <v-menu offset-y>
      <v-btn icon slot="activator"><v-icon>menu</v-icon></v-btn>
      <v-list>
        <v-list-tile v-for="chara in all" :key="chara.name" @click="loadCharacter(chara.file)">
          <v-list-tile-title class="text-xs-center">{{ chara.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title>{{ loaded ? character : "Pas de perso" }}</v-toolbar-title>
    <a v-if="loaded" ref="downloadLink" style="margin-left: 1em; text-decoration: none" href="" :download="file" icon @click="saveCharacter">
      <v-icon>cloud_download</v-icon>
    </a>
    <v-spacer></v-spacer>
    <kashee-jauge color="red" v-if="loaded" :level="health" @change="changeStat('health', $event)"></kashee-jauge>
    <kashee-jauge color="deep-purple" v-if="loaded" :level="sanity" @change="changeStat('sanity', $event)"></kashee-jauge>
    <kashee-jauge color="blue" v-if="loaded" :level="magic" @change="changeStat('magic', $event)"></kashee-jauge>
    <kashee-jauge color="green" v-if="loaded" :level="luck" @change="changeStat('luck', $event)"></kashee-jauge>   
  </v-toolbar>
</template>

<script>
import Characters from '@/assets/characters'
import KasheeJauge from '@/components/controls/KasheeJauge.vue'

export default {
  name: 'kashee-header',
  components: {
    KasheeJauge
  },
  data () {
    return {
      file: null
    }
  },
  computed: {
    all: function () {
      return Characters.all
    },
    loaded: function () {
      return (this.$store.state.character.current !== null)
    },
    character: function () {
      const civil = this.$store.state.character.current.civilStatus
      return civil.firstName + ' "' + civil.codeName + '" ' + civil.lastName
    },
    health: function () {
      return this.$store.state.character.current.stats.health
    },
    magic: function () {
      return this.$store.state.character.current.stats.magic
    },
    luck: function () {
      return this.$store.state.character.current.stats.luck
    },
    sanity: function () {
      return this.$store.state.character.current.stats.sanity
    }
  },
  methods: {
    loadCharacter: function (file) {
      const json = require('@/assets/' + file)
      this.$store.dispatch('character/loadCharacter', json)
      this.file = file
    },
    saveCharacter: function () {
      this.$refs.downloadLink.href = 'data:application/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(this.$store.state.character.current))
    },
    changeStat: function (stat, event) {
      this.$store.dispatch('layout/showMessage', { text: 'La stat ' + stat + ' devient ' + event.value })
      this.$store.dispatch('character/changeStat', { stat: stat, value: event.value })
    }
  }
}
</script>
