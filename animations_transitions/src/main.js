import { createApp } from "vue";
import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";

const app = createApp(App);

app.component("BaseModal", BaseModal);
app.mount("#app");
