<template>
  <div class="background">
    <div class="nav-bar">
      <div class="logo">
        <div class="white-logo"></div>
        <img src="~assets/images/vertical-line.svg" alt="" />
      </div>
      <div class="nav-links">
        <a>Home</a>
        <a>Product</a>
        <a>Contact</a>
      </div>
      <div class="btns">
        <button class="sign-up">Signup</button>
        <button class="login">Login</button>
      </div>
    </div>
    <div class="guide">
      <h1 class="name">Ajo</h1>
      <h2 class="travel">The travel guide</h2>
    </div>
    <div class="images">
      <div class="world"></div>
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbaR',
}
</script>

<style scoped>
@media screen and (min-width: 428px) {
  .background {
    background-image: url(~assets/images/blue.svg);
    height: 794px;
    position: relative;
  }
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
  .logo {
    display: flex;
    column-gap: 43px;
    padding-right: 342px;
  }
  .white-logo {
    background-image: url(~assets/images/white-logo.svg);
    width: 131px;
    height: 60.97px;
  }
  /* .vertical{
  background-image: url(~assets/images/vertical-line.svg);
  width: 30px;
  border: 1px solid #FFFEE6;
} */
  .nav-links {
    display: flex;
    column-gap: 3rem;
    padding-right: 149px;
    color: #ffff;
    font-size: 20px;
    font-family: 'Cereal Book';
    font-weight: 400;
  }
  .btns {
    display: flex;
    column-gap: 14px;
  }
  .sign-up {
    color: #9a9400;
    background-color: #fcf300;
    border-radius: 56px;
    width: 171px;
    height: 56px;
    text-align: center;
    border: none;
    font-family: 'Cereal Medium';
    font-weight: 500;
  }
  .login {
    border: 2px solid #fffee6;
    color: #fffee6;
    background-color: #041a7a;
    border-radius: 56px;
    width: 171px;
    height: 56px;
    text-align: center;
    font-family: 'Cereal Book';
    font-weight: 400;
  }
  .guide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 7.5rem;
  }
  .name {
    font-size: 6rem;
    color: #ffff;
    line-height: 7.8rem;
    font-family: 'Cereal Black';
    font-weight: 900;
  }
  .travel {
    font-size: 2.1rem;
    line-height: 2.8rem;
    color: #ffff;
    font-family: 'Cereal Medium';
    font-weight: 500;
  }
  .world {
    background-image: url(~assets/images/world.svg);
    position: absolute;
    height: 286px;
    width: 359px;
    left: 73px;
    top: 171px;
  }
  .nav {
    background-image: url(~assets/images/nav.svg);
    position: absolute;
    width: 295px;
    height: 503px;
    left: 955px;
    top: 192px;
  }
}
</style>
