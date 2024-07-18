const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    submitName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Form submitted!");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
