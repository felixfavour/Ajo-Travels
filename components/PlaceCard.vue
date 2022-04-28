<template>
  <div class="place-card-container">
    <img src="../assets/img/placeCardImg.png" alt="recommended place" />
  </div>
</template>

<script>
export default {
  name: 'placeCard',
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 428px) {
  .place-card-container {
    border-radius: 32px;
    width: 170px;
    height: 110px;
    img {
      object-fit: contain;
    }
  }
}
</style>
