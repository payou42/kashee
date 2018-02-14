import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/KasheeHome'
import Bio from '@/components/pages/KasheeBio'
import Stats from '@/components/pages/KasheeAllStats'
import Inventory from '@/components/pages/KasheeInventory'
import People from '@/components/pages/KasheePeople'
import Notes from '@/components/pages/KasheeNotes'
import KasheeCreationWizard from '@/components/pages/KasheeCreationWizard'
/* controls for wizard creation */
import KasheeWizardBio from '@/components/controls/creation/KasheeWizardBio'
import KasheeWizardPortrait from '@/components/controls/creation/KasheeWizardPortrait'
import KasheeWizardCharacteristics from '@/components/controls/creation/KasheeWizardCharacteristics'
import KasheeWizardAge from '@/components/controls/creation/KasheeWizardAge'
import KasheeWizardValues from '@/components/controls/creation/KasheeWizardValues'
import KasheeWizardMove from '@/components/controls/creation/KasheeWizardMove'
import KasheeWizardOccupation from '@/components/controls/creation/KasheeWizardOccupation'
import KasheeWizardOccupationSkills from '@/components/controls/creation/KasheeWizardOccupationSkills'
import KasheeWizardPersonnalSkills from '@/components/controls/creation/KasheeWizardPersonnalSkills'
import KasheeWizardBattle from '@/components/controls/creation/KasheeWizardBattle'
import KasheeWizardProfil from '@/components/controls/creation/KasheeWizardProfil'
import KasheeWizardFinances from '@/components/controls/creation/KasheeWizardFinances'
import KasheeWizardInventory from '@/components/controls/creation/KasheeWizardInventory'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/bio', name: 'Bio', component: Bio },
    { path: '/stats', name: 'Stats', component: Stats },
    { path: '/inventory', name: 'Inventory', component: Inventory },
    { path: '/people', name: 'People', component: People },
    { path: '/notes', name: 'Notes', component: Notes },
    { path: '/creation-wizard',
      component: KasheeCreationWizard,
      children: [
        { path: '',
          components: {
            bio: KasheeWizardBio,
            portrait: KasheeWizardPortrait,
            characteristics: KasheeWizardCharacteristics,
            age: KasheeWizardAge,
            otherValues: KasheeWizardValues,
            move: KasheeWizardMove,
            occupation: KasheeWizardOccupation,
            skill1: KasheeWizardOccupationSkills,
            skill2: KasheeWizardPersonnalSkills,
            battle: KasheeWizardBattle,
            profil: KasheeWizardProfil,
            finances: KasheeWizardFinances,
            inventory: KasheeWizardInventory
          }
        }
      ]
    }
  ]
})
