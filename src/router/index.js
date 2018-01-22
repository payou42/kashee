import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/KasheeHome'
import Bio from '@/components/pages/KasheeBio'
import Stats from '@/components/pages/KasheeAllStats'
import Inventory from '@/components/pages/KasheeInventory'
import People from '@/components/pages/KasheePeople'
import Notes from '@/components/pages/KasheeNotes'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/bio', name: 'Bio', component: Bio },
    { path: '/stats', name: 'Stats', component: Stats },
    { path: '/inventory', name: 'Inventory', component: Inventory },
    { path: '/people', name: 'People', component: People },
    { path: '/notes', name: 'Notes', component: Notes }
  ]
})
