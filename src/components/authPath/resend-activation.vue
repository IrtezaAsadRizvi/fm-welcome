<template>
    <div id="form">
      <div class="container text-center" style="max-width:400px; height 100%;">
        <img class="logo" src="../../assets/images/logo-full.png" alt="">
        <p class="big-p">Connect.Share.Learn.Earn.</p>
        <form class="text-center" style="padding:0px 25px;">
          <img src="../../assets/images/hand-down.png" style="margin: 0px 20px 20px 20px;">
          <p style="margin:20px 0px;">Enter your email address or phone number below to have activation link or code resent to you.</p>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email or Phone">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default btn-block form-btn">Send</button>
          </div>
          <a href="/signIn" id="sign-up-link" style="left:-15px;"><i class="fa fa-arrow-left" aria-hidden="true"></i> SIGN IN</a>
        </form>
        <div class="footer-content">
          <h4 style="font-weight:700">Use the Freemig App!</h4>
          <p>It's faster and a zillion times better</p>
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
