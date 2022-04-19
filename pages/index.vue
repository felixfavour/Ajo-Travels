<template>
  <main>
    <div class="logo">
      <img src="../assets/img/ajo-logo.png" alt="" />
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
import TheButton from "~/components/TheButton.vue";
export default {
  name: "IndexPage",
  components: { TheButton },
};
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  background-image: linear-gradient(to bottom, #041a7acc, #041a7acc 80%),
    url("../assets/img/home-bg.png");
  background-position: center;
  background-size: 542px 926px;
  background-repeat: no-repeat;
  color: #fff;
  .logo {
    margin-top: 105px;
    img {
      top: 205px;
      left: 123px;
      width: 180px;
      height: 185px;
    }
  }
  .title {
    font-family: "Brown";
    letter-spacing: 4px;
  }
  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 45px;
    font-family: "Brown";
    text-align: center;
    margin-bottom: 94px;
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      width: 305px;
      height: 33px;
      line-height: 33px;
    }
    p {
      font-weight: 300;
      width: 343px;
      font-size: 14px;
      height: 24px;
    }
  }
  .button {
    margin-bottom: 108px;
    a {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 428px) {
  main {
    background-image: url("../assets/img/home-bg.png");
    background: #000;
  }
}
</style>
