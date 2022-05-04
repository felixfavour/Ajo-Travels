export const state = () => ({
  places: [],
  popularPlaces: [],
  cities: [],
  reviews: [],
});

export const mutations = {
  setPlaces(state, placesData) {
    this.state.places = placesData;
  },
  setPopPlaces(state, popularPlacesData) {
    this.state.popularPlaces = popularPlacesData;
  },
  setCities(state, popularCities) {
    this.state.cities = popularCities;
  },
};

export const actions = {
  async getPopularPlaces({ commit }) {
    await this.$axios
      .get("/places/search/popular/")
      .then((res) => {
        var response = res.data.data;
        commit("setPopPlaces", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  async getTopCities({ commit }) {
    await this.$axios
      .get("/top-cities")
      .then((res) => {
        var response = res.data.data;
        commit("setCities", response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};

export const getters = {};
