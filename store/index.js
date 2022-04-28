import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

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
  getImages(imageData) {
    this.state.images = imageData;
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
  async getPlaceImage({ commit }) {
    await this.$axios
      .get(
        "https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=Aap_uEBZpm2ZQDBsU6qDGQpKgAyaYD5C_zpS5eS5lXhZ_ggv6QWuRkcudE1z0yc5lDCZWlD2VJMnfQ_hb7UHQIcrIi4uhrEOYIGhOodE5tGtI2FESKjY5yJys1S8fjpsdYBu6qxANI0UMeh69zwZHsVM7ztksHZ0qOA7nWo0I5Vkqfb8RLbF&maxwidth=1600&maxheight=1600",
        {
          headers: {
            "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
            "X-RapidAPI-Key":
              "ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60",
          },
        }
      )
      .then((res) => {
        // console.log(res.request._redirectable._currentUrl);
        commit("getImages", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
};

export const getters = {};
