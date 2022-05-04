<template>
<nuxt-link :to="'/explore/' + placeId">
  <div class="cards-container">
    <div class="scroll">
      <a @click="getPlaceImage">
        <div class="card">
          <div class="card-text">
            <h1>{{ place.fullSearchResult.name }}</h1>
            <p>
              {{ place.fullSearchResult.vicinity }}
            </p>
            <img
              src="https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=${this.photoReference}&maxwidth=1600&maxheight=1600"
              alt=""
            />
          </div>
        </div>
        <!-- <div>
          {{ JSON.stringify(place.fullSearchResult.photos[0].photo_reference) }}
        </div> -->
      </a>
    </div>
  </div>
</nuxt-link>
</template>
<script>
import axios from 'axios'
export default {
  props: ['place', 'name', 'id', 'index'],
  data: function () {
    return {
      photoReference: this.place.fullSearchResult.photos[0].photo_reference,
    }
  },
  computed:{
    placeId(){
      return this.place.fullSearchResult.place_id
    }
  },
  methods: {
    async getPlaceImage() {
      console.log(this.photoReference)
      await axios
        .get(
          `https://google-maps28.p.rapidapi.com/maps/api/place/photo?photo_reference=${this.photoReference}&maxwidth=1600&maxheight=1600`,
          {
            headers: {
              'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com',
              'X-RapidAPI-Key':
                'ee0219cfdfmshd0edb4d1f8464abp124dd2jsnb5dc821c8d60',
            },
          }
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.cards-container {
  .scroll {
    a {
      text-decoration: none;
      .card {
        background-position: center;
        position: relative;
        margin: 1rem 10px;
        height: 410px;
        transition: transform 500ms ease;
        opacity: 0.8;
        padding: 0rem 0.8rem;
        .card-text {
          display: flex;
          flex-direction: column;
          color: #fff;
          h1 {
            font-size: 25px;
            margin: 0px;
            line-height: 31px;
            margin-top: 290px;
            padding: 0rem 0.8rem;
          }
          p {
            width: 276px;
            font-family: 'Brown';
            font-size: 14px;
            font-weight: 300;
            padding: 0rem 0.8rem;
          }
          img {
            position: absolute;
            z-index: -1;
            width: 296px;
            height: 410px;
            border-radius: 32px;
          }
        }
      }
    }
    .card:hover {
      transform: scale(1.02);
      opacity: 1;
    }
  }
}
</style>
