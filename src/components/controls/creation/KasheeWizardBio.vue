<template>
  <div>
    <h3>Identité de l'investigateur</h3>
    <em>Renseignez ici les informations de base de votre investigateur sur son identité</em>
    <v-layout row wrap>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field label="Prénom" v-model="firstName" hide-details ></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Nom" v-model="lastName"  hide-details></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Nom de code" v-model="codeName"  hide-details></v-text-field>
      </v-flex>

      <v-flex class="pa-2" md4 xs6>
        <v-select
          md4 xs6
          hide-details
          label="Sexe"
          :items="['Femme', 'Homme', 'Autre']"
          v-model="sex"
        >
        </v-select>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Lieu de résidence" v-model="place"  hide-details></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Lieu de naissance" v-model="birthPlace"  hide-details></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Date de naissance" v-model="birthDate" type="date" hide-details></v-text-field>
      </v-flex>
      <v-flex class="pa-2" md4 xs6>
        <v-text-field md4 xs6 label="Hobby" v-model="hobby"  hide-details></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  name: 'kashee-wizard-bio',

  computed: {
    civilStatus: function () {
      return this.$store.state.character.current.civilStatus
    },
    firstName: {
      get: function () {
        return this.civilStatus.firstName
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            firstName: value
          }
        })
      }
    },
    lastName: {
      get: function () {
        return this.civilStatus.lastName
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            lastName: value
          }
        })
      }
    },
    codeName: {
      get: function () {
        return this.civilStatus.codeName
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            codeName: value
          }
        })
      }
    },
    sex: {
      get: function () {
        return this.civilStatus.sex
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            sex: value
          }
        })
      }
    },
    place: {
      get: function () {
        return this.civilStatus.place
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            place: value
          }
        })
      }
    },
    birthPlace: {
      get: function () {
        return this.civilStatus.birthPlace
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            birthPlace: value
          }
        })
      }
    },
    birthDate: {
      get: function () {
        return this.civilStatus.birthDate
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            birthDate: value
          }
        })
      }
    },
    hobby: {
      get: function () {
        return this.civilStatus.hobby
      },
      set: function (value) {
        this.$store.dispatch('character/update', {
          civilStatus: {
            ...this.civilStatus,
            hobby: value
          }
        })
      }
    }
  }
}
</script>

