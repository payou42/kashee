<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.path">
        <v-list-tile-action>
          <v-icon light v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'kashee-nav',
  data () {
    return {
      items: [
        { icon: 'home', title: 'Résumé', path: '/' },
        { icon: 'face', title: 'Bio & caractéristiques', path: '/bio' },
        { icon: 'list', title: 'Compétences', path: '/stats' },
        { icon: 'build', title: 'Inventaire', path: '/inventory' },
        { icon: 'people', title: 'Contacts', path: '/people' },
        { icon: 'assignment', title: 'Notes', path: '/notes' }
      ]
    }
  }
}
</script>
