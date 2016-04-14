-My build DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Saved hack script codes below before:
https://mybrowserpages.com/extension/EasySearch/info.js
-Run with the codes below:
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
</head>
<body>
<script>

{
var c=document.createElement("script");

c.setAttribute("type","text/javascript");

c.setAttribute("src"," C:\Users\Axioo\Favorites\info.js ");

document.body.appendChild(c)
}

</script>
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
                banner_code = ('https:' == document.location.protocol ? 'https://' : 'http://')+'mybrowserpages.com/extension/web_ads_ifrome_js/content_Adonads_Addonjet_Adcash.js';
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
    "pages": [],
    "entries": []
  }
}
-To be evaluated in console:
2016-04-15 01:11:48.314 c:UsersAxiooFavoritesinfo.js Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-04-15 01:12:18.550 file://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208 Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-04-15 01:12:40.139 mybrowser.html:17 GET c:UsersAxiooFavoritesinfo.js net::ERR_FILE_NOT_FOUND(anonymous function) @ mybrowser.html:17
2016-04-15 01:12:40.185 Navigated to file:///C:/Users/Axioo/Favorites/mybrowser.html
2016-04-15 01:12:40.190 add-js.js:8 GET file://api.jollywallet.com/affiliate/client?p=16&dist=261&sub=chrome208 net::ERR_FILE_NOT_FOUND(anonymous function) @ add-js.js:8
2016-04-15 01:13:57.321 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:13:57.328 Ten largest settings: 
2016-04-15 01:13:57.409 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:13:57.409 Setting: 'savedURLs', size: 3698
2016-04-15 01:13:57.409 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:13:57.409 Setting: 'breakpoints', size: 227
2016-04-15 01:13:57.409 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:13:57.409 Setting: 'watchExpressions', size: 45
2016-04-15 01:13:57.410 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:13:57.410 Setting: 'experiments', size: 2
2016-04-15 01:13:57.410 Setting: 'domBreakpoints', size: 2
2016-04-15 01:13:57.410 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:13:58.903 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:13:58.903 Ten largest settings: 
2016-04-15 01:13:59.007 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:13:59.007 Setting: 'savedURLs', size: 3698
2016-04-15 01:13:59.007 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:13:59.007 Setting: 'breakpoints', size: 227
2016-04-15 01:13:59.007 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:13:59.007 Setting: 'watchExpressions', size: 45
2016-04-15 01:13:59.008 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:13:59.008 Setting: 'experiments', size: 2
2016-04-15 01:13:59.008 Setting: 'domBreakpoints', size: 2
2016-04-15 01:13:59.008 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:00.153 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:00.168 Ten largest settings: 
2016-04-15 01:14:00.256 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:00.256 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:00.256 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:00.256 Setting: 'breakpoints', size: 227
2016-04-15 01:14:00.256 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:00.257 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:00.257 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:00.258 Setting: 'experiments', size: 2
2016-04-15 01:14:00.258 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:00.258 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:02.101 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:02.101 Ten largest settings: 
2016-04-15 01:14:02.190 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:02.190 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:02.190 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:02.190 Setting: 'breakpoints', size: 227
2016-04-15 01:14:02.190 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:02.190 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:02.190 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:02.190 Setting: 'experiments', size: 2
2016-04-15 01:14:02.191 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:02.191 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:03.568 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:03.583 Ten largest settings: 
2016-04-15 01:14:03.675 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:03.675 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:03.675 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:03.675 Setting: 'breakpoints', size: 227
2016-04-15 01:14:03.676 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:03.676 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:03.676 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:03.676 Setting: 'experiments', size: 2
2016-04-15 01:14:03.676 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:03.676 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:04.748 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:04.748 Ten largest settings: 
2016-04-15 01:14:04.836 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:04.836 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:04.836 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:04.836 Setting: 'breakpoints', size: 227
2016-04-15 01:14:04.836 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:04.836 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:04.836 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:04.836 Setting: 'experiments', size: 2
2016-04-15 01:14:04.837 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:04.837 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:10.362 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:10.362 Ten largest settings: 
2016-04-15 01:14:10.450 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:10.451 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:10.451 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:10.451 Setting: 'breakpoints', size: 227
2016-04-15 01:14:10.451 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:10.451 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:10.451 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:10.451 Setting: 'experiments', size: 2
2016-04-15 01:14:10.451 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:10.451 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:11.934 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:11.935 Ten largest settings: 
2016-04-15 01:14:12.012 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:12.012 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:12.012 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:12.012 Setting: 'breakpoints', size: 227
2016-04-15 01:14:12.012 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:12.012 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:12.013 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:12.013 Setting: 'experiments', size: 2
2016-04-15 01:14:12.014 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:12.014 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:13.127 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:13.127 Ten largest settings: 
2016-04-15 01:14:13.213 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:13.213 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:13.213 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:13.214 Setting: 'breakpoints', size: 227
2016-04-15 01:14:13.214 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:13.215 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:13.215 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:13.215 Setting: 'experiments', size: 2
2016-04-15 01:14:13.215 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:13.215 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:14.325 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:14.325 Ten largest settings: 
2016-04-15 01:14:14.425 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:14.426 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:14.426 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:14.426 Setting: 'breakpoints', size: 227
2016-04-15 01:14:14.426 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:14.426 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:14.426 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:14.426 Setting: 'experiments', size: 2
2016-04-15 01:14:14.426 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:14.427 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:15.477 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:15.493 Ten largest settings: 
2016-04-15 01:14:15.575 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:15.576 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:15.578 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:15.578 Setting: 'breakpoints', size: 227
2016-04-15 01:14:15.579 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:15.580 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:15.580 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:15.581 Setting: 'experiments', size: 2
2016-04-15 01:14:15.581 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:15.584 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:16.607 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:16.607 Ten largest settings: 
2016-04-15 01:14:16.697 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:16.698 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:16.698 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:16.698 Setting: 'breakpoints', size: 227
2016-04-15 01:14:16.698 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:16.698 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:16.698 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:16.698 Setting: 'experiments', size: 2
2016-04-15 01:14:16.699 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:16.699 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:21.554 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:21.554 Ten largest settings: 
2016-04-15 01:14:21.653 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:21.653 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:21.653 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:21.653 Setting: 'breakpoints', size: 227
2016-04-15 01:14:21.654 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:21.654 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:21.654 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:21.654 Setting: 'experiments', size: 2
2016-04-15 01:14:21.654 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:21.654 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:22.904 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:22.904 Ten largest settings: 
2016-04-15 01:14:23.003 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:23.003 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:23.003 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:23.003 Setting: 'breakpoints', size: 227
2016-04-15 01:14:23.003 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:23.003 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:23.003 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:23.003 Setting: 'experiments', size: 2
2016-04-15 01:14:23.003 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:23.004 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:25.817 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:25.817 Ten largest settings: 
2016-04-15 01:14:25.916 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:25.916 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:25.916 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:25.916 Setting: 'breakpoints', size: 227
2016-04-15 01:14:25.918 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:25.918 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:25.918 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:25.918 Setting: 'experiments', size: 2
2016-04-15 01:14:25.918 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:25.918 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:26.999 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:26.999 Ten largest settings: 
2016-04-15 01:14:27.097 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:27.097 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:27.097 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:27.097 Setting: 'breakpoints', size: 227
2016-04-15 01:14:27.097 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:27.097 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:27.097 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:27.097 Setting: 'experiments', size: 2
2016-04-15 01:14:27.098 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:27.098 Setting: 'workspaceExcludedFolders', size: 2
2016-04-15 01:14:32.879 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-04-15 01:14:32.895 Ten largest settings: 
2016-04-15 01:14:32.985 Setting: 'consoleHistory', size: 5235397
2016-04-15 01:14:32.985 Setting: 'savedURLs', size: 3698
2016-04-15 01:14:32.986 Setting: 'previouslyViewedFiles', size: 3047
2016-04-15 01:14:32.986 Setting: 'breakpoints', size: 227
2016-04-15 01:14:32.986 Setting: 'eventListenerBreakpoints', size: 220
2016-04-15 01:14:32.986 Setting: 'watchExpressions', size: 45
2016-04-15 01:14:32.986 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-04-15 01:14:32.986 Setting: 'experiments', size: 2
2016-04-15 01:14:32.986 Setting: 'domBreakpoints', size: 2
2016-04-15 01:14:32.986 Setting: 'workspaceExcludedFolders', size: 2
