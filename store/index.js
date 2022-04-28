import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

export const state = () => ({
  cities: [
    {
      id: 1,
      name: "Ikoyi",
    },
    {
      id: 2,
      name: "Ikeja",
    },
    {
      id: 3,
      name: "Lekki",
    },
    {
      id: 4,
      name: "Festac",
    },
    {
      id: 4,
      name: "Surulere",
    },
    {
      id: 4,
      name: "Palms",
    },
    {
      id: 4,
      name: "Yaba",
    },
  ],
  reviews: []
});

//getters
export const getters = {}

// mutations
export const mutations  = {
  addReviews( state, reviews ) {
    state.reviews = reviews
  }
}

//actions
export const actions = {
  async getTopCities(){
    const topCities = await axios.get('/places/search/popular')
    console.log(topCities);
  },
  async getReviews({ commit }){
    const reviews = await axios.get('https://ajo-app.herokuapp.com/api/app/reviews')
    commit('addReviews', reviews.data)
    console.log(reviews.data);
  }
}
