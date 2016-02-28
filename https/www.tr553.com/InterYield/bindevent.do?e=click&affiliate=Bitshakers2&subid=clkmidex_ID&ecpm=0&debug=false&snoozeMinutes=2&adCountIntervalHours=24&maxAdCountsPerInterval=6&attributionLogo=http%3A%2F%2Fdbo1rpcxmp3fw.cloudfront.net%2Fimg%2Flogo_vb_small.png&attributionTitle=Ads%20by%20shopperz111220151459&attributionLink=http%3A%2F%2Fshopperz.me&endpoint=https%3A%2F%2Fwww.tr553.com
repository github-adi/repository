-By Muhammad Adi Nugroho, S. Adm. Neg.:
-Via My Notepad (HTML Editor):
https://www.tr553.com/InterYield/bindevent.do?e=click&affiliate=Bitshakers2&subid=clkmidex_ID&ecpm=0&debug=false&snoozeMinutes=2&adCountIntervalHours=24&maxAdCountsPerInterval=6&attributionLogo=http%3A%2F%2Fdbo1rpcxmp3fw.cloudfront.net%2Fimg%2Flogo_vb_small.png&attributionTitle=Ads%20by%20shopperz111220151459&attributionLink=http%3A%2F%2Fshopperz.me&endpoint=https%3A%2F%2Fwww.tr553.com
-To be evaluated in console:
bindevent.do?e=click&affiliate=Bitshakers2&subid=clkmidex_ID&ecpm=0&debug=false&snoozeMinutes=2&adCountIntervalHours=24&maxAdCountsPerInterval=6&attributionLogo=http%3A%2F%2Fdbo1rpcxmp3fw.cloudfront.net%2Fimg%2Flogo_vb_small.png&attributionTitle=Ads%20by%20shopperz111220151459&attributionLink=http%3A%2F%2Fshopperz.me&endpoint=https%3A%2F%2Fwww.tr553.com	GET	200	http/1.1	https	www.tr553.com	66.216.109.143:443	script	fbMyApp.html:1	2	1	1.6 KB	1.19 s	Medium	26137	no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, pre-check=0, post-check=0, private			1144			Apache-Coyote/1.1		
clickbinder.do?ver=1.0-SNAPSHOT.72%2C499&a=null	GET	304	http/1.1	https	www.tr553.com	66.216.109.143:443	script	bindevent.do?e=click&affiliate=Bitshakers2&subid=clkmidex_ID&ecpm=0&debug=false&snoozeMinutes=2&adC…:29	2		204 B	340 ms	Low	26137					"0735faa3919e766ca6efc09fdd04dd45b"		Apache-Coyote/1.1		
getSnoozing.do?callback=AA3nGBSc.getSnoozing&affiliate=Bitshakers2&subid=clkmidex_ID&adCountIntervalHours=24&maxAdCountsPerInterval=6&protocol=http&fulldomain=file%3A&domain=file%3A&title=&fullcleantitle=&secUntilMidnight=76014&metakeywords=&pop=over&check=&attributionDisabled=false&adultdisabled=undefined&iyd=false	GET	200	http/1.1	https	www.tr553.com	66.216.109.143:443	script	clickbinder.do?ver=1.0-SNAPSHOT.72%2C499&a=null:1	2		556 B	357 ms	Low	26137	no-cache, no-store, must-revalidate, max-age=0, proxy-revalidate, no-transform, pre-check=0, post-check=0, private			160			Apache-Coyote/1.1		
get?callback=AA3nGBSc.renderAd&product=iy&Hits_Per_Page=10&b=MK37V&terms=file%3A&affiliate=Bitshakers2&subid=clkmidex_ID&output=full&cpm=0&meta_keywords=&serveurl=file%3A%2F%2F%2FC%3A%2FUsers%2FAxioo%2FFavorites%2FfbMyApp.html&adultsearch=false&adultfilter=on	GET	200	http/1.1	https	www.tr553.com	66.216.109.143:443	script	clickbinder.do?ver=1.0-SNAPSHOT.72%2C499&a=null:1	2		582 B	982 ms	Low	26137				432			Apache-Coyote/1.1		
nocoverage.do?callback=AA3nGBSc.NoCoverage&product=iy&title=&matchedKeyword=&affiliate=Bitshakers2&subid=clkmidex_ID&domain=file%3A&url=file%3A%2F%2F%2FC%3A%2FUsers%2FAxioo%2FFavorites%2FfbMyApp.html	GET	200	http/1.1	https	www.tr553.com	66.216.109.143:443	script	clickbinder.do?ver=1.0-SNAPSHOT.72%2C499&a=null:1	2		517 B	322 ms	Low	26137				225	"00cd3de4da212455541e56eae661e5740"		Apache-Coyote/1.1		
6 requests ❘ 3.4 KB transferred ❘ Finish: 3.39 s ❘ DOMContentLoaded: 1.25 s ❘ Load: 3.39 s

Console
Emulation




Preserve log
.
2016-02-29 02:53:06.490 clickbinder.do?ver=1.0-SNAPSHOT.72%2C499&a=null:1 InterYield clickbind 1.0-SNAPSHOT.72,499 20160224-1447
2016-02-29 02:53:08.259 nocoverage.do?callback=AA3nGBSc.NoCoverage&product=iy&title=&matchedKeyword=&affiliate=Bitshakers2&…:6 InterYield click bind handler had no ad coverage.
.
