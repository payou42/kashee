export default {
  namespaced: true,
  state: {
    snackbar: {
      timeout: 10000,
      visible: false,
      text: '',
      context: 'info'
    }
  },
  mutations: {
    hideMessage (state) {
      state.snackbar.visible = false
    },
    showMessage (state, message) {
      state.snackbar.timeout = message.timeout || 10000
      state.snackbar.text = message.text || ''
      state.snackbar.context = message.context || 'info'
      state.snackbar.visible = true
    }
  },
  actions: {
    hideMessage (context) {
      context.commit('hideMessage')
    },
    showMessage (context, message) {
      context.commit('showMessage', message)
    }
  }
}
