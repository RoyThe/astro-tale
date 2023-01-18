import devtools from "@vue/devtools"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./plugins/router"
import "./app.css"

devtools.connect(/* host, port */)


createApp(App).use(router).mount("#app")
