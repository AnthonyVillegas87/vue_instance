const app = Vue.createApp({
  data() {
    return {
      title: "",
      name: "",
    };
  },

  methods: {
    submitAlert() {
      alert("You clicked the button!");
    },
    submitTitle(event) {
      this.title = event.target.value;
    },
    submitName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#assignment");
