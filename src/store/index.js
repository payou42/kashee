import Vue from 'vue'
import Vuex from 'vuex'
import Character from './modules/character'
import Layout from './modules/layout'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    character: Character,
    layout: Layout
  }
})
