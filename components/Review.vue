<template>
  <div class="container">
    <div class="review-container">
    <div class="content-container">
      <div class="back-btn"></div>
      <div class="content">
        <div class="sweater"></div>
        <div class="text">
          <h2 class="name">Bernice Semiu</h2>
          <p class="details">Ajo is very helpful and super easy to use, I had no issues finding local attractions and hot spots.</p>
        </div>
    </div>
    <div class="forward-btn"></div>
    </div>
  </div>
  <div class="review">
      <p class="see">See more reviews</p>
      <img src="~assets/images/forward-right.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'RevieW'
  }
</script>

<style scoped>
.review-container{
  padding: 15.25rem 0 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container{
  display: flex;
  /* align-items: center; */
  column-gap: 6rem;
}
.back-btn{
  background-image: url(~assets/images/back-btn.svg);
  width: 80px;
  height: 80px;
  margin-top: 60px;
}
.content{
  display: flex;
  justify-content: center;
  column-gap: 26px;
  padding: 56px 118px 108px 117px;
  background-color: #041A7A;
  width: 40.25rem;
  box-shadow: 0px 0px 43px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
}
.sweater{
  background-image: url(~assets/images/sweater.png);
  width: 80px;
  height: 80px;
  color: #FDF86B;
}
.forward-btn{
  background-image: url(~assets/images/forward-btn.svg);
  color: #FDF86B;
  width: 80px;
  height: 80px;
  margin-top: 60px;
}
.name{
  margin-top: 15px;
  margin-bottom: 20px;
  color: #FFF;
  font-size: 28px;
  line-height: 36px;
  font-family: 'Cereal Bold';
  font-weight: 700;
}
.details{
  color: #FFF;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
  width: 296px;
}
.review{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding-bottom: 7rem;
}
.see{
  color: #041A7A;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
}
</style>