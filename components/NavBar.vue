<template>
  <div class="background">
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
    name:"NavbaR"
  }
</script>

<style  scoped>
.background{
  background-image: url(~assets/images/blue.svg);
  height: 794px;
  position: relative;
}
.guide{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 13.3rem;
}
.name{
  font-size: 6rem;
  color: #FFFF;
  line-height: 7.8rem;
}
.travel{
  font-size: 2.1rem;
  line-height: 2.8rem;
  color: #FFFF;
}
.world{
  background-image: url(~assets/images/world.svg);
  position: absolute;
  height: 286px;
  width: 359px;
  left: 73px;
  top: 171px;
}
.nav{
  background-image: url(~assets/images/nav.svg);
  position: absolute;
  width: 295px;
  height: 503px;
  left: 955px;
  top: 192px;
}
</style>