<template>
  <div>
    <h3>Caractéristique de l'investigateur</h3>
    <em>Les caractéristiques sont déterminés au hasard. Les valeurs vont de 15 à 90 pour la première ligne, et de 40 à 90 pour la seconde.</em>
    <v-layout align-end row>
      <v-flex class="pa-1">
        <v-btn @click="populateRollList1" >Tirer les valeurs aux hasard</v-btn>
      </v-flex>
      <v-flex class="pa-2" v-if="rollList1.length > 0">
        Nouvelles valeurs tirées:<br/>{{rollList1.join(', ')}}
      </v-flex>
      <v-flex class="pa-1" v-if="rollList1.length > 0">
        <v-btn @click="applyRollList1">Appliquer aux caractéristiques</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3 class="pa-3">
        <v-text-field label="FOR" v-model.number="charac_for" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="DEX" v-model.number="charac_dex" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="POU" v-model.number="charac_pou" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="CON" v-model.number="charac_con" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="APP" v-model.number="charac_app" ></v-text-field>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
    <v-layout align-end row>
      <v-flex class="pa-1">
        <v-btn @click="populateRollList2" >Tirer les valeurs aux hasard</v-btn>
      </v-flex>
      <v-flex class="pa-2" v-if="rollList2.length > 0">
        Nouvelles valeurs tirées:<br/>{{rollList2.join(', ')}}
      </v-flex>
      <v-flex class="pa-1" v-if="rollList2.length > 0">
        <v-btn @click="applyRollList2">Appliquer aux caractéristiques</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3 class="pa-3">
        <v-text-field label="EDU" v-model.number="charac_edu" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="TAI" v-model.number="charac_tai" ></v-text-field>
      </v-flex>
      <v-flex xs3 class="pa-3">
        <v-text-field label="INT" v-model.number="charac_int" ></v-text-field>
      </v-flex>
      <v-flex></v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'kashee-wizard-characteristics',

  data () {
    return {
      rollList1: [],
      rollList2: []
    }
  },

  computed: {
    charac: function () {
      if (this.$store.state.character.current) {
        return this.$store.state.character.current.specs
      }
      return null
    },
    charac_for: {
      get: function () {
        return this.charac.for.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            for: {
              name: this.charac.for.name,
              value: value
            }
          }
        })
      }
    },
    charac_dex: {
      get: function () {
        return this.charac.dex.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            dex: {
              name: this.charac.dex.name,
              value: value
            }
          }
        })
      }
    },
    charac_pou: {
      get: function () {
        return this.charac.pou.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            pou: {
              name: this.charac.pou.name,
              value: value
            }
          }
        })
      }
    },
    charac_con: {
      get: function () {
        return this.charac.con.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            con: {
              name: this.charac.con.name,
              value: value
            }
          }
        })
      }
    },
    charac_app: {
      get: function () {
        return this.charac.app.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            app: {
              name: this.charac.app.name,
              value: value
            }
          }
        })
      }
    },
    charac_edu: {
      get: function () {
        return this.charac.edu.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            edu: {
              name: this.charac.edu.name,
              value: value
            }
          }
        })
      }
    },
    charac_tai: {
      get: function () {
        return this.charac.tai.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            tai: {
              name: this.charac.tai.name,
              value: value
            }
          }
        })
      }
    },
    charac_int: {
      get: function () {
        return this.charac.int.value
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          specs: {
            ...this.charac,
            int: {
              name: this.charac.int.name,
              value: value
            }
          }
        })
      }
    },
    characList: function () {
      return Object.keys(this.$store.state.character.current.specs)
    }
  },

  methods: {
    applyRollList1: function () {
      this.charac_for = this.rollList1[0]
      this.charac_dex = this.rollList1[1]
      this.charac_pou = this.rollList1[2]
      this.charac_con = this.rollList1[3]
      this.charac_app = this.rollList1[4]
    },
    applyRollList2: function () {
      this.charac_edu = this.rollList2[0]
      this.charac_tai = this.rollList2[1]
      this.charac_int = this.rollList2[2]
    },
    populateRollList1: function () {
      this.rollList1 = []
      for (let i = 0; i < 5; i++) {
        let value = 0
        for (let d = 0; d < 3; d++) {
          value += Math.floor(Math.random() * 6) + 1
        }
        this.rollList1.push(value * 5)
      }
    },
    populateRollList2: function () {
      this.rollList2 = []
      for (let i = 0; i < 3; i++) {
        let value = 6
        for (let d = 0; d < 2; d++) {
          value += Math.floor(Math.random() * 6) + 1
        }
        this.rollList2.push(value * 5)
      }
    }
  }
}
</script>
