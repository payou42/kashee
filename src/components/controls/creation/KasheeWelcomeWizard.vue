<template>
  <v-card>
        <v-card-title>Choose your character</v-card-title>
        <v-card-text>
          <v-radio-group v-model="selectedChar">
            <v-radio
              v-for="(chara, index) in allCharacters"
              :key="index"
              :label="chara.name"
              :value="chara.file"
            ></v-radio>
          </v-radio-group>
          <v-layout flex row >
            <v-btn :disabled="!selectedChar" @click.stop="loadCharacter(selectedChar)" >Open character</v-btn>
            <v-btn :disabled="!selectedChar" @click.stop="startWizard(selectedChar)" >Start wizard editor</v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
</template>
<script>
export default {
  name: 'kashee-welcome-wizard',

  props: {
    allCharacters: {
      default: [],
      type: Array
    }
  },

  data () {
    return {
      selectedChar: null
    }
  },

  methods: {
    loadCharacter: function (character) {
      this.$emit('load', character)
    },
    startWizard: function (character) {
      this.$emit('wizard', character)
    }
  }
}
</script>

