-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:-
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/contentscript.js
/*
电脑管家chrome 广告过滤
*/

var GJAD_CS =
{
    elemhideElt : null,
    setElemhideCSSRules: function (selectors)
    {
      if (GJAD_CS.elemhideElt && GJAD_CS.elemhideElt.parentNode)
        GJAD_CS.elemhideElt.parentNode.removeChild(GJAD_CS.elemhideElt);

      if (!selectors)
        return;

      GJAD_CS.elemhideElt = document.createElement("style");
      GJAD_CS.elemhideElt.setAttribute("type", "text/css");

      // Try to insert the style into the <head> tag, inserting directly under the
      // document root breaks dev tools functionality:
      // http://code.google.com/p/chromium/issues/detail?id=178109
      (document.head || document.documentElement).appendChild(GJAD_CS.elemhideElt);

      var elt = GJAD_CS.elemhideElt;  // Use a local variable to avoid racing conditions
      function setRules()
      {
        if (!elt.sheet)
        {
          // Stylesheet didn't initialize yet, wait a little longer
          window.setTimeout(setRules, 0);
          return;
        }

        elt.innerText = selectors;
      }
      setRules();
    },
    
    QueryCss: function()
    {
        var query_param={
        "url":  window.location.href
        };

        chrome.extension.sendRequest({cmd: "query_css", json: JSON.stringify(query_param)}, function(response)
        {
          if (response && response.selectors != "")
          {
            GJAD_CS.setElemhideCSSRules(response.selectors);
          }
        });
    },
};

GJAD_CS.QueryCss();



