import Vue from 'vue';
import VueRouter from 'vue-router';

import EventBus from './event';

import store from './store';
import router from './router';
import HelloWorld from './view/HelloWorld';

Vue.use(VueRouter);
window.EventBus = EventBus; // communication between components

let app = new Vue({
    el: '#app',
    components: { 'hello-world': HelloWorld },
    store,
    router,
});