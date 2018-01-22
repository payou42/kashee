import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './components/App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
