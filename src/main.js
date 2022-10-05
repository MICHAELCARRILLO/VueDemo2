import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import './assets/main.css'

//primevue components
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';

//my components
import NavbarComponent from './components/Navbar.vue'


const app = createApp(App)
app.use(PrimeVue, {ripple: true});
app.use(router)


//calling primevue components
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-splitbutton', SplitButton);

//calling my components
app.component('navbar', NavbarComponent);


app.mount('#app')
