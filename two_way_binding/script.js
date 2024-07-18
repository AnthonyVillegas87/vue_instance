const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },

  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Villegas";
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Villegas";
    },
  },
});

app.mount("#events");
