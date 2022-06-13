import { createApp } from "vue";
import App from "./App.vue";

let app = createApp(App);

app.config.globalProperties.apiUrl =
	"https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products";

app.mount("#app");
