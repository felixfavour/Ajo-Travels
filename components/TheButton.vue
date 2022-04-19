<template lang="">
  <div class="button" :class="value">
    <p>{{ title }}</p>
  </div>
</template>
<script>
export default {
  name: "TheButton",
  props: {
    title: String,
    value: String,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.button {
  font-family: "Airbnb Cereal App", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 56px;
  height: 34px;
  gap: 10px;
  color: #fff;
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
.transBlack {
  background-color: none;
  color: #000;
}
.transBlue {
  background-color: none;
  color: #476bd2;
}

.whiteBlue {
  background-color: #fff;
  color: #476bd2;
}
.whiteBlack {
  background-color: #fff;
  color: #000;
}
.blackBorder {
  border: 1px solid #000;
  color: #000;
}
.blueBorder {
  border: 1px solid #476bd2;
  color: #fff;
}
.blueBorder2 {
  border: 1px solid #476bd2;
  color: #476bd2;
}
.lightBlue {
  background-color: #eaedf8;
  color: #476bd2;
}
@media screen and (max-width: 800px) {
  .button {
    font-size: 11px;
  }
}
</style>
