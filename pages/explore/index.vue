<template lang="">
  <div class="container">
    <section class="top">
      <TheNavbar />
      <div class="welcome">
        <h1>Discover Lekki, Lagos</h1>
      </div>
    </section>
    <section class="middle">
      <div class="scroll">
        <TheScrollBar />
        <div class="line"></div>
      </div>
      <div class="search">
        <TheSearchBar />
      </div>
    </section>
    <section class="bottom">
      <div class="explore-cards"></div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  padding: 0rem 32px;
  max-width: 428px;
  border: 0.5px solid #041a7a;
  margin: 1rem 3rem;
  font-family: "Brown";
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "top"
    "mid"
    "bottom";
  .top {
    grid-area: top;
    .welcome {
      font-family: "Brown";
      margin-top: 34px;
      h1 {
        font-size: 34px;
        font-weight: 900;
        color: #041a7a;
      }
    }
  }
  .middle {
    grid-area: mid;
    .scroll {
      margin-top: 27px;
      .line {
        height: 1.5px;
        background: #fffee6;
        max-width: 428px;
      }
    }
    .search {
      margin-top: 12px;
    }
  }
  .bottom {
    grid-area: bottom;
  }
}
</style>
