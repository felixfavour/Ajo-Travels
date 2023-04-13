<template>
  <main>
    <div class="mobile">
      <div class="logo">
        <img src="~/assets/images/ajo-logo.png" alt="" />
      </div>
      <div class="title">
        <h1>AJO</h1>
      </div>
      <div class="text">
        <h1>
          {{
            $store.state.userDetails.firstname !== undefined
              ? `Welcome back, ` + userName
              : `Welcome to AJO`
          }}
        </h1>
        <p>
          Ajo is the No. 1 site for finding travel deals and reviews. Millions
          of Hotel Reviews. Vacation Rentals. Hidden Gems. Cheap Flights. Tours,
          Attractions + More.
        </p>
      </div>
      <div class="loader">
        <TheWhiteLoader v-if="loading" />
      </div>
      <div class="button">
        <a @click="isLoggedIn">
          <TheButton title=" Get Started" value="whiteBgLg" />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import TheWhiteLoader from '../components/TheWhiteLoader.vue'
import TheButton from '~/components/TheButton.vue'
import Footer from '~/components/Footer.vue'
import TheLoader from '~/components/TheLoader.vue'
export default {
  components: { TheButton, Footer, TheLoader, TheWhiteLoader },
  name: 'IndexPage',
  transition: 'start',
  layout: 'auth',
  data() {
    return {
      userName: this.$store.state.userDetails.firstname,
      loading: false,
    }
  },
  methods: {
    isLoggedIn() {
      if (this.$store.state.userDetails.firstname !== undefined) {
        this.loading = true
        this.$router.push('/home')
      } else {
        this.loading = true
        this.$router.push('/auth/login')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 926px;
  background-image: linear-gradient(to bottom, #041a7acc, #041a7acc 80%),
    url('~/assets/images/home-bg.png');
  background-position: center;
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
      margin-bottom: 66px;
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
      transition: all ease-in-out 500ms;
      margin-bottom: 92px;
      a {
        text-decoration: none;
        font-weight: 500;
        font-family: 'AirbnbCereal_W_lt';
      }
    }
    .loader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      transition: all ease-in-out 500ms;
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
