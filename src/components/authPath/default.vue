<template>
    <div>
        <div class="indicator" style="position: fixed;top: 10px;right: 10px;z-index: 111;">
            <ul>
                <li @click="changeView(1)">1</li>
                <li @click="changeView(2)">2</li>
                <li @click="changeView(3)">3</li>
                <li @click="changeView(4)">4</li>
                <li @click="changeView(5)">5</li>
                <li @click="changeView(6)">6</li>
                <li @click="changeView(7)">7</li>
            </ul>
        </div>
        <div id="fullpage">
            <div class='section'><fm-welcome></fm-welcome></div>
            <div class='section'><fm-about></fm-about></div>
            <div class='section'><fm-post></fm-post></div>
            <div class='section'><fm-community></fm-community></div>
            <div class='section'><fm-blog></fm-blog></div>
            <div class='section'><fm-chat></fm-chat></div>
            <div class='section'><fm-study></fm-study></div>
            <div class='section'><fm-job></fm-job></div>
            <div class='section'><fm-video></fm-video></div>
        </div>
    </div>
</template>

<script>
    import FmWelcome from './defaultComponents/fm-welcome.vue'
    import FmAbout from './defaultComponents/fm-about.vue'
    import FmPost from './defaultComponents/fm-post.vue'
    import FmCommunity from './defaultComponents/fm-community.vue'
    import FmBlog from './defaultComponents/fm-blog.vue'
    import FmChat from './defaultComponents/fm-chat.vue'
    import FmStudy from './defaultComponents/fm-study.vue'
    import FmJob from './defaultComponents/fm-job.vue'
    import FmVideo from './defaultComponents/fm-video.vue'
    export default {
        data () {
            return {}
        },
        methods:{
            changeView: function (type) {
                console.log(type);
            }
        },
        mounted(){
            var target = $('#fullpage');
            console.log(target);
        },
        components:{
            FmWelcome, FmAbout, FmPost, FmCommunity, FmBlog, FmChat,
            FmStudy, FmJob, FmVideo
        }
    }
</script>
<style>
    @import "../../assets/style/authPath/style.css";
</style>
