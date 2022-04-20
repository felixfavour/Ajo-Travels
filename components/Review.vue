<template>
  <div class="container">
    <div class="review-container">
    <div class="review">
      <div class="sweater"></div>
      <div class="text">
        <h2 class="name">Bernice Semiu</h2>
        <p>Ajo is very helpful and <br> super easy to use, I had no <br> issues finding local <br> attractions and hot spots.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name:'RevieW'
  }
</script>

<style scoped>
.container{
  padding: 15.25rem 0 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.review-container{
  width: 35.25rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 43px rgba(0, 0, 0, 0.4);
  background-color: #041A7A;
  
}
.review{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 26px;
  padding: 3.5rem 7.3rem 6.75rem 7.3rem; 
}
.sweater{
  background-image: url(~assets/images/sweater.png);
  width: 80px;
  height: 80px;
}
.text{
  display: flex;
  flex-direction: column;
  color: #FFFF;
}
/* p{
  font-size: 24px;
  line-height: 36px;
} */
</style>