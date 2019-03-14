import Vue from 'vue'
import Vuex from 'vuex'
// import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LOADING: false
  },
  mutations: {
    showLoading(state) {
      state.LOADING = true
    },
    hideLoading(state) {
      state.LOADING = false
    }
  },
  actions: {

  }
})