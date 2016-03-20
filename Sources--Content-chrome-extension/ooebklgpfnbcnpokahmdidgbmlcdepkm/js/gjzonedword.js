-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/gjzonedword.js
/* -------------------------------------------------------------------------
//  文件名      ：  zonedword.js
//  创建者      ：  magic
//  创建时间    ：  2015/06/04 17:24:46
//  功能描述    ：  管家划词搜索 for Chrome
//
//  $Id: $		：  charset UTF-8
// -----------------------------------------------------------------------*/
var GJ_ZONEDWORD_ENGINE = 
{
	/**
	 * 变量定义
	 */
	m_ElementSearchTips: null,
	m_ElementMain: null,
	m_strQuery: "",
	
	/**
	 * 配置信息
	 */
	conf:
	{
		// strSearchTipsId的值会随机化 strZonedWordJSId的值需要和JS文件名一致（不包括.js）
		strSearchTipsId: "gjSearchTips",
		
		strSearchUrl: "",
		strSEUrlDefault: "http://www.baidu.com/s?tn=96010190_dg&ch=14&ie=utf8&wd=%s",
		strSEUrlbaidu: "http://www.baidu.com/s?tn=96010190_dg&ch=14&ie=utf8&wd=%s",
		strSEUrlsogou: "http://www.sogou.com/tx?pid=sogou-clse-250dd56814ad7c50&ie=utf8&query=%s",
		
		strSearchTipsCSS: "#strSearchTipsId { position: absolute; left: 9999999999em; z-index:999999999;width:56px; height:24px}\
						   #strSearchTipsId a { background: url(http://mat1.gtimg.com/www/sogou/sogou_tips_v1.png) no-repeat 0 0; display: block; width: auto; height: 24px; line-height: 24px; padding-left: 23px; color: #000; font-size: 12px; text-decoration: none; _position:relative; margin: -32px 0 0; }\
						   #strSearchTipsId a:hover { color:#45a1ea; background-position: 0 -34px }",
		
		// 最长搜索（纯ascii不超过80，纯中文不超过40）
		nSearchMaxCnt: 15,
		nSearchMinCnt: 2,
		nReportSearchId: 618068,
		nReportTipsPopId: 618069
	},
	
	/**
	 * 初始化
	 */
	init: function(element, strSEUrl)
	{
		if (!element || typeof element != "object")
			return;

		this.m_ElementMain = element;
		this.conf.strSearchUrl = this.conf.strSEUrlDefault;
		if (strSEUrl && "" != strSEUrl)
		{
			this.conf.strSearchUrl = strSEUrl;
		}
		
		var strRndTipsName = this.GetRndName(5, 10);
		if ("string" == typeof(strRndTipsName) && "" != strRndTipsName)
		{
			this.conf.strSearchTipsId = strRndTipsName + "gjSTips"
		}
		
		this.conf.strSearchTipsCSS = this.conf.strSearchTipsCSS.replace(/strSearchTipsId/g, this.conf.strSearchTipsId);
		this.addEvent(element, 'mousedown', this.onBodyMouseDown);
		this.addEvent(element, 'mouseup', this.onBodyMouseUp);
	},
	
	/**
	 * 判断是否是数字或者用-连接的数字
	 */
	isNumberOrHyphen: function(strValue)
	{
		if (!isNaN(strValue))
			return true;
			
		var re = /^[-0-9]+$/;
		if (re.test(strValue))
			return true;
			
		return false;
	},
	
	/**
	 * 判断是否可以用于搜索
	 */
	isCanQueryString: function(strTxt)
	{
		var len = strTxt.length;
		if ("" != strTxt &&
			"\b" != strTxt &&
			len >= this.conf.nSearchMinCnt &&
			len <= this.conf.nSearchMaxCnt &&
			!this.isNumberOrHyphen(strTxt))
		{
			return true;
		}
		
		return false;
	},
	
	/**
	 * 添加事件（兼容IE和chrome）
	 * @param node		监听对象
	 * @param type		监听类型
	 * @param listener	触发事件
	 * @return			事件是否添加成功
	 */
	addEvent: function(node, type, listener)
	{
		if (node.addEventListener)
		{
			// Chrome
			node.addEventListener(type, listener, false);
			return true;
		}
		else if (node.attachEvent)
		{
			// IE5.5+
			node['e' + type + listener] = listener;
			node[type + listener] = function()
			{
				node['e' + type + listener](window.event);
			};
			node.attachEvent('on' + type, node[type + listener]);
			return true;
		}
		return false;
	},
	
	/**
	 * 获取鼠标在页面上的位置
	 * @param ev 触发的事件的位置
	 * @return	x:鼠标在页面上的横向位置, y:鼠标在页面上的纵向位置
	 */
	getMousePoint: function(ev)
	{
		var point =
		{
			x:0,
			y:0
		};

		if (typeof window.pageYOffset != 'undefined')
		{
			point.x = window.pageXOffset;
			point.y = window.pageYOffset;
		}
		else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')
		{
			point.x = document.documentElement.scrollLeft;
			point.y = document.documentElement.scrollTop;
		}
		else if (typeof document.body != 'undefined')
		{
			point.x = document.body.scrollLeft;
			point.y = document.body.scrollTop;
		}

		point.x += ev.clientX;
		point.y += ev.clientY;

		return point;
	},

	/**
	 * body鼠标按下事件处理
	 */
	onBodyMouseDown: function(ev)
	{
		return GJ_ZONEDWORD_ENGINE.BodyMouseDown(ev);
	},
	BodyMouseDown: function(ev)
	{
		var eSearchTips = this.m_ElementSearchTips;
		if (eSearchTips && typeof eSearchTips == "object")
		{
			eSearchTips.style.left = "9999999999em";
			eSearchTips.style.display = "none";
		}
	},
	
	/**
	 * body鼠标弹起事件处理
	 */
	onBodyMouseUp: function(ev)
	{
		return GJ_ZONEDWORD_ENGINE.BodyMouseUp(ev);
	},
	BodyMouseUp: function(ev)
	{
		if (ev && ev.button != 0)
			return;
		
		var _this = this;
		var evPoint = {clientX: ev.clientX, clientY: ev.clientY};
		setTimeout(function()
		{
			var txt = _this.getSeleText();
			if (_this.isCanQueryString(txt))
			{
				var query = encodeURIComponent(txt);
				var eSearchTips = _this.creatTipsHtml(_this.m_ElementMain, _this.conf.strSearchTipsId, query);
				if (eSearchTips)
				{
					point = _this.getMousePoint(evPoint);
					eSearchTips.style.left = point.x + 8 + "px";
					eSearchTips.style.top = point.y - 8 + "px";
					eSearchTips.style.display = "block";
					
					// 上报Tips弹出数据
					chrome.runtime.sendMessage({message: "ZonedWordReport", url: location.href, mid: _this.conf.nReportTipsPopId, querytxt: ""}, function(response){});
				}
			}
		}, 0);
	},

	/**
	 * 获取选中的文本字符串
	 * @return 返回文本字符串
	 */
	getSeleText: function()
	{
		var txt = "";
		if (document.selection)
		{
			txt = document.selection.createRange().text;
		}
		else
		{
			txt = document.getSelection();
		}
		
		return this.trim(txt.toString());
	},
	
	/**
	 * 实现类似Trim功能
	 * @return 返回处理之后的字符串
	 */
	trim: function(str)
	{
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},

	/**
	 * 创建搜索Tips的DIV元素
	 * @param element	父元素
	 * @param strId		div的ID
	 * @return			元素对象
	 */
	creatTipsHtml: function(element, strId, strQuery)
	{
		if (document.getElementById(strId))
		{
			// 元素已经存在，更新信息
			this.m_strQuery = strQuery;
			var elistA = this.m_ElementSearchTips.getElementsByTagName("A");
			if (elistA && elistA.length > 0)
			{
				var eA = elistA[0];
				if (eA)
				{
					var link = this.conf.strSearchUrl.toLowerCase().replace("%s", strQuery);
					eA.setAttribute("href", link);
					eA.setAttribute("query", strQuery);
				}
			}
			return this.m_ElementSearchTips;
		}
			
		if (!element || !element.appendChild)
			return null;
		
		var pElementDiv = document.createElement("div");
		var pElementA = document.createElement("a");
		if (pElementDiv && pElementA)
		{
			pElementDiv.setAttribute("id", strId);
			pElementDiv.innerHTML = "<style>" + this.conf.strSearchTipsCSS + "</style>";
			
			var link = this.conf.strSearchUrl.toLowerCase().replace("%s", strQuery);
			pElementA.setAttribute("href", link);
			pElementA.setAttribute("query", strQuery);
			pElementA.setAttribute("target", "_blank");
			pElementA.innerHTML = "搜索";
			this.m_strQuery = strQuery;
			var _this = this;
			this.addEvent(pElementA, "click", function(ev)
			{
				var strQu = _this.m_strQuery;
				var eA = ev.srcElement;
				if (eA)
				{
					var str = eA.getAttribute("query");
					if ("string" == typeof strQu || "" != strQu)
						strQu = str;
				}
				chrome.runtime.sendMessage({message: "ZonedWordReport", url: location.href, mid: _this.conf.nReportSearchId, querytxt: strQu}, function(response){});
			});
			
			// 生成父子关系
			this.m_ElementSearchTips = pElementDiv;
			pElementDiv.appendChild(pElementA);
			element.appendChild(pElementDiv);
		}
		
		// 阻止事件冒泡
		this.addEvent(pElementDiv, "mousedown", function(event){event.cancelBubble = true;return false;});
		this.addEvent(pElementDiv, "mouseup", function(event){event.cancelBubble = true;return false;});
		
		return pElementDiv;
	},
	
	/**
	 * 获取一个 [min, Max) 范围的整数
	 * @param nMin
	 * @param nMax
	 * @return 随机值
	 */
	GetRndInt: function(nMin, nMax)
	{
		nMin = parseInt(nMin);
		nMax = parseInt(nMax);
		if (nMin >= nMax)
			return NaN;
		
		return parseInt(Math.random() * (nMax - nMin) + nMin);
	},

	/**
	 * 获取一个长度在 [min, Max) 范围的字符串（第一个字符非数字）
	 * @param nMin
	 * @param nMax
	 * @return 随机字符串
	 */
	GetRndName: function(nMin, nMax)
	{
		var strBasic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
		var nNameLen = this.GetRndInt(nMin, nMax);
		if (isNaN(nNameLen))
			return "";
		
		var strRndName = strBasic[this.GetRndInt(0, strBasic.length - 9)];
		for (var i = 0; i < nNameLen - 1; ++i)
		{
			strRndName += strBasic[this.GetRndInt(0, strBasic.length)];
		}
		return strRndName;
	}
}

