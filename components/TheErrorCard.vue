<template lang="">
  <div>
    <main>
      <div class="img-container">
        <img src="../assets/img/error.png" alt="" />
      </div>
      <div class="text">
        <h1>Not Found</h1>
        <p>Check the spelling and try again</p>
      </div>
      <nuxt-link to="/auth/login" class="btn">
        <TheButton title="Back to homepage" value="yellowBgLg" />
      </nuxt-link>
    </main>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-container {
    padding: 1rem 0rem;
    margin-top: 20px;
  }
  .text {
    color: #041a7a;
    text-align: center;
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 14px;
    }
  }
  .btn {
    margin-top: 72px;
    margin-bottom: 130px;
  }
  a {
    text-decoration: none;
  }
}
</style>
