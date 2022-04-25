<template lang="">
  <div class="cards-container">
    <div class="scroll">
      <nuxt-link to="/explore/id">
        <div class="card">
          <div class="card-text">
            <h1>Landmark Beach</h1>
            <p>
              Sport activities, relaxation, <br />
              restaurants, cafe and more
            </p>
          </div>
        </div>
      </nuxt-link>

      <nuxt-link to="/explore/:id">
        <div class="card">
          <div class="card-text">
            <h1>Landmark Beach</h1>
            <p>
              Sport activities, relaxation, <br />
              restaurants, cafe and more
            </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/explore/id">
        <div class="card">
          <div class="card-text">
            <h1>Landmark Beach</h1>
            <p>
              Sport activities, relaxation, <br />
              restaurants, cafe and more
            </p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/explore/id">
        <div class="card">
          <div class="card-text">
            <h1>Landmark Beach</h1>
            <p>
              Sport activities, relaxation, <br />
              restaurants, cafe and more
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.cards-container {
  .scroll {
    display: flex;
    flex-direction: row;
    width: 246px;
    a {
      text-decoration: none;
      .card {
        background-image: url("../assets/img/landmark.jpeg");
        background-position: center;
        border-radius: 32px;
        margin: 1rem 10px;
        height: 410px;
        transition: transform 500ms ease;
        opacity: 0.8;
        .card-text {
          display: flex;
          flex-direction: column;
          color: #fff;
          padding: 0rem 0.8rem;
          h1 {
            font-size: 25px;
            margin: 0px;
            line-height: 31px;
            margin-top: 290px;
          }
          p {
            width: 276px;
            font-family: serif;
            font-size: 14px;
            font-weight: 300;
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
