import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';
import {faUserSecret, faXmark, faMoon, faSun,} from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faXmark, faMoon, faSun);
// import SvgIcon from '@jamescoyle/vue-icon'
// import { mdiAccount } from '@mdi/js'
import '@/assets/css/styles.scss';


createApp(App).use(store).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
