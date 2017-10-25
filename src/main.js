import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routers/index.js'

// Plugins
// ===================
var jQuery = require("jquery")
window.$ = jQuery
window.jQuery = jQuery


Vue.use(VueRouter)


// Init Vue
// ======================
const router = new VueRouter({ routes:routes, mode :'history' });
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});