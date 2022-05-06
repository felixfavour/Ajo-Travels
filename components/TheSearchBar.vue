<template>
  <div class="search">
    <input class="input" type="search" />
    <!-- <font-awesome-icon icon="magnifying-glass" /> -->
    <img src="../assets/img/search-icon.svg" alt="Search">
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.search {
  max-width: 364px;
  text-align: right;
  input {
    position: absolute;
    left: 32px;
    height: 40px;
    width: 364px;

    background: rgba(235, 235, 235, 0.5);
    border: 0.5px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.14);
    border-radius: 32px;
    padding: 0rem 1.5rem;
  }
  .input:focus {
    border: 0px solid #c4c4c4;
  }
  svg {
    position: absolute;
    width: 20px;
    margin-top: 10px;
    color: #041a7a;
  }
}
</style>
