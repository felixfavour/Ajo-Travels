<template>
  <img v-show="currentIndex === index" :src="placeImg" alt="">
</template>

<script>
export default {
  name: 'CarouselImg',
  props: {
    pic: {
      Required: true,
      type: Object
    },
    currentIndex: {
      Required: true,
      type: Number
    },
    index: {
      Required: true,
      type: Number
    }
  },
  computed: {
    placeImg () {
      return `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${this.pic.photo_reference}` + '&maxwidth=900&maxheight=600&key=AIzaSyASdmsJF14srd4fjjO8gehV3VEPtAX-plE'
    }
  }
}
</script>

<style lang="scss" scoped>
    img{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transition: all .5s ease;
        animation-name: fade-in;
        animation-duration: 1s;
    }
    @keyframes fade-in {
        0%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
</style>
