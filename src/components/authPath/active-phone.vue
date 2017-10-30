<template>
    <div id="form">
      <div class="container text-center" style="max-width:400px; height 100%;">
        <img class="logo" src="../../assets/images/logo-full.png" alt="">
        <p class="big-p">Connect.Share.Learn.Earn.</p>
        <form class="text-center" style="padding:0px 25px;">
          <img src="../../assets/images/hand-down.png" style="margin: 0px">
          <p style="margin:20px 0px;">Please insert your activation code which has been sent to your phone number to active your account.</p>
          <div class="form-group" id="activation-code-input">
            <label for="">Activation Code</label> <br>
            <input type="text" class="inputs" data-maxlength="1">
            <input type="text" class="inputs" data-maxlength="1">
            <input type="text" class="inputs" data-maxlength="1">
            <input type="text" class="inputs" data-maxlength="1">
            <input type="text" class="inputs" data-maxlength="1">
            <input type="text" class="inputs" data-maxlength="1">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default btn-block form-btn">Login</button>
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
