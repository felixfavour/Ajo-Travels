<template>
  <div class="card-container">
    <div class="first-card">
      <div class="location"></div>
      <div class="text">
        <h2>Explore cities with ease</h2>
        <p>Find local attractions and hot <br> spots easily without the stress of <br> asking the locals.</p>
      </div>
    </div>
    <div class="second-card">
      <div class="text">
        <h2>Never get lost</h2>
        <p>Get directions directly <br> from the app and also <br> book rides with local car <br> hires directly.</p>
      </div>
      <div class="phone"></div>
    </div>
    <div class="third-card">
      <div class="world"></div>
      <div class="text">
        <h2>International suggestions</h2>
        <p>Get trip ideas for other <br> countries and cities for <br> you to explore when in <br> doubt.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'CardS'
  }
</script>

<style scoped>
.card-container{
  /* padding: 0 8.25rem 11.6rem 8.25rem; */
  /* border-bottom: 1px solid rgb(192,192,192,0.3); */
  margin: 0 4rem 0 4rem;
}
.first-card{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;
  padding-bottom: 11.6rem;
}
.location{
  background-image: url(~assets/images/location.svg);
  width: 579.44px;
  height: 450px;
}
.second-card{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 19.75rem;
  padding-bottom: 11.6rem;
}
.phone{
  background-image: url(~assets/images/phone.svg);
  width: 530.52px;
  height: 449.99px;
}
.third-card{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6rem;
  padding-bottom: 11.6rem;
  border-bottom: 1px solid rgb(192,192,192,0.3);

}
.world{
  background-image: url(~assets/images/world-location.svg);
  width: 627.88px;
  height: 450px;
}
.text{
  display: flex;
  flex-direction: column;
}
h2{
  font-size: 35px;
  line-height: 2.75rem;
  margin-bottom: 1.75rem;
}
p{
  font-size: 24px;
  line-height: 2.25rem;
}
</style>