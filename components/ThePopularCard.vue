<template lang="">
  <div class="cards-container">
    <div class="scroll">
      <div class="card">
        <div class="card-text">
          <h1>Landmark Beach</h1>
          <p>
            Sport activities, relaxation, <br />
            restaurants, cafe and more
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-text">
          <h1>Landmark Beach</h1>
          <p>
            Sport activities, relaxation, <br />
            restaurants, cafe and more
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-text">
          <h1>Landmark Beach</h1>
          <p>
            Sport activities, relaxation, <br />
            restaurants, cafe and more
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.cards-container {
  width: 428px;
  overflow: scroll;
  .scroll {
    display: flex;
    flex-direction: row;
    width: 246px;
    gap: 10px;
    .card {
      background-image: url("../assets/img/landmark.jpeg");
      background-position: center;
      border-radius: 32px;
      margin: 0rem 10px;
      height: 410px;
      transition: transform 500ms ease;
      .card-text {
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 0rem 0.8rem;
        margin-top: 290px;
        margin-right: 10px;
        h1 {
          font-size: 25px;
          margin: 0px;
          line-height: 31px;
        }
        p {
          width: 286px;
          font-size: 14px;
          font-weight: 300;
        }
      }
    }
    .card:hover {
      transform: scale(1.02);
    }
  }
}
</style>
