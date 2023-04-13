<template>
  <div class="main-container">
    <div class="nav-links" @click="$emit('closeMenu')">
      <NuxtLink to="">
        Home
      </NuxtLink>
      <NuxtLink to="/mobile">
        Mobile
      </NuxtLink>
      <NuxtLink to="#">
        Contact
      </NuxtLink>
    </div>
    <div class="btns">
      <nuxt-link to="/auth/register">
        <button class="sign-up">
          Sign Up
        </button>
      </nuxt-link>
      <nuxt-link to="/auth/login">
        <button class="login">
          Log In
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDownPage'
}
</script>

<style scoped>
.main-container{
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
}
.nav-links{
  padding: 0.4rem 0 0 1.6rem;
  border-top: 1px solid #000;
  display: flex;
  flex-direction: column;
}
.nav-links a{
  text-decoration: none;
  color: #000;
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 400;
  font-family: 'Cereal Book';
  font-size: 22px;
}
.app-navigation{
  background-color: #D90429;
  color: #FFF;
  padding: 19px 135px;
  border: none;
  margin-top: 24rem;
  width: 100%;
  font-family: 'Gellix';
  cursor: pointer;
}
.btns{
  padding-top: 0.4rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.sign-up{
  color: #9a9400;
  background-color: #fcf300;
  padding: 19px 135px;
  border: none;
  width: 100%;
  font-family: 'Cereal Medium';
  font-weight: 500;
  cursor: pointer;
}
.login{
  color: #041a7a;
  background-color: #fff;
  padding: 19px 135px;
  border: none;
  width: 100%;
  font-family: 'Cereal Medium';
  font-weight: 500;
  cursor: pointer;
}
</style>
