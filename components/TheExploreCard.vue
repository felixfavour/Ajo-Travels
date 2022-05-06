<template>
  <nuxt-link :to="'/explore/' + place.fullSearchResult.place_id">
    <div class="container">
      <div class="explore" :style="`background-image: url('${backgroundImg}')`">
        <div class="explore-text">
          <h1>{{ place.fullSearchResult.name }}</h1>
          <p>{{ place.fullSearchResult.vicinity }}</p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
<<<<<<< HEAD
export default {}
=======
export default {
  name: 'explore-card',
  props: {
    place: {
      Required: true,
      type: Object,
    },
  },
  computed: {
    backgroundImg() {
      return `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${this.place.fullSearchResult.photos[0].photo_reference}&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE`
    },
  },
}
>>>>>>> develop
</script>
<style lang="scss" scoped>
.explore {
  // background-image: url("../assets/img/nat-theather.jpeg");
  background-position: 0% 45%;
  width: 364px;
  height: 160px;
  border-radius: 32px;
  padding: 0.5rem 0rem;
  margin-top: 10px;
  .explore-text {
    color: #fff;
    margin-top: 4.2rem;
    padding: 0.5rem 1rem;
    h1 {
      font-size: 20px;
      line-height: 22.79px;
    }
    p {
      font-size: 14px;
      line-height: 18.23px;
    }
  }
}
a {
  text-decoration: none;
}
</style>
