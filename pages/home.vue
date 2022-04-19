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
        <div class="scroll-text" v-for="city in cities" :key="city.id">
          <TheScrollBar :city="city" />
        </div>
        <div class="line"></div>
      </div>
    </section>
    <section class="bottom">
      <div class="title">
        <h1>Popular</h1>
      </div>
      <div class="pop-cards">
        <ThePopularCard />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cities: this.$store.state.cities,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0rem 32px;
  max-width: 428px;
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
    .scroll {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      overflow: scroll;
      max-width: 428px;
      .line {
        height: 5.5px;
        background: #fffee6;
        max-width: 428px;
      }
    }
  }
  .bottom {
    grid-area: bottom;
    margin-bottom: 4rem;
    .title {
      h1 {
        margin-top: 32px;
      }
    }
  }
}
</style>
