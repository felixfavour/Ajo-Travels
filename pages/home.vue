<template lang="">
  <div class="container">
    <section class="top">
      <TheNavbar />
      <div class="welcome">
        <p>Hi, Folashade</p>
        <h1>Where would you <br />like to go?</h1>
      </div>
    </section>
    <section class="middle">
      <div class="search">
        <TheSearchBar />
      </div>
      <div class="scroll">
        <div
          class="scroll-text"
          v-for="(popCity, index) in cities"
          :key="popCity.id"
        >
          <TheScrollBar :popCity="popCity" :index="index" />
          <div class="line"></div>
        </div>
      </div>
    </section>
    <section class="bottom">
      <div class="title">
        <h1>Popular</h1>
      </div>
      <div class="pop-cards">
        <div v-for="(place, index) in popularPlaces" :key="place.id">
          <ThePopularCard :place="place" :index="index" :id="place.id" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  transition: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cities: (state) => state.cities,
      popularPlaces: (state) => state.popularPlaces,
    }),
  },
  methods: {
    ...mapActions(["getPopularPlaces", "getTopCities, 'getPlaceImage"]),
  },
  async fetch({ store }) {
    await store.dispatch("getTopCities");
    await store.dispatch("getPopularPlaces");
    await store.dispatch("getPlaceImage");
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  .container {
    width: 428px;
    height: 926px;
    font-family: "Brown";
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "top"
      "mid"
      "bottom";
    .top {
      grid-area: top;
      .welcome {
        font-family: "Brown";
        margin-top: 34px;
        padding: 0rem 1rem;
        p {
          font-size: 25px;
          font-weight: 500;
          color: #041a7a;
        }
        h1 {
          font-size: 34px;
          font-weight: 900;
          color: #041a7a;
        }
      }
    }
    .middle {
      grid-area: mid;
      ::-webkit-scrollbar {
        height: 0px;
        width: 0px;
        background: white;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        background: #fff;
        border-radius: 10px;
      }
      .scroll {
        position: relative;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        overflow: scroll;
        max-width: 428px;

        .line {
          height: 2px;
          background: #fffee6;
          max-width: 428px;
        }
      }
    }
    .bottom {
      grid-area: bottom;
      margin: 2rem 0rem;
      .title {
        padding: 0rem 1rem;
        h1 {
          margin-top: 32px;
        }
      }
      .pop-cards {
        display: flex;
        flex-direction: row;
        width: 423px;
        overflow: scroll;
      }
    }
  }
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
