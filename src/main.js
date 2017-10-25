import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routers/index.js'

// 3rd party Dependencies
import jQuery from 'jquery'
global.jQuery = global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'


// Default Components
import FmWelcome from './components/authPath/defaultComponents/fm-welcome.vue'
import FmAbout from './components/authPath/defaultComponents/fm-about.vue'
import FmPost from './components/authPath/defaultComponents/fm-post.vue'
import FmCommunity from './components/authPath/defaultComponents/fm-community.vue'
import FmBlog from './components/authPath/defaultComponents/fm-blog.vue'
import FmChat from './components/authPath/defaultComponents/fm-chat.vue'
import FmStudy from './components/authPath/defaultComponents/fm-study.vue'
import FmJob from './components/authPath/defaultComponents/fm-job.vue'
import FmVideo from './components/authPath/defaultComponents/fm-video.vue'

// setting up Default Components
Vue.component('fm-welcome', FmWelcome)
Vue.component('fm-about', FmAbout)
Vue.component('fm-post', FmPost)
Vue.component('fm-community', FmCommunity)
Vue.component('fm-blog', FmBlog)
Vue.component('fm-chat', FmChat)
Vue.component('fm-study', FmStudy)
Vue.component('fm-job', FmJob)
Vue.component('fm-video', FmVideo)


// VueRouter
Vue.use(VueRouter)


// Init Vue
// ======================
const router = new VueRouter({ routes:routes, mode :'history' });
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
