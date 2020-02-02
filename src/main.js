import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import AlertCmp from './shared/Alert.vue'
import * as firebase from 'firebase'

Vue.component('app-alert', AlertCmp)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    let config = {
      // databaseURL: "https://tasttrial.firebaseio.com",
      // ================================================
      apiKey: 'AIzaSyBSu_0DcjTPcmaDr4s4pYlnxs-CMF_8Sl0',
      authDomain: 'vuetesting-8e78a.firebaseapp.com',
      databaseURL: 'https://vuetesting-8e78a.firebaseio.com',
      projectId: 'vuetesting-8e78a',
      storageBucket: 'vuetesting-8e78a.appspot.com',
      messagingSenderId: '597708629284'

    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignin', user)
      }
    })
  }
}).$mount('#app')
