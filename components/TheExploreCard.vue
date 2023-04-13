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
</script>
<style lang="scss" scoped>
.container {
  .explore {
    background-size: 100%;
    width: 384px;
    height: 160px;
    border-radius: 32px;
    padding: 0.5rem 0rem;
    margin-top: 10px;
    transition: transform 500ms ease;
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
}
a {
  text-decoration: none;
}

.explore:hover {
  transform: scale(1.02);
  opacity: 1;
}
</style>
