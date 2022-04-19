<template lang="">
  <div class="search">
    <!-- <input class="input" type="search" /> -->
    <font-awesome-icon icon="magnifying-glass" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.search {
  // position: absolute;
  border-radius: 30px;
  margin: 0.5rem 0.5rem;
  width: 304px;
  height: 40px;
  padding: 0px 60px;
  max-width: 364px;
  text-align: right;
  background-color: #c4c4c4;
  input {
    border: 0px solid #c4c4c4;
    background-color: #c4c4c4;
    border-radius: 30px;
    padding: 0rem 1.5rem;
  }
  .input:focus {
    border: 0px #c4c4c4;
  }
  svg {
    position: absolute;
    width: 20.01px;
    text-align: center;
    padding: 10px 0px;
  }
}
</style>
