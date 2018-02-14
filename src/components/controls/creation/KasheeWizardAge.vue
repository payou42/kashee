<template>
  <div>
    <h3>Age de l'investigateur</h3>
    <em>En fonction de son age, le personnage disposera de bonus et/ou malus sur ses caractéristiques</em>
    <v-layout>
      <v-flex class="pa-2" md4 xs6>
          <v-text-field md4 xs6 label="Âge" type="number" v-model.number="age" suffix="ans"  hide-details></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md6 xs12>
        <ul class="pl-4" v-if="malusList.length > 0">
          <li :key="'malus-' + index" v-for="(malus, index) in malusList" >{{malus}}</li>
        </ul>
        <ul class="pl-4" v-else>
          <li>Pas de malus lié à l'âge de l'investigateur.</li>
        </ul>
        <ul class="pl-4" v-if="bonusList.length > 0">
          <li :key="'bonus-' + index" v-for="(bonus, index) in bonusList" >{{bonus}}</li>
        </ul>
        <ul class="pl-4" v-else>
          <li>Pas de bonus lié à l'âge de l'investigateur.</li>
        </ul>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'kashee-wizard-age',

  computed: {
    civilStatus: function () {
      return this.$store.state.character.current.civilStatus
    },
    age: {
      get: function () {
        return this.civilStatus.age
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            age: value
          }
        })
      }
    },
    bonusList: function () {
      if (this.age < 20) {
        return [
          'Vous avez plus de chance (la chance sera généré à l\'étape suivante)'
        ]
      } else if (this.age < 40) {
        return [
          'Faites 1 test d\'expérience en EDU'
        ]
      } else if (this.age < 50) {
        return [
          'Faites 2 tests d\'expérience en EDU'
        ]
      } else if (this.age < 60) {
        return [
          'Faites 3 tests d\'expérience en EDU'
        ]
      } else {
        return [
          'Faites 4 tests d\'expérience en EDU'
        ]
      }
    },
    malusList: function () {
      if (this.age < 20) {
        return [
          'Retirez 5 points entre la FOR et la TAI',
          'Retirez 5 points en EDU'
        ]
      } else if (this.age < 40) {
        return []
      } else if (this.age < 50) {
        return [
          'Retirez 5 points entre la FOR, la CON et la DEX.',
          'Retirez 5 points en APP',
          'Votre mouvement sera réduit de 1'
        ]
      } else if (this.age < 60) {
        return [
          'Retirez 10 points entre la FOR, la CON et la DEX.',
          'Retirez 10 points en APP',
          'Votre mouvement sera réduit de 2'
        ]
      } else if (this.age < 70) {
        return [
          'Retirez 20 points entre la FOR, la CON et la DEX.',
          'Retirez 15 points en APP',
          'Votre mouvement sera réduit de 3'
        ]
      } else if (this.age < 80) {
        return [
          'Retirez 40 points entre la FOR, la CON et la DEX.',
          'Retirez 20 points en APP',
          'Votre mouvement sera réduit de 4'
        ]
      } else {
        return [
          'Retirez 80 points entre la FOR, la CON et la DEX.',
          'Retirez 25 points en APP'
        ]
      }
    }
  }
}
</script>

