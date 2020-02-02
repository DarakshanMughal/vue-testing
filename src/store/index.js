import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    successMsg: 'Operation Successful',
    successFlag: false
  },

  getters: {
    user (state) {
      return state.user
    },
    successMsg (state) {
      return state.successMsg
    },
    successFlag (state) {
      return state.successFlag
    },
    error (state) {
      return state.error
    }
  },

  mutations: {
    setError (state, payload) {
      state.error = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    clearUser (state, payload) {
      state.user = null
    },
    clearError (state) {
      state.error = null
    },
    'SET_SUCCESS_MSG' (state, payload) {
      state.successFlag = !state.successFlag
      state.successMsg = payload
    }
  },

  actions: {
    // For Checking Snackbar
    // register ({ commit }, payload) {
    //   commit('SET_SUCCESS_MSG', 'Successfully Registered .')
    // },

    register ({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const userInfo = {
            userId: user.uid,
            name: payload.name,
            password: payload.password,
            email: payload.email
          }
          console.log('User', userInfo.id, userInfo.name, userInfo.password)
          commit('setUser', userInfo)
          commit('SET_SUCCESS_MSG', 'Successfully Registered .')
        }).catch(
          error => {
            commit('setError', error)
            console.log(error)
          })
    },
    autoSignin ({ commit }, payload) {
      commit('setUser', { id: payload.uid, email: payload.email })
    },
    login ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setUser', user)
          console.log('User', user)
        }).catch(
          error => {
            commit('setError', error)
            console.log(error)
          })
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
      console.log('Logout')
    }
  },

  modules: {
  }
})
