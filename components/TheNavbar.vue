<template lang="">
  <div>
    <div v-show="showDropdown" class="drop-container" style="display: block">
      <div class="drop-header">
        <div class="title" @click="showDropdown = !showDropdown">
          <font-awesome-icon icon="dove" />
          <h1>AJO</h1>
        </div>
        <div>
          <font-awesome-icon
            icon="xmark"
            @click="showDropdown = !showDropdown"
          />
        </div>
      </div>
      <div class="drop-items">
        <nuxt-link to="#">
          Wishlists
        </nuxt-link>
        <nuxt-link to="#">
          Past Trips
        </nuxt-link>
        <nuxt-link to="/home">
          Home
        </nuxt-link>
        <div class="logout" @click="logout">
          Log out
        </div>
      </div>
    </div>
    <div class="nav">
      <font-awesome-icon icon="bars" @click="showDropdown = !showDropdown" />
      <div>
        <nuxt-link to="/mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown () {
      // eslint-disable-next-line no-unused-expressions
      this.showDropdown === !this.showDropdown
    },
    closeDropDown () {
      // eslint-disable-next-line no-unused-expressions
      this.showDropdown === !this.showDropdown
    },
    logout () {
      this.$router.push('/mobile')
    }
  }
}
</script>
<style lang="scss">
.nav {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  margin-top: 45px;
  svg {
    color: #9a9400;
    cursor: pointer;
  }
  img {
    width: 20px;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 1.5s;
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
}
.drop-container {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  padding-bottom: 2rem;
  .drop-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 34px;
    padding: 0rem 1rem;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      text-decoration: none;

      h1 {
        font-family: 'AirbnbCereal_W_Md';
        color: #041a7a;
        cursor: pointer;
      }

      svg {
        color: #9a9400;
        cursor: pointer;
      }
    }
    svg {
      color: #041a7a;
      cursor: pointer;
    }
  }
  .drop-items {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    a {
      font-family: 'AirbnbCereal_W_lt';
      color: #393939;
      padding-bottom: 1.5rem;
      padding-top: 0.8rem;
      border-bottom: 0.5px solid #c7c4c4;
      text-decoration: none;
    }
    .logout {
      padding-top: 15px;
      color: #041a7a;
      cursor: pointer;
    }
  }
}
</style>
