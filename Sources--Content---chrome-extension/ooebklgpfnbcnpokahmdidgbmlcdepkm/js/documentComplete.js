-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:-
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/documentComplete.js
/* search proctect js */

var GJFW_SearchProtect = {
	QQPcmgrHeadFlag : "g_QQPCMgr",
	DataReport : 
	{
		strSearchUrl : "",
		uiEvilCount : 0,
		uiSearchTime : 0,
		uiSearchEngineType : 0,
		ucSearchKeyShow : 0,
		ucIsShowSEArea : 0
	},
	
	html_url : "",
	objSearchEngine : null,
	gjGuid : "",
	inserted : false,
	
	// common function
	isDefined : function(e)
	{
		if(!e || typeof e == undefined || e == "") return false;
		return true;
	},
	
	isExistGjJs : function()
	{
	   if(document.getElementById(GJFW_SearchProtect.QQPcmgrHeadFlag))
	   {
	        return true;
	   }
	   return false;
	},
	
	getJsVersion : function()
	{
		var cur = new Date();
		var version = (cur.getFullYear() << 16);
		version += (cur.getMonth() << 8);
		version += (cur.getDay());
		return version;
	},
	
	getRandMgrIdString : function()
	{
		var time = new Date().getMilliseconds();
		var Range = 1000 - 1;   
		var Rand = Math.random();   
		var idstr = 1 + Math.round(Rand * Range) + time;   
		
		return idstr + "";
	},
	
	insertHeadGjJs : function()
	{
		document.head || (document.head = document.getElementsByTagName('head')[0]);
		var brElt = document.createElement("br");
		var divQQPCmgrElt = document.createElement("div");
		divQQPCmgrElt.setAttribute("id", GJFW_SearchProtect.QQPcmgrHeadFlag);

		document.head.insertBefore(divQQPCmgrElt, document.head.firstChild);
		document.head.insertBefore(brElt, divQQPCmgrElt);
		return;
	},

	insertHeadScript : function(vertype, clientver) {
		GJFW_SearchProtect.insertHeadGjJs();
		if(vertype != "lenovo")
		{
			var d=document.getElementsByTagName('body')[0];
			var j=document.createElement('script');
			
	        j.setAttribute('src', 'http://pc2.gtimg.com/ap/search.webkit.min.js?'+ GJFW_SearchProtect.getJsVersion());
			j.setAttribute('type', 'text/javascript');
			j.setAttribute('id', 'g_SearchProtect');
			j.setAttribute('gjguid', GJFW_SearchProtect.gjGuid);
			j.setAttribute('ClientVersion', clientver);
			if(!document.getElementById('g_SearchProtect')) d.appendChild(j);
		}
        
		return;
	},
	
	getShengshuElement : function(evil_url)
	{
		var o = document.createElement("span");
		var styleValue ="WIDTH: 38px; DISPLAY: inline-block; FLOAT: left;";
		styleValue += "COLOR: #0000cc; CURSOR: pointer; TEXT-DECORATION: underline;";
		o.setAttribute("style", styleValue);
		o.innerText = "申诉";
		var encode_url = "http://guanjia.qq.com/online_server/complain_url.html?url=";
		encode_url += encodeURIComponent(evil_url);
		encode_url = "mgr_search.jump('"+encode_url+"');";
		o.setAttribute("onclick", encode_url);
		return o;
	},

	getLineElement : function(engineType)
	{
		var o = document.createElement("SPAN");
		var styleValue = "margin:0 0 10px 0;widthl:auto;border-top: 1px solid #FFd8d2;px; display:block;";
		o.setAttribute("style", styleValue);
		var marginBottoms = ["10","6","11","9","9","9","8","10"];
		if(engineType >= 0 && engineType < marginBottoms.length)
		{
			o.style.marginBottom = marginBottoms[engineType] + "px";
		}
		return o;
	},
	
	getShareWbElement : function()
	{
		var o = document.createElement("IMG");
		o.setAttribute("style", "FLOAT: left; CURSOR: pointer");
		o.setAttribute("src", "http://pc2.gtimg.com/baidu/baidu_weibo.jpg");
		o.setAttribute("onclick", "mgr_search.share_wb();");
		
		return o;
	},

	// 
	getShengshuAndWeiboElement : function(evil_url, id_string)
	{
		var o = document.createElement("SPAN");
		var styleValue ="POSITION: absolute; LINE-HEIGHT: 20px; WIDTH: 70px; ZOOM: 1;"
			 +" DISPLAY: none; WHITE-SPACE: nowrap; FLOAT: left; HEIGHT: 18px;"
			 +" MARGIN-LEFT: -79px; FONT-SIZE: 12px; MARGIN-RIGHT: 5px; TOP: 16px; LEFT: 100%;";
		o.setAttribute("style", styleValue);
		o.setAttribute("id", "gj_wb_"+id_string);
		o.appendChild(GJFW_SearchProtect.getShengshuElement(evil_url));
		o.appendChild(GJFW_SearchProtect.getShareWbElement());
		return o;
	},

	isBaiduSearch : function(engineType)
	{
		return 1 == engineType;
	},

	insertDIVHtml : function(alinkelement, evil_url, id, title, wording, engineType)
	{
		if (!alinkelement || title == "" || wording == "" || 0 == engineType) return;
		
		var element_span = document.createElement("span");
		element_span.setAttribute("class", "gjw");		 
		var styleValue = "position: absolute; PADDING-BOTTOM: 3px;PADDING-LEFT: 30px;BACKGROUND-REPEAT: no-repeat;";
		styleValue += "WHITE-SPACE: nowrap; BACKGROUND-POSITION: 0 10px; FLOAT: left; HEIGHT: 30px;COLOR: #f04024;";
		styleValue += "FONT-SIZE: 16px; margin: 0px auto; PADDING-TOP: 3px; TOP: 3px;font-weight: 700;";
		styleValue += "margin-right: 5px; line-height: 35px;left:0px;";
		var urlIcon = "url('http://pc2.gtimg.com/baidu/baidu_2.jpg');";
		styleValue += "background-image: ";
		styleValue += urlIcon;
		element_span.setAttribute("style", styleValue);
		element_span.innerText = title + wording;
		
		var aNodeparent = alinkelement.parentNode;
		aNodeparent.insertBefore(element_span, alinkelement);
		
		var m = GJFW_SearchProtect.getShengshuAndWeiboElement(evil_url, id);
		aNodeparent.insertBefore(m, alinkelement);
		var line = GJFW_SearchProtect.getLineElement(engineType);
		aNodeparent.insertBefore(line, alinkelement);
		
		aNodeparent.style.position = "relative";
		aNodeparent.style.width = "100%";
		aNodeparent.style.display = "block";
		if(GJFW_SearchProtect.isBaiduSearch(engineType))
		{
			aNodeparent.style.padding = "0px 10px 10px 0px";
		}
		else
		{
			aNodeparent.style.padding = "46px 10px 10px 0px";
		}
		aNodeparent.style.paddingTop = "46px";
		 
		return;
	},

	hiddenelement : function(element)
	{
	    if(element !== null)
	    {
	        element.style.display = "none";
	    }
	},

	trim : function(str)
	{
		if(str == null) return "";
	     str = str.replace(/^(\s|\u00A0)+/,'');   
	     for(var i=str.length-1; i>=0; i--){   
	         if(/\S/.test(str.charAt(i))){   
	             str = str.substring(0, i+1);   
	             break;   
	         }   
	     }   
	     return str;   
	},
	
	isSameElement : function(html_element, config_element)
	{
		if(null == html_element || null == config_element) return false;
		
		var isSame = false;
		if(GJFW_SearchProtect.isDefined(config_element.tagname) 
				&& GJFW_SearchProtect.isDefined(html_element.tagName)
				&& config_element.tagname === html_element.tagName)
		{
			isSame = true;
		}
		
		var html_id = html_element.getAttribute("id");
		if(isSame && GJFW_SearchProtect.isDefined(config_element.id))
		{
			isSame = false;
			if(config_element.id == GJFW_SearchProtect.trim(html_id))
			{
				isSame = true;
			}
		}
		
		var html_class = html_element.getAttribute("class");
		if(isSame && GJFW_SearchProtect.isDefined(config_element.class))
		{
			isSame = false;
			if(config_element.class == GJFW_SearchProtect.trim(html_class))
			{
				isSame = true;
			}
		}
		
		return isSame;
	},

	getHTMLELementByLocation : function(start_element, config_element)
	{
	    var loc = null;
		if(config_element !== null)
		{
			loc = config_element.location;
		}
		if(null == loc) return null;
		if(null == start_element) return null;
		var cur = start_element, tmp = null;
		var nsteps = 0;
		var k = 0;
		
		if(GJFW_SearchProtect.isDefined(loc.path) && GJFW_SearchProtect.isDefined(loc.path.length))
		{
			nsteps = loc.path.length;
		}
		
		for(k = 0; k < nsteps; ++k)
		{
			if(loc.path[k].opera == 0)
			{//parent 
				tmp = cur.parentNode;
				cur = tmp;
			}
			else
				break;
		}
		
		//
		if(null !== cur && nsteps - k > 0)
		{//need find child
			for(var c = k; c < nsteps; ++c)
			{
				var nextNode = cur.firstChild;
				while(null !== nextNode)
				{
					if(nextNode.nodeType == 1
					   && GJFW_SearchProtect.isSameElement(nextNode, loc.path[c]))
					{
						cur = nextNode;
						break;
					}
					nextNode = nextNode.nextSibling;
				}
				if(null == nextNode)
				{
					cur = null;
					break;
				}
			}
		}

		if(!GJFW_SearchProtect.isSameElement(cur, config_element)) return null;
		return cur;
	},

	getHTMLELementByID : function(element)
	{
		if(element)
		{
			if(GJFW_SearchProtect.isDefined(element.location))
			{
				var loc = element.location;
				if(1 == loc.isfindbyid)
				{
					var s = document.getElementById(loc.startelement);
					return GJFW_SearchProtect.getHTMLELementByLocation(s, element);
				}	
			}
		}
		return null;
	},

	getHTMLElement : function(start_element, config_element)
	{
		var loc = null;
		if(null !== config_element)
		{
			loc = config_element.location;
		}
		if(null == loc) return null;

		// find by id
		if(1 == loc.isfindbyid)
		{
		   return GJFW_SearchProtect.getHTMLELementByID(config_element);
		}
		
		return GJFW_SearchProtect.getHTMLELementByLocation(start_element, config_element);
	},

	// down.zdnet.com.cn/detail/43/4262 2012-08-16 
	splitUrlFromText : function(innerText)
	{
	    var url = null;
	    if(innerText.indexOf("...") != -1)
	    {
	        return null;
	    }
	    
	    if(innerText.indexOf("http://") == -1)
	    {
	        url = "http://";
	    }    
	                   
	    for(var j = 0; j < innerText.length; ++j)
	    {
	        if(j > 0 && (innerText.charCodeAt(j) == 160 || innerText.charCodeAt(j) == 32
	        		|| innerText[j] == '/'))
	        {
	            break;
	        }
	        url += innerText[j];
	    }
	    return url;
	},

	// 
	getSearchModifyObj : function()
	{
		return _this.objSearchEngine.modifyitempos[0].element;
	},
	
	getSearchKeyInsertObj : function()
	{
		return _this.objSearchEngine.SearchKeyWDArea.insertpos.element;
	},
	
	isEnableSearchKeyArea : function()
	{
		return _this.objSearchEngine.SearchKeyWDArea.enable == 1;
	},
	
	isExistSearchSelfKeyArea : function()
	{
		var eArray = null;
		var sKeyConfig = _this.objSearchEngine.SearchKeyWDArea;
		if(GJFW_SearchProtect.isDefined(sKeyConfig) && GJFW_SearchProtect.isDefined(sKeyConfig.excludeElement))
		{
			eArray = sKeyConfig.excludeElement;
		}
		if(eArray && GJFW_SearchProtect.isDefined(eArray.length))
		{
			for(var i = 0; i < eArray.length; ++i)
			{
				var element = GJFW_SearchProtect.getHTMLElement(null, eArray[i].element);
				if(element != null)
				{
					return true;
				}
			}
		}
		
		return false;
	},
	
	getEnumTagName : function()
	{
		var e = _this.objSearchEngine;
		if(e && GJFW_SearchProtect.isDefined(e.enumrule)
			 && GJFW_SearchProtect.isDefined(e.enumrule.tagname))
		{
			return e.enumrule.tagname;
		}
		return "a";
	},
	
	getInsertDivConfigElement : function()
	{
		var e = _this.objSearchEngine;
		if(e && GJFW_SearchProtect.isDefined(e.insertscriptpos))
		{
			var scripts = e.insertscriptpos;
			for(var i = 0; i < scripts.length; ++i)
			{
				var item = scripts[i];
				// div typt is 3
				if(GJFW_SearchProtect.isDefined(item.type) && 3 == item.type)
				{
					return item.element;
				}
			}
		}
		return null;
	},
	
	isSearchResultListItem : function(aNode)
	{
		var dst = GJFW_SearchProtect.getInsertDivConfigElement();
		if(dst == null || aNode == null || !GJFW_SearchProtect.isDefined(dst.location)) return false;
		
		if(GJFW_SearchProtect.getHTMLElement(aNode, dst) == null) return false;
		return true;
	},
	
	splitUrlFromParam : function(url)
	{
		var engine = _this.objSearchEngine;
		if(url && engine && GJFW_SearchProtect.isDefined(engine.HrefUrlPrefixs))
		{
			var prefs = engine.HrefUrlPrefixs;
			for(var i = 0; i < prefs.length; ++i)
			{
				if(url.indexOf(prefs[i]) == 0)
				{
					var index = url.indexOf("http", 7);
					if(index != -1)
					{
						return url.substr(index);
					}
					else
					{
						return null;
					}
				}
			}
		}	
			
		return url;
	},
	
	getAnalyzeUrl : function(aNode)
	{
		if(aNode == null) return null;
		var url = GJFW_SearchProtect.splitUrlFromParam(aNode.href);
		if(url)
		{
			return url;
		}
		
		// config find url rules.
		var e = _this.objSearchEngine;
		if(e && GJFW_SearchProtect.isDefined(e.findurlrules)
			 && GJFW_SearchProtect.isDefined(e.findurlrules.ruleItem))
		{
			var rules = e.findurlrules.ruleItem;
			for(var i = 0; i < rules.length; ++i)
			{
				var item = rules[i];
				if(!GJFW_SearchProtect.isDefined(item.element)
				   ||!GJFW_SearchProtect.isDefined(item.methord))
				{
					continue;
				}
				var element = GJFW_SearchProtect.getHTMLElement(aNode, item.element);
				if(element == null)
				{
					continue;
				}
				// get url
				if(1 == item.methord)
				{
					url = GJFW_SearchProtect.splitUrlFromText(element.innerText);
				}
				else
				{
					url = splitUrlFromParam(element.href);
				}
				if(url != null)
				{
					break;
				}
			}
		}
		
		return url;
	},
	
	//
    HiddenElement : function(alinkelement)
    {
        if(_this.objSearchEngine.HiddenElement)
        {
            var len = _this.objSearchEngine.HiddenElement.length;
            for(var i = 0; i < len; ++i)
            {
            	var obj = _this.objSearchEngine.HiddenElement[i].element;
                var element = GJFW_SearchProtect.getHTMLElement(alinkelement, obj);
                if(element !== null) GJFW_SearchProtect.hiddenelement(element);
            } 
        
        }
    },
	processQueryResult : function(response)
	{
		var obj_data = JSON.parse(response.json);
		if(typeof(obj_data.id) !== "number" 
            && typeof(obj_data.urltype) !== "number"
            && typeof(obj_data.title) !== "string"
            && typeof(obj_data.wording) !== "string")
		{
	      return ;
		}
	
		if(1 !== obj_data.urltype){
			return ;
		}
		
		_this.DataReport.uiEvilCount++;
		
		var id = obj_data.id;
		var title = obj_data.title;
		var wording = obj_data.wording;
		var evil_url = obj_data.evilurl;
		
		_this.gjGuid = obj_data.gjguid;
		if(!GJFW_SearchProtect.isExistGjJs() && !_this.inserted)
		{
			GJFW_SearchProtect.inserted = true;
			GJFW_SearchProtect.insertHeadScript(obj_data.vertype, obj_data.clientver);
		}
		
		mgr_id = GJFW_SearchProtect.getRandMgrIdString();
		
		var aObj = _this.insertIcons[id];
		var engineType = _this.search_engine_type;
		GJFW_SearchProtect.insertDIVHtml(aObj, evil_url, mgr_id, title, wording, engineType);
			
		GJFW_SearchProtect.HiddenElement(aObj);
        
		
        var modifyObj = GJFW_SearchProtect.getHTMLElement(aObj, GJFW_SearchProtect.getSearchModifyObj());
        if(modifyObj)
        {
        	modifyObj.style.backgroundColor = "#ffE6e6";
        	modifyObj.style.border = "1px solid #FFd8d2";
        	modifyObj.style.display = "block";
        	modifyObj.style.padding = "0 10px 10px 10px";
        	modifyObj.setAttribute("mgr_data", mgr_id); 
            modifyObj.setAttribute("onmouseover", "mgr_search.s(this);"); 
            modifyObj.setAttribute("onmouseout", "mgr_search.h(this);");
        }
	} ,

	QueryUrl : function(url, ref_url, bIframe, id, search_type, isNew) {
		if(url == null) return;
		var query_param = {
			"url" : url,
			"ref_url" : ref_url,
			"iframe" : bIframe,
			"element_id" : id ,
			"searchengine_type" : search_type ,
			"is_new" : isNew
		};
		chrome.extension.sendRequest({cmd : "query_url", json: JSON.stringify(query_param)}, 
            function(response) {
			if (response) {
				GJFW_SearchProtect.processQueryResult(response);
			}
		});
	},
    
	ReportData: function()
    {
        var report_param = _this.DataReport;
        if(_this.DataReport.uiSearchEngineType > 0 && 
           _this.DataReport.strSearchUrl !== "") {
        	chrome.extension.sendRequest({cmd:"report_data", json: JSON.stringify(report_param)},
        			function(response) {});
        }
    },
    
	querySeachKeyContent : function(url)
	{
		var existSkey = GJFW_SearchProtect.isExistSearchSelfKeyArea();
		if(existSkey)
		{
			GJFW_SearchProtect.DataReport.ucIsShowSEArea = 1;
		}
		
		if(GJFW_SearchProtect.getSearchKeyInsertObj() == null || existSkey)
		{
			return ;
		}
		
		var query_content_param = 
		{
			cmd: "get_search_content",
			"url": url
        };
		
        chrome.extension.sendRequest(query_content_param,
            function(response) {
				var searkeyelement = GJFW_SearchProtect.getHTMLElement(null, GJFW_SearchProtect.getSearchKeyInsertObj());
				if(searkeyelement !== null)
				{
					var node = document.createElement("SPAN");
					node.innerHTML = response.content;
					if(searkeyelement.firstChild)
					{
						searkeyelement.insertBefore(node, searkeyelement.firstChild);
					}
					else
					{
						searkeyelement.appendChild(node);
					}
					GJFW_SearchProtect.DataReport.ucSearchKeyShow = 1;
				}
		});
	},
	
    processSearchEngine : function(respond) {
        _this.search_engine_type = respond.engine_type; 
        if(_this.search_engine_type === 0)
        {
            return ;
        }
        
        starttick = new Date().getTime();
		_this.objSearchEngine = JSON.parse(respond.json);
        
		var searKey = _this.objSearchEngine.containertagname;
		// add report data function
		window.onbeforeunload = function ()
        {
            GJFW_SearchProtect.ReportData();
		};
		
		var enumtag = GJFW_SearchProtect.getEnumTagName();
		var search_results = document.getElementById(searKey);
		if(null == search_results)
		{
		  _this.alinks = document.getElementsByTagName(enumtag);
		}
		else 
		{
		  _this.alinks = search_results.getElementsByTagName(enumtag);
        }
		_this.insertIcons = new Array();
		
		_this.DataReport.uiEvilCount = 0;
		_this.DataReport.uiSearchEngineType = _this.search_engine_type;
		_this.DataReport.strSearchUrl = _this.html_url;
        var isNew = 1;	// for data report flag.
		for ( var i = 0; i < _this.alinks.length; ++i) 
		{
			if(GJFW_SearchProtect.isSearchResultListItem(_this.alinks[i]))
			{
				var aNode = _this.alinks[i];
				_this.insertIcons[i] = aNode;
				
				url = GJFW_SearchProtect.getAnalyzeUrl(aNode);
				if(url)
				{
					GJFW_SearchProtect.QueryUrl(url, _this.html_url, 0, i, _this.search_engine_type, isNew);
				}
			}
		}
		if(_this.isEnableSearchKeyArea())
		{
			GJFW_SearchProtect.querySeachKeyContent(_this.html_url);
		}
		
		_this.DataReport.uiSearchTime = (new Date().getTime()) - starttick;	
    },
    GetSearchEngineConfig : function(url) {
		var config_param = {
			"url" : url
		};
		chrome.extension.sendRequest({cmd: "get_search_config", json: JSON.stringify(config_param)}, 
            function(response) {
			if (response) {
				GJFW_SearchProtect.processSearchEngine(response);
			}
		});
	},
	
	// document complete function, for process html dom
	documentComplete : function() {
	   if(GJFW_SearchProtect.isExistGjJs())
	   {
	       return ;
	   }
		_this = this;
		_this.inserted = false;
		_this.html_url = window.location.href;
		_this.html_url.toLowerCase();
	    _this.GetSearchEngineConfig(_this.html_url);
	}
};

