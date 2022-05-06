<template>
  <div class="search">
    <img src="../assets/img/search-icon.svg" alt="Search" />
    <input
      class="input"
      type="search"
      placeholder="where do you want to visit?"
    />
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
    margin-bottom: 24px;
    margin-top: 6px;
  }
  .input:focus {
    border: 0px solid #c4c4c4;
  }
  img {
    width: 20px;
    margin-top: 16px;
    color: #041a7a;
  }
}
</style>
