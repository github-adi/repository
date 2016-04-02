-My build DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Hack saved before:
https://mybrowserpages.com/json/index.php?name=EasySearch
https://mybrowserpages.com/extension/EasySearch/info.js
https://mybrowserpages.com/acontrol/index.html
https://mybrowserpages.com/extension/web_ads_ifrome_js/content_Ad4game.js
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<script src="C:\Users\Axioo\Favorites\content_Ad4game.js "></script>
<script src="C:\Users\Axioo\Favorites\EasySearch.json "></script>
<script src="C:\Users\Axioo\Favorites\info.js "></script>
<script type="text/javascript">
	function GetZeroStamp()
	{
	    var date = new Date();
		return date.getTime() - date.getHours()*3600000 - date.getMinutes() * 60000 -
			date.getSeconds() * 1000 - date.getMilliseconds();
	}
	var rootUrl = document.location.hash.substr(1);
	var resettimes = 1;
	var config = {
			banner:{
				types:[0,1,2,3],
				maxtimes:[6,2,3,2],
				showed:[0,0,0,0]
			},
            domainname:0,
			resettimes:0,
			timestamp:0
	};
	window.addEventListener('message',function(e){
		if(e.source != window.parent)
			return;
		var data = JSON.parse(localStorage.getItem("acontrol")) || config;
		var lcresettimes = data.hasOwnProperty("resettimes") ?  data["resettimes"] : 0;
        if ((GetZeroStamp() - data.timestamp >= 3600000 * 24) || resettimes > lcresettimes) {
            data = config;
			data.resettimes = resettimes;
            data.domainname = Math.floor(Math.random()*4);
            console.log(data.domainname);
		}
		var bn_should_show = 0;
		//banner
		var bn_showed = 0;
		var bn_all_showed = true;
		var banner_data = data.banner;
		for(var i = 0; i < banner_data.types.length; i ++)
		{
			var atype = banner_data.types[i];
			var maxtimes = banner_data.maxtimes[atype];
			bn_showed = banner_data.showed[atype];
			if (bn_showed < maxtimes) {
				bn_all_showed = false;
				bn_should_show = atype;
				banner_data.showed[atype] = bn_showed + 1;
				break;
			}
		}
		if (bn_all_showed) {
			data.banner = config.banner;
		}
		
		//code
		var banner_code = "";
		var bn_code_pos = 1;
		switch (bn_should_show) {
            case 1:
                banner_code = ('https:' == document.location.protocol ? 'https://' : 'http://')+'mybrowserpages.com/extension/web_ads_ifrome_js/content_google.js';
                break;
            case 2:
                banner_code = 'https://www.onclickcool.com/8v8gcm/bindo.js';
                break;
            case 3:
                banner_code = ('https:' == document.location.protocol ? 'https://' : 'http://')+'mybrowserpages.com/extension/web_ads_ifrome_js/content_mygame.js';
                break;
			default:
				banner_code = ('https:' == document.location.protocol ? 'https://' : 'http://')+'mybrowserpages.com/extension/web_ads_ifrome_js/content_Ad4game.js';
				bn_code_pos = 0;
				break;
		}
        var bn_show_domain = data.domainname;
		data.timestamp = GetZeroStamp();
		localStorage.setItem("acontrol", JSON.stringify(data));
		var postData = {
			bn:{
				code: banner_code,
				pos: bn_code_pos,
                domain: bn_show_domain
			}
		};
		window.parent.postMessage(postData,rootUrl);
    },false);
