-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:
chrome-extension://hdnadicfhkbpdafdildanpbjapjlmkab/js/main.js
-HAR:
{
  "log": {
    "version": "1.2",
    "creator": {
      "name": "WebInspector",
      "version": "537.36"
    },
    "pages": [
      {
        "startedDateTime": "2016-03-21T17:17:56.724Z",
        "id": "page_1",
        "title": "file:///C:/Users/Axioo/Favorites/tpc.html",
        "pageTimings": {
          "onContentLoad": 1231.1460000000807,
          "onLoad": 1229.0299999995113
        }
      }
    ],
    "entries": [
      {
        "startedDateTime": "2016-03-21T17:17:57.683Z",
        "time": 0,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Origin",
              "value": "null"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 0,
          "statusText": "",
          "httpVersion": "unknown",
          "headers": [],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "x-unknown"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": -1,
          "_transferSize": 0,
          "_error": "net::ERR_CONNECTION_TIMED_OUT"
        },
        "cache": {},
        "timings": {
          "blocked": -1,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0,
          "receive": 0,
          "ssl": -1
        },
        "pageref": "page_1"
      }
    ]
  }
}
-To be evaluated in console:
2016-03-22 00:17:45.518 Error saving setting with name: previouslyViewedFiles, value length: 3218. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:45.550 Ten largest settings: 
2016-03-22 00:17:45.783 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:45.785 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:45.786 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:45.786 Setting: 'breakpoints', size: 227
2016-03-22 00:17:45.786 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:45.786 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:45.786 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:45.786 Setting: 'experiments', size: 2
2016-03-22 00:17:45.787 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:45.787 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:17:54.483 https://mybrowserpages.com/json/index.php?name=EasySearch Failed to load resource: net::ERR_CONNECTION_TIMED_OUT
2016-03-22 00:17:56.438 Error saving setting with name: previouslyViewedFiles, value length: 3222. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:56.445 Ten largest settings: 
2016-03-22 00:17:56.629 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:56.629 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:56.630 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:56.630 Setting: 'breakpoints', size: 227
2016-03-22 00:17:56.630 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:56.630 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:56.630 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:56.630 Setting: 'experiments', size: 2
2016-03-22 00:17:56.631 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:56.631 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:17:56.728 tpc.html:1 Uncaught SyntaxError: Unexpected end of inputxmlhttp.onreadystatechange @ c:\Users\Axioo\Favorites\ad.js:13
2016-03-22 00:17:58.283 Error saving setting with name: previouslyViewedFiles, value length: 3244. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:58.289 Ten largest settings: 
2016-03-22 00:17:58.488 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:58.489 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:58.489 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:58.489 Setting: 'breakpoints', size: 227
2016-03-22 00:17:58.489 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:58.489 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:58.490 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:58.490 Setting: 'experiments', size: 2
2016-03-22 00:17:58.490 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:58.490 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:17:58.624 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-22 00:17:59.107 Error saving setting with name: previouslyViewedFiles, value length: 3240. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:59.108 Ten largest settings: 
2016-03-22 00:17:59.293 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:59.294 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:59.294 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:59.294 Setting: 'breakpoints', size: 227
2016-03-22 00:17:59.294 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:59.295 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:59.295 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:59.295 Setting: 'experiments', size: 2
2016-03-22 00:17:59.295 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:59.295 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:17:59.378 Error saving setting with name: previouslyViewedFiles, value length: 3244. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:59.379 Ten largest settings: 
2016-03-22 00:17:59.560 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:59.561 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:59.561 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:59.561 Setting: 'breakpoints', size: 227
2016-03-22 00:17:59.561 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:59.561 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:59.562 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:59.562 Setting: 'experiments', size: 2
2016-03-22 00:17:59.562 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:59.562 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:17:59.721 Error saving setting with name: previouslyViewedFiles, value length: 3243. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:17:59.722 Ten largest settings: 
2016-03-22 00:17:59.914 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:17:59.914 Setting: 'savedURLs', size: 3698
2016-03-22 00:17:59.914 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:17:59.914 Setting: 'breakpoints', size: 227
2016-03-22 00:17:59.914 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:17:59.915 Setting: 'watchExpressions', size: 45
2016-03-22 00:17:59.916 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:17:59.916 Setting: 'experiments', size: 2
2016-03-22 00:17:59.916 Setting: 'domBreakpoints', size: 2
2016-03-22 00:17:59.916 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:18:18.982 c:\Users\Axioo\Favorites\ad.js:23 POST https://mybrowserpages.com/json/index.php?name=EasySearch net::ERR_CONNECTION_TIMED_OUTpost @ c:\Users\Axioo\Favorites\ad.js:23(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:3
2016-03-22 00:18:18.982 c:\Users\Axioo\Favorites\ad.js:23 XHR failed loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ c:\Users\Axioo\Favorites\ad.js:23(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:3
2016-03-22 00:18:19.812 Error saving setting with name: previouslyViewedFiles, value length: 3244. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:18:19.813 Ten largest settings: 
2016-03-22 00:18:20.022 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:18:20.022 Setting: 'savedURLs', size: 3698
2016-03-22 00:18:20.022 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:18:20.022 Setting: 'breakpoints', size: 227
2016-03-22 00:18:20.022 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:18:20.023 Setting: 'watchExpressions', size: 45
2016-03-22 00:18:20.023 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:18:20.023 Setting: 'experiments', size: 2
2016-03-22 00:18:20.023 Setting: 'domBreakpoints', size: 2
2016-03-22 00:18:20.023 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:18:54.907 VM81:1 Uncaught SyntaxError: Unexpected end of inputxmlhttp.onreadystatechange @ c:\Users\Axioo\Favorites\ad.js:13XMLHttpRequest.send (async)post @ c:\Users\Axioo\Favorites\ad.js:23(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:3
2016-03-22 00:23:28.506 Error saving setting with name: previouslyViewedFiles, value length: 3244. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-22 00:23:28.516 Ten largest settings: 
2016-03-22 00:23:28.756 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:28.756 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:28.757 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:28.757 Setting: 'breakpoints', size: 227
2016-03-22 00:23:28.757 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:28.757 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:28.757 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:28.757 Setting: 'experiments', size: 2
2016-03-22 00:23:28.757 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:28.758 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:41.328 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:41.330 Ten largest settings: 
2016-03-22 00:23:41.522 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:41.522 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:41.522 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:41.523 Setting: 'breakpoints', size: 227
2016-03-22 00:23:41.523 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:41.523 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:41.523 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:41.525 Setting: 'experiments', size: 2
2016-03-22 00:23:41.525 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:41.525 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:44.641 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:44.642 Ten largest settings: 
2016-03-22 00:23:44.818 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:44.819 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:44.819 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:44.819 Setting: 'breakpoints', size: 227
2016-03-22 00:23:44.819 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:44.819 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:44.820 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:44.820 Setting: 'experiments', size: 2
2016-03-22 00:23:44.820 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:44.820 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:47.818 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:47.820 Ten largest settings: 
2016-03-22 00:23:47.990 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:47.991 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:47.991 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:47.991 Setting: 'breakpoints', size: 227
2016-03-22 00:23:47.991 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:47.991 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:47.991 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:47.992 Setting: 'experiments', size: 2
2016-03-22 00:23:47.992 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:47.992 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:49.242 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:49.244 Ten largest settings: 
2016-03-22 00:23:49.414 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:49.415 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:49.415 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:49.415 Setting: 'breakpoints', size: 227
2016-03-22 00:23:49.415 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:49.415 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:49.415 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:49.416 Setting: 'experiments', size: 2
2016-03-22 00:23:49.417 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:49.417 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:55.386 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:55.389 Ten largest settings: 
2016-03-22 00:23:55.558 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:55.558 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:55.558 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:55.558 Setting: 'breakpoints', size: 227
2016-03-22 00:23:55.558 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:55.559 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:55.559 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:55.559 Setting: 'experiments', size: 2
2016-03-22 00:23:55.559 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:55.559 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:56.734 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:56.736 Ten largest settings: 
2016-03-22 00:23:56.908 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:56.908 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:56.909 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:56.909 Setting: 'breakpoints', size: 227
2016-03-22 00:23:56.909 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:56.909 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:56.910 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:56.910 Setting: 'experiments', size: 2
2016-03-22 00:23:56.910 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:56.910 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:58.032 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:58.034 Ten largest settings: 
2016-03-22 00:23:58.203 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:58.204 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:58.204 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:58.204 Setting: 'breakpoints', size: 227
2016-03-22 00:23:58.204 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:58.204 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:58.205 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:58.205 Setting: 'experiments', size: 2
2016-03-22 00:23:58.205 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:58.205 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:23:59.306 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:23:59.308 Ten largest settings: 
2016-03-22 00:23:59.487 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:23:59.488 Setting: 'savedURLs', size: 3698
2016-03-22 00:23:59.489 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:23:59.489 Setting: 'breakpoints', size: 227
2016-03-22 00:23:59.489 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:23:59.489 Setting: 'watchExpressions', size: 45
2016-03-22 00:23:59.489 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:23:59.489 Setting: 'experiments', size: 2
2016-03-22 00:23:59.490 Setting: 'domBreakpoints', size: 2
2016-03-22 00:23:59.490 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:04.929 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:04.930 Ten largest settings: 
2016-03-22 00:24:05.100 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:05.101 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:05.101 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:05.101 Setting: 'breakpoints', size: 227
2016-03-22 00:24:05.101 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:05.101 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:05.102 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:05.103 Setting: 'experiments', size: 2
2016-03-22 00:24:05.103 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:05.103 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:06.271 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:06.273 Ten largest settings: 
2016-03-22 00:24:06.441 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:06.442 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:06.442 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:06.442 Setting: 'breakpoints', size: 227
2016-03-22 00:24:06.442 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:06.442 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:06.442 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:06.443 Setting: 'experiments', size: 2
2016-03-22 00:24:06.443 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:06.460 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:07.621 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:07.625 Ten largest settings: 
2016-03-22 00:24:07.797 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:07.798 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:07.799 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:07.799 Setting: 'breakpoints', size: 227
2016-03-22 00:24:07.799 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:07.799 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:07.799 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:07.800 Setting: 'experiments', size: 2
2016-03-22 00:24:07.800 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:07.803 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:08.876 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:08.883 Ten largest settings: 
2016-03-22 00:24:09.052 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:09.052 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:09.052 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:09.053 Setting: 'breakpoints', size: 227
2016-03-22 00:24:09.053 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:09.053 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:09.054 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:09.054 Setting: 'experiments', size: 2
2016-03-22 00:24:09.054 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:09.054 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:10.000 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:10.001 Ten largest settings: 
2016-03-22 00:24:10.169 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:10.169 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:10.169 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:10.169 Setting: 'breakpoints', size: 227
2016-03-22 00:24:10.170 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:10.170 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:10.170 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:10.170 Setting: 'experiments', size: 2
2016-03-22 00:24:10.170 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:10.170 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:19.652 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:19.653 Ten largest settings: 
2016-03-22 00:24:19.852 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:19.852 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:19.852 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:19.853 Setting: 'breakpoints', size: 227
2016-03-22 00:24:19.853 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:19.854 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:19.854 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:19.854 Setting: 'experiments', size: 2
2016-03-22 00:24:19.854 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:19.854 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:21.333 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:21.335 Ten largest settings: 
2016-03-22 00:24:21.503 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:21.503 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:21.503 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:21.503 Setting: 'breakpoints', size: 227
2016-03-22 00:24:21.503 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:21.503 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:21.504 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:21.504 Setting: 'experiments', size: 2
2016-03-22 00:24:21.505 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:21.505 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:22.867 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:22.869 Ten largest settings: 
2016-03-22 00:24:23.039 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:23.039 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:23.039 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:23.039 Setting: 'breakpoints', size: 227
2016-03-22 00:24:23.039 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:23.040 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:23.040 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:23.040 Setting: 'experiments', size: 2
2016-03-22 00:24:23.040 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:23.040 Setting: 'workspaceExcludedFolders', size: 2
2016-03-22 00:24:24.475 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-22 00:24:24.477 Ten largest settings: 
2016-03-22 00:24:24.652 Setting: 'consoleHistory', size: 5235316
2016-03-22 00:24:24.652 Setting: 'savedURLs', size: 3698
2016-03-22 00:24:24.652 Setting: 'previouslyViewedFiles', size: 3143
2016-03-22 00:24:24.653 Setting: 'breakpoints', size: 227
2016-03-22 00:24:24.653 Setting: 'eventListenerBreakpoints', size: 220
2016-03-22 00:24:24.653 Setting: 'watchExpressions', size: 45
2016-03-22 00:24:24.653 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-22 00:24:24.653 Setting: 'experiments', size: 2
2016-03-22 00:24:24.654 Setting: 'domBreakpoints', size: 2
2016-03-22 00:24:24.654 Setting: 'workspaceExcludedFolders', size: 2
