<template>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-top">
        <div class="close-panel">
          <div></div>
        </div>
        <div class="rides-panel">
          <div
            class="bolt"
            @click="activateBoltHandler"
            :class="{ active: activateBolt }"
          >
            <img src="../assets/img/boltCar.svg" alt="bolt" />
            <p>Bolt</p>
          </div>
          <div
            class="uber"
            @click="activateUberHandler"
            :class="{ active: activateUber }"
          >
            <img src="../assets/img/uberCar.svg" alt="uber" />
            <p>Uber</p>
          </div>
        </div>
      </div>
      <div class="modal-bottom">
        <button>Go to app</button>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "rideModal",
    data(){
        return{
            activateBolt: true,
            activateUber: false,
        }
    },
    methods:{
        closeModal(){
            this.$emit('close-modal');
            console.log("I'm being dragged");
        },
        initiateDrag(e){
            let dragged = e.target;
            for(let i = dragged.style.height; i > 0; i--){
                console.log("This is my height" + i);
            }
            // dragged.style.height = 100 + "px";
        },
        activateBoltHandler(){
            this.activateBolt = true
            this.activateUber = false
        },
        activateUberHandler(){
            this.activateUber = true
            this.activateBolt = false
        }
    },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
    activateBoltHandler() {
      this.activateBolt = true
      this.activateUber = false
    },
    activateUberHandler() {
      this.activateUber = true
      this.activateBolt = false
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 428px) {
  .modal-container {
    z-index: 9;
    width: 100vw;
    height: 100vh;
    background: rgba(1, 8, 40, 0.4);
    position: sticky;
    left: 0;
    bottom: 0;
    @include flex-center;
    align-items: flex-end;
    .modal {
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
      border-radius: 16px 16px 0px 0px;
      background-color: white;
      width: 100%;
      .modal-top {
        .close-panel {
          @include flex-center;
          width: 100%;
          padding: 14px 0px 23px;
          div {
            width: 60px;
            border-bottom: 1px solid #e4e4e4;
          }
        }
        .rides-panel {
          div {
            padding: 21px 19px 26px;
            display: flex;
            gap: 9px;
          }
          .active {
            background-color: #041a7a;
            color: white;
          }
        }
      }
      .modal-bottom {
        @include flex-center;
        gap: 9px;
        padding: 51px 30px 38px;
        background: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        button {
          width: 100%;
          &:nth-child(1) {
            @include yellow-btn;
            // width: 100%;
          }
          &:nth-child(2) {
            @include transparent-btn;
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) {
  .modal-container {
    align-items: center;
    .modal {
      border-radius: 16px;
      width: 40%;
      .modal-bottom {
        border-radius: 0px 0px 16px 16px;
      }
    }
  }
}
</style>
