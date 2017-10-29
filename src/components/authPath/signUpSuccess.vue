<template>
    <div id="form">
      <div class="container text-center" style="max-width:600px; height 100%">
        <img class="logo" src="../../assets/images/logo-full.png" alt="">
        <p class="big-p">Connect.Share.Learn.Earn.</p>
        <div id="thank-you-box">
          <div id="smiley"></div>
          <p>Thank you for signing up with us.<br>We have sent you an activation link to your email address.<br>Please verify your acccount and start exploring.</p>
          <button type="button" class="resend-btn" name="button">Resend Activation</button>
        </div>
        <div class="footer-content">
          <div class="row" id="app-links">
            <a href="#"><i class="fa fa-apple" aria-hidden="true"></i> App Store</a>
            <a href="#"><i class="fa fa-android" aria-hidden="true"></i> Play Store</a>
          </div>
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
<style>
  @import "../../assets/style/authPath/style.css";
</style>
