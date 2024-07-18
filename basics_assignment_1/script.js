const app = Vue.createApp({
  data() {
    return {
      name: "Anthony Villegas",
      age: 37,
      imageURL: "./assets/IMG_1362.jpg",
    };
  },
  methods: {
    addYears() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
    inputField() {
      return this.name;
    },
  },
});

app.mount("#assignment");
