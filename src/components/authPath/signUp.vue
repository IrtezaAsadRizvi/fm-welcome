<template>
    <div id="form">
      <div class="container text-center" style="max-width:400px; height 100%">
        <img class="logo" src="../../assets/images/logo-full.png" alt="">
        <p class="big-p">Connect.Share.Learn.Earn.</p>
        <form class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Full Name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email/Phone">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default btn-block form-btn">Sign Up</button>
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

          <a href="/signIn" id="sign-up-link"><i class="fa fa-arrow-left" aria-hidden="true"></i> SIGN IN</a>
        </form>
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
