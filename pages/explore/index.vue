<template lang="">
  <div class="container">
    <section class="top">
      <TheNavbar />
      <div class="welcome">
        <h1>Discover Lekki, Lagos</h1>
      </div>
    </section>
    <section class="middle">
      <div class="scroll">
        <div class="scroll-text" v-for="city in cities" :key="city.id">
          <TheScrollBar :city="city" />
          <div class="line"></div>
        </div>
      </div>
      <div class="search">
        <TheSearchBar />
      </div>
    </section>
    <section class="explore-container">
      <div class="explore-cards">
        <div class="explore">
          <div class="explore-text">
            <h1>The National Museum</h1>
            <p>African modern art gallery</p>
          </div>
        </div>
        <div class="explore">
          <div class="explore-text">
            <h1>The National Museum</h1>
            <p>African modern art gallery</p>
          </div>
        </div>
        <div class="explore">
          <div class="explore-text">
            <h1>The National Museum</h1>
            <p>African modern art gallery</p>
          </div>
        </div>
        <TheExploreCard />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  transition: "discover",
  data() {
    return {
      cities: this.$store.state.cities,
    };
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
      .search {
        margin: 2rem 0.5rem;
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
        max-height: 630px;
        padding: 0rem 3rem;
        .explore {
          background-image: url(" ../../assets/img/nat-theather.jpeg");
          background-position: 0% 45%;
          width: 389px;
          height: 160px;
          border-radius: 32px;
          padding: 1rem 0rem;
          margin-top: 10px;
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
