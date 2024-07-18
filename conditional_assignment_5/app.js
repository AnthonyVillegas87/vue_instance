const app = Vue.createApp({
  data() {
    return {
      showList: true,
      buttonText: "Hide List",
      enteredTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },

    toggleList() {
      this.showList = !this.showList;
      this.buttonText = this.showList ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
