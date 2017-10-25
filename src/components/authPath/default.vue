<template>
    <div>
        <fm-welcome></fm-welcome>
        <fm-about></fm-about>
        <fm-post></fm-post>
        <fm-community></fm-community>
        <fm-blog></fm-blog>
        <fm-chat></fm-chat>
        <fm-study></fm-study>
        <fm-job></fm-job>
        <fm-video></fm-video>
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
    });
</script>
<style>
    @import "../../assets/style/authPath/default.css";
</style>
