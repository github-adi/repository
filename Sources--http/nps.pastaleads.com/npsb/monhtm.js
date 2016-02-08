-Sources:
-http://nps.pastaleads.com/npsb/monhtm.js:
-Evaluate in console:
(function(){var a={i:"",A:null,h:null,e:null,g:"",n:"",d:[{a:"",c:0,b:6},{a:"e8a4a23a-b034-e211-a9a0-001517d10f6e",c:1,b:6},{a:"8143692d-c40f-e311-a28e-001517d10f6e",c:0,b:6},{a:"5fb64bdb-aa6d-e411-b45d-001517d1792a",c:0,b:0},{a:"002c3942-2306-e211-8a14-001517d1792a",c:0,b:6},{a:"5fb64bdb-aa6d-e411-b45d-001517d1792a",c:0,b:0},{a:"e8a4a23a-b034-e211-a9a0-001517d10f6e",c:1,b:6},{a:"002c3942-2306-e211-8a14-001517d1792a",c:0,b:6},{a:"ba7bd42e-26a3-e511-b9e7-001517d1792a",c:3,b:6},{a:"ba7bd42e-26a3-e511-b9e7-001517d1792a",
c:3,b:6},{a:"8143692d-c40f-e311-a28e-001517d10f6e",c:0,b:6},{a:"3dcc3e73-e538-e411-b45d-001517d1792a",c:0,b:0},{a:"3dcc3e73-e538-e411-b45d-001517d1792a",c:0,b:0},{a:"82a01316-26bd-4e96-b657-402168dd70b2",c:0,b:6},{a:"82a01316-26bd-4e96-b657-402168dd70b2",c:0,b:6},{a:"ba7bd42e-26a3-e511-b9e7-001517d1792a",c:3,b:6}],p:function(){return window.location.protocol+"//"+a.h},D:function(){return"origin="+a.i},v:function(){a.e=document.referrer;for(var b=window.location.search,b=b.replace("?",""),b=b.split("&"),
c=0;c<b.length;c++){var d=b[c].split("=");2==d.length&&("originid"==d[0].toLowerCase()&&0<d[1].length?a.i=d[1].toLowerCase():"useruniqueid"==d[0].toLowerCase()&&(__mon.A=d[1]))}b=a.e.indexOf("//");0>b?a.u():(b=a.e.substr(b+2),c=b.indexOf("/"),0>c&&(c=b.length),a.h=b.substr(0,c),a.g=location.host,StartIndex=a.g.indexOf(".")+1,a.n=(0<StartIndex?"app.":"")+a.g.substr(StartIndex))},u:function(){var b=window.location.search;if(0!=b.length){"?"==b.charAt(0)&&(b=b.substring(1,b.length-1));for(var b=b.split("&"),
c=0;c<b.length;c++){var d=b[c].split("=");2==d.length&&"domain"==d[0].toLowerCase()&&(a.h=d[1])}a.e=a.p()}},C:function(){return(new Date).getTime()},t:function(){if("undefined"!==typeof Storage){var b=sessionStorage.getItem("uti");null==b?a.k():"true"==b&&a.f()}},s:function(b){var c=localStorage.getItem("dt");return!c||isNaN(c)||parseInt(c)+a.q(b.b)<(new Date).getTime()?!1:!0},w:function(){localStorage.setItem("dt",(new Date).getTime());localStorage.setItem("cnt",0)},j:function(b){sessionStorage.setItem("uti",
b)},f:function(){var b=a.o();!a.s(b)&&a.r(b)&&(a.w(),parent.postMessage("{selector:'ToInject', ToInject: true}",a.e))},r:function(b){var a=localStorage.getItem("cnt");if(!a||isNaN(a))a=0;if(a>=b.c)return!0;a++;localStorage.setItem("cnt",a);return!1},q:function(a){return 36E5*a},o:function(){for(var b=0,c=0;c<a.d.length;c++)if(""==a.d[c].a)b=a.d[c];else if(a.d[c].a==a.i){b=a.d[c];break}return b},k:function(){a.f();a.j(!0)},l:function(b){b.detail.ti&&a.f();a.j(b.detail.ti)},m:function(){"object"==typeof document.documentElement.monDetail&&
"boolean"==typeof document.documentElement.monDetail.ti&&(document.documentElement.monDetail.ti&&a.f(),a.j(document.documentElement.monDetail.ti))},F:function(){document.addEventListener?document.addEventListener("imo",a.l,!1):document.attachEvent&&(document.documentElement.imo=0,document.documentElement.attachEvent("onpropertychange",function(b){"imo"==b.propertyName&&a.m()}))},B:function(){a.v();a.t()}};a.B()})();
Error saving setting with name: consoleHistory, value length: 5626901. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
Uncaught TypeError: parent.postMessage is not a function(…)
Error saving setting with name: savedURLs, value length: 3596. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
Error saving setting with name: savedURLs, value length: 3637. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2


