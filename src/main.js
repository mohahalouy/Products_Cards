import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    once: true
});
createApp(App).mount("#app");
