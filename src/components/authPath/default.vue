<template>
    <div>
        <div id="logo">
          <img src="../../assets/images/logo.png" alt="">
          <div class="hexy">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 195.5 221.4" xml:space="preserve">
              <path class="roundedHex" id="big-logo-hex" d="M90.5,219.3l-83-48.1c-4.6-2.6-7.4-7.5-7.4-12.8L0,62.5c0-5.3,2.8-10.2,7.4-12.8L90.1,2  c4.6-2.6,10.2-2.6,14.8,0l83,48.1c4.6,2.6,7.4,7.5,7.4,12.8l0.2,95.9c0,5.3-2.8,10.2-7.4,12.8l-82.7,47.7  C100.8,222,95.1,222,90.5,219.3z" />
            </svg>
          </div>
          <div class="hexy">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 195.5 221.4" xml:space="preserve">
              <path class="roundedHex" id="small-logo-hex" d="M90.5,219.3l-83-48.1c-4.6-2.6-7.4-7.5-7.4-12.8L0,62.5c0-5.3,2.8-10.2,7.4-12.8L90.1,2  c4.6-2.6,10.2-2.6,14.8,0l83,48.1c4.6,2.6,7.4,7.5,7.4,12.8l0.2,95.9c0,5.3-2.8,10.2-7.4,12.8l-82.7,47.7  C100.8,222,95.1,222,90.5,219.3z" />
            </svg>
          </div>
        </div>
        <!-- <div id="vertical-line">
          <svg height="300" width="9">
            <line x1="5" y1="0" x2="5" y2="300" style="stroke:rgb(255,255,255);stroke-width:1" /></svg>
        </div> -->
        <div id="section-name-holder">
          <p id="section-name">Freemig</p>
        </div>
        

        <!-- Side Navigation -->
        <div class="navbar" id="fm-default-nav">
            <ul>
                <li><span></span><a href="#welcome" @click="activate(1)" class="hex" style="background-color: #37bff1; border-color: #37bff1;"></a></li>
                <li><span></span><a href="#about" @click="activate(2)" class="hex" style="background-color: #f2992e; border-color: #f2992e;"></a></li>
                <li><span></span><a href="#post" @click="activate(3)" class="hex" style="background-color: #ff5e3a; border-color: #ff5e3a;"></a></li>
                <li><span></span><a href="#community" @click="activate(4)" class="hex" style="background-color: #f3726f; border-color: #f3726f;"></a></li>
                <li><span></span><a href="#blog" @click="activate(5)" class="hex" style="background-color: #ffdc1b; border-color: #ffdc1b;"></a></li>
                <li><span></span><a href="#chat" @click="activate(6)" class="hex" style="background-color: #41a85f; border-color: #41a85f;"></a></li>
                <li><span></span><a href="#study" @click="activate(7)" class="hex" style="background-color: #08ddc1; border-color: #08ddc1;"></a></li>
                <li><span></span><a href="#job" @click="activate(8)" class="hex" style="background-color: #5b6465; border-color: #5b6465;"></a></li>
                <li><span></span><a href="#video" @click="activate(9)" class="hex" style="background-color: #32bae7; border-color: #32bae7;"></a></li>
            </ul>
        </div>
        <div id="fullpage">
            <div class='section' data-anchor="welcome"><fm-welcome></fm-welcome></div>
            <div class='section' data-anchor="about"><fm-about></fm-about></div>
            <div class='section' data-anchor="post"><fm-post></fm-post></div>
            <div class='section' data-anchor="community"><fm-community></fm-community></div>
            <div class='section' data-anchor="blog"><fm-blog></fm-blog></div>
            <div class='section' data-anchor="chat"><fm-chat></fm-chat></div>
            <div class='section' data-anchor="study"><fm-study></fm-study></div>
            <div class='section' data-anchor="job"><fm-job></fm-job></div>
            <div class='section' data-anchor="video"><fm-video></fm-video></div>
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
            return {
              index: 1
            }
        },
        methods:{
          activate: function (index) {
            this.index = index;
          }
        },
        watch: {
          // scrollIndex: function(){
          //   console.log(this.scrollIndex);
          // }
        },
        mounted(){
            // var target = $('#fullpage');
            // console.log(target);
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
