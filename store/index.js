import VuexPersistence from 'vuex-persist'
import axios from 'axios'

function getPlugins () {
  const plugins = []

  if (process.browser) {
    const vuexLocal = new VuexPersistence({
      storage: window.localStorage
    })

    plugins.push(vuexLocal.plugin)
  }
  return plugins
}

export const plugins = getPlugins()

export const state = () => ({
  places: [],
  reviews: [],
  user: [],
  placeDetail: [],
  userDetails: [],
  images: [],
  similarPlaces: [],
  cityDetails: []
})

export const mutations = {
  setPlaces (state, placesData) {
    this.state.places = placesData
  },
  setPopPlaces (state, popularPlacesData) {
    this.state.popularPlaces = popularPlacesData
  },
  addReviews (state, reviews) {
    state.reviews = reviews
  },
  addUser (state, user) {
    state.user = user
  },
  addPlaceDetails (state, placeDetail) {
    state.placeDetail = placeDetail
  },
  addSimilarPlaces (state, similarPlaces) {
    state.similarPlaces = similarPlaces
  },
  setUserDetails (state, userDetails) {
    state.userDetails = userDetails
  },
  addCityDetails (state, cityDetails) {
    const cityDetailsData = { data: cityDetails }
    state.cityDetails = cityDetailsData
  }
}

export const getters = {
  async getPlaceReviews (state) {
    return await state.placeDetail.reviews
  }
}
