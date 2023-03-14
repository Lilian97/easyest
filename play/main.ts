import { createApp } from "vue";
import App from "./app.vue";
import lilyui from "@lilyui/components"
const app = createApp(App);
app.use(lilyui)
app.mount("#app");