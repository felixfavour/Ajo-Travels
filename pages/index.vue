<template>
  <main>
    <div class="container">
      <NavBar />
      <div class="background-images">
        <div class="phones"></div>
        <div class="store"></div>
      </div>
      <Details />
      <Cards />
      <Review />
      <Footer />
    </div>
    <div class="mobile">
      <div class="logo">
        <img src="../assets/img/ajo-logo.png" alt="" />
      </div>
      <div class="title">
        <!-- <img src="../assets/img/ajo-text.png" alt="" /> -->
        <h1>AJO</h1>
      </div>
      <div class="text">
        <h1>
          {{
            this.$store.state.userDetails.firstname !== undefined
              ? `Welcome back, ` + userName
              : `Welcome to AJO`
          }}
        </h1>
        <p>
          Ajo is the No. 1 app for finding the best travel reviews and deals.
          Read reviews, compare prices, and find the best Hotels, Restaurants,
          Attractions and more.
        </p>
      </div>
      <TheLoader />
      <div class="button" @click="getRoute">
        <a>
          <TheButton title=" Get Started" value="whiteBgLg" />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import TheButton from '~/components/TheButton.vue'
import Footer from '~/components/Footer.vue'
import TheLoader from '~/components/TheLoader.vue'
import TheWhiteLoader from '../components/TheWhiteLoader.vue'
export default {
  name: 'IndexPage',
  transition: 'start',
  components: { TheButton, Footer, TheLoader, TheWhiteLoader },
  data() {
    return {
      userName: this.$store.state.userDetails.firstname,
    }
  },
  methods: {
    getRoute() {
      if (this.$store.state.userDetails.firstname !== undefined) {
        this.$router.push('/home')
      } else {
        this.$router.push('/auth/login')
      }
    },
  },
  mounted() {
    function isLoggedIn() {
      if (this.$store.state.userDetails !== undefined) {
        return 'true'
      } else {
        return 'false'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 429px) {
  .mobile {
    display: none;
  }
  .container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
  .phones {
    background-image: url(~assets/images/phone.png);
    position: absolute;
    width: 580.49px;
    height: 701.75px;
    top: 443px;
    left: 430px;
  }
  .store {
    background-image: url(~assets/images/stores.png);
    position: absolute;
    width: 535px;
    height: 84px;
    top: 1241px;
    left: 464px;
  }
}
@media screen and (max-width: 428px) {
  .container {
    display: none;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 428px;
    height: 926px;
    background-image: linear-gradient(to bottom, #041a7acc, #041a7acc 80%),
      url('../assets/img/home-bg.png');
    background-position: center;
    background-size: 542px 926px;
    background-repeat: no-repeat;
    color: #fff;
    .mobile {
      .logo {
        margin-top: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          position: relative;
          top: 55px;
          width: 180px;
          height: 185px;
        }
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'AirbnbCereal_W_Bd';
        letter-spacing: 2px;
        margin-top: 20px;
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
          font-family: 'AirbnbCereal_W_md';
          width: 305px;
        }
        h1::after {
          content: '';
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
          font-family: 'AirbnbCereal_W_lt';
          font-size: 14px;
          font-weight: 300;
          width: 343px;
          margin-top: 5px;
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
          font-family: 'AirbnbCereal_W_lt';
        }
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
