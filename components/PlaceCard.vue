<template>
  <nuxt-link :to="'/explore/' + this.place.fullSearchResult.place_id" >
    <div class="place-card-container">
      <img :src="similarPlaceImg" alt="recommended place" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'placeCard',
  props:{
    place: {
      Required: true,
      type: Object
    }
  },
  computed:{
    similarPlaceImg(){
      return `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${this.place.fullSearchResult.photos[0].photo_reference}` + "&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE"
    }
  }
}
</script>

<style lang="scss" scoped>
  .place-card-container {
    border-radius: 32px;
    width: 170px;
    height: 110px;
    img {
      height: 110px;
      border-radius: 32px;
      object-fit: contain;
    }
  }
</style>