</script>
</body>
</html>

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
        "startedDateTime": "2016-04-02T20:00:35.583Z",
        "id": "page_1",
        "title": "file:///C:/Users/Axioo/Favorites/acontrolindex.html",
        "pageTimings": {
          "onContentLoad": 215.09799999876122,
          "onLoad": 215.0209999999788
        }
      }
    ],
    "entries": [
      {
        "startedDateTime": "2016-04-02T20:00:40.826Z",
        "time": 10.141000000658096,
        "request": {
          "method": "GET",
          "url": "http://mybrowserpages.com/acontrol/index.html",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Fri, 01 Apr 2016 18:27:14 GMT"
            },
            {
              "name": "Last-Modified",
              "value": "Wed, 09 Mar 2016 06:19:06 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "Age",
              "value": "0"
            },
            {
              "name": "ETag",
              "value": "\"56dfc05a-ac6\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            }
          ],
          "cookies": [],
          "content": {
            "size": 4178,
            "mimeType": "text/html"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.275000000328873,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 1.964999999472637,
          "receive": 7.901000000856586,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.819Z",
        "time": 310.8269999993354,
        "request": {
          "method": "GET",
          "url": "http://asrv-a.akamaihd.net/sd/9657/1003.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, sdch"
            },
            {
              "name": "Cookie",
              "value": "__utma=160223277.365860790.1451303656.1451303656.1451303656.1; __utmz=160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=1.1379325226.1451303655.1451303655.1451668869.2; __utmz=1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1"
            },
            {
              "name": "Host",
              "value": "asrv-a.akamaihd.net"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [
            {
              "name": "__utma",
              "value": "160223277.365860790.1451303656.1451303656.1451303656.1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utma",
              "value": "1.1379325226.1451303655.1451303655.1451668869.2",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmv",
              "value": "1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }
          ],
          "headersSize": 643,
          "bodySize": 0
        },
        "response": {
          "status": 403,
          "statusText": "Forbidden",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Server",
              "value": "AkamaiGHost"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Mime-Version",
              "value": "1.0"
            },
            {
              "name": "Content-Length",
              "value": "300"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/html",
            "compression": 213
          },
          "redirectURL": "",
          "headersSize": 213,
          "bodySize": -213,
          "_transferSize": 0,
          "_error": ""
        },
        "cache": {},
        "timings": {
          "blocked": 2.04699999994773,
          "dns": -1,
          "connect": -1,
          "send": 0.6759999996575101,
          "wait": 57.50299999999696,
          "receive": 250.60099999973318,
          "ssl": -1
        },
        "connection": "28334",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.820Z",
        "time": 354.4080000010581,
        "request": {
          "method": "GET",
          "url": "http://asrv-a.akamaihd.net/sd/9657/1001.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, sdch"
            },
            {
              "name": "Cookie",
              "value": "__utma=160223277.365860790.1451303656.1451303656.1451303656.1; __utmz=160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=1.1379325226.1451303655.1451303655.1451668869.2; __utmz=1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1"
            },
            {
              "name": "Host",
              "value": "asrv-a.akamaihd.net"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [
            {
              "name": "__utma",
              "value": "160223277.365860790.1451303656.1451303656.1451303656.1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utma",
              "value": "1.1379325226.1451303655.1451303655.1451668869.2",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmv",
              "value": "1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }
          ],
          "headersSize": 643,
          "bodySize": 0
        },
        "response": {
          "status": 403,
          "statusText": "Forbidden",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Server",
              "value": "AkamaiGHost"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Mime-Version",
              "value": "1.0"
            },
            {
              "name": "Content-Length",
              "value": "300"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/html",
            "compression": 213
          },
          "redirectURL": "",
          "headersSize": 213,
          "bodySize": -213,
          "_transferSize": 0,
          "_error": ""
        },
        "cache": {},
        "timings": {
          "blocked": 3.23800000114716,
          "dns": -1,
          "connect": -1,
          "send": 0.6890000004204899,
          "wait": 63.62199999966835,
          "receive": 286.8589999998221,
          "ssl": -1
        },
        "connection": "28335",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.825Z",
        "time": 350.8829999991576,
        "request": {
          "method": "GET",
          "url": "http://asrv-a.akamaihd.net/sd/9657/1002.js",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, sdch"
            },
            {
              "name": "Cookie",
              "value": "__utma=160223277.365860790.1451303656.1451303656.1451303656.1; __utmz=160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=1.1379325226.1451303655.1451303655.1451668869.2; __utmz=1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1"
            },
            {
              "name": "Host",
              "value": "asrv-a.akamaihd.net"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [
            {
              "name": "__utma",
              "value": "160223277.365860790.1451303656.1451303656.1451303656.1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "160223277.1451303656.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utma",
              "value": "1.1379325226.1451303655.1451303655.1451668869.2",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmz",
              "value": "1.1451303655.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
              "expires": null,
              "httpOnly": false,
              "secure": false
            },
            {
              "name": "__utmv",
              "value": "1.|2=product=vbates=1^3=channel=clkmidex=1^5=version=2.0.0.480=1",
              "expires": null,
              "httpOnly": false,
              "secure": false
            }
          ],
          "headersSize": 643,
          "bodySize": 0
        },
        "response": {
          "status": 403,
          "statusText": "Forbidden",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:37 GMT"
            },
            {
              "name": "Server",
              "value": "AkamaiGHost"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Mime-Version",
              "value": "1.0"
            },
            {
              "name": "Content-Length",
              "value": "300"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            }
          ],
          "cookies": [],
          "content": {
            "size": 0,
            "mimeType": "text/html",
            "compression": 213
          },
          "redirectURL": "",
          "headersSize": 213,
          "bodySize": -213,
          "_transferSize": 0,
          "_error": ""
        },
        "cache": {},
        "timings": {
          "blocked": 1.47699999979523,
          "dns": -1,
          "connect": -1,
          "send": 0.6780000003345701,
          "wait": 67.7149999992253,
          "receive": 281.0129999998025,
          "ssl": -1
        },
        "connection": "28333",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.829Z",
        "time": 47.592000000804546,
        "request": {
          "method": "GET",
          "url": "http://i.qkntjs.info/qknt/javascript.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "name": "X-Accel-Expires",
              "value": "0"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 16:46:20 GMT"
            },
            {
              "name": "X-Origin",
              "value": "opt0"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Age",
              "value": "4"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:46:20 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 8075,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.642000000880216,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 2.687999998670424,
          "receive": 44.26200000125391,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.832Z",
        "time": 46.08200000075158,
        "request": {
          "method": "GET",
          "url": "https://cdn.ext335.com/gm2yy8/bindo.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": -1,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "date",
              "value": "Sat, 02 Apr 2016 19:59:49 GMT"
            },
            {
              "name": "content-encoding",
              "value": "gzip"
            },
            {
              "name": "cf-cache-status",
              "value": "HIT"
            },
            {
              "name": "last-modified",
              "value": "Tue, 19 Jan 2016 03:35:15 GMT"
            },
            {
              "name": "server",
              "value": "cloudflare-nginx"
            },
            {
              "name": "etag",
              "value": "W/\"1bc82-529a78ec362c0\""
            },
            {
              "name": "vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "content-type",
              "value": "application/javascript"
            },
            {
              "name": "status",
              "value": "304"
            },
            {
              "name": "cache-control",
              "value": "public, max-age=86400"
            },
            {
              "name": "cf-ray",
              "value": "28d6dd11354017ec-SIN"
            },
            {
              "name": "expires",
              "value": "Sun, 03 Apr 2016 19:59:49 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 113679,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.367000000551343,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 38.375000000087354,
          "receive": 7.34000000011288,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:40.936Z",
        "time": 269.49600000079954,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "http://mybrowserpages.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "mybrowserpages.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "http://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 412,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:31 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.3.29"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "cookies": [],
          "content": {
            "size": 62,
            "mimeType": "text/html",
            "compression": -31
          },
          "redirectURL": "",
          "headersSize": 253,
          "bodySize": 93,
          "_transferSize": 346
        },
        "cache": {},
        "timings": {
          "blocked": 0.514999999722932,
          "dns": -1,
          "connect": -1,
          "send": 0.420000000303844,
          "wait": 267.9879999996042,
          "receive": 0.5730000011685661,
          "ssl": -1
        },
        "connection": "27978",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:41.173Z",
        "time": 1.624999998966814,
        "request": {
          "method": "GET",
          "url": "http://i.tonginjs.info/tongin/javascript.js?channel=s30030&apptitle=shopping%20deals",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "channel",
              "value": "s30030"
            },
            {
              "name": "apptitle",
              "value": "shopping%20deals"
            }
          ],
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
              "name": "X-Accel-Expires",
              "value": "0"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 16:26:32 GMT"
            },
            {
              "name": "X-Origin",
              "value": "opt"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Age",
              "value": "473"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:26:32 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 8123,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.360000000000582,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.6099999991420191,
          "receive": 0.654999999824213,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:41.175Z",
        "time": 45.90199999984179,
        "request": {
          "method": "GET",
          "url": "https://cf.vsavr.com/6003/js/ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V0c0BpdGVyYXRlLnVzZXJ2b2ljZS5jb20iLCJ1cmwiOiIifSwic2VhcmNoIjpmYWxzZSwicG9wb3ZlckltYWdlIjpmYWxzZSwicHJvZHVjdEltYWdlIjpmYWxzZSwiZmlsbXN0cmlwIjpmYWxzZX0=",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V0c0BpdGVyYXRlLnVzZXJ2b2ljZS5jb20iLCJ1cmwiOiIifSwic2VhcmNoIjpmYWxzZSwicG9wb3ZlckltYWdlIjpmYWxzZSwicHJvZHVjdEltYWdlIjpmYWxzZSwiZmlsbXN0cmlwIjpmYWxzZX0",
              "value": ""
            }
          ],
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
              "value": "Fri, 01 Apr 2016 18:28:08 GMT"
            },
            {
              "name": "Via",
              "value": "1.1 c87e032033404ba271592462aab82758.cloudfront.net (CloudFront)"
            },
            {
              "name": "Last-Modified",
              "value": "Wed, 10 Feb 2016 03:19:17 GMT"
            },
            {
              "name": "Server",
              "value": "AmazonS3"
            },
            {
              "name": "x-amz-meta-s3cmd-attrs",
              "value": "uid:501/gname:staff/uname:andrew/gid:20/mode:33188/mtime:1455074045/atime:1455074343/md5:7ea44f8894a6545c8a3b167eceb6d244/ctime:1455074045"
            },
            {
              "name": "Age",
              "value": "73943"
            },
            {
              "name": "ETag",
              "value": "\"7ea44f8894a6545c8a3b167eceb6d244\""
            },
            {
              "name": "X-Cache",
              "value": "Hit from cloudfront"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Length",
              "value": "271890"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "X-Amz-Cf-Id",
              "value": "PYtj4ksTXyyrEr1z4-uq-_38rmc-8mVDcCMSCrQUJw5K7zWhPAUJvw=="
            }
          ],
          "cookies": [],
          "content": {
            "size": 791421,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.302000000374392,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.670999999783816,
          "receive": 44.92899999968358,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:41.221Z",
        "time": 2.559000000474043,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "http://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 19:23:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 03:42:46 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56fc9cb6-173b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=43200"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 07:23:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5947,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.497999999424792,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.716000000466008,
          "receive": 1.3450000005832432,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:41.226Z",
        "time": 154.9490000015794,
        "request": {
          "method": "GET",
          "url": "http://i.qkntjs.info/opt_content.js?v=opt_1458815890410&partner=qknt&channel=qknt&sset=0&appTitle=&products=&ip=36.70.232.218",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "v",
              "value": "opt_1458815890410"
            },
            {
              "name": "partner",
              "value": "qknt"
            },
            {
              "name": "channel",
              "value": "qknt"
            },
            {
              "name": "sset",
              "value": "0"
            },
            {
              "name": "appTitle",
              "value": ""
            },
            {
              "name": "products",
              "value": ""
            },
            {
              "name": "ip",
              "value": "36.70.232.218"
            }
          ],
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
              "name": "X-Accel-Expires",
              "value": "0"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 11:35:21 GMT"
            },
            {
              "name": "X-Origin",
              "value": "opt0"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Age",
              "value": "18669"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=259200"
            },
            {
              "name": "Expires",
              "value": "Tue, 05 Apr 2016 11:35:21 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 998083,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.648000001092441,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 49.70399999911026,
          "receive": 104.5970000013767,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:42.658Z",
        "time": 1.5530000000580912,
        "request": {
          "method": "GET",
          "url": "http://www.ajaxcdn.org/swf.swf",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "X-Requested-With",
              "value": "ShockwaveFlash/21.0.0.197"
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
              "value": "Fri, 01 Apr 2016 18:29:53 GMT"
            },
            {
              "name": "Last-Modified",
              "value": "Tue, 26 Feb 2013 16:15:39 GMT"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Age",
              "value": "22"
            },
            {
              "name": "ETag",
              "value": "\"512cdfab-bd5c\""
            },
            {
              "name": "Content-Type",
              "value": "application/x-shockwave-flash"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=604800"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Length",
              "value": "48476"
            },
            {
              "name": "Expires",
              "value": "Fri, 08 Apr 2016 18:29:53 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 48476,
            "mimeType": "application/x-shockwave-flash"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.40400000034424,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.34400000004097797,
          "receive": 0.8049999996728733,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:42.749Z",
        "time": 1.445000001695007,
        "request": {
          "method": "GET",
          "url": "http://c0.qkntjs.info/-2117285666.js?dn=undefined.&isc=0",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "dn",
              "value": "undefined."
            },
            {
              "name": "isc",
              "value": "0"
            }
          ],
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
              "name": "X-Origin",
              "value": "crown0"
            },
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:14 GMT"
            },
            {
              "name": "Last-Modified",
              "value": "Sun, 15 Jun 2014 14:27:25 GMT"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Age",
              "value": "0"
            },
            {
              "name": "ETag",
              "value": "\"539dad4d-1b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=21600"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Length",
              "value": "27"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 02:00:14 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 27,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.649000001430977,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.332999999955064,
          "receive": 0.46300000030896604,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:42.794Z",
        "time": 8.697000001120614,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/altHbHandler.html",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:33:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:33:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7697,
            "mimeType": "text/html"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.374000001102104,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 5.498999998962976,
          "receive": 2.824000001055534,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:42.794Z",
        "time": 9.218999999575317,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/mailer.html",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:33:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:33:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 21677,
            "mimeType": "text/html"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.309000000925153,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 5.510999999387426,
          "receive": 3.3989999992627373,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.047Z",
        "time": 268.5719999990397,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "https://foxi69.tlscdn.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "mybrowserpages.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/altHbHandler.html"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 410,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:33 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.3.29"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "cookies": [],
          "content": {
            "size": 62,
            "mimeType": "text/html",
            "compression": -31
          },
          "redirectURL": "",
          "headersSize": 253,
          "bodySize": 93,
          "_transferSize": 346
        },
        "cache": {},
        "timings": {
          "blocked": 0.734999999622232,
          "dns": -1,
          "connect": -1,
          "send": 0.40000000080908815,
          "wait": 266.76599999882467,
          "receive": 0.6709999997837031,
          "ssl": -1
        },
        "connection": "27978",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.249Z",
        "time": 270.03700000022945,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "https://foxi69.tlscdn.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "mybrowserpages.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 404,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:33 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.3.29"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "cookies": [],
          "content": {
            "size": 62,
            "mimeType": "text/html",
            "compression": -31
          },
          "redirectURL": "",
          "headersSize": 253,
          "bodySize": 93,
          "_transferSize": 346
        },
        "cache": {},
        "timings": {
          "blocked": 0.723999999536318,
          "dns": -1,
          "connect": -1,
          "send": 0.43899999946006196,
          "wait": 268.2110000005196,
          "receive": 0.6630000007134527,
          "ssl": -1
        },
        "connection": "28451",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.365Z",
        "time": 6.386999999449472,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/resources/eden/green/lib/dQuery.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:33:27 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Content-Type",
              "value": "application/x-javascript"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:33:27 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 91979,
            "mimeType": "application/x-javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.860000000102446,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 3.0099999985395742,
          "receive": 2.517000000807452,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.366Z",
        "time": 5.2949999990232754,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/mailer/yahoo.png",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "image/webp,image/*,*/*;q=0.8"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:33:27 GMT"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "ETag",
              "value": "\"56fcb6fa-3423\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Type",
              "value": "image/png"
            },
            {
              "name": "Content-Length",
              "value": "13347"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:33:27 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 13347,
            "mimeType": "image/png"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 1.64199999926495,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.7569999997940697,
          "receive": 2.8959999999642556,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.407Z",
        "time": 1.7459999999118736,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/altHbHandler.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 19:23:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 03:42:46 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56fc9cb6-173b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=43200"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 07:23:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5947,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.532999998540618,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.6280000015976821,
          "receive": 0.5849999997735735,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.622Z",
        "time": 16.437000000223634,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/mailer/bg.jpg",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "image/webp,image/*,*/*;q=0.8"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:34:28 GMT"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "ETag",
              "value": "\"56fcb6fa-919f\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Type",
              "value": "image/jpeg"
            },
            {
              "name": "Content-Length",
              "value": "37279"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:34:28 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 37279,
            "mimeType": "image/jpeg"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.659000001178356,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.504999999975554,
          "receive": 15.272999999069723,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.625Z",
        "time": 15.391000000818167,
        "request": {
          "method": "GET",
          "url": "https://foxi69.tlscdn.com/mailer/thank_u_popup.png",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "image/webp,image/*,*/*;q=0.8"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 16:33:28 GMT"
            },
            {
              "name": "X-Origin",
              "value": "staticf"
            },
            {
              "name": "Server",
              "value": "openresty/1.5.12.1"
            },
            {
              "name": "ETag",
              "value": "\"56fcb6fa-3195b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "P3P",
              "value": "CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\", CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=14400"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 05:34:50 GMT"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Content-Type",
              "value": "image/png"
            },
            {
              "name": "Content-Length",
              "value": "203099"
            },
            {
              "name": "Expires",
              "value": "Sat, 02 Apr 2016 20:33:28 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 203099,
            "mimeType": "image/png"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.672000000122353,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 13.375000000451147,
          "receive": 1.3440000002446677,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:43.678Z",
        "time": 4.020000000309665,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 19:23:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 03:42:46 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56fc9cb6-173b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=43200"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 07:23:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5947,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 1.05299999995623,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 2.25899999895773,
          "receive": 0.7080000013957046,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:48.702Z",
        "time": 8.256000000983477,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/acontrol/index.html",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/altHbHandler.html"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Fri, 01 Apr 2016 18:28:02 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Wed, 09 Mar 2016 06:19:06 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56dfc05a-ac6\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2758,
            "mimeType": "text/html"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 1.16499999967346,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 3.31300000107148,
          "receive": 3.7780000002385368,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:48.717Z",
        "time": 3.6990000007790513,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/acontrol/index.html",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/mailer.html"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Fri, 01 Apr 2016 18:28:02 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Wed, 09 Mar 2016 06:19:06 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56dfc05a-ac6\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            }
          ],
          "cookies": [],
          "content": {
            "size": 2758,
            "mimeType": "text/html"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.613000000157626,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 2.275999999255874,
          "receive": 0.8100000013655513,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:48.838Z",
        "time": 271.51899999989837,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "https://mybrowserpages.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "mybrowserpages.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 414,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:39 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.3.29"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "cookies": [],
          "content": {
            "size": 62,
            "mimeType": "text/html",
            "compression": -31
          },
          "redirectURL": "",
          "headersSize": 253,
          "bodySize": 93,
          "_transferSize": 346
        },
        "cache": {},
        "timings": {
          "blocked": 0.726000000213389,
          "dns": -1,
          "connect": -1,
          "send": 0.420000000303841,
          "wait": 268.52399999916076,
          "receive": 1.8490000002203715,
          "ssl": -1
        },
        "connection": "28451",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:49.045Z",
        "time": 269.7410000000673,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "https://mybrowserpages.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "mybrowserpages.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 414,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Sat, 02 Apr 2016 20:00:39 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.3.29"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "text/html"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "cookies": [],
          "content": {
            "size": 62,
            "mimeType": "text/html",
            "compression": -31
          },
          "redirectURL": "",
          "headersSize": 253,
          "bodySize": 93,
          "_transferSize": 346
        },
        "cache": {},
        "timings": {
          "blocked": 0.724999999874854,
          "dns": -1,
          "connect": -1,
          "send": 0.43999999979860593,
          "wait": 267.92899999963953,
          "receive": 0.6470000007543035,
          "ssl": -1
        },
        "connection": "27978",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:49.174Z",
        "time": 23.179999998319545,
        "request": {
          "method": "GET",
          "url": "https://www.onclickcool.com/8v8gcm/bindo.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://foxi69.tlscdn.com/altHbHandler.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Fri, 01 Apr 2016 18:26:39 GMT"
            },
            {
              "name": "Last-Modified",
              "value": "Tue, 19 Jan 2016 02:49:45 GMT"
            },
            {
              "name": "Server",
              "value": "Apache"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "ETag",
              "value": "\"1b852-529a6ec0ae440\""
            },
            {
              "name": "Content-Length",
              "value": "112722"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            }
          ],
          "cookies": [],
          "content": {
            "size": 112722,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 3.82799999897543,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 4.215000000840519,
          "receive": 15.136999998503596,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:49.178Z",
        "time": 18.36100000036822,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 19:23:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 03:42:46 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56fc9cb6-173b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=43200"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 07:23:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5947,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.550000000657747,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 14.233999998396053,
          "receive": 3.5770000013144223,
          "ssl": -1
        },
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-04-02T20:00:49.210Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://www.onclickcool.com/8v8gcm/bindo.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Fri, 01 Apr 2016 18:26:39 GMT"
            },
            {
              "name": "Last-Modified",
              "value": "Tue, 19 Jan 2016 02:49:45 GMT"
            },
            {
              "name": "Server",
              "value": "Apache"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "ETag",
              "value": "\"1b852-529a6ec0ae440\""
            },
            {
              "name": "Content-Length",
              "value": "112722"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            }
          ],
          "cookies": [],
          "content": {
            "size": 112722,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
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
      },
      {
        "startedDateTime": "2016-04-02T20:00:49.318Z",
        "time": 1.7149999985122122,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://mybrowserpages.com/acontrol/index.html"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36"
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
              "value": "Sat, 02 Apr 2016 19:23:26 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Thu, 31 Mar 2016 03:42:46 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"56fc9cb6-173b\""
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=43200"
            },
            {
              "name": "Expires",
              "value": "Sun, 03 Apr 2016 07:23:26 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 5947,
            "mimeType": "application/javascript"
          },
          "redirectURL": "",
          "headersSize": -1,
          "bodySize": 0,
          "_transferSize": 0
        },
        "cache": {},
        "timings": {
          "blocked": 0.528999999005464,
          "dns": -1,
          "connect": -1,
          "send": 0,
          "wait": 0.5529999998543659,
          "receive": 0.6329999996523823,
          "ssl": -1
        },
        "pageref": "page_1"
      }
    ]
  }
}
-To be evaluated in console:
2016-04-03 02:59:48.206 EasySearch.json:2 Uncaught ReferenceError: Invalid left-hand side in assignment
2016-04-03 03:00:15.521 info.js:18 GET http://asrv-a.akamaihd.net/sd/9657/1003.js Create_advertisement_s @ info.js:18(anonymous function) @ VM55:1
2016-04-03 03:00:15.522 info.js:26 GET http://asrv-a.akamaihd.net/sd/9657/1001.js Create_advertisement_s @ info.js:26(anonymous function) @ VM55:1
2016-04-03 03:00:15.524 info.js:30 GET http://asrv-a.akamaihd.net/sd/9657/1002.js Create_advertisement_s @ info.js:30(anonymous function) @ VM55:1
2016-04-03 03:00:15.525 main.js:23XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:15.534 info.js:71 GET file://s3.amazonaws.com/rolext.net/CL814.js net::ERR_FILE_NOT_FOUNDCreate_advertisement_s @ info.js:71(anonymous function) @ VM55:1
2016-04-03 03:00:15.634 index.html:86 Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('file://') does not match the recipient window's origin ('null').(anonymous function) @ index.html:86postMessage (async)action @ info.js:135
2016-04-03 03:00:15.847 ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3 XMLHttpRequest cannot load file://cf.vsavr.com/config/tvdm.json?file_. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.f @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3g @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3d.2.../src/utils @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2d.32.../../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2d.14.../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2
2016-04-03 03:00:15.918 ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5 XMLHttpRequest cannot load file://prod.vsearchr.com/1/cm/get. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.h @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5m @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4d.14.../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2
2016-04-03 03:00:17.256 VM135:1 'Document.defaultCharset' is deprecated and will be removed in M50, around April 2016. See https://www.chromestatus.com/features/6217124578066432 for more details.
2016-04-03 03:00:17.511 info.js:61 GET file://ratexchange.net/6241d3cd091af1ce1c.js net::ERR_FILE_NOT_FOUNDCreate_advertisement_s @ info.js:61(anonymous function) @ VM55:1
2016-04-03 03:00:17.993 main.js:23XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:18.799 file://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208 Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-04-03 03:00:18.803 main.js:23XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:24.377 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:24.529 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:35.711 Navigated to file:///C:/Users/Axioo/Favorites/acontrolindex.html
2016-04-03 03:00:35.795 EasySearch.json:2 Uncaught ReferenceError: Invalid left-hand side in assignment
2016-04-03 03:00:35.864 add-js.js:8 GET file://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208 net::ERR_FILE_NOT_FOUND(anonymous function) @ add-js.js:8
2016-04-03 03:00:40.871 info.js:61 GET file://ratexchange.net/6241d3cd091af1ce1c.js net::ERR_FILE_NOT_FOUNDCreate_advertisement_s @ info.js:61(anonymous function) @ VM445:1setTimeout (async)(anonymous function) @ info.js:140
2016-04-03 03:00:40.871 info.js:71 GET file://s3.amazonaws.com/rolext.net/CL814.js net::ERR_FILE_NOT_FOUNDCreate_advertisement_s @ info.js:71(anonymous function) @ VM445:1setTimeout (async)(anonymous function) @ info.js:140
2016-04-03 03:00:41.130 info.js:18 GET http://asrv-a.akamaihd.net/sd/9657/1003.js Create_advertisement_s @ info.js:18(anonymous function) @ VM445:1setTimeout (async)(anonymous function) @ info.js:140
2016-04-03 03:00:41.174 info.js:26 GET http://asrv-a.akamaihd.net/sd/9657/1001.js Create_advertisement_s @ info.js:26(anonymous function) @ VM445:1setTimeout (async)(anonymous function) @ info.js:140
2016-04-03 03:00:41.176 info.js:30 GET http://asrv-a.akamaihd.net/sd/9657/1002.js Create_advertisement_s @ info.js:30(anonymous function) @ VM445:1setTimeout (async)(anonymous function) @ info.js:140
2016-04-03 03:00:41.219 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:41.225 index.html:86 Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('file://') does not match the recipient window's origin ('null').(anonymous function) @ index.html:86postMessage (async)action @ info.js:135
2016-04-03 03:00:41.305 ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3 XMLHttpRequest cannot load file://cf.vsavr.com/config/tvdm.json?file_. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.f @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3g @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3d.2.../src/utils @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:3e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2d.32.../../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2d.14.../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2
2016-04-03 03:00:41.365 ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5 XMLHttpRequest cannot load file://prod.vsearchr.com/1/cm/get. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.h @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5m @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:5(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4d.14.../config/config @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:4e @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2a @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2(anonymous function) @ ipavxyz-6-cf.min.js?eyJwYXJ0bmVyIjp7Im5hbWUiOiJHcmVhdCBEZWFscyIsImlkIjoiVFZETSIsImVtYWlsIjoidGlja2V…:2
2016-04-03 03:00:42.583 VM525:1 'Document.defaultCharset' is deprecated and will be removed in M50, around April 2016. See https://www.chromestatus.com/features/6217124578066432 for more details.
2016-04-03 03:00:43.021 VM525:1 GET file://s0.qkntjs.info/dealdo/shoppingjs4?b=Chy9mZaMDhnSpxvUzgvMAw5LzczKyxrH…0MAw5ZDgDYCd0MAwfNpwnSAwvUDdeWmc4UjMnVB2TPzxntDgf0Dxm9y29VA2LLrw5HyMXLza== net::ERR_FILE_NOT_FOUNDsend @ VM525:1undefined.f.extend.ajax @ VM525:1f.(anonymous function) @ VM525:1undefined.f.extend.getScript @ VM525:1DealPlyCls.callServer @ VM525:1DealPlyCls.callServerAndInject @ VM525:1DealPlyCls.queryServer @ VM525:1(anonymous function) @ -2117285666.js?dn=undefined.&isc=0:1
2016-04-03 03:00:43.405 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:43.676 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:49.175 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:49.316 main.js:23 XHR finished loading: POST "https://mybrowserpages.com/json/index.php?name=EasySearch".post @ main.js:23(anonymous function) @ main.js:3
2016-04-03 03:00:50.085 prod.vsearchr.com/1/tr?loaded:1 GET file://prod.vsearchr.com/1/tr?loaded net::ERR_FILE_NOT_FOUND
2016-04-03 03:02:57.701 Error saving setting with name: previouslyViewedFiles, value length: 3153. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-04-03 03:02:57.706 Ten largest settings: 
2016-04-03 03:02:57.787 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:02:57.788 Setting: 'savedURLs', size: 3698
2016-04-03 03:02:57.788 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:02:57.788 Setting: 'breakpoints', size: 227
2016-04-03 03:02:57.788 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:02:57.788 Setting: 'watchExpressions', size: 45
2016-04-03 03:02:57.788 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:02:57.788 Setting: 'experiments', size: 2
2016-04-03 03:02:57.788 Setting: 'domBreakpoints', size: 2
2016-04-03 03:02:57.788 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:13.425 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:13.431 Ten largest settings: 
2016-04-03 03:03:13.528 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:13.528 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:13.528 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:13.528 Setting: 'breakpoints', size: 227
2016-04-03 03:03:13.528 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:13.528 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:13.528 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:13.528 Setting: 'experiments', size: 2
2016-04-03 03:03:13.529 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:13.529 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:14.769 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:14.771 Ten largest settings: 
2016-04-03 03:03:14.860 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:14.861 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:14.861 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:14.861 Setting: 'breakpoints', size: 227
2016-04-03 03:03:14.861 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:14.861 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:14.861 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:14.861 Setting: 'experiments', size: 2
2016-04-03 03:03:14.862 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:14.862 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:16.039 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:16.045 Ten largest settings: 
2016-04-03 03:03:16.140 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:16.140 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:16.140 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:16.140 Setting: 'breakpoints', size: 227
2016-04-03 03:03:16.140 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:16.140 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:16.140 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:16.140 Setting: 'experiments', size: 2
2016-04-03 03:03:16.140 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:16.140 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:17.363 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:17.367 Ten largest settings: 
2016-04-03 03:03:17.465 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:17.466 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:17.466 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:17.466 Setting: 'breakpoints', size: 227
2016-04-03 03:03:17.466 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:17.466 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:17.466 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:17.466 Setting: 'experiments', size: 2
2016-04-03 03:03:17.466 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:17.467 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:18.570 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:18.579 Ten largest settings: 
2016-04-03 03:03:18.668 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:18.668 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:18.668 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:18.668 Setting: 'breakpoints', size: 227
2016-04-03 03:03:18.668 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:18.668 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:18.668 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:18.668 Setting: 'experiments', size: 2
2016-04-03 03:03:18.668 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:18.668 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:19.803 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:19.804 Ten largest settings: 
2016-04-03 03:03:19.893 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:19.893 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:19.893 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:19.893 Setting: 'breakpoints', size: 227
2016-04-03 03:03:19.893 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:19.893 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:19.893 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:19.893 Setting: 'experiments', size: 2
2016-04-03 03:03:19.893 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:19.893 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:27.371 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:27.374 Ten largest settings: 
2016-04-03 03:03:27.460 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:27.460 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:27.460 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:27.461 Setting: 'breakpoints', size: 227
2016-04-03 03:03:27.461 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:27.461 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:27.461 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:27.461 Setting: 'experiments', size: 2
2016-04-03 03:03:27.461 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:27.461 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:28.584 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:28.588 Ten largest settings: 
2016-04-03 03:03:28.677 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:28.677 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:28.677 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:28.677 Setting: 'breakpoints', size: 227
2016-04-03 03:03:28.677 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:28.677 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:28.677 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:28.678 Setting: 'experiments', size: 2
2016-04-03 03:03:28.678 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:28.678 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:29.855 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:29.857 Ten largest settings: 
2016-04-03 03:03:29.941 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:29.941 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:29.941 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:29.941 Setting: 'breakpoints', size: 227
2016-04-03 03:03:29.942 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:29.942 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:29.942 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:29.942 Setting: 'experiments', size: 2
2016-04-03 03:03:29.942 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:29.942 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:30.949 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:30.952 Ten largest settings: 
2016-04-03 03:03:31.041 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:31.041 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:31.041 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:31.041 Setting: 'breakpoints', size: 227
2016-04-03 03:03:31.041 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:31.041 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:31.041 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:31.042 Setting: 'experiments', size: 2
2016-04-03 03:03:31.042 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:31.043 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:36.138 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:36.140 Ten largest settings: 
2016-04-03 03:03:36.233 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:36.233 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:36.233 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:36.233 Setting: 'breakpoints', size: 227
2016-04-03 03:03:36.233 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:36.233 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:36.234 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:36.234 Setting: 'experiments', size: 2
2016-04-03 03:03:36.235 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:36.235 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:36.300 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:36.300 Ten largest settings: 
2016-04-03 03:03:36.388 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:36.389 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:36.389 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:36.389 Setting: 'breakpoints', size: 227
2016-04-03 03:03:36.389 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:36.389 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:36.390 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:36.390 Setting: 'experiments', size: 2
2016-04-03 03:03:36.390 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:36.390 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:38.249 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:38.251 Ten largest settings: 
2016-04-03 03:03:38.342 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:38.342 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:38.343 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:38.343 Setting: 'breakpoints', size: 227
2016-04-03 03:03:38.343 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:38.343 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:38.343 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:38.343 Setting: 'experiments', size: 2
2016-04-03 03:03:38.343 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:38.343 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:45.304 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:45.305 Ten largest settings: 
2016-04-03 03:03:45.398 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:45.398 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:45.398 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:45.398 Setting: 'breakpoints', size: 227
2016-04-03 03:03:45.398 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:45.398 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:45.399 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:45.399 Setting: 'experiments', size: 2
2016-04-03 03:03:45.399 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:45.399 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:46.425 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:03:46.427 Ten largest settings: 
2016-04-03 03:03:46.524 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:46.524 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:46.524 Setting: 'previouslyViewedFiles', size: 3078
2016-04-03 03:03:46.524 Setting: 'breakpoints', size: 227
2016-04-03 03:03:46.524 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:46.524 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:46.525 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:46.525 Setting: 'experiments', size: 2
2016-04-03 03:03:46.525 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:46.525 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:47.264 Error saving setting with name: previouslyViewedFiles, value length: 3169. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-04-03 03:03:47.265 Ten largest settings: 
2016-04-03 03:03:47.344 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:47.345 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:47.345 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:03:47.345 Setting: 'breakpoints', size: 227
2016-04-03 03:03:47.345 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:47.345 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:47.345 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:47.345 Setting: 'experiments', size: 2
2016-04-03 03:03:47.345 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:47.345 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:52.168 Error saving setting with name: previouslyViewedFiles, value length: 3179. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-04-03 03:03:52.168 Ten largest settings: 
2016-04-03 03:03:52.254 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:52.254 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:52.255 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:03:52.255 Setting: 'breakpoints', size: 227
2016-04-03 03:03:52.255 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:52.255 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:52.255 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:52.255 Setting: 'experiments', size: 2
2016-04-03 03:03:52.255 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:52.255 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:03:54.381 Error saving setting with name: previouslyViewedFiles, value length: 3200. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-04-03 03:03:54.381 Ten largest settings: 
2016-04-03 03:03:54.465 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:03:54.465 Setting: 'savedURLs', size: 3698
2016-04-03 03:03:54.465 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:03:54.465 Setting: 'breakpoints', size: 227
2016-04-03 03:03:54.465 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:03:54.466 Setting: 'watchExpressions', size: 45
2016-04-03 03:03:54.466 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:03:54.466 Setting: 'experiments', size: 2
2016-04-03 03:03:54.466 Setting: 'domBreakpoints', size: 2
2016-04-03 03:03:54.466 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:04:01.635 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:04:01.637 Ten largest settings: 
2016-04-03 03:04:01.730 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:04:01.730 Setting: 'savedURLs', size: 3698
2016-04-03 03:04:01.730 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:04:01.730 Setting: 'breakpoints', size: 227
2016-04-03 03:04:01.730 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:04:01.730 Setting: 'watchExpressions', size: 45
2016-04-03 03:04:01.730 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:04:01.730 Setting: 'experiments', size: 2
2016-04-03 03:04:01.731 Setting: 'domBreakpoints', size: 2
2016-04-03 03:04:01.731 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:04:03.080 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:04:03.082 Ten largest settings: 
2016-04-03 03:04:03.178 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:04:03.178 Setting: 'savedURLs', size: 3698
2016-04-03 03:04:03.178 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:04:03.178 Setting: 'breakpoints', size: 227
2016-04-03 03:04:03.178 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:04:03.178 Setting: 'watchExpressions', size: 45
2016-04-03 03:04:03.178 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:04:03.178 Setting: 'experiments', size: 2
2016-04-03 03:04:03.179 Setting: 'domBreakpoints', size: 2
2016-04-03 03:04:03.179 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:04:05.136 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:04:05.138 Ten largest settings: 
2016-04-03 03:04:05.232 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:04:05.233 Setting: 'savedURLs', size: 3698
2016-04-03 03:04:05.233 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:04:05.233 Setting: 'breakpoints', size: 227
2016-04-03 03:04:05.233 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:04:05.233 Setting: 'watchExpressions', size: 45
2016-04-03 03:04:05.233 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:04:05.233 Setting: 'experiments', size: 2
2016-04-03 03:04:05.233 Setting: 'domBreakpoints', size: 2
2016-04-03 03:04:05.233 Setting: 'workspaceExcludedFolders', size: 2
2016-04-03 03:04:06.420 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-03 03:04:06.421 Ten largest settings: 
2016-04-03 03:04:06.512 Setting: 'consoleHistory', size: 5235364
2016-04-03 03:04:06.512 Setting: 'savedURLs', size: 3698
2016-04-03 03:04:06.512 Setting: 'previouslyViewedFiles', size: 3094
2016-04-03 03:04:06.513 Setting: 'breakpoints', size: 227
2016-04-03 03:04:06.513 Setting: 'eventListenerBreakpoints', size: 220
2016-04-03 03:04:06.513 Setting: 'watchExpressions', size: 45
2016-04-03 03:04:06.513 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-03 03:04:06.513 Setting: 'experiments', size: 2
2016-04-03 03:04:06.513 Setting: 'domBreakpoints', size: 2
2016-04-03 03:04:06.513 Setting: 'workspaceExcludedFolders', size: 2
