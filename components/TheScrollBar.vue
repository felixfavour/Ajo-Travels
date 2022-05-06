<template lang="">
  <div class="scroll-container">
    <div class="scroll-text">
      <a :class="{ yellow: showYellow }" :href="'/' + popCity.city">
        <p @mouseover="setYellow" @mouseleave="hideYellow">
          {{ popCity.city }}
        </p>
      </a>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    popCity: Object,
    index: Number,
  },
  data() {
    return {
      showYellow: false,
    }
  },
  methods: {
    setYellow() {
      this.showYellow = !this.showYellow
    },
    hideYellow() {
      this.showYellow = !this.showYellow
    },
  },
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  .scroll-container {
    overflow: scroll;
    padding: 0rem 0.5rem;
    // width: 184px;
    .scroll-text {
      display: flex;
      gap: 60px;
      padding: 0rem 0.5rem;
      width: max-content;

      a {
        font-family: 'Brown';
        color: #1d405a;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        text-decoration: none;
      }
      .yellow:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 60px;
        bottom: 0;
        background: #fcf300;
      }
    }
  }
}
</style>
