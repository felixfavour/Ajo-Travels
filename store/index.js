import VuexPersistence from 'vuex-persist'

function getPlugins() {
  const plugins = []

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage,
    })

    plugins.push(vuexLocal.plugin)
  }
  return plugins
}

export const plugins = getPlugins()

export const state = () => ({
  places: [],
  popularPlaces: [],
  cities: [],
  reviews: [],
  userDetails: [],
})

export const mutations = {
  setPlaces(state, placesData) {
    this.state.places = placesData
  },
  setPopPlaces(state, popularPlacesData) {
    this.state.popularPlaces = popularPlacesData
  },
  setCities(state, popularCities) {
    this.state.cities = popularCities
  },
  setUserDetails(state, val) {
    state.userDetails = val
  },
}

export const actions = {
  async getPopularPlaces({ commit }) {
    await this.$axios
      .get('/places/search/popular/')
      .then((res) => {
        var response = res.data.data
        commit('setPopPlaces', response)
      })
      .catch((err) => {
        console.log(err.message)
      })
  },

  async getTopCities({ commit }) {
    await this.$axios
      .get('/top-cities')
      .then((res) => {
        var response = res.data.data
        commit('setCities', response)
      })
      .catch((err) => {
        console.log(err.message)
      })
  },
}
