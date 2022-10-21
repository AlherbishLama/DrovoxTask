/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue').default;

var VueResource = require('vue-resource');
Vue.use(VueResource);
/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

import ExampleComponent from './components/ExampleComponent.vue';
Vue.component('example-component', ExampleComponent);


const app = new Vue({el: '#app',
    methods:{
        getRequest(url) {
            return VueResource.Http.get(window.location.origin +url).catch()}
    }});
