<template>
    <div>
      <div id="fm-video" class="center-child component">
        <div class="row pull-right" id="video-btns">
          <a href="/signIn" class="btn btn-default">Log In</a>
          <a href="/signup" class="btn btn-default">Sign Up</a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6" id="video-text">
              <h1>AUDIO <span>&</span> <span class="yel">VIDEO</span><br><span>CALLING</span></h1>
              <p>
                Enjoy Freemig calling feature and share your priceless moment through <span style="color:#ffdc1b;font-weight:700">audio</span> or <span style="color:#ffdc1b;font-weight:700">video</span> – any you desire
              </p>
              <div id="video-img-1">
                <div class="disconnect-btn">
                  <button></button>
                  <div class="span"></div>
                  <div class="span"></div>
                </div>
                <img src="../../../assets/images/calling.png">

              </div>
            </div>
            <div class="col-md-5 col-md-offset-1 container center-child" id="video-half">
              <div id="video-img-2">
                <div id="video-link"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of container -->
        <div id="video-half-bg">
          <span></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>
<style></style>
