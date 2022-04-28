<template>
  <div>
    <div class="first-segment">
      <div class="images">
        <div class="road-sign">
          <div class="image-1"></div>
          <p>You run the risk of getting lost.</p>
        </div>
        <div class="share">
          <div class="image-2"></div>
          <p>Not a lot of options <br> for you to explore.</p>
        </div>
        <div class="report">
          <div class="image-3"></div>
          <p>Missing out a lot of fun activities and attractions.</p>
        </div>
      </div>
      <div class="text">
        <h2>We understand, exploring cities can be hard</h2>
      </div>
      <!-- <div class="yellow"></div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailS'
  }
</script>

<style  scoped>
.first-segment{
  padding: 39.6rem 0 9rem 0;
  position: relative;
}
.images{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8.4rem 0 8.4rem 0;
  margin: 0 4rem 0 4rem;
  border-top: 1px solid rgb(192,192,192,0.3);
  border-bottom: 1px solid rgb(192,192,192,0.3);
  column-gap: 8.3rem;
}
.images p{
  font-size: 24px;
  line-height: 2.25rem;
  font-weight: 400;
  font-family: 'Cereal Book';
  font-weight: 400;
  width: 216.85px;
}
.image-1{
  background-image: url(~assets/images/road-sign.svg);
  width: 143.59px;
  height: 138.46px;
  margin-bottom: 16.2px;
}
.image-2{
  background-image: url(~assets/images/share.svg);
  width: 215.78px;
  height: 137.73px;
  margin-bottom: 16.93px;
}
.image-3{
  background-image: url(~assets/images/updates.svg);
  width: 165.67px;
  height: 137.73px;
  margin-bottom: 16.93px;
}
.text{
  position: absolute;
  top: 590px;
  left: 460px;
  text-align: center;
  padding: 0 2rem;
  background-color: #FFF;
  font-size: 21px;
  line-height: 2.75rem;
  font-family: 'Cereal Medium';
  font-weight: 500;
  width: 452px;
}
.yellow{
  position: absolute;
  top: 650px;
  left: 470px;
  background-image: url(~assets/images/yellow.svg);
  width: 451px;
  height: 23px;
}
</style>