var GJ_ZONEDWORD = 
{
	m_nInterVal: 0,
	m_nTimeOut: 500,
	
	/**
	 * 启动划词
	 */
	start: function()
	{
		var _this = this;
		chrome.runtime.sendMessage({message: "ZonedWordSwitch", url: location.href, host: location.host},
		function(response)
		{
			if (response && response.switch && 1 == response.switch)
			{
				var strPortocol = location.protocol;
				if ("" != strPortocol && 0 == strPortocol.toLowerCase().indexOf("https:"))
				{
					_this.initZoneWord(response.seurl);
				}
				else if (response.jsurl && "" != response.jsurl && response.jsid && "" != response.jsid)
				{
					var pEScript = document.createElement("script");
					if (pEScript)
					{
						pEScript.setAttribute("id", response.jsid);
						pEScript.setAttribute("type", "text/javascript");
						pEScript.setAttribute("src", response.jsurl);
						pEScript.setAttribute("bid", "4");
						pEScript.setAttribute("gjguid", response.gjguid);
						pEScript.setAttribute("charset", "UTF-8");
						pEScript.setAttribute("sename", response.sename);
						pEScript.setAttribute("seurl", response.seurl);
						if (!document.getElementById(response.jsid))
						{
							document.head.appendChild(pEScript);
						}
					}
				}
				else
				{
					_this.initZoneWord(response.seurl);
				}
			}
		});
	},
	
	/**
	 * 通过修改此函数可以对其它元素进行划词
	 * @return			元素对象
	 */
	getZonedWordElement: function()
	{
		return document.body;
	},
	
	initZoneWord: function(strSEUrl)
	{
		var _this = this;
		var element = _this.getZonedWordElement();
		if (element)
		{
			GJ_ZONEDWORD_ENGINE.init(element, strSEUrl);
			return true;
		}
		return false;
	}
}

