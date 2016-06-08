-My build DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
<!DOCTYPE html><html prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"  lang="id-ID"  style="font-size:62.5%"  class="hiperf"  dir="ltr" >

 <body>
 
 <script type = "text/javascript" 
         src = "C:\Users\Axioo\Favorites\fontFace.js "></script>
		 
		 </body>
		 		 (function(n){function i(i,r){try{var u=new n.FontFace(i,r,{}).load();t.push(u)}catch(f){}}var t=[];typeof n.FontFace=="function"&&i("ps_g","url(//static-hp-eas-s-msn-com.akamaized.net/sc/a0/cc987d.woff)")})(window),function(n,t){function o(n,i,r){typeof n!="string"&&(r=i,i=n,n=t);i&&i.splice||(r=i,i=[]);n=="c.dom"&&(l=!0);s(n,i,r)}function s(n,t,i,r){var e,o,s,h;n&&u[n]||(e=k(n,t),e?(s=typeof i=="function",h=l&&s&&n!="dap"&&n!="adLoad"&&t&&(t.length!=1||t[0]!="dap"&&t[0]!="c.dom"),h?setTimeout(function(){o=i.apply(null,e);a(n,o)},1):(o=s?i.apply(null,e):i,a(n,o))):f.push(r||{i:n,d:t,f:i}))}function a(t,i){t&&(i?(u[t]=i,v()):n.console&&console.error("Dependencies resolved, but object still not defined (or is otherwise falsey). id:"+t+"; typeof obj: "+typeof i))}function v(){var r,u,n,t;if(f.length&&!i){do for(r=f,u=r.length,f=[],i=1,t=0;t<u;t++)n=r[t],s(n.i,n.d,n.f,n);while(i>1);i=0}else i&&(i=2)}function k(i,r){for(var s,v,h,f=[],c=r?r.length:0,o=0;o<c;o++){var l=r[o],a=u[l],y=typeof a!="undefined";if(!y){if(s=b.exec(l),s)if(v=s[1],h=n[v],h!==t){f.push(h);continue}else e||(e=setTimeout(d,w));break}f.push(a)}return c==f.length?f:0}function d(){e=0;v()}function g(n,i,r){(typeof n!="object"||n&&n.splice)&&(r=i,i=n,n={});i&&i.splice||(r=i,i=[]);nt(n.js);r&&s(t,i,r)}function nt(n){if(typeof n=="string")y(n);else if(n)for(var t=0;t<n.length;t++)y(n[t])}function y(n){if(!c[n]){c[n]=1;var i=document.getElementsByTagName("script")[0],t=document.createElement("script");t.src=n;t.onload=t.onreadystatechange=function(){this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t))};i.parentNode.insertBefore(t,i)}}function tt(n){return p?n?r.now():Math.round(r.now()):new Date-h}var r=n.performance,h=((r||{}).timing||{}).navigationStart||(n._timing||{}).start||+new Date,p=r&&typeof r.now=="function",u={date:Date,document:document,image:Image,localStorage:n.localStorage,location:document.location,navigator:navigator,pageStart:h,pageTime:tt,screen:screen,window:n},f=[],i,w=50,e,c={},l=!1,b=/^window\.(.+)$/;o.amd={jQuery:1};o.is=function(n){return typeof u[n]!="undefined"};n.define=o;n.require=g}(window);define("perfPing",function(){function n(n){require(["w3cTimer"],n)}function t(t){n(function(n){n.mark(t)})}function i(t){n(function(n){n.fire();typeof t=="function"&&t(n.payload)})}return{setMarker:t,getPayLoad:i}});define("perfMarker",["window"],function(n){function h(){return e?t.now()|0:i&&s()-i}var t=n.performance,r,f;if(!t)return function(){};var e=typeof t.now=="function",o=typeof t.mark=="function",i=(t.timing||{}).navigationStart,s=typeof Date.now=="function"?Date.now:function(){return+new Date},u;return u=n.console&&typeof console.timeStamp=="function",r=n._pageTimings||(n._pageTimings={}),f=!1,function(n,e,s){var c,l;typeof n!="string"||e&&r[n]&&!s||(c=typeof e=="number",c||(o&&t.mark(n),u&&console.timeStamp(n)),(e||f)&&(l=c?Math.round(e-i):h(),r[n]=l))}})

-HAR:

-To be evaluated in console:

-Benchmark:
-Developer Tools:
-Mozilla Firefox:
SyntaxError: nothing to repeat
 pub.html:1:395
unreachable code after return statement client:380:1
unreachable code after return statement client:380:1
-Internet Explorer:
HTML1300: Navigation occurred.
File: pub.html
-Google Chrome:
2016-06-08 03:36:57.840 file://static-hp-eas-s-msn-com.akamaized.net/sc/a0/cc987d.woff Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-06-08 03:36:57.864 undefined:1 Uncaught (in promise) DOMException: A network error occurred.
2016-06-08 03:37:05.662 file://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208 Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-06-08 03:37:25.733 Error saving setting with name: fileSystemMapping, value length: 54. Error: Failed to set the 'fileSystemMapping' property on 'Storage': Setting the value of 'fileSystemMapping' exceeded the quota.
2016-06-08 03:37:25.766 Ten largest settings: 
2016-06-08 03:37:25.944 Setting: 'consoleHistory', size: 5235508
2016-06-08 03:37:25.944 Setting: 'savedURLs', size: 3818
2016-06-08 03:37:25.944 Setting: 'previouslyViewedFiles', size: 2803
2016-06-08 03:37:25.944 Setting: 'breakpoints', size: 227
2016-06-08 03:37:25.944 Setting: 'eventListenerBreakpoints', size: 220
2016-06-08 03:37:25.944 Setting: 'watchExpressions', size: 45
2016-06-08 03:37:25.944 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-06-08 03:37:25.944 Setting: 'experiments', size: 2
2016-06-08 03:37:25.944 Setting: 'domBreakpoints', size: 2
2016-06-08 03:37:25.944 Setting: 'workspaceExcludedFolders', size: 2
