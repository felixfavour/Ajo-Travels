<template lang="">
  <div class="drop-container">
    <div class="top">
      <div class="title">
        <font-awesome-icon icon="dove" />
        <h1>AJO</h1>
      </div>
      <div>
        <font-awesome-icon icon="xmark" />
      </div>
    </div>
    <div class="drop-items">
      <nuxt-link to="/">Wishlists</nuxt-link>
      <nuxt-link to="/">Past Trips</nuxt-link>
      <nuxt-link to="/">Shared with me</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.drop-container {
  position: absolute;
  top: 0;
  background-color: #fff;
  width: 432px;
  z-index: 2;
  padding-bottom: 2rem;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      h1 {
        font-family: "AirbnbCereal_W_Md";
        color: #041a7a;
      }
    }
    svg {
      color: #9a9400;
    }
  }
  .drop-items {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    a {
      font-family: "AirbnbCereal_W_lt";
      color: #393939;
      padding-bottom: 1.5rem;
      padding-top: 0.8rem;
      border-bottom: 0.5px solid #000;
      text-decoration: none;
    }
  }
}
</style>
