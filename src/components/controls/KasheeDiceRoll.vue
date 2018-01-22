<template>
  <v-menu offset-y>
    <v-btn icon :disabled="disabled" class="ma-0" slot="activator"><v-icon>rotate_right</v-icon></v-btn>
    <v-card v-if="!disabled">
      <v-card-text class="pa-1">
        <v-subheader class="text-xs-center"><strong>{{ name }}</strong></v-subheader>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="check(current, 0)">+0</v-btn>
        <v-btn fab small @click="check(current, 1)">+1</v-btn>
        <v-btn fab small @click="check(current, 2)">+2</v-btn>
        <v-btn fab small @click="check(current, 3)">+3</v-btn>   
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="check(current, -1)">-1</v-btn>
        <v-btn fab small @click="check(current, -2)">-2</v-btn>
        <v-btn fab small @click="check(current, -3)">-3</v-btn>
        <v-btn fab small @click="check(current, -4)">-4</v-btn>
        <v-btn fab small @click="check(current, -5)">-5</v-btn>
        <v-btn fab small @click="check(current, -6)">-6</v-btn>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" lazy absolute :width="540">
      <v-card>
        <v-card-title>
          <div class="headline">Lancer de dés pour {{ name }}</div>
        </v-card-title>
        <v-card-text>Valeur à atteindre: {{ current }}</v-card-text>
        <v-card-text v-if="testResult && testResult.modifiers > 0">Bonus: +{{ testResult.modifiers }}</v-card-text>
        <v-card-text v-if="testResult && testResult.modifiers < 0">Malus: {{ testResult.modifiers }}</v-card-text>
        <v-card-text v-if="testResult">Lancer: {{ testResult.roll }}</v-card-text>
        <v-card-text v-if="testResult">Résultat: <span style="text-weight: bold">{{ testResult.state }}</span></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green--text darken-1" flat="flat" @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-menu>
</template>

<script>
import KasheeDiceRoller from '@/mixins/KasheeDiceRoller'

export default {
  name: 'kashee-dice-roll',
  mixins: [
    KasheeDiceRoller
  ],
  props: {
    name: {
      default: 'Test',
      type: String
    },
    current: {
      default: 0,
      type: Number
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      dialog: false,
      testResult: null
    }
  },
  methods: {
    check: function (value, modifiers) {
      this.testResult = this.test(value, modifiers)
      this.dialog = true
      this.$emit('test', this.testResult)
    }
  }
}
</script>
