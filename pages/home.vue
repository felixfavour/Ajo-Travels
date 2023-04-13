<template>
  <div class="container">
    <div>
      <section class="top">
        <TheNavbar />
        <div class="welcome">
          <p>Welcome</p>
          <h1>Where would you <br>like to go?</h1>
        </div>
      </section>
      <section class="middle">
        <div class="search">
          <TheSearchBar />
        </div>
      </section>
      <section class="bottom">
        <div class="title">
          <h1>Popular</h1>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  transition: 'home'
}
</script>
<style lang="scss" scoped>
.container {
  max-height: 926px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'top'
    'mid'
    'bottom';
  .top {
    grid-area: top;
    .welcome {
      margin-top: 34px;
      margin-bottom: 16px;
      padding: 0rem 2rem;
      p {
        font-size: 25px;
        font-weight: 700;
        color: #041a7a;
      }
      h1 {
        font-size: 34px;
        font-weight: 900;
        color: #041a7a;
        font-family: 'AirbnbCereal_W_Bd';
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
      padding-top: 35px;
    }
  }
  .bottom {
    grid-area: bottom;
    margin: 0rem 0rem;
    width: 100%;
    .title {
      padding: 0rem 1rem;
      h1 {
        margin-top: 27.34px;
        font-weight: 500;
      }
    }
    .container {
      width: 100%;
      margin-bottom: 67px;
      ::-webkit-scrollbar {
        height: 0px;
        width: 0px;
        background: white;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        background: #fff;
        border-radius: 10px;
      }
      .pop-cards {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        overflow-x: scroll;
        gap: 20px;
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
