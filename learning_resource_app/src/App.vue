<template>
  <the-header title="Learning"></the-header>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: { TheHeader },

  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "design-gurus",
          title: "Design Gurus",
          description: "Learn System Design",
          link: "https://designgurus.io",
        },
      ],
    };
  },
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
