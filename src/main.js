import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import "aos/dist/aos.css";

let app = createApp(App);

app.config.globalProperties.apiUrl =
	"https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products";
app.mount("#app");
