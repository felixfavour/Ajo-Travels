<template lang="">
  <div class="button" :class="value">
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: 'TheButton',
  props: {
    title: String,
    value: String
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.button {
  font-family: "AirbnbCereal_W_lt";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 56px;
  height: 34px;
  gap: 10px;
  transition: all 250ms ease;
  p {
    margin: 0px;
    display: flex;
    flex-direction: row;
  }
}

.whiteBgLg {
  background-color: #fff;
  color: #041a7a;
  width: 364px;
  height: 56px;
}

.whiteBgLg:hover {
  transform: scale(1.02);
  border: 1px solid #fcf300;
  background-color: transparent;
  color: #fcf300;
}

.yellowBgLg {
  background-color: #fcf300;
  color: #041a7a;
  width: 364px;
  height: 56px;
}

.yellowBgLg:hover {
  transform: scale(1.02);
  border: 1px solid #041a7a;
  background-color: transparent;
  color: #041a7a;
}
</style>
