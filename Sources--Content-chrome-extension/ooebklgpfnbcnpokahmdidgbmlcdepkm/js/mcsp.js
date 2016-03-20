-By Muhammad Adi Nugroho,S.Adm.Neg:
-Via My Notepad (HTML Editor):
-Sources:
-Content:
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/mcsp.js
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
        "startedDateTime": "2016-03-20T20:17:32.454Z",
        "id": "page_1",
        "title": "file:///C:/Users/Axioo/Favorites/tpc.html",
        "pageTimings": {
          "onContentLoad": 271.681999998691,
          "onLoad": 1134.8829999988084
        }
      }
    ],
    "entries": [
      {
        "startedDateTime": "2016-03-20T20:17:32.726Z",
        "time": 546.4040000006207,
        "request": {
          "method": "GET",
          "url": "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": ":path",
              "value": "/ajax/libs/jquery/1.12.0/jquery.min.js"
            },
            {
              "name": "accept-encoding",
              "value": "gzip, deflate, sdch"
            },
            {
              "name": "accept-language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "user-agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36"
            },
            {
              "name": "x-chrome-uma-enabled",
              "value": "1"
            },
            {
              "name": "accept",
              "value": "*/*"
            },
            {
              "name": "cache-control",
              "value": "max-age=0"
            },
            {
              "name": ":authority",
              "value": "ajax.googleapis.com"
            },
            {
              "name": ":scheme",
              "value": "https"
            },
            {
              "name": "if-modified-since",
              "value": "Tue, 12 Jan 2016 21:20:41 GMT"
            },
            {
              "name": "x-client-data",
              "value": "CI22yQEIpLbJAQjEtskBCP2VygE="
            },
            {
              "name": "resource-freshness",
              "value": "max-age=31536000,stale-while-revalidate=2592000,age=873831"
            },
            {
              "name": ":method",
              "value": "GET"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 304,
          "statusText": "",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "status",
              "value": "304"
            },
            {
              "name": "date",
              "value": "Tue, 15 Mar 2016 13:22:29 GMT"
            },
            {
              "name": "age",
              "value": "456903"
            },
            {
              "name": "alt-svc",
              "value": "quic=\":443\"; ma=2592000; v=\"31,30,29,28,27,26,25\""
            },
            {
              "name": "alternate-protocol",
              "value": "443:quic,p=1"
            },
            {
              "name": "expires",
              "value": "Wed, 15 Mar 2017 13:22:29 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 97362,
            "mimeType": "text/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 148
        },
        "cache": {},
        "timings": {
          "blocked": 3.14300000172807,
          "dns": 76.46000000022472,
          "connect": 307.0420000003652,
          "send": 1.3440000002449892,
          "wait": 89.04699999766302,
          "receive": 69.36800000039472,
          "ssl": 242.99199999950397
        },
        "connection": "43304",
        "pageref": "page_1"
      }
    ]
  }
}
-To be evaluated in console:
2016-03-21 03:17:05.434 tpc.html:1 Denying load of chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/mcsp.js. Resources must be listed in the web_accessible_resources manifest key in order to be loaded by pages outside the extension.
2016-03-21 03:17:05.538 chrome-extension://invalid/ Failed to load resource: net::ERR_FAILED
2016-03-21 03:17:32.615 tpc.html:1 Denying load of chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/mcsp.js. Resources must be listed in the web_accessible_resources manifest key in order to be loaded by pages outside the extension.
2016-03-21 03:17:32.618 tpc.html:1 GET chrome-extension://invalid/ net::ERR_FAILED
2016-03-21 03:17:32.671 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-21 03:18:51.490 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:51.501 Ten largest settings: 
2016-03-21 03:18:51.680 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:51.680 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:51.681 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:51.681 Setting: 'breakpoints', size: 227
2016-03-21 03:18:51.681 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:51.683 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:51.683 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:51.683 Setting: 'experiments', size: 2
2016-03-21 03:18:51.683 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:51.684 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:18:53.106 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:53.113 Ten largest settings: 
2016-03-21 03:18:53.283 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:53.283 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:53.284 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:53.284 Setting: 'breakpoints', size: 227
2016-03-21 03:18:53.284 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:53.285 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:53.285 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:53.285 Setting: 'experiments', size: 2
2016-03-21 03:18:53.285 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:53.285 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:18:54.326 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:54.332 Ten largest settings: 
2016-03-21 03:18:54.507 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:54.507 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:54.507 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:54.508 Setting: 'breakpoints', size: 227
2016-03-21 03:18:54.508 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:54.508 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:54.509 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:54.511 Setting: 'experiments', size: 2
2016-03-21 03:18:54.511 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:54.511 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:18:55.892 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:55.900 Ten largest settings: 
2016-03-21 03:18:56.071 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:56.071 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:56.071 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:56.071 Setting: 'breakpoints', size: 227
2016-03-21 03:18:56.072 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:56.072 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:56.072 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:56.072 Setting: 'experiments', size: 2
2016-03-21 03:18:56.073 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:56.073 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:18:56.949 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:56.952 Ten largest settings: 
2016-03-21 03:18:57.122 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:57.122 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:57.123 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:57.123 Setting: 'breakpoints', size: 227
2016-03-21 03:18:57.123 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:57.124 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:57.124 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:57.124 Setting: 'experiments', size: 2
2016-03-21 03:18:57.124 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:57.125 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:18:58.023 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:18:58.025 Ten largest settings: 
2016-03-21 03:18:58.198 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:18:58.198 Setting: 'savedURLs', size: 3698
2016-03-21 03:18:58.198 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:18:58.198 Setting: 'breakpoints', size: 227
2016-03-21 03:18:58.198 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:18:58.199 Setting: 'watchExpressions', size: 45
2016-03-21 03:18:58.199 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:18:58.199 Setting: 'experiments', size: 2
2016-03-21 03:18:58.199 Setting: 'domBreakpoints', size: 2
2016-03-21 03:18:58.199 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:04.700 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:04.704 Ten largest settings: 
2016-03-21 03:19:04.897 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:04.897 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:04.897 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:04.897 Setting: 'breakpoints', size: 227
2016-03-21 03:19:04.898 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:04.898 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:04.898 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:04.898 Setting: 'experiments', size: 2
2016-03-21 03:19:04.898 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:04.898 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:05.879 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:05.882 Ten largest settings: 
2016-03-21 03:19:06.061 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:06.061 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:06.061 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:06.061 Setting: 'breakpoints', size: 227
2016-03-21 03:19:06.061 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:06.062 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:06.062 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:06.065 Setting: 'experiments', size: 2
2016-03-21 03:19:06.066 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:06.066 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:07.091 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:07.100 Ten largest settings: 
2016-03-21 03:19:07.275 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:07.275 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:07.275 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:07.276 Setting: 'breakpoints', size: 227
2016-03-21 03:19:07.276 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:07.276 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:07.276 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:07.276 Setting: 'experiments', size: 2
2016-03-21 03:19:07.276 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:07.277 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:08.304 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:08.305 Ten largest settings: 
2016-03-21 03:19:08.481 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:08.481 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:08.481 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:08.481 Setting: 'breakpoints', size: 227
2016-03-21 03:19:08.482 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:08.482 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:08.483 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:08.484 Setting: 'experiments', size: 2
2016-03-21 03:19:08.485 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:08.485 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:09.532 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:09.534 Ten largest settings: 
2016-03-21 03:19:09.707 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:09.708 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:09.712 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:09.719 Setting: 'breakpoints', size: 227
2016-03-21 03:19:09.719 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:09.721 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:09.721 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:09.722 Setting: 'experiments', size: 2
2016-03-21 03:19:09.722 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:09.724 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:10.549 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:10.550 Ten largest settings: 
2016-03-21 03:19:10.722 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:10.722 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:10.722 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:10.722 Setting: 'breakpoints', size: 227
2016-03-21 03:19:10.723 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:10.723 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:10.723 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:10.723 Setting: 'experiments', size: 2
2016-03-21 03:19:10.723 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:10.723 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:18.702 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:18.703 Ten largest settings: 
2016-03-21 03:19:18.906 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:18.906 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:18.906 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:18.906 Setting: 'breakpoints', size: 227
2016-03-21 03:19:18.907 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:18.907 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:18.907 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:18.907 Setting: 'experiments', size: 2
2016-03-21 03:19:18.908 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:18.908 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:20.100 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:20.103 Ten largest settings: 
2016-03-21 03:19:20.273 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:20.274 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:20.274 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:20.274 Setting: 'breakpoints', size: 227
2016-03-21 03:19:20.274 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:20.274 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:20.275 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:20.275 Setting: 'experiments', size: 2
2016-03-21 03:19:20.275 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:20.275 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:21.271 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:21.274 Ten largest settings: 
2016-03-21 03:19:21.448 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:21.449 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:21.449 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:21.450 Setting: 'breakpoints', size: 227
2016-03-21 03:19:21.450 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:21.450 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:21.450 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:21.450 Setting: 'experiments', size: 2
2016-03-21 03:19:21.451 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:21.451 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:22.381 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:22.382 Ten largest settings: 
2016-03-21 03:19:22.593 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:22.593 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:22.593 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:22.598 Setting: 'breakpoints', size: 227
2016-03-21 03:19:22.598 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:22.598 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:22.598 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:22.598 Setting: 'experiments', size: 2
2016-03-21 03:19:22.599 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:22.599 Setting: 'workspaceExcludedFolders', size: 2
2016-03-21 03:19:23.574 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-21 03:19:23.577 Ten largest settings: 
2016-03-21 03:19:23.749 Setting: 'consoleHistory', size: 5235316
2016-03-21 03:19:23.749 Setting: 'savedURLs', size: 3698
2016-03-21 03:19:23.749 Setting: 'previouslyViewedFiles', size: 3143
2016-03-21 03:19:23.750 Setting: 'breakpoints', size: 227
2016-03-21 03:19:23.750 Setting: 'eventListenerBreakpoints', size: 220
2016-03-21 03:19:23.750 Setting: 'watchExpressions', size: 45
2016-03-21 03:19:23.750 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-21 03:19:23.750 Setting: 'experiments', size: 2
2016-03-21 03:19:23.750 Setting: 'domBreakpoints', size: 2
2016-03-21 03:19:23.750 Setting: 'workspaceExcludedFolders', size: 2

