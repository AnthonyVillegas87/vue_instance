// const buttonElement = document.querySelector("button");
// const inputElement = document.querySelector("input");
// const listElement = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputElement.value;
//   const listItem = document.createElement("li");
//   listItem.textContent = enteredValue;
//   listElement.appendChild(listItem);
//   inputElement.value = "";
// }

// buttonElement.addEventListener("click", addGoal);

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
