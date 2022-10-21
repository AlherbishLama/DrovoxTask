/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue').default;

var VueResource = require('vue-resource');
Vue.use(VueResource);

import WelcomeComponent from './components/WelcomeComponent.vue';
import EmployeesList from './components/employee/EmployeesList.vue';
import ViewEmployee from "./components/employee/ViewEmployee";



Vue.component('welcome-component', WelcomeComponent);
Vue.component('employees-list', EmployeesList);
Vue.component('view-employee', ViewEmployee);


const app = new Vue({el: '#app',
    methods:{
        getRequest(url) {
            return VueResource.Http.get(window.location.origin +url).catch()}
    }});
