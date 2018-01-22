<template>
  <v-menu offset-y>
    <div
      slot="activator"
      style="margin-left: 2px; margin-right: 2px"
      v-bind:style="{ width: width + 'em' }"
    >
      <div class="text-xs-center">{{ level.name }}</div>
      <v-progress-linear 
        :value="percent"
        :height="height"
        :color-front="color + ' darken-1'"
        :color-back="color + ' lighten-3'"
        v-bind:style="{ 'border-radius': round + 'px' }"
        style="margin-top: 0px"
      >
      </v-progress-linear>
    </div>
    <v-card>
      <v-card-text class="pa-1">
        <v-subheader class="text-xs-center">{{ level.name }}: {{ level.current }} / {{ level.max }}</v-subheader>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-text class="pa-1">   
        <v-subheader>Pertes</v-subheader>
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="loose('1')">1</v-btn>
        <v-btn fab small @click="loose('2')">2</v-btn>
        <v-btn fab small @click="loose('3')">3</v-btn>
        <v-btn fab small @click="loose('4')">4</v-btn>
        <v-btn fab small @click="loose('5')">5</v-btn>
        <v-btn fab small @click="change(0)">All</v-btn>         
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="loose('1d4')">1d4</v-btn>
        <v-btn fab small @click="loose('1d6')">1d6</v-btn>
        <v-btn fab small @click="loose('1d8')">1d8</v-btn>
        <v-btn fab small @click="loose('1d10')">1d10</v-btn>
        <v-btn fab small @click="loose('2d10')">2d10</v-btn>
        <v-btn fab small @click="loose('1d100')">1d100</v-btn>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-text class="pa-1">
        <v-subheader>Gains</v-subheader>            
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="gain('1')">1</v-btn>
        <v-btn fab small @click="gain('2')">2</v-btn>
        <v-btn fab small @click="gain('3')">3</v-btn>
        <v-btn fab small @click="gain('4')">4</v-btn>
        <v-btn fab small @click="gain('5')">5</v-btn>
        <v-btn fab small @click="change(level.max)">All</v-btn>        
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="gain('1d4')">1d4</v-btn>
        <v-btn fab small @click="gain('1d6')">1d6</v-btn>
        <v-btn fab small @click="gain('1d8')">1d8</v-btn>
        <v-btn fab small @click="gain('1d10')">1d10</v-btn>
        <v-btn fab small @click="gain('2d10')">2d10</v-btn>
        <v-btn fab small @click="gain('1d100')">1d100</v-btn>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-text class="pa-1">
        <v-subheader>Tests</v-subheader>            
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="check(level.current, 0)">+0</v-btn>
        <v-btn fab small @click="check(level.current, 1)">+1</v-btn>
        <v-btn fab small @click="check(level.current, 2)">+2</v-btn>
        <v-btn fab small @click="check(level.current, 3)">+3</v-btn>   
      </v-card-text>
      <v-card-text class="text-xs-center pa-1">
        <v-btn fab small @click="check(level.current, -1)">-1</v-btn>
        <v-btn fab small @click="check(level.current, -2)">-2</v-btn>
        <v-btn fab small @click="check(level.current, -3)">-3</v-btn>
        <v-btn fab small @click="check(level.current, -4)">-4</v-btn>
        <v-btn fab small @click="check(level.current, -5)">-5</v-btn>
        <v-btn fab small @click="check(level.current, -6)">-6</v-btn>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" lazy absolute :width="540">
      <v-card>
        <v-card-title>
          <div class="headline">Lancer de dés pour {{ level.name }}</div>
        </v-card-title>
        <v-card-text>Valeur à atteindre: {{ level.current }}</v-card-text>
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
  name: 'kashee-jauge',
  mixins: [
    KasheeDiceRoller
  ],
  props: {
    color: {
      default: 'red',
      type: String
    },
    level: {
      default: {},
      type: Object
    },
    width: {
      default: 10,
      type: Number
    },
    height: {
      default: 20,
      type: Number
    },
    round: {
      default: 5,
      type: Number
    }
  },
  data () {
    return {
      dialog: false,
      testResult: null
    }
  },
  computed: {
    percent: function () {
      return 100 * this.level.current / this.level.max
    }
  },
  methods: {
    loose: function (dices) {
      const result = this.roll(dices)
      const newValue = result.total > this.level.current ? 0 : this.level.current - result.total
      this.$emit('change', { value: newValue })
    },
    gain: function (dices) {
      const result = this.roll(dices)
      const newValue = result.total > (this.level.max - this.level.current) ? this.level.max : this.level.current + result.total
      this.$emit('change', { value: newValue })
    },
    change: function (value) {
      this.$emit('change', { value: value })
    },
    check: function (value, modifiers) {
      this.testResult = this.test(value, modifiers)
      this.dialog = true
      this.$emit('test', this.testResult)
    }
  }
}
</script>

