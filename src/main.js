import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.provide('app-message', 'root level message');

app.config.globalProperties.msg = 'Hello';
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
