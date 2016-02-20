-Planet 9:
-My build:
-To be architectured by Muhammad Adi Nugroho, S.Adm. Neg.:
-Resources:
-Java Script Link Address:
http://vortex.accuweather.com/adc2010/javascripts/adclotaud.min-20150508.js
-To be evaluated in console:

var cc_client_id=5354,cc_extr_callback="ccauds";
function get_cc_extr_url(){var a=".crwdcntrl.net",b=!0,e=document.cookie.indexOf("_cc_domain");if(-1<e){var c=document.cookie.indexOf("=",e);0<c&&(b=!1,c++,a=document.cookie.indexOf(";",c),a=0<a?a:document.cookie.length,a=document.cookie.slice(c,a))}c=!1;if(b){var d,e=document.cookie.indexOf("_cc_id");-1<e&&(b=document.cookie.indexOf("=",e),0<b&&(c=!0,b++,d=document.cookie.indexOf(";",b),d=0<d?d:document.cookie.length,d=document.cookie.slice(b,d)))}a="http://ad"+a;"undefined"!=typeof portNumber&&
null!=portNumber&&(a=a+":"+portNumber);a=a+"/5/c="+cc_client_id+"/pe=y/callback="+cc_extr_callback;c&&(a=a+"/pid="+d);return a}function ccauds(a){if(void 0!=a&&void 0!=a.Profile&&void 0!=a.Profile.tpid){a=a.Profile.tpid;var b=new Date;b.setTime(b.getTime()+18E5);b="expires="+b.toUTCString();document.cookie="adctpid="+a+"; "+b+"; path=/"}}
function getAudiences(){var a=get_cc_extr_url(),b=document.createElement("script");b.type="text/javascript";b.src=a;document.getElementsByTagName("head")[0].appendChild(b)}getAudiences();
Error saving setting with name: consoleHistory, value length: 5236205. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5235078
Setting: 'previouslyViewedFiles', size: 3674
Setting: 'savedURLs', size: 3584
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 45
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
undefined
