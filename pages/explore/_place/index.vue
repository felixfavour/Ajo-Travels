<template lang="">
  <div>
    <div class="img-card">
      <img
        @click="getRoute"
        src="../../../assets/img/nat-theather.jpeg"
        alt=""
      />
    </div>
    <div class="title-cont">
      <div class="text">
        <h1>The National Museum</h1>
        <p>African modern art gallery</p>
      </div>
      <div class="">
        <span>4.7</span>
        <font-awesome-icon icon="star" />
      </div>
    </div>
    <div>
      <p>
        The National Museum is a mountain in south-western Nigeria. It is
        located in the city of Abeokuta, Lagos State, and was normally used as a
        natural fortress during. It is located in the city of Abeokuta, Lagos
        State, and was normally used as a natural fortress during the periods
        of.
      </p>
      <hr />
      <div>
        <div>
          <font-awesome-icon icon="location-dot" />
          <p>4 Admiralty way, Lekki, Lagos</p>
        </div>
        <div>
          <font-awesome-icon icon="phone" />
          <p>0790 899 9991</p>
        </div>
      </div>
    </div>
    <div>
      <p>20 Reviews</p>
      <p>See All</p>
    </div>

    <div>
      <p>More Like This</p>
    </div>
    <div>
      <p>Book Ride</p>
      <p>Get Directions</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.place,
    }
  },
  methods: {
    getRoute() {
      return console.log(this.id, 'Place data rendered')
    },
  },
}
</script>
<style lang="scss" scoped>
.img-card {
  margin: 0rem 2rem;
  img {
    width: 400.59px;
    height: 422.36px;
    border-radius: 25px;
    margin-top: 1rem;
  }
}
</style>