HAR:
{
  "log": {
    "version": "1.2",
    "creator": {
      "name": "WebInspector",
      "version": "537.36"
    },
    "pages": [],
    "entries": []
  }
}
-To be evaluated in console:
2016-03-20 01:49:38.124 c:\Users\Axioo\Favorites\ad.js:45 Uncaught TypeError: Cannot read property 'sendRequest' of undefined
2016-03-20 01:49:51.849 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:49:51.884 Ten largest settings: 
2016-03-20 01:49:52.073 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:49:52.073 Setting: 'savedURLs', size: 3698
2016-03-20 01:49:52.073 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:49:52.074 Setting: 'breakpoints', size: 227
2016-03-20 01:49:52.074 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:49:52.074 Setting: 'watchExpressions', size: 45
2016-03-20 01:49:52.074 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:49:52.074 Setting: 'experiments', size: 2
2016-03-20 01:49:52.075 Setting: 'domBreakpoints', size: 2
2016-03-20 01:49:52.075 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:14.404 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:14.406 Ten largest settings: 
2016-03-20 01:50:14.581 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:14.581 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:14.582 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:14.582 Setting: 'breakpoints', size: 227
2016-03-20 01:50:14.582 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:14.582 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:14.583 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:14.583 Setting: 'experiments', size: 2
2016-03-20 01:50:14.583 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:14.583 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:34.771 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:34.778 Ten largest settings: 
2016-03-20 01:50:34.956 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:34.957 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:34.957 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:34.957 Setting: 'breakpoints', size: 227
2016-03-20 01:50:34.957 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:34.958 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:34.958 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:34.958 Setting: 'experiments', size: 2
2016-03-20 01:50:34.958 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:34.960 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:36.235 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:36.244 Ten largest settings: 
2016-03-20 01:50:36.420 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:36.421 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:36.421 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:36.421 Setting: 'breakpoints', size: 227
2016-03-20 01:50:36.421 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:36.421 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:36.422 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:36.422 Setting: 'experiments', size: 2
2016-03-20 01:50:36.423 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:36.423 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:37.530 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:37.533 Ten largest settings: 
2016-03-20 01:50:37.705 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:37.705 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:37.706 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:37.706 Setting: 'breakpoints', size: 227
2016-03-20 01:50:37.706 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:37.707 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:37.707 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:37.707 Setting: 'experiments', size: 2
2016-03-20 01:50:37.707 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:37.707 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:38.819 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:38.826 Ten largest settings: 
2016-03-20 01:50:38.998 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:38.998 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:38.999 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:39.000 Setting: 'breakpoints', size: 227
2016-03-20 01:50:39.000 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:39.000 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:39.000 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:39.001 Setting: 'experiments', size: 2
2016-03-20 01:50:39.001 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:39.001 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:40.003 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:40.005 Ten largest settings: 
2016-03-20 01:50:40.175 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:40.175 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:40.176 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:40.176 Setting: 'breakpoints', size: 227
2016-03-20 01:50:40.176 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:40.176 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:40.176 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:40.176 Setting: 'experiments', size: 2
2016-03-20 01:50:40.177 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:40.177 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:46.390 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:46.399 Ten largest settings: 
2016-03-20 01:50:46.581 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:46.582 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:46.582 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:46.582 Setting: 'breakpoints', size: 227
2016-03-20 01:50:46.582 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:46.582 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:46.583 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:46.583 Setting: 'experiments', size: 2
2016-03-20 01:50:46.583 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:46.584 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:47.861 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:47.864 Ten largest settings: 
2016-03-20 01:50:48.050 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:48.050 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:48.051 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:48.051 Setting: 'breakpoints', size: 227
2016-03-20 01:50:48.051 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:48.052 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:48.052 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:48.053 Setting: 'experiments', size: 2
2016-03-20 01:50:48.053 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:48.053 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:48.987 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:48.995 Ten largest settings: 
2016-03-20 01:50:49.167 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:49.167 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:49.168 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:49.168 Setting: 'breakpoints', size: 227
2016-03-20 01:50:49.168 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:49.168 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:49.169 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:49.169 Setting: 'experiments', size: 2
2016-03-20 01:50:49.169 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:49.170 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:50.054 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:50.056 Ten largest settings: 
2016-03-20 01:50:50.232 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:50.232 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:50.235 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:50.235 Setting: 'breakpoints', size: 227
2016-03-20 01:50:50.235 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:50.235 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:50.236 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:50.238 Setting: 'experiments', size: 2
2016-03-20 01:50:50.239 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:50.243 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:51.120 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:51.122 Ten largest settings: 
2016-03-20 01:50:51.303 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:51.304 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:51.304 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:51.304 Setting: 'breakpoints', size: 227
2016-03-20 01:50:51.304 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:51.305 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:51.305 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:51.306 Setting: 'experiments', size: 2
2016-03-20 01:50:51.306 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:51.309 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:52.137 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:52.138 Ten largest settings: 
2016-03-20 01:50:52.315 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:52.315 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:52.315 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:52.315 Setting: 'breakpoints', size: 227
2016-03-20 01:50:52.315 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:52.316 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:52.316 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:52.316 Setting: 'experiments', size: 2
2016-03-20 01:50:52.316 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:52.316 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:57.601 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:57.603 Ten largest settings: 
2016-03-20 01:50:57.780 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:57.780 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:57.781 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:57.781 Setting: 'breakpoints', size: 227
2016-03-20 01:50:57.781 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:57.781 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:57.781 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:57.781 Setting: 'experiments', size: 2
2016-03-20 01:50:57.782 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:57.782 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:58.836 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:58.837 Ten largest settings: 
2016-03-20 01:50:59.013 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:50:59.013 Setting: 'savedURLs', size: 3698
2016-03-20 01:50:59.013 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:50:59.013 Setting: 'breakpoints', size: 227
2016-03-20 01:50:59.013 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:50:59.014 Setting: 'watchExpressions', size: 45
2016-03-20 01:50:59.014 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:50:59.014 Setting: 'experiments', size: 2
2016-03-20 01:50:59.014 Setting: 'domBreakpoints', size: 2
2016-03-20 01:50:59.014 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:50:59.905 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:50:59.907 Ten largest settings: 
2016-03-20 01:51:00.086 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:51:00.086 Setting: 'savedURLs', size: 3698
2016-03-20 01:51:00.086 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:51:00.087 Setting: 'breakpoints', size: 227
2016-03-20 01:51:00.087 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:51:00.087 Setting: 'watchExpressions', size: 45
2016-03-20 01:51:00.087 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:51:00.087 Setting: 'experiments', size: 2
2016-03-20 01:51:00.087 Setting: 'domBreakpoints', size: 2
2016-03-20 01:51:00.087 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:51:01.053 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:51:01.056 Ten largest settings: 
2016-03-20 01:51:01.231 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:51:01.232 Setting: 'savedURLs', size: 3698
2016-03-20 01:51:01.232 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:51:01.232 Setting: 'breakpoints', size: 227
2016-03-20 01:51:01.232 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:51:01.232 Setting: 'watchExpressions', size: 45
2016-03-20 01:51:01.233 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:51:01.233 Setting: 'experiments', size: 2
2016-03-20 01:51:01.233 Setting: 'domBreakpoints', size: 2
2016-03-20 01:51:01.233 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:51:06.966 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:51:06.971 Ten largest settings: 
2016-03-20 01:51:07.149 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:51:07.149 Setting: 'savedURLs', size: 3698
2016-03-20 01:51:07.150 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:51:07.150 Setting: 'breakpoints', size: 227
2016-03-20 01:51:07.150 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:51:07.150 Setting: 'watchExpressions', size: 45
2016-03-20 01:51:07.150 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:51:07.150 Setting: 'experiments', size: 2
2016-03-20 01:51:07.151 Setting: 'domBreakpoints', size: 2
2016-03-20 01:51:07.151 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:51:15.764 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-20 01:51:17.159 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:51:17.161 Ten largest settings: 
2016-03-20 01:51:17.397 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:51:17.397 Setting: 'savedURLs', size: 3698
2016-03-20 01:51:17.397 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:51:17.398 Setting: 'breakpoints', size: 227
2016-03-20 01:51:17.398 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:51:17.398 Setting: 'watchExpressions', size: 45
2016-03-20 01:51:17.398 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:51:17.398 Setting: 'experiments', size: 2
2016-03-20 01:51:17.399 Setting: 'domBreakpoints', size: 2
2016-03-20 01:51:17.399 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:51:57.825 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:51:57.826 Ten largest settings: 
2016-03-20 01:51:58.023 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:51:58.024 Setting: 'savedURLs', size: 3698
2016-03-20 01:51:58.024 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:51:58.025 Setting: 'breakpoints', size: 227
2016-03-20 01:51:58.025 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:51:58.025 Setting: 'watchExpressions', size: 45
2016-03-20 01:51:58.025 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:51:58.025 Setting: 'experiments', size: 2
2016-03-20 01:51:58.026 Setting: 'domBreakpoints', size: 2
2016-03-20 01:51:58.026 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:52:05.047 Error saving setting with name: previouslyViewedFiles, value length: 3210. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:52:05.050 Ten largest settings: 
2016-03-20 01:52:05.253 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:52:05.253 Setting: 'savedURLs', size: 3698
2016-03-20 01:52:05.253 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:52:05.253 Setting: 'breakpoints', size: 227
2016-03-20 01:52:05.254 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:52:05.254 Setting: 'watchExpressions', size: 45
2016-03-20 01:52:05.254 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:52:05.254 Setting: 'experiments', size: 2
2016-03-20 01:52:05.254 Setting: 'domBreakpoints', size: 2
2016-03-20 01:52:05.254 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:52:05.905 Error saving setting with name: previouslyViewedFiles, value length: 3210. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:52:05.907 Ten largest settings: 
2016-03-20 01:52:06.095 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:52:06.095 Setting: 'savedURLs', size: 3698
2016-03-20 01:52:06.096 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:52:06.097 Setting: 'breakpoints', size: 227
2016-03-20 01:52:06.100 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:52:06.100 Setting: 'watchExpressions', size: 45
2016-03-20 01:52:06.103 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:52:06.104 Setting: 'experiments', size: 2
2016-03-20 01:52:06.112 Setting: 'domBreakpoints', size: 2
2016-03-20 01:52:06.112 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:52:07.160 Error saving setting with name: previouslyViewedFiles, value length: 3210. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:52:07.163 Ten largest settings: 
2016-03-20 01:52:07.370 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:52:07.371 Setting: 'savedURLs', size: 3698
2016-03-20 01:52:07.371 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:52:07.371 Setting: 'breakpoints', size: 227
2016-03-20 01:52:07.371 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:52:07.371 Setting: 'watchExpressions', size: 45
2016-03-20 01:52:07.371 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:52:07.372 Setting: 'experiments', size: 2
2016-03-20 01:52:07.372 Setting: 'domBreakpoints', size: 2
2016-03-20 01:52:07.372 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:52:24.690 c:\Users\Axioo\Favorites\ad.js:45 Uncaught TypeError: Cannot read property 'sendRequest' of undefinedGJAD_CS.QueryCss @ c:\Users\Axioo\Favorites\ad.js:45(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:55