GJFW_SearchProtect.documentComplete();

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
2016-03-20 03:28:16.870 c:\Users\Axioo\Favorites\ad.js:697 Uncaught TypeError: Cannot read property 'sendRequest' of undefined
2016-03-20 03:28:44.449 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 03:28:44.487 Ten largest settings: 
2016-03-20 03:28:44.688 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:28:44.688 Setting: 'savedURLs', size: 3698
2016-03-20 03:28:44.688 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:28:44.688 Setting: 'breakpoints', size: 227
2016-03-20 03:28:44.689 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:28:44.689 Setting: 'watchExpressions', size: 45
2016-03-20 03:28:44.689 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:28:44.689 Setting: 'experiments', size: 2
2016-03-20 03:28:44.689 Setting: 'domBreakpoints', size: 2
2016-03-20 03:28:44.689 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:28:59.732 c:\Users\Axioo\Favorites\ad.js:697 Uncaught TypeError: Cannot read property 'sendRequest' of undefinedGJFW_SearchProtect.GetSearchEngineConfig @ c:\Users\Axioo\Favorites\ad.js:697GJFW_SearchProtect.documentComplete @ c:\Users\Axioo\Favorites\ad.js:715(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:719
2016-03-20 03:28:59.896 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-20 03:29:04.612 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 03:29:04.641 Ten largest settings: 
2016-03-20 03:29:04.855 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:04.856 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:04.857 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:04.857 Setting: 'breakpoints', size: 227
2016-03-20 03:29:04.859 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:04.860 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:04.860 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:04.860 Setting: 'experiments', size: 2
2016-03-20 03:29:04.860 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:04.860 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:21.859 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:21.866 Ten largest settings: 
2016-03-20 03:29:22.069 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:22.069 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:22.070 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:22.070 Setting: 'breakpoints', size: 227
2016-03-20 03:29:22.070 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:22.070 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:22.070 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:22.071 Setting: 'experiments', size: 2
2016-03-20 03:29:22.071 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:22.073 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:23.462 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:23.469 Ten largest settings: 
2016-03-20 03:29:23.654 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:23.654 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:23.654 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:23.655 Setting: 'breakpoints', size: 227
2016-03-20 03:29:23.655 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:23.655 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:23.656 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:23.656 Setting: 'experiments', size: 2
2016-03-20 03:29:23.656 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:23.657 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:25.010 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:25.012 Ten largest settings: 
2016-03-20 03:29:25.184 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:25.185 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:25.185 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:25.185 Setting: 'breakpoints', size: 227
2016-03-20 03:29:25.185 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:25.185 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:25.185 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:25.186 Setting: 'experiments', size: 2
2016-03-20 03:29:25.186 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:25.186 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:26.871 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:26.873 Ten largest settings: 
2016-03-20 03:29:27.046 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:27.046 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:27.047 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:27.047 Setting: 'breakpoints', size: 227
2016-03-20 03:29:27.048 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:27.048 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:27.048 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:27.048 Setting: 'experiments', size: 2
2016-03-20 03:29:27.048 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:27.048 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:28.289 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:28.291 Ten largest settings: 
2016-03-20 03:29:28.464 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:28.465 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:28.465 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:28.466 Setting: 'breakpoints', size: 227
2016-03-20 03:29:28.467 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:28.467 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:28.467 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:28.467 Setting: 'experiments', size: 2
2016-03-20 03:29:28.467 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:28.468 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:29.966 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:29.968 Ten largest settings: 
2016-03-20 03:29:30.142 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:30.143 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:30.143 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:30.143 Setting: 'breakpoints', size: 227
2016-03-20 03:29:30.143 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:30.143 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:30.143 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:30.144 Setting: 'experiments', size: 2
2016-03-20 03:29:30.144 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:30.144 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:37.236 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:37.237 Ten largest settings: 
2016-03-20 03:29:37.416 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:37.417 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:37.417 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:37.417 Setting: 'breakpoints', size: 227
2016-03-20 03:29:37.417 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:37.417 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:37.417 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:37.418 Setting: 'experiments', size: 2
2016-03-20 03:29:37.418 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:37.418 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:38.692 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:38.699 Ten largest settings: 
2016-03-20 03:29:38.878 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:38.878 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:38.878 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:38.878 Setting: 'breakpoints', size: 227
2016-03-20 03:29:38.879 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:38.881 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:38.881 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:38.883 Setting: 'experiments', size: 2
2016-03-20 03:29:38.884 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:38.884 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:39.962 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:39.963 Ten largest settings: 
2016-03-20 03:29:40.140 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:40.140 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:40.140 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:40.141 Setting: 'breakpoints', size: 227
2016-03-20 03:29:40.141 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:40.143 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:40.145 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:40.146 Setting: 'experiments', size: 2
2016-03-20 03:29:40.147 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:40.150 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:41.305 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:41.307 Ten largest settings: 
2016-03-20 03:29:41.484 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:41.484 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:41.484 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:41.484 Setting: 'breakpoints', size: 227
2016-03-20 03:29:41.485 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:41.485 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:41.485 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:41.485 Setting: 'experiments', size: 2
2016-03-20 03:29:41.489 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:41.489 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:42.622 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:42.624 Ten largest settings: 
2016-03-20 03:29:42.797 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:42.797 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:42.797 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:42.798 Setting: 'breakpoints', size: 227
2016-03-20 03:29:42.798 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:42.798 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:42.798 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:42.798 Setting: 'experiments', size: 2
2016-03-20 03:29:42.799 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:42.800 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:44.041 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:44.044 Ten largest settings: 
2016-03-20 03:29:44.215 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:44.216 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:44.216 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:44.216 Setting: 'breakpoints', size: 227
2016-03-20 03:29:44.216 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:44.216 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:44.216 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:44.216 Setting: 'experiments', size: 2
2016-03-20 03:29:44.217 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:44.217 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:52.316 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:52.317 Ten largest settings: 
2016-03-20 03:29:52.497 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:52.497 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:52.498 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:52.498 Setting: 'breakpoints', size: 227
2016-03-20 03:29:52.499 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:52.499 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:52.500 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:52.500 Setting: 'experiments', size: 2
2016-03-20 03:29:52.500 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:52.500 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:53.904 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:53.906 Ten largest settings: 
2016-03-20 03:29:54.076 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:54.077 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:54.077 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:54.077 Setting: 'breakpoints', size: 227
2016-03-20 03:29:54.077 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:54.077 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:54.077 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:54.078 Setting: 'experiments', size: 2
2016-03-20 03:29:54.078 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:54.078 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:55.284 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:55.288 Ten largest settings: 
2016-03-20 03:29:55.463 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:55.463 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:55.463 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:55.464 Setting: 'breakpoints', size: 227
2016-03-20 03:29:55.464 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:55.464 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:55.464 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:55.464 Setting: 'experiments', size: 2
2016-03-20 03:29:55.464 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:55.465 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:56.683 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:56.684 Ten largest settings: 
2016-03-20 03:29:56.858 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:56.858 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:56.858 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:56.859 Setting: 'breakpoints', size: 227
2016-03-20 03:29:56.859 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:56.859 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:56.860 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:56.860 Setting: 'experiments', size: 2
2016-03-20 03:29:56.860 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:56.860 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:29:58.483 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:29:58.486 Ten largest settings: 
2016-03-20 03:29:58.661 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:29:58.661 Setting: 'savedURLs', size: 3698
2016-03-20 03:29:58.662 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:29:58.662 Setting: 'breakpoints', size: 227
2016-03-20 03:29:58.662 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:29:58.663 Setting: 'watchExpressions', size: 45
2016-03-20 03:29:58.664 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:29:58.664 Setting: 'experiments', size: 2
2016-03-20 03:29:58.664 Setting: 'domBreakpoints', size: 2
2016-03-20 03:29:58.664 Setting: 'workspaceExcludedFolders', size: 2

