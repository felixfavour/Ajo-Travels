<template lang="">
  <div class="cards-container">
    <div class="scroll">
      <a href="/explore/:id" target="_blank">
        <div class="card">
          <div class="card-text">
            <h1>{{ place.fullSearchResult.name }}</h1>
            <p>
              {{ place.fullSearchResult.vicinity }}
            </p>
            <img
              src="https://lh3.googleusercontent.com/places/AAcXr8oitbZRPPGdK0-3GQp2lnrNeGclN1wh34J_vrmPDlGWFdxc2zssvzhCE16I8eupGiccuYmpl4_VGvkQXy6jOzqj76feJ20VAoQ=s1600-w1600-h1600"
              alt=""
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    place: Object,
    name: String,
    id: String,
    index: Number,
  },
};
</script>
<style lang="scss" scoped>
.cards-container {
  .scroll {
    a {
      text-decoration: none;
      .card {
        background-position: center;
        position: relative;
        margin: 1rem 10px;
        height: 410px;
        transition: transform 500ms ease;
        opacity: 0.8;
        .card-text {
          display: flex;
          flex-direction: column;
          color: #fff;
          h1 {
            font-size: 25px;
            margin: 0px;
            line-height: 31px;
            margin-top: 290px;
            padding: 0rem 0.8rem;
          }
          p {
            width: 276px;
            font-family: "Brown";
            font-size: 14px;
            font-weight: 300;
            padding: 0rem 0.8rem;
          }
          img {
            position: absolute;
            z-index: -1;
            width: 296px;
            height: 410px;
            border-radius: 32px;
          }
        }
      }
    }
    .card:hover {
      transform: scale(1.02);
      opacity: 1;
    }
  }
}
</style>
