<template>
  <div class="container">
    <section class="top">
      <TheNavbar />
      <div class="welcome">
        <h1>Discover Lekki, Lagos</h1>
      </div>
    </section>
    <section class="middle">
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
      <div class="search">
        <TheSearchBar />
      </div>
    </section>
    <section class="explore-container">
      <div class="explore-cards" v-if="discoveredPlaces">
        <TheExploreCard v-for="(place, index) in discoveredPlaces" :key="index" :place="place" />
      </div>
      <TheErrorCard v-else :message="'Oops... Something is wrong'" />
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import ErrorCard from "~/components/TheErrorCard.vue"

export default {
  transition: "discover",
  conponents:{
    ErrorCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cities: (state) => state.cities,
      popularPlaces: (state) => state.popularPlaces,
    }),
    discoveredPlaces(){
      return this.$store.state.cityDetails
    }
  },
  methods: {
    ...mapActions(["getPopularPlaces", "getTopCities"]),
  },
  async fetch({ store, params }) {
    await store.dispatch("getTopCities");
    await store.dispatch("discoverCity", params.explore.toLowerCase());
  },
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 428px) {
  .container {
    max-width: 428px;
    font-family: "Brown";
    .top {
      .welcome {
        font-family: "Brown";
        margin-top: 34px;
        padding: 0rem 1rem;
        h1 {
          font-size: 25px;
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
        margin-top: 27px;
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
      .search {
        margin-top: 16px;
      }
    }
    .explore-container {
      .explore-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-top: 1rem;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 650px;
        padding: 0rem 3rem;
      }
    }
  }
}

.discover-enter-active,
.discover-leave-active {
  transition: opacity 0.5s;
}
.discover-enter,
.discover-leave-active {
  opacity: 0;
}
</style>
