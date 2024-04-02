import "../public/global.css";
import { createApp } from "vue";
import Homepage from "./screens/Homepage.vue";
import AboutPage from "./screens/AboutPage.vue";
import GalleryPage from "./screens/GalleryPage.vue";
import HobbiesPage from "./screens/HobbiesPage.vue";


createApp(Homepage).mount("#app");
createApp(AboutPage).mount("#app")
createApp(GalleryPage).mount("#app")
createApp(HobbiesPage).mount("#app")

