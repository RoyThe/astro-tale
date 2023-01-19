import devtools from "@vue/devtools"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./plugins/router"
import "./app.css"

// TODO: make dependent on dotenv
// devtools.connect(/* host, port */)

createApp(App).use(router).mount("#app")
