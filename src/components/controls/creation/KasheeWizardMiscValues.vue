<template>
  <div>
    <h2>Valeurs dérivés de vos caractéristiques</h2>
    <v-btn @click="generateValue" >Générer les valeurs</v-btn>
    <v-layout>
      <v-flex md4 xs2 class="ma-2" >
        <v-text-field 
          label="Vie" 
          :hint="`doit être égale à votre (TAI + CON) divisé par 10 = ${getHealth()}`"
          v-model="health"
          persistent-hint  
        ></v-text-field>
      </v-flex>
      <v-flex md4 xs2 class="ma-2" >
        <v-text-field 
          label="Magie" 
          :hint="`doit être égale à votre POU / 5 = ${getMagic()}`"
          v-model="magic"
          persistent-hint  
        ></v-text-field>
      </v-flex>
      <v-flex md4 xs2 class="ma-2" >
        <v-text-field 
          label="Santé Mentale" 
          :hint="`doit être égale à votre POU = ${getSanity()}`"
          v-model="sanity"
          persistent-hint  
        ></v-text-field>
      </v-flex>
      <v-flex md4 xs2 class="ma-2" >
        <v-text-field 
          label="Chance" 
          :hint="`Est déterminé aléatoirement`"
          v-model="luck"
          persistent-hint  
        ></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'kashee-wizard-misc-values',

  computed: {
    age: function () {
      return this.$store.state.character.current.civilStatus.age
    },
    charac: function () {
      return this.$store.state.character.current.specs
    },
    stats: function () {
      return this.$store.state.character.current.stats
    },
    health: {
      get: function () {
        return this.stats.health.current
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          stats: {
            ...this.stats,
            health: {
              name: 'Vie',
              current: value,
              max: value
            }
          }
        })
      }
    },
    magic: {
      get: function () {
        return this.stats.magic.current
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          stats: {
            ...this.stats,
            magic: {
              name: 'Magie',
              current: value,
              max: value
            }
          }
        })
      }
    },
    luck: {
      get: function () {
        return this.stats.luck.current
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          stats: {
            ...this.stats,
            luck: {
              name: 'Chance',
              current: value,
              initial: value,
              max: 99
            }
          }
        })
      }
    },
    sanity: {
      get: function () {
        return this.stats.sanity.current
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          stats: {
            ...this.stats,
            sanity: {
              name: 'Santé mentale',
              current: value,
              initial: value,
              max: 99
            }
          }
        })
      }
    },
    movment: {
      get: function () {
        return this.stats.movment.current
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          stats: {
            ...this.stats,
            movment: {
              name: 'Mouvement',
              current: value
            }
          }
        })
      }
    }
  },
  methods: {
    generateValue: function () {
      this.sanity = this.getSanity()
      this.magic = this.getMagic()
      this.health = this.getHealth()
      this.luck = this.getLuck()
      this.movment = this.getMovment()
    },
    getSanity: function () {
      return this.charac.pou.value
    },
    getMagic: function () {
      return (this.charac.pou.value / 5)
    },
    getHealth: function () {
      return Math.floor((this.charac.tai.value + this.charac.con.value) / 10)
    },
    getLuck: function () {
      let numberOfTry = 1
      if (this.age < 20) {
        numberOfTry = 2
      }
      let luck = 0
      for (let i = 0; i < numberOfTry; i++) {
        let value = 0
        for (let d = 0; d < 3; d++) {
          value += Math.floor(Math.random() * 6) + 1
        }
        luck = Math.max(luck, value * 5)
      }
      return luck
    },
    getMovment: function () {
      let move
      if (this.charac.for.value > this.charac.tai.value && this.charac.dex.value > this.charac.tai.value) {
        move = 9
      } else if (this.charac.for.value >= this.charac.tai.value || this.charac.dex.value >= this.charac.tai.value) {
        move = 8
      } else {
        move = 7
      }
      if (this.age > 39) {
        const ageMalus = Math.ceil(this.age / 10) - 3
        move -= ageMalus
      }
      return move
    }
  }
}
</script>
