import { createApp } from 'vue';
import ComponentInstall from './components/index';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import './theme/index.scss';

createApp(App)
  .use(ComponentInstall)
  .use(store)
  .use(router)
  .mount('#app');
