import axios from 'axios'

export const state = () => ({
  places: [],
  popularPlaces: [],
  cities: [],
  reviews: [],
  user: [],
  placeDetail: [],
  images: []
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
  addReviews( state, reviews ) {
    state.reviews = reviews
  },
  addUser( state, user ){
    state.user = user
  },
  addPlaceDetails( state, placeDetail ){
    state.placeDetail = placeDetail
  },
  addImages( state, images) {
    state.images = images
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
            "X-RapidAPI-Key": "ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60",
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

  async getReviews({ commit }){
    try {
      const reviews = await axios.get('https://ajo-app.herokuapp.com/api/app/reviews')
      commit('addReviews', reviews.data)
    } catch (error) {
      console.log(error.message);
    }
  },
  async getUser({ commit }, userId){
    try {
      const user = await this.$axios.get(`/user/profile/${userId}`)
      commit('addUser', user)
      console.log(userId, user);
    } catch (error) {
      console.log(error.message);
    }
  },
  async getPlaceDetails({ commit }, placeId){
    try {
      const placeDetail = await this.$axios.get(`/places/${placeId}`)
      commit('addPlaceDetails', placeDetail.data)
    } catch (error) {
      console.log(error.message);
    }
  },
  async getImages({ commit }, photo_reference){

    try {
      const placeImage = await axios.get("https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=Aap_uEBZpm2ZQDBsU6qDGQpKgAyaYD5C_zpS5eS5lXhZ_ggv6QWuRkcudE1z0yc5lDCZWlD2VJMnfQ_hb7UHQIcrIi4uhrEOYIGhOodE5tGtI2FESKjY5yJys1S8fjpsdYBu6qxANI0UMeh69zwZHsVM7ztksHZ0qOA7nWo0I5Vkqfb8RLbF&maxwidth=1600&maxheight=1600",
      {
        headers:{
          'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
          'X-RapidAPI-Key': 'ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60',
        },
      } )
      const formData = axios.formData()
      let base64Url = formData.readAsDataURL(placeImage)
      console.log(base64Url);
      // const imageBlob = await placeImage.blob()
      // console.log(imageBlob);
      commit('addImages', placeImage)
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const getters = {};
