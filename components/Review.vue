<template>
  <div class="container">
    <div class="review-container">
      <div class="content-container">
        <div class="back-btn" @click="PreviousSlide(-1)" />
        <div class="content">
          <div class="sweater" />
          <div v-if="clicked % 2 == 0" class="text">
            <h2 class="name">
              Bernice Semiu
            </h2>
            <p class="details">
              Ajo is great.
            </p>
          </div>
          <div v-if="clicked % 2 == 1" class="text">
            <h2 class="name">
              Chidera Amlabu
            </h2>
            <p class="details">
              Ajo is goated!!
            </p>
          </div>
        </div>
        <div class="forward-btn" @click="NextSlide(1)" />
      </div>
    </div>
    <div class="review">
      <p class="see">
        See more reviews
      </p>
      <img src="~assets/images/forward-right.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewPage',
  data () {
    return {
      clicked: 1
    }
  },
  methods: {
    PreviousSlide (n) {
      this.clicked = this.clicked + n
    },
    NextSlide (n) {
      this.clicked = this.clicked + n
    }
  }
}
</script>

<style scoped>
.review-container {
  padding: 15.25rem 0 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container {
  display: flex;
  /* align-items: center; */
  column-gap: 6rem;
}
.back-btn {
  background-image: url(~assets/images/back-btn.svg);
  width: 80px;
  height: 80px;
  margin-top: 60px;
  cursor: pointer;
}
.content {
  display: flex;
  justify-content: center;
  column-gap: 26px;
  padding: 56px 118px 108px 117px;
  background-color: #041a7a;
  width: 40.25rem;
  box-shadow: 0px 0px 43px rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
}
.sweater {
  background-image: url(~assets/images/sweater.png);
  width: 80px;
  height: 80px;
  color: #fdf86b;
}
.forward-btn {
  background-image: url(~assets/images/forward-btn.svg);
  width: 80px;
  height: 80px;
  margin-top: 60px;
  cursor: pointer;
}
.name {
  margin-top: 15px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 28px;
  line-height: 36px;
  font-family: 'Cereal Bold';
  font-weight: 700;
}
.details {
  color: #fff;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
  width: 296px;
}
.review {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding-bottom: 7rem;
}
.see {
  color: #041a7a;
  font-size: 24px;
  line-height: 36px;
  font-family: 'Cereal Light';
  font-weight: 300;
  cursor: pointer;
}
@media only screen and (max-width: 1100px){
  .content-container{
    column-gap: 2rem !important;
  }
}
@media only screen and (max-width: 880px){
  .content{
    width: 33rem;
    padding: 56px 93px 108px 117px;
  }
}
@media only screen and (max-width: 760px){
  .content{
    width: 20rem;
    padding: 56px 50px 56px 114px;
  }
}
@media only screen and (max-width: 630px){
  .forward-btn,.back-btn{
    display: none;
  }
}
</style>
