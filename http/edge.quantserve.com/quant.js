-My build DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):

-HAR:
{
  "log": {
    "version": "1.2",
    "creator": {
      "name": "WebInspector",
      "version": "537.36"
    },
    "pages": [],
    "entries": [
      {
        "startedDateTime": "2016-04-17T17:17:54.623Z",
        "time": 294.2449999995915,
        "request": {
          "method": "GET",
          "url": "http://edge.quantserve.com/quant.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 16 Apr 2016 17:44:28 GMT"
            },
            {
              "name": "Cache-Control",
              "value": "private, max-age=86400"
            },
            {
              "name": "Last-Modified",
              "value": "Fri, 26 Apr 2013 00:53:20 GMT"
            },
            {
              "name": "Server",
              "value": "Apache"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Content-Length",
              "value": "7874"
            },
            {
              "name": "Expires",
              "value": "Sun, 17 Apr 2016 17:44:28 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7874,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 120.640999999978,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 144.365999999991,
          "receive": 29.237999999622502,
          "ssl": -1
        }
      }
    ]
  }
}
-To be evaluated in console:
var _qevents = _qevents || [];
      (function() {
      var elem = document.createElement('script');
      elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
      elem.async = true;
      elem.type = "text/javascript";
      var scpt = document.getElementsByTagName('script')[0];
      scpt.parentNode.insertBefore(elem, scpt);
      })();
      _qevents.push({qacct:"p-areXX4VycFJp8"});
2016-04-18 00:17:54.974 quant.js:3 Uncaught SecurityError: Failed to read the 'cookie' property from 'Document': Access is denied for this document.__qc.qcgc @ quant.js:3__qc.qcsc @ quant.js:6__qc.qcenqp @ quant.js:40__qc.quantserve @ quant.js:43quantserve @ quant.js:45(anonymous function) @ quant.js:46
2016-04-18 00:17:55.037 Error saving setting with name: consoleHistory, value length: 5235876. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
2016-04-18 00:17:55.053 Ten largest settings: 
2016-04-18 00:17:55.229 Setting: 'consoleHistory', size: 5235397
2016-04-18 00:17:55.229 Setting: 'savedURLs', size: 3698
2016-04-18 00:17:55.229 Setting: 'previouslyViewedFiles', size: 3041
2016-04-18 00:17:55.229 Setting: 'breakpoints', size: 227
2016-04-18 00:17:55.230 Setting: 'eventListenerBreakpoints', size: 220
2016-04-18 00:17:55.231 Setting: 'watchExpressions', size: 45
2016-04-18 00:17:55.231 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-18 00:17:55.231 Setting: 'experiments', size: 2
2016-04-18 00:17:55.231 Setting: 'domBreakpoints', size: 2
2016-04-18 00:17:55.231 Setting: 'workspaceExcludedFolders', size: 2
1
