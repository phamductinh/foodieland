import { createStore } from 'vuex'

const store = createStore({
  state: {
    aboutUsData: localStorage.getItem('aboutUsData') || null,
  },
  mutations: {
    setAboutUsData(state, payload) {
      if (payload) {
        state.aboutUsData = JSON.stringify(payload)
        localStorage.setItem('aboutUsData', JSON.stringify(payload))
      }
    },
  },
  actions: {
    updateAboutUsData({ commit }, data) {
      commit('setAboutUsData', data)
      console.log('Success', data)
    },
  },
  getters: {
    getAboutUsData(state) {
      return state.aboutUsData
    },
  },
})

export default store
