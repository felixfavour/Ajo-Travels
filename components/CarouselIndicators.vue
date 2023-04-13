<template>
  <div class="carousel-indicator-container">
    <div class="indicator-dots">
      <div v-for="(photo, key) in photosArray" :key="key" class="dots" :class="{ active : currentIndex === key }">
        <p />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselIndicators',
  props: {
    photosArray: {
      Required: true,
      type: Array
    },
    currentIndex: {
      Required: true,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
    .carousel-indicator-container{
        position: absolute;
        bottom: 20px;
        left: calc(50% - 56px);
        .indicator-dots{
            @include flex-center;
            gap: 5px;
            overflow-x: auto;
            overflow-y: hidden;
            .dots{
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: white;
                p{
                    width: 100%;
                }
            }
            .active{
                width: 22px;
                border-radius: 16px;
            }
        }
    }
</style>
