<template>
  <div class="booking-container">
    <TheNavbar />
    <div class="img-container">
      <img src="../../../assets/img/place.jpg" alt="place" />
    </div>
    <div class="place-description-container">
      <div class="place-description">
        <div class="place-name">
          <h2>
            The National Museum
          </h2>
          <p>
            African modern art gallery
          </p>
        </div>
        <div class="place-rating">
          <p>
            4.7
          </p>
          <img src="../../../assets/img/star.svg" alt="star" />
        </div>
      </div>
    </div>
    <div class="place-info-container">
      <div class="place-info">
        <p>
          The National Museum is a mountain in south-western Nigeria. It is located in the city of Abeokuta, Lagos State, and was normally used as a natural fortress during. It is located in the city of Abeokuta, Lagos State, and was normally used as a natural fortress during the periods of.
        </p>
      </div>
      <div class="place-address">
        <p class="address">
          <font-awesome-icon icon="location-dot" />
          4 Admiralty way, Lekki, Lagos
        </p>
        <p class="contact">
          <font-awesome-icon icon="phone" />
          0790 899 9991
        </p>
      </div>
    </div>
    <div class="reviews-container">
        <div class="reviews-header">
          <p>20 Reviews</p>
          <p>See All</p>
        </div>
        <div class="review-card-container">
          <review-card v-for="review in reviews" :key="review._id" />
          <review-card v-for="review in reviews" :key="review._id" />
          <review-card v-for="review in reviews" :key="review._id" />
          <review-card v-for="review in reviews" :key="review._id" />
          <review-card v-for="review in reviews" :key="review._id" />
        </div>
    </div>
    <div class="recommended-places-container">
      <div class="section-header">
        <h3>
          More like this
        </h3>
      </div>
      <div class="recommended-places">
        <place-card />
      </div>
    </div>
    <div class="book-btns">
      <button class="yellow-btn" @click="revealModal">
        Book ride
      </button>
      <button class="transparent-btn">
        Get Directions
      </button>
    </div>
    <ride-modal v-if="showModal" @close-modal="onCloseModal" />
  </div>
</template>
<script>
import TheNavbarVue from '~/components/TheNavbar.vue';
import reviewCard from '~/components/TheReviewCard.vue';
import placeCard from '~/components/PlaceCard.vue';
import rideModal from '~/components/RideModal.vue';
import { mapActions } from 'vuex';

export default {
  name: "booking",
  components:{
    TheNavbarVue,
    reviewCard,
    placeCard,
    rideModal
  },
  data(){
    return{
      showModal: false
    }
  },
  // async mounted() {
  //     console.log("I'm mounted");
  // },
  methods:{
    revealModal(){
      this.showModal = true
      this.getTopCities()
      if(this.showModal){
        this.disableScroll()
      }
      else{
        this.enableScroll()
      }
    },
    onCloseModal(){
      this.showModal = false
      this.enableScroll()
    },
    disableScroll(){
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      let scrollLeft = window.scrollX || document.documentElement.scrollLeft

      window.onscroll = () => {
        window.scrollTo(scrollLeft, scrollTop)
      }
    },
    enableScroll(){
      window.onscroll = () => {window.scrollTo()}
    }
  },
  computed:{
    reviews(){
      return this.$store.state.reviews
    }
  },
  async fetch({ store }){
    await store.dispatch("getReviews");
  }
};
</script>
<style lang="scss">
  .img-container{
    @include flex-center;
    width: 100%;
    height: 50vh;
      img{
        border-radius: 32px;
        width: 90%;
        height: 100%;
        object-fit: cover;
      }
  }
  .place-description-container{
    @include flex-center;
    padding: 23px 32px;
    // flex-direction: column;
      .place-description{
        @include flex-between;
        width: 100vw;
        .place-name{
          display: flex;
          flex-direction: column;
          gap: 5px;
          h2{
            margin: 0;
            font-weight: 700;
            font-size: 21.88px;
            line-height: 28px;
          }
          p{
            margin: 0;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            color: #051D8C;
          }
        }
        .place-rating{
          @include flex-center;
          gap: 5px;
          p{
            margin: 0;
            font-weight: 400;
            font-size: 17.5px;
            line-height: 24px;
            color: #ADACAC;
          }
        }
      }
  }
  .place-info-container{
    padding: 20px;
    background: #FAFAFA;
    border-radius: 6px;
    margin: 12px 30px 28px;
    .place-info{
      @include flex-center;
      border-bottom: 1px solid #E6E5E5;
      p{
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        color: #130F02;
      }
    }
    .place-address{
      svg{
          color: #B0AA00;
        }
      .address{
        display: flex;
        gap: 11.42px;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }
      .contact{
        display: flex;
        gap: 11.42px;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        margin: 0;
      }
    }  
  }
  .reviews-container{
      padding: 23px 32px;
      overflow-x: auto;
      .reviews-header{
        @include flex-between;
        p{
          &:nth-child(1){
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
          }
          &:nth-child(2){
            font-weight: 400;
            font-size: 13px;
            line-height: 17px;
            text-align: right;
            color: #051D8C;
          }
        }  
      }
      .review-card-container{
        @include flex-center;
        gap: 26px;
      }
    }
    .recommended-places-container{
      padding: 23px 32px;
      // margin-bottom: 20px;
      .recommended-places{
        @include flex-center;
        justify-content: flex-start;
        gap: 12px;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
    .book-btns{
      @include flex-center;
      gap: 14px;
      padding: 20px 36px 34px;
      button{
        width: 171px;
        &:nth-child(1){
          @include yellow-btn;
        }
        &:nth-child(2){
          @include transparent-btn;
        }
      }
    }
    // .ride-modal-container{
    //   position: absolute;
    //   left: 0;
    //   bottom: 0;
    // }
</style>
