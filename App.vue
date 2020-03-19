<template>
  <div id="app">
    <h1>手写vue-router</h1>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/product">产品</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(`app component mounted`);
    console.log(this);
  }
};
</script>

<style lang="scss">
@import "./variables.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>