<template lang="">
  <div class="scroll-container">
    <div class="scroll-text">
      <nuxt-link :class="{ yellow: showYellow }" to="/explore">
        <p @mouseover="setYellow" @mouseleave="hideYellow">{{ city.name }}</p>
      </nuxt-link>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    city: Object,
  },
  data() {
    return {
      cities: this.$store.state.cities,
      showYellow: false,
    };
  },
  methods: {
    setYellow() {
      this.showYellow = !this.showYellow;
    },
    hideYellow() {
      this.showYellow = !this.showYellow;
    },
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  .scroll-container {
    overflow: scroll;
    padding: 0rem 0.5rem;
    .scroll-text {
      display: flex;
      gap: 60px;
      margin: 0rem 0.5rem;
      a {
        font-family: "Brown";
        color: #1d405a;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        text-decoration: none;
      }
      .yellow:after {
        content: "";
        position: absolute;
        height: 2px;
        bottom: 0;
        width: 10%;
        background: #fcf300;
      }
    }
  }
}
</style>