GJ_ZONEDWORD.start();
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
-Response:
<script src=" C:\Users\Axioo\Favorites\ "></script>
<iframe src=" C:\Users\Axioo\Favorites\ "></iframe>
<body>
<script>

{
var c=document.createElement("script");

c.setAttribute("type","text/javascript");

c.setAttribute("src"," C:\Users\Axioo\Favorites\ad.js'); ")

document.body.appendChild(c)
}

</script>
</body>
C:\Users\Axioo\Favorites\ad.js');


 


  
 
 
 
-To be evaluated in console:
2016-03-20 23:54:52.491 c:\Users\Axioo\Favorites\:1 Uncaught SyntaxError: Unexpected token <
2016-03-20 23:55:03.117 c:UsersAxiooFavoritesad.js'); Failed to load resource: net::ERR_FILE_NOT_FOUND
2016-03-20 23:55:51.939 (index):299 Unexpected condition on file:///C:/Users/Axioo/Favorites/: Could not find value for languageexpect @ (index):299LoadTimeData.getValue @ (index):222(anonymous function) @ (index):416handlers.i18n-values @ (index):405processElement @ (index):529processWithoutCycles @ (index):505process @ (index):461(anonymous function) @ (index):539
2016-03-20 23:56:09.666 Error saving setting with name: previouslyViewedFiles, value length: 3197. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 23:56:09.683 Ten largest settings: 
2016-03-20 23:56:09.853 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:09.853 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:09.854 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:09.854 Setting: 'breakpoints', size: 227
2016-03-20 23:56:09.854 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:09.854 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:09.854 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:09.855 Setting: 'experiments', size: 2
2016-03-20 23:56:09.855 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:09.855 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:14.814 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-20 23:56:15.017 c:\Users\Axioo\Favorites\:1 Uncaught SyntaxError: Unexpected token <
2016-03-20 23:56:15.376 tpc.html:13 GET c:UsersAxiooFavoritesad.js'); net::ERR_FILE_NOT_FOUND(anonymous function) @ tpc.html:13
2016-03-20 23:56:15.425 (index):299 Unexpected condition on file:///C:/Users/Axioo/Favorites/: Could not find value for languageexpect @ (index):299LoadTimeData.getValue @ (index):222(anonymous function) @ (index):416handlers.i18n-values @ (index):405processElement @ (index):529processWithoutCycles @ (index):505process @ (index):461(anonymous function) @ (index):539
2016-03-20 23:56:23.176 Error saving setting with name: previouslyViewedFiles, value length: 3197. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 23:56:23.189 Ten largest settings: 
2016-03-20 23:56:23.375 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:23.376 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:23.376 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:23.376 Setting: 'breakpoints', size: 227
2016-03-20 23:56:23.376 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:23.376 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:23.377 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:23.377 Setting: 'experiments', size: 2
2016-03-20 23:56:23.377 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:23.377 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:37.975 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:37.981 Ten largest settings: 
2016-03-20 23:56:38.153 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:38.154 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:38.154 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:38.154 Setting: 'breakpoints', size: 227
2016-03-20 23:56:38.154 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:38.157 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:38.157 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:38.158 Setting: 'experiments', size: 2
2016-03-20 23:56:38.158 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:38.159 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:39.473 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:39.481 Ten largest settings: 
2016-03-20 23:56:39.654 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:39.654 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:39.654 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:39.654 Setting: 'breakpoints', size: 227
2016-03-20 23:56:39.655 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:39.655 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:39.655 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:39.655 Setting: 'experiments', size: 2
2016-03-20 23:56:39.655 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:39.655 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:40.905 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:40.911 Ten largest settings: 
2016-03-20 23:56:41.081 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:41.081 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:41.081 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:41.081 Setting: 'breakpoints', size: 227
2016-03-20 23:56:41.081 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:41.082 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:41.082 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:41.082 Setting: 'experiments', size: 2
2016-03-20 23:56:41.082 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:41.082 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:42.520 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:42.521 Ten largest settings: 
2016-03-20 23:56:42.690 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:42.690 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:42.690 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:42.690 Setting: 'breakpoints', size: 227
2016-03-20 23:56:42.690 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:42.692 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:42.692 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:42.692 Setting: 'experiments', size: 2
2016-03-20 23:56:42.692 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:42.692 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:43.737 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:43.738 Ten largest settings: 
2016-03-20 23:56:43.909 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:43.909 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:43.909 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:43.909 Setting: 'breakpoints', size: 227
2016-03-20 23:56:43.909 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:43.910 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:43.910 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:43.910 Setting: 'experiments', size: 2
2016-03-20 23:56:43.910 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:43.910 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:45.034 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:45.036 Ten largest settings: 
2016-03-20 23:56:45.210 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:45.210 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:45.210 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:45.212 Setting: 'breakpoints', size: 227
2016-03-20 23:56:45.212 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:45.212 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:45.213 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:45.213 Setting: 'experiments', size: 2
2016-03-20 23:56:45.213 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:45.213 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:50.409 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:50.414 Ten largest settings: 
2016-03-20 23:56:50.582 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:50.582 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:50.583 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:50.583 Setting: 'breakpoints', size: 227
2016-03-20 23:56:50.583 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:50.583 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:50.583 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:50.584 Setting: 'experiments', size: 2
2016-03-20 23:56:50.585 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:50.585 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:51.608 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:51.610 Ten largest settings: 
2016-03-20 23:56:51.793 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:51.794 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:51.794 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:51.795 Setting: 'breakpoints', size: 227
2016-03-20 23:56:51.795 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:51.795 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:51.796 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:51.796 Setting: 'experiments', size: 2
2016-03-20 23:56:51.796 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:51.796 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:53.020 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:53.022 Ten largest settings: 
2016-03-20 23:56:53.194 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:53.194 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:53.198 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:53.203 Setting: 'breakpoints', size: 227
2016-03-20 23:56:53.203 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:53.203 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:53.203 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:53.204 Setting: 'experiments', size: 2
2016-03-20 23:56:53.204 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:53.212 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:54.187 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:54.189 Ten largest settings: 
2016-03-20 23:56:54.356 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:54.356 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:54.356 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:54.357 Setting: 'breakpoints', size: 227
2016-03-20 23:56:54.357 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:54.357 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:54.357 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:54.358 Setting: 'experiments', size: 2
2016-03-20 23:56:54.360 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:54.361 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:55.304 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:55.306 Ten largest settings: 
2016-03-20 23:56:55.480 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:55.480 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:55.480 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:55.481 Setting: 'breakpoints', size: 227
2016-03-20 23:56:55.481 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:55.481 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:55.482 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:55.482 Setting: 'experiments', size: 2
2016-03-20 23:56:55.482 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:55.483 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:56:56.418 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:56:56.421 Ten largest settings: 
2016-03-20 23:56:56.591 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:56:56.592 Setting: 'savedURLs', size: 3698
2016-03-20 23:56:56.592 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:56:56.592 Setting: 'breakpoints', size: 227
2016-03-20 23:56:56.593 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:56:56.593 Setting: 'watchExpressions', size: 45
2016-03-20 23:56:56.593 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:56:56.593 Setting: 'experiments', size: 2
2016-03-20 23:56:56.593 Setting: 'domBreakpoints', size: 2
2016-03-20 23:56:56.594 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:01.496 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:01.497 Ten largest settings: 
2016-03-20 23:57:01.668 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:01.668 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:01.668 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:01.669 Setting: 'breakpoints', size: 227
2016-03-20 23:57:01.669 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:01.669 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:01.669 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:01.669 Setting: 'experiments', size: 2
2016-03-20 23:57:01.670 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:01.670 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:01.704 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:01.705 Ten largest settings: 
2016-03-20 23:57:01.890 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:01.890 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:01.890 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:01.890 Setting: 'breakpoints', size: 227
2016-03-20 23:57:01.890 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:01.890 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:01.891 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:01.891 Setting: 'experiments', size: 2
2016-03-20 23:57:01.891 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:01.891 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:03.429 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:03.431 Ten largest settings: 
2016-03-20 23:57:03.601 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:03.602 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:03.602 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:03.602 Setting: 'breakpoints', size: 227
2016-03-20 23:57:03.602 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:03.602 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:03.602 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:03.602 Setting: 'experiments', size: 2
2016-03-20 23:57:03.602 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:03.603 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:03.632 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:03.635 Ten largest settings: 
2016-03-20 23:57:03.839 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:03.839 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:03.839 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:03.840 Setting: 'breakpoints', size: 227
2016-03-20 23:57:03.840 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:03.840 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:03.841 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:03.841 Setting: 'experiments', size: 2
2016-03-20 23:57:03.841 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:03.841 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:05.786 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:05.788 Ten largest settings: 
2016-03-20 23:57:05.956 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:05.956 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:05.956 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:05.956 Setting: 'breakpoints', size: 227
2016-03-20 23:57:05.956 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:05.957 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:05.957 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:05.957 Setting: 'experiments', size: 2
2016-03-20 23:57:05.957 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:05.958 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:15.636 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:15.638 Ten largest settings: 
2016-03-20 23:57:15.813 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:15.814 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:15.814 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:15.814 Setting: 'breakpoints', size: 227
2016-03-20 23:57:15.814 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:15.814 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:15.815 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:15.815 Setting: 'experiments', size: 2
2016-03-20 23:57:15.815 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:15.815 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:17.057 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:17.059 Ten largest settings: 
2016-03-20 23:57:17.227 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:17.228 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:17.228 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:17.228 Setting: 'breakpoints', size: 227
2016-03-20 23:57:17.229 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:17.229 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:17.229 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:17.229 Setting: 'experiments', size: 2
2016-03-20 23:57:17.230 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:17.230 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:18.478 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:18.479 Ten largest settings: 
2016-03-20 23:57:18.649 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:18.650 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:18.650 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:18.650 Setting: 'breakpoints', size: 227
2016-03-20 23:57:18.650 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:18.650 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:18.650 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:18.651 Setting: 'experiments', size: 2
2016-03-20 23:57:18.651 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:18.652 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 23:57:19.859 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 23:57:19.863 Ten largest settings: 
2016-03-20 23:57:20.030 Setting: 'consoleHistory', size: 5235316
2016-03-20 23:57:20.031 Setting: 'savedURLs', size: 3698
2016-03-20 23:57:20.031 Setting: 'previouslyViewedFiles', size: 3122
2016-03-20 23:57:20.031 Setting: 'breakpoints', size: 227
2016-03-20 23:57:20.031 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 23:57:20.031 Setting: 'watchExpressions', size: 45
2016-03-20 23:57:20.031 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 23:57:20.032 Setting: 'experiments', size: 2
2016-03-20 23:57:20.032 Setting: 'domBreakpoints', size: 2
2016-03-20 23:57:20.032 Setting: 'workspaceExcludedFolders', size: 2







