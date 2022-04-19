<template>
<div class="container">
  <NavBar />
  <div class="background-images">
    <div class="phones"></div>
    <div class="store"></div>
  </div>
  <Details/>
  <Cards/>
  <Review/>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.container{
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}
.phones{
  background-image: url(~assets/images/phone.png);
  position: absolute;
  width: 580.49px;
  height: 701.75px;
  top: 443px;
  left: 430px;
}
.store{
  background-image: url(~assets/images/stores.png);
  position: absolute;
  width: 535px;
  height: 84px;
  top: 1241px;
  left: 464px;
}
</style>
