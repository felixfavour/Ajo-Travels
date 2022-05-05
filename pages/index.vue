<template>
  <main>
    <div class="main-container">
      <NavBar />
      <div class="container">
        <div class="background-images">
          <div class="phones" />
          <div class="store" />
        </div>
        <Details />
        <Cards />
        <Review />
      </div>
      <Footer />
    </div>
    <div class="logo">
      <img src="../assets/img/ajo-logo.png" alt="">
    </div>
    <div class="title">
      <!-- <img src="../assets/img/ajo-text.png" alt="" /> -->
      <h1>AJO</h1>
    </div>
    <div class="text">
      <h1>Welcome back, Folashade</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="button">
      <a href="/home"> <TheButton title=" Get Started" value="whiteBgLg" /></a>
    </div>
  </main>
</template>

<script>
import TheButton from '~/components/TheButton.vue'
export default {
  name: 'IndexPage',
  components: { TheButton },
  transition: 'start'
}
</script>
<style lang="scss" scoped>
.main-container{
  position: relative;
}
.container{
  max-width: 1440px;
  margin: 0 auto;
}
.phones{
  background-image: url(~assets/images/phone.png);
  position: absolute;
  width: 580.49px;
  height: 701.75px;
  top: 443px;
  left: 0;
  right:0;
  margin: auto;
}
.store{
  background-image: url(~assets/images/stores.png);
  position: absolute;
  width: 535px;
  height: 84px;
  top: 1241px;
  left: 0;
  right: 0;
  margin: auto;
}
@media screen and (max-width: 428px) {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 428px;
    height: 926px;
    background-image: linear-gradient(to bottom, #041a7acc, #041a7acc 80%),
      url("../assets/img/home-bg.png");
    background-position: center;
    background-size: 542px 926px;
    background-repeat: no-repeat;
    color: #fff;
    .logo {
      margin-top: 105px;
      img {
        position: relative;
        top: 55px;
        width: 180px;
        height: 185px;
      }
    }
    .title {
      font-family: "AirbnbCereal_W_Bd";
      letter-spacing: 2px;
    }
    .text {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 45px;
      text-align: center;
      margin-bottom: 94px;
      h1 {
        position: relative;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        font-family: "AirbnbCereal_W_md";
        width: 305px;
      }
      h1::after {
        content: "";
        position: absolute;
        height: 4px;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fcf300;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 250ms ease;
      }

      p {
        font-family: "AirbnbCereal_W_lt";
        font-size: 14px;
        font-weight: 300;
        width: 343px;
      }
    }

    .text:hover {
      h1::after {
        transform: scaleX(1);
      }
    }
    .button {
      margin-bottom: 92px;
      a {
        text-decoration: none;
        font-weight: 500;
        font-family: "AirbnbCereal_W_lt";
      }
    }
  }
}

.start-enter-active,
.start-leave-active {
  transition: opacity 0.5s;
}
.start-enter,
.start-leave-active {
  opacity: 0;
}
</style>
