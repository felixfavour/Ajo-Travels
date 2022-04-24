<template lang="">
  <div class="scroll-container">
    <div class="scroll-text">
      <p>{{ city.name }}</p>
      <div :class="active ? 'line' : ''"></div>
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
      active: true,
    };
  },
  methods: {
    setActive() {},
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
      gap: 80px;
      margin: 0rem 0.5rem;
      p {
        font-family: "Brown";
        color: #1d405a;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
      }
    }
    .line2 {
      background-color: #fcf300;
      height: 1.5px;
    }

    .line {
      background-color: #fcf300;
      height: 1.5px;
    }
  }
}
</style>
