<template>
    <div id="form">
      <div class="container text-center" style="max-width:400px; height 100%">
        <img class="logo" src="../../assets/images/logo-full.png" alt="">
        <p class="big-p">Connect.Share.Learn.Earn.</p>
        <form class="text-center">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Username/email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default btn-block form-btn">Login</button>
          </div>
          <div id="or-line">OR</div>
          <div style="width:100%; text-align:center">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <button class="btn social-btn" style="background-color:#2f5b9d;"><i class="fa fa-facebook" aria-hidden="true"></i></button>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <button class="btn social-btn" style="background-color:#38bff1;"><i class="fa fa-twitter" aria-hidden="true"></i></button>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-4">
              <button class="btn social-btn" style="background-color:#df472f;"><i class="fa fa-google-plus" aria-hidden="true"></i></button>
            </div>
          </div>

          <a href="/signup" id="sign-up-link">SIGN UP <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
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
