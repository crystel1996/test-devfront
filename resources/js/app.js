import { createApp } from 'vue';
import './bootstrap';
import AppComponent from './components/App.vue';

const app = createApp(AppComponent);

app.mount('#app')