export default {
  namespaced: true,
  state: {
    current: null
  },
  mutations: {
    setCharacter (state, character) {
      state.current = character
    },
    changeStat (state, params) {
      state.current.stats[params.stat].current = params.value
    }
  },
  actions: {
    loadCharacter (context, character) {
      context.commit('setCharacter', character)
    },
    changeStat (context, params) {
      context.commit('changeStat', params)
    }
  }
}
