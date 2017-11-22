import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  color: 'pink'
}

const mutations = {
  SET_COLOR (state, color) {
    state.color = color
  }
}

export default new Vuex.Store({
  state, mutations
})
