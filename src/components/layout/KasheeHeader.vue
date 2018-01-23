<template>
  <v-toolbar>
    <v-menu offset-y>
      <v-btn icon slot="activator"><v-icon>menu</v-icon></v-btn>
      <v-list>
        <v-list-tile v-for="chara in all" :key="chara.name" @click="loadCharacter(chara.file)">
          <v-list-tile-title class="text-xs-center">{{ chara.name }}</v-list-tile-title>
        </v-list-tile>
        <!-- <v-list-tile @click="newCharacter()">
          <v-list-tile-title class="text-xs-center"><v-icon>add</v-icon>New character</v-list-tile-title>
        </v-list-tile> -->
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
    <v-dialog v-model="welcomeDialog">
      <v-card>
        <v-card-title>Choose your character</v-card-title>
        <v-card-text>
          <v-radio-group v-model="selectedChar">
            <v-radio
              v-for="(chara, index) in all"
              :key="index"
              :label="chara.name"
              :value="chara.file"
            ></v-radio>
          </v-radio-group>
          <v-layout flex row >
            <v-btn :enabled="selectedChar" @click.stop="loadCharacter(selectedChar)" >Open character</v-btn>
            <v-btn>Start wizard editor</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
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
      selectedChar: null,
      file: null,
      welcomeDialog: true
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
      if (civil.firstName || civil.codeName || civil.lastName) {
        return civil.firstName + ' "' + civil.codeName + '" ' + civil.lastName
      } else {
        return '[New character]'
      }
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
      this.welcomeDialog = false
    },
    newCharacter: function () {
      this.loadCharacter('new.json')
    },
    saveCharacter: function () {
      this.$refs.downloadLink.href = 'data:application/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(this.$store.state.character.current))
    },
    changeStat: function (stat, event) {
      this.$store.dispatch('layout/showMessage', { text: 'La stat ' + stat + ' devient ' + event.value })
      this.$store.dispatch('character/changeStat', { stat: stat, value: event.value })
    }
  },
  mounted: function () {
    // this.newCharacter()
  }
}
</script>
