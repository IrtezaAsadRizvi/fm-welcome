<template>
    <div>
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

      <!-- <fm-welcome></fm-welcome>
      <fm-about></fm-about>
      <fm-post></fm-post>
      <fm-community></fm-community>
      <fm-blog></fm-blog>
      <fm-chat></fm-chat>
      <fm-study></fm-study>
      <fm-job></fm-job>
      <fm-video></fm-video> -->
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
    // styling goes here
    $(document).ready(function(){
      $("#para").click(function(){
        $(this).hide();
      });

      // fullpage
      $('#fullpage').fullpage({
    			navigation: true,
    			navigationPosition: 'left',
    			autoScrolling:true,
    			fitToSection: false, 
    			sectionsColor: ['#fff', '#EDA82D', '#40A0E6', '#fff','#AEAFB2','#EDA82D', '#40A0E6', '#fff','#AEAFB2'] //bg
    		});
      });
</script>
<style>
    @import "../../assets/style/authPath/default.css";
</style>
