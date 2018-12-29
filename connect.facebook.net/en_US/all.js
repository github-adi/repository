<!DOCTYPE html>
<HTML>

<HEAD>

<script src="https://connect.facebook.net/en_US/all.js"></script>
<script src="https://connect.facebook.net/en_US/fbevents.js"></script>
<script src="https://connect.facebook.net/en_US/sdk.js"></script>
<script src="https://connect.facebook.net/en_US/all.js?hash=da4f5ad64586eba6d6f1ceaf687a6a81"></script>

</HEAD>
<BODY>

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{167185933303631}',
      cookie     : true,
      xfbml      : true,
      version    : '{v3.2}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<script>

{
    status: 'connected',
    authResponse: {
        accessToken: '167185933303631|To9HWkfF1toHJJdwWUoeX5z3AVQ';
		
}
}

</script>		

<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>

<script>

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
</script>

</BODY>
</HTML>
