import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// importing AOS css style globally
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    once: true
});

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(VueSweetalert2);

app.mount('#app');
