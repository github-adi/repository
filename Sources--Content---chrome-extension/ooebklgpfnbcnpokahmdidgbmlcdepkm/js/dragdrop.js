-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:-
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/dragdrop.js
/* -------------------------------------------------------------------------
//  文件名      ：  superdragdrop.js
//  创建者      ：  magic
//  创建时间    ：  2015/5/27 17:24:46
//  功能描述    ：  chrome拖放搜索
//
//  $Id: $		：  charset UTF-8
// -----------------------------------------------------------------------*/
var GJ_SUPER_DRAGDROP = 
{
    m_in_drag: false,
    m_drag_selection: {type: "text", data: ""},
    m_start_x: -1,
    m_start_y: -1,
	
    /**
	 * 校验text是否是一个超链接（URL）
	 * @param text
	 * @return 如果是超链接返回该链接，否则返回空字符串
	 */
    getTextLink: function(text)
	{
        var re = /((http|ftp|https):\/\/|www\.)[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#\*!]*[\w\-\.,@?^=%&:\/~\+#\*!])?/;
        var link = "";
        var matches = text.match(re);
        if (matches)
		{
            link = matches[0];
			if (0 == link.indexOf("www."))
				link = "http://" + link;
        }
        return link;
    },
	
	isNotDropElement: function(element)
	{
		if (element && element.tagName && element.getAttribute)
		{
			if (("INPUT" == element.tagName && ("text" == element.getAttribute("type") || (element.type && "text" == element.type))) || ("TEXTAREA" == element.tagName)) 
				return true;
		}
		return false;
	},

    dragStart: function(e)
	{
        this.m_in_drag = true;
        this.m_start_x = e.clientX;
        this.m_start_y = e.clientY;
		return true;
    },

    dragOver: function(e)
	{
        if (!this.m_in_drag)
		{
            return true;
        }
		
		if (this.isNotDropElement(e.srcElement))
		{
			return true;
		}
		
        if (e.preventDefault)
		{
			// 阻止默认行为
            e.preventDefault();
        }
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.dropEffect = "copy";
        return true;
    },

    drop: function(e)
	{
        if (!this.m_in_drag)
		{
            return true;
        }
		
		if (this.isNotDropElement(e.srcElement))
		{
			return true;
		}
		
        this.m_in_drag = false;
        var x_dir = 1;
        if (e.preventDefault)
		{
            e.preventDefault();
        }
        if (e.clientX < this.m_start_x)
		{
            x_dir = -1;
        }
        var y_dir = 1;
        if (e.clientY < this.m_start_y)
		{
            y_dir = -1;
        }
        this.m_start_x = -1;
        this.m_start_y = -1;
		
		// 获取拖放的内容
		var type = "link";
		var data = e.dataTransfer.getData("URL");
		if (!data)
		{
			// 拖拽的是一段文本
			type = "text";
			data = e.dataTransfer.getData("Text");
			
			var link = this.getTextLink(data);
            if (link != "")
			{
				// 拖拽的是一个URL
                type = "link";
                data = link;
            }
		}
		
        if (data)
		{
			this.m_drag_selection.type = type;
			this.m_drag_selection.data = data;
			chrome.runtime.sendMessage(
			{
                message: "DragDropEvent",
                selection: this.m_drag_selection,
                x_dir: x_dir,
                y_dir: y_dir,
				url: location.href
            },function(response){});
            return true;
        }
        return true;
    },

    dragEnd: function(e)
	{
        this.m_in_drag = false;
    },
	
	/**
	 * 拖放事件响应函数
	 * @param e
	 * @return
	 */
	onDragStart: function(e)
	{
		return GJ_SUPER_DRAGDROP.dragStart(e);
	},

	onDragOver: function(e)
	{
		return GJ_SUPER_DRAGDROP.dragOver(e);
	},

	onDragEnd: function(e)
	{
		return GJ_SUPER_DRAGDROP.dragEnd(e);
	},

	onDrop: function(e)
	{
		return GJ_SUPER_DRAGDROP.drop(e);
	},
	
	/**
	 * 启动监听
	 */
	start: function()
	{
		var _this = this;
		chrome.runtime.sendMessage({message: "DragDropSwitch", url: location.href},
		function(response)
		{
			if (response && response.switch && 1 == response.switch)
			{
				// 监听拖放事件
				document.addEventListener("dragstart", _this.onDragStart, false);
				document.addEventListener("dragover", _this.onDragOver, false);
				document.addEventListener("drop", _this.onDrop, false);
				document.addEventListener("dragend", _this.onDragEnd, false);
			}
		});
	}
};

GJ_SUPER_DRAGDROP.start();
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
2016-03-20 03:38:26.862 extensions::runtime:142 Uncaught Error: Invalid arguments to connect.
2016-03-20 03:38:42.546 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 03:38:42.586 Ten largest settings: 
2016-03-20 03:38:42.805 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:38:42.806 Setting: 'savedURLs', size: 3698
2016-03-20 03:38:42.806 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:38:42.806 Setting: 'breakpoints', size: 227
2016-03-20 03:38:42.806 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:38:42.806 Setting: 'watchExpressions', size: 45
2016-03-20 03:38:42.807 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:38:42.807 Setting: 'experiments', size: 2
2016-03-20 03:38:42.807 Setting: 'domBreakpoints', size: 2
2016-03-20 03:38:42.807 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:38:52.938 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-20 03:38:53.004 extensions::runtime:142 Uncaught Error: Invalid arguments to connect.(anonymous function) @ extensions::runtime:142target.(anonymous function) @ extensions::SafeBuiltins:19(anonymous function) @ extensions::binding:372(anonymous function) @ extensions::runtime:114target.(anonymous function) @ extensions::SafeBuiltins:19(anonymous function) @ extensions::binding:57target.(anonymous function) @ extensions::SafeBuiltins:19(anonymous function) @ extensions::binding:385GJ_SUPER_DRAGDROP.start @ c:\Users\Axioo\Favorites\ad.js:176(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:191
2016-03-20 03:38:56.994 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 03:38:56.996 Ten largest settings: 
2016-03-20 03:38:57.209 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:38:57.210 Setting: 'savedURLs', size: 3698
2016-03-20 03:38:57.210 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:38:57.210 Setting: 'breakpoints', size: 227
2016-03-20 03:38:57.210 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:38:57.211 Setting: 'watchExpressions', size: 45
2016-03-20 03:38:57.212 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:38:57.212 Setting: 'experiments', size: 2
2016-03-20 03:38:57.213 Setting: 'domBreakpoints', size: 2
2016-03-20 03:38:57.213 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:16.059 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:16.062 Ten largest settings: 
2016-03-20 03:39:16.239 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:16.239 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:16.239 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:16.239 Setting: 'breakpoints', size: 227
2016-03-20 03:39:16.239 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:16.240 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:16.240 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:16.240 Setting: 'experiments', size: 2
2016-03-20 03:39:16.240 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:16.242 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:17.754 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:17.761 Ten largest settings: 
2016-03-20 03:39:17.937 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:17.937 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:17.937 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:17.937 Setting: 'breakpoints', size: 227
2016-03-20 03:39:17.938 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:17.938 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:17.938 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:17.938 Setting: 'experiments', size: 2
2016-03-20 03:39:17.938 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:17.938 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:19.273 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:19.276 Ten largest settings: 
2016-03-20 03:39:19.452 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:19.452 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:19.453 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:19.453 Setting: 'breakpoints', size: 227
2016-03-20 03:39:19.453 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:19.454 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:19.454 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:19.455 Setting: 'experiments', size: 2
2016-03-20 03:39:19.455 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:19.455 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:21.574 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:21.582 Ten largest settings: 
2016-03-20 03:39:21.763 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:21.764 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:21.764 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:21.764 Setting: 'breakpoints', size: 227
2016-03-20 03:39:21.765 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:21.765 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:21.765 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:21.765 Setting: 'experiments', size: 2
2016-03-20 03:39:21.765 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:21.766 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:23.754 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:23.756 Ten largest settings: 
2016-03-20 03:39:23.938 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:23.939 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:23.939 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:23.940 Setting: 'breakpoints', size: 227
2016-03-20 03:39:23.940 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:23.940 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:23.940 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:23.940 Setting: 'experiments', size: 2
2016-03-20 03:39:23.941 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:23.942 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:25.577 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:25.584 Ten largest settings: 
2016-03-20 03:39:25.757 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:25.757 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:25.757 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:25.759 Setting: 'breakpoints', size: 227
2016-03-20 03:39:25.759 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:25.760 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:25.760 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:25.760 Setting: 'experiments', size: 2
2016-03-20 03:39:25.760 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:25.760 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:33.152 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:33.154 Ten largest settings: 
2016-03-20 03:39:33.332 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:33.333 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:33.335 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:33.335 Setting: 'breakpoints', size: 227
2016-03-20 03:39:33.336 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:33.337 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:33.337 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:33.338 Setting: 'experiments', size: 2
2016-03-20 03:39:33.338 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:33.338 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:34.982 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:34.983 Ten largest settings: 
2016-03-20 03:39:35.167 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:35.168 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:35.168 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:35.168 Setting: 'breakpoints', size: 227
2016-03-20 03:39:35.168 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:35.170 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:35.170 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:35.170 Setting: 'experiments', size: 2
2016-03-20 03:39:35.171 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:35.171 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:37.271 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:37.273 Ten largest settings: 
2016-03-20 03:39:37.454 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:37.454 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:37.454 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:37.455 Setting: 'breakpoints', size: 227
2016-03-20 03:39:37.456 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:37.456 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:37.460 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:37.468 Setting: 'experiments', size: 2
2016-03-20 03:39:37.468 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:37.482 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:39.428 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:39.429 Ten largest settings: 
2016-03-20 03:39:39.602 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:39.602 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:39.602 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:39.602 Setting: 'breakpoints', size: 227
2016-03-20 03:39:39.602 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:39.603 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:39.603 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:39.603 Setting: 'experiments', size: 2
2016-03-20 03:39:39.603 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:39.603 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:41.457 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:41.458 Ten largest settings: 
2016-03-20 03:39:41.632 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:41.632 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:41.632 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:41.633 Setting: 'breakpoints', size: 227
2016-03-20 03:39:41.633 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:41.633 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:41.633 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:41.633 Setting: 'experiments', size: 2
2016-03-20 03:39:41.633 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:41.633 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:43.297 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:43.299 Ten largest settings: 
2016-03-20 03:39:43.470 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:43.470 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:43.470 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:43.471 Setting: 'breakpoints', size: 227
2016-03-20 03:39:43.472 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:43.472 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:43.472 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:43.472 Setting: 'experiments', size: 2
2016-03-20 03:39:43.472 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:43.472 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:50.247 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:50.249 Ten largest settings: 
2016-03-20 03:39:50.424 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:50.424 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:50.425 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:50.425 Setting: 'breakpoints', size: 227
2016-03-20 03:39:50.425 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:50.425 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:50.425 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:50.425 Setting: 'experiments', size: 2
2016-03-20 03:39:50.426 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:50.426 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:51.682 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:51.685 Ten largest settings: 
2016-03-20 03:39:51.866 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:51.867 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:51.867 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:51.867 Setting: 'breakpoints', size: 227
2016-03-20 03:39:51.867 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:51.867 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:51.867 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:51.868 Setting: 'experiments', size: 2
2016-03-20 03:39:51.868 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:51.868 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:53.055 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:53.056 Ten largest settings: 
2016-03-20 03:39:53.229 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:53.230 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:53.230 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:53.230 Setting: 'breakpoints', size: 227
2016-03-20 03:39:53.230 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:53.230 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:53.230 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:53.231 Setting: 'experiments', size: 2
2016-03-20 03:39:53.231 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:53.231 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:39:54.564 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:39:54.566 Ten largest settings: 
2016-03-20 03:39:54.737 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:39:54.738 Setting: 'savedURLs', size: 3698
2016-03-20 03:39:54.738 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:39:54.738 Setting: 'breakpoints', size: 227
2016-03-20 03:39:54.738 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:39:54.738 Setting: 'watchExpressions', size: 45
2016-03-20 03:39:54.738 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:39:54.739 Setting: 'experiments', size: 2
2016-03-20 03:39:54.739 Setting: 'domBreakpoints', size: 2
2016-03-20 03:39:54.739 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 03:40:00.557 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 03:40:00.559 Ten largest settings: 
2016-03-20 03:40:00.734 Setting: 'consoleHistory', size: 5235316
2016-03-20 03:40:00.734 Setting: 'savedURLs', size: 3698
2016-03-20 03:40:00.735 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 03:40:00.735 Setting: 'breakpoints', size: 227
2016-03-20 03:40:00.735 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 03:40:00.736 Setting: 'watchExpressions', size: 45
2016-03-20 03:40:00.736 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 03:40:00.736 Setting: 'experiments', size: 2
2016-03-20 03:40:00.736 Setting: 'domBreakpoints', size: 2
2016-03-20 03:40:00.736 Setting: 'workspaceExcludedFolders', size: 2
