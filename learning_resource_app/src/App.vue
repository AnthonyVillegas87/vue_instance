<template>
  <the-header title="Learning"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";
export default {
  components: { TheHeader, TheResources },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
