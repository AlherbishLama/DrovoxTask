/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue').default;

var VueResource = require('vue-resource');
Vue.use(VueResource);

import ExampleComponent from './components/ExampleComponent.vue';
import EmployeesList from './components/employee/EmployeesList.vue';



Vue.component('example-component', ExampleComponent);
Vue.component('employees-list', EmployeesList);


const app = new Vue({el: '#app',
    methods:{
        getRequest(url) {
            return VueResource.Http.get(window.location.origin +url).catch()}
    }});
