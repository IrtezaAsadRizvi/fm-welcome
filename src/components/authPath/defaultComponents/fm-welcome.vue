<template>
    <div id="fm-welcome" class="component">
        <div class="container">
          <!-- worldmap -->
          <div id="fm-welcome-main">
            <div class="row">
              <div id="welcome-content" class="col-md-5">
                <img src="../../../assets/images/logo-full.png">
                <p >Connect.Share.Learn.Earn.</p>
                <div class="form-holder">
                  <div id="mainButton" style="background-image: url('../../../images/welcome-form-bg.png')">
                  	<div class="btn-text" onclick="openForm()">Log In or Sign Up</div>
                  	<div class="modal">
                      <div class="login-html">
                        <div class="close-button" onclick="closeForm()">close</div>
                    		<input id="tab-1" type="radio" name="tab" class="sign-in" style="cursor:pointer" checked><label for="tab-1" class="tab">Log In</label>
                    		<input id="tab-2" type="radio" name="tab" class="sign-up" style="cursor:pointer"><label for="tab-2" class="tab">Sign Up</label>
                    		<div class="login-form">
                    			<div class="sign-in-htm">
                    				<div class="group">
                    					<label for="user" class="label">Username</label>
                    					<input id="user" type="text" class="input">
                    				</div>
                    				<div class="group">
                    					<label for="pass" class="label">Password</label>
                    					<input id="pass" type="password" class="input" data-type="password">
                    				</div>
                    				<div class="group">
                    					<input id="check" type="checkbox" class="check" checked>
                    					<label for="check"><span class="icon"></span> Keep me Signed in</label>
                    				</div>
                    				<div class="group">
                    					<input type="submit" class="button" value="Sign In">
                    				</div>
                    				<div class="hr"></div>
                            <div class="group">
                    					<input type="submit" class="button" value="Log In with Facebook" style="background-color:#2f5b9d">
                    				</div>
                            <div class="group">
                    					<input type="submit" class="button" value="Log In with Twitter" style="background-color:#38bff1">
                    				</div>
                            <div class="group">
                    					<input type="submit" class="button" value="Log In with Google" style="background-color:#df472f">
                    				</div>
                    				<div class="foot-lnk">
                    					<a href="#forgot">Forgot Password?</a>
                    				</div>
                    			</div>
                    			<div class="sign-up-htm">
                            <div class="group">
                    					<label for="pass" class="label">Email Address</label>
                    					<input id="pass" type="text" class="input">
                    				</div>
                    				<div class="group">
                    					<label for="pass" class="label">Password</label>
                    					<input id="pass" type="password" class="input" data-type="password">
                    				</div>
                    				<div class="group">
                    					<label for="pass" class="label">Repeat Password</label>
                    					<input id="pass" type="password" class="input" data-type="password">
                    				</div>

                    				<div class="group">
                    					<input type="submit" class="button" value="Sign Up">
                    				</div>
                    				<div class="group">
                    					<input type="submit" class="button" value="Log In with Facebook" style="background-color:#2f5b9d">
                    				</div>
                            <div class="group">
                    					<input type="submit" class="button" value="Log In with Twitter" style="background-color:#38bff1">
                    				</div>
                            <div class="group">
                    					<input type="submit" class="button" value="Log In with Google" style="background-color:#df472f">
                    				</div>
                    			</div>
                    		</div>
                    	</div>
                  	</div>
                  </div>
                </div>
                <!-- world-map -->
                <div id="world-map" class="animated fadeIn">
                  <!-- pulse-box 1 -->
                  <div class="pulse-box">
                    <svg class="pulse-svg" width="10px" height="10px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#FF6347" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#FF6347" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#FF6347" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#FF6347" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 2 -->
                  <div class="pulse-box" style="top: -15px; left:110px;">
                    <svg class="pulse-svg" width="8px" height="8px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 3 -->
                  <div class="pulse-box" style="bottom: -10px; left:65px;">
                    <svg class="pulse-svg" width="7px" height="7px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 4 -->
                  <div class="pulse-box" style="bottom: 10px; left:150px;">
                    <svg class="pulse-svg" width="11px" height="11px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 5 -->
                  <div class="pulse-box" style="top: 0px; left:195px;">
                    <svg class="pulse-svg" width="9px" height="9px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#7051af" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 6 -->
                  <div class="pulse-box" style="top: 66px; left:200px;">
                    <svg class="pulse-svg" width="12px" height="12px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#ff5e3a" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#ff5e3a" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#ff5e3a" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#ff5e3a" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 7 -->
                  <div class="pulse-box" style="top: 10px; right:0px;">
                    <svg class="pulse-svg" width="9px" height="9px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#08ddc1" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                  <!-- pulse-box 8 -->
                  <div class="pulse-box" style="bottom: 5px; right: 15px;">
                    <svg class="pulse-svg" width="7px" height="7px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <circle class="circle first-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle second-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle third-circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                      <circle class="circle" fill="#ffdc1b" cx="25" cy="25" r="25"></circle>
                    </svg>
                  </div>
                </div>
                <!-- end of world-map -->
              </div>
              <div class="col-md-7" style="position:relative">
                <div id="welcome-laptop" class="animated slideInRight"></div>
              </div>
            </div>
          </div>

          <!-- what is freemig -->
          <div id="what-is">
            <a href="#about"><span>What is Freemig?</span></a>
          </div>
        </div>
        <div id="mobile-apps">
          <div class="row">
            <div class="col-md-6 text-center">
              <img src="../../../assets/images/android-logo.png">
              <h5>ANDROID</h5>
            </div>
            <div class="col-md-6 text-center">
              <img src="../../../assets/images/apple-logo.png">
              <h5>IOS APP</h5>
            </div>
          </div>
        </div>
        <a id="down-arrow" href="#about"><img src="../../../assets/images/down-arrow.png"></a>
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

</style>
