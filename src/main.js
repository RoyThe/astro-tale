import { createApp } from "vue"
import App from "./App.vue"
import router from "./plugins/router"
import "./app.css"

createApp(App).use(router).mount("#app")
