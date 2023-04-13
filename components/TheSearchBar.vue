<template>
  <div class="search-container" @click="isVisible = !isVisible">
    <div class="search">
      <input
        class="input"
        type="search"
        placeholder="search for your favorite locations"
        v-model="searchQuery"
      >
      <img src="~/assets/images/Search-icon.svg" alt="Search">
    </div>
    <div v-if="isVisible" class="options" @mouseleave="isVisible = !isVisible">
      <ul v-for="(result, index) in searchResults" :key="index">
        <a :href="`/explore/${result.fullSearchResult.place_id}`"><li>
          <font-awesome-icon icon="location-arrow" />
          {{ result.fullSearchResult.formatted_address }}
        </li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchResults: [
      ],
      searchQuery: '',
      isVisible: false
    }
  }
}
</script>
<style lang="scss" scoped>
.search-container {
  transition: all ease-in-out 500ms;
  .search {
    width: 90%;
    text-align: right;
    input {
      position: absolute;
      left: 32px;
      height: 40px;
      width: 90%;
      background: rgba(235, 235, 235, 0.5);
      border: 0.5px solid rgba(196, 196, 196, 0.3);
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.14);
      box-sizing: border-box;
      border-radius: 32px;
      padding: 0rem 1.5rem;
      margin-bottom: 24px;
      margin-top: 6px;
    }
    img {
      width: 20px;
      margin-top: 16px;
      color: #041a7a;
    }
  }
  .options {
    position: absolute;
    background: #fff;
    margin: 0.5rem 1.7rem;
    width: 92%;
    max-height: 300px;
    overflow: scroll;
    z-index: 3;
    border-radius: 32px;
    ul {
      transition: all ease-in-out 500ms;
      margin: 0;
      padding: 0rem 1rem;
      a {
        text-decoration: none;
        color: #041a7a;
      }
      li {
        color: #041a7a;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0rem;
        list-style-type: none;
        &:hover {
          background: #f4f3f3;
          border-radius: 32px;
        }
        svg {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
