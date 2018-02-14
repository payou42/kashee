<template>
  <v-stepper v-if="currentCharacter" style="width:100%" v-model="wizard" vertical>
    <template v-for="(step, index) in wizardSteps">
      <v-stepper-step :key="'step-name-' + index" :step="index + 1" :complete="wizard > index + 1" :editable="wizard > index + 1">{{step.label}}</v-stepper-step>
      <v-stepper-content :key="'step-content-' + index"  :step="index + 1">
        <v-card class="mb-2 pa-2 grey lighten-3">
          <router-view :name="step.routeName" ></router-view>
        </v-card>
        <v-btn v-if="index < wizardSteps.length - 1" color="primary" @click.native="wizard++">Suivant</v-btn>
        <v-btn v-if="index > 0" @click.native="wizard--">Précédent</v-btn>
      </v-stepper-content>
    </template>
  </v-stepper>
</template>
<script>
export default {
  name: 'kashee-main-wizard',

  data () {
    return {
      wizard: 0,
      wizardSteps: [
        {label: 'Biographie', routeName: 'bio'},
        {label: 'Portrait', routeName: 'portrait'},
        {label: 'Caractéristiques', routeName: 'characteristics'},
        {label: 'Âge', routeName: 'age'},
        {label: 'Valeurs dérivées', routeName: 'otherValues'},
        {label: 'Occupation', routeName: 'occupation'},
        {label: 'Compétences d\'occupation', routeName: 'skill1'},
        {label: 'Compétences d\'intérêt personnel', routeName: 'skill2'},
        {label: 'Données de combat', routeName: 'battle'},
        {label: 'Profil', routeName: 'profil'},
        {label: 'Finances', routeName: 'finances'},
        {label: 'Equipement & possessions', routeName: 'inventory'}
      ]
    }
  },

  computed: {
    currentCharacter: function () {
      return this.$store.state.character.current
    }
  }
}
</script>
