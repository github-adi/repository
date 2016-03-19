-By Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
-Sources:
-Content:-
chrome-extension://ooebklgpfnbcnpokahmdidgbmlcdepkm/js/clickhide.js
var GJAD = {
	chooseAble:false,
	dropAble:false,
	delStr:false,
	isInit:false,
	styleStr:"gj",
	fn:null,
	index:1,
	hideObjArr:new Array(),
	history_num:0,
	new_num:0,
	posX:null,
	posY:null,
	sTop:20,
	mouse_tips:null,
	selectElement:null,
	SetFunction:function(fn){
		GJAD.fn = fn;
	},
    AddRules:function(rules)
    {
        chrome.extension.sendRequest({cmd: "add_rules", rules: rules}, function(response)
        {
        });
    },
    DelRules:function(rules)
    {
        chrome.extension.sendRequest({cmd: "del_rules", rules: rules}, function(response)
        {
        });
    },
    Confirm:function(rules)
    {
        chrome.extension.sendRequest({cmd: "confirm", rules: rules}, function(response)
        {
        });
    },
    Cancel:function(rules)
    {
        chrome.extension.sendRequest({cmd: "cancel", rules: rules}, function(response)
        {
        });
    },
	initHtml:function(str){
		var htmlstr = '<div class="clickHide_border" id="clickHide_border_left"></div>'+
				  '<div class="clickHide_border" id="clickHide_border_right"></div>'+
				  '<div class="clickHide_border" id="clickHide_border_top"></div>'+
				  '<div class="clickHide_border" id="clickHide_border_bottom"></div>';
		var liststr = '<div id="clickHide_list" class="clickHide_alpha">'+
			'<div class="clickHide_title '+GJAD.styleStr+'_title">'+
				'<a href="javascript:void(0)" class="clickHide_close"></a>'+
				'<div class="clickHide_word">'+
					'<p class="clickHide_word_title">\u60a8\u8fd8\u6ca1\u6709\u521b\u5efa\u81ea\u5df1\u7684\u8fc7\u6ee4\u89c4\u5219~\u8d76\u5feb\u8bd5\u4e00\u4e0b\u5427\uff01</p>'+
				'</div>'+
			'</div>'+
			'<div class="clickHide_def"></div>'+
			'<div class="clickHide_info">'+
				'<dl id="clickHide_history">'+
					'<dt><span class="clickHide_expand">\u5386\u53f2\u6dfb\u52a0\u7684\u89c4\u5219(<span id="clickHide_history_num">0</span>)</span><a>\u5220\u9664\u5168\u90e8</a></dt>'+
				'</dl>'+
				'<dl id="clickHide_new">'+
					'<dt><span class="clickHide_expand">\u5f53\u524d\u9700\u6dfb\u52a0\u7684\u89c4\u5219(<span id="clickHide_new_num">0</span>)</span><a>\u5220\u9664\u5168\u90e8</a></dt>'+
				'</dl>'+
			'</div>'+
			'<div class="clickHide_btn">'+
				'<a id="clickHide_btn_cancel">\u53d6\u6d88</a>'+
				'<a id="clickHide_btn_alladd">\u786e\u5b9a</a>'+
			'</div>'+
		'</div>'+
		'<div class="clickHide_mouse_on"></div>';
		$("body").append(htmlstr).append(liststr);
		GJAD.initEvent();
		GJAD.initHistory(str);
	},
	initEvent:function(){
		$(".clickHide_expand").toggle(function(){
			$(this).addClass("clickHide_collapse");
			$(this).parents("dl").children("dd").hide();
		},function(){
			$(this).removeClass("clickHide_collapse");
			$(this).parents("dl").children("dd").show();
		});
		$(".clickHide_title").mousedown(function(e){
			GJAD.dropAble = true;
			var of = $("#clickHide_list").offset();
			GJAD.posX = e.clientX - of.left;
    		GJAD.posY = e.clientY - of.top + $(window).scrollTop();
		}).mouseup(function(){
			GJAD.dropAble = false;
			GJAD.sTop = $("#clickHide_list").offset().top - $(window).scrollTop();
		});
		$("#clickHide_list").mouseenter(function(){
			$(this).removeClass("clickHide_alpha");
			GJAD.chooseAble = false;
		}).mouseleave(function(){
			$(this).addClass("clickHide_alpha");
			GJAD.chooseAble = true;
		});
		$("#clickHide_btn_cancel,.clickHide_close").click(function(){GJAD.cancel()});
		$("#clickHide_btn_alladd").click(function(){GJAD.allAdd()});
		$("#clickHide_history a").click(function(){GJAD.allCancel(0)});
		$("#clickHide_new a").click(function(){GJAD.allCancel(1)});
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style){
			$(window).scroll(function(){
				$('#clickHide_list').css({"top":$(this).scrollTop() + GJAD.sTop});
			})
		}
	},
	initHistory:function(str){
		if(!str){
			return false;
		}
		var hobj = str.split("<|>");
		if (hobj)
		{
			for(var i=0; i<hobj.length; i++)
			{
				var listRuleSplit = hobj[i].split("<#>");
				if (listRuleSplit.length < 3)
				{
					continue;
				}
				var spobj = listRuleSplit[1];
				//var elementId = spobj.indexOf("#")>=0 ? spobj : null;
				//var url = spobj.indexOf("http")>=0 ? spobj : null;
				//var elementClasses = spobj.indexOf(".")>=0 ? spobj : null;
				var strType = listRuleSplit[2];
				var title = cutstr($.trim($("title").html()),20);
				
				clickHideFilters = new Array();
				selectorList = new Array();
				var type = 1;
				if(/*url*/strType == "2")
				{
					type = 2;
					clickHideFilters.push(relativeToAbsoluteUrl(spobj));
				}
				else
				{
					type = 1;
					clickHideFilters.push(document.location.host + "@@" + spobj);
				}
				var od_str = document.location.host+'<#>'+spobj+'<#>'+type+'<#>'+title;

				$("#clickHide_history").append('<dd od="'+od_str+'" index="'+GJAD.index+'"><span>'+clickHideFilters[0]+'</span><a id="dda_'+GJAD.index+'">\u5220\u9664</a></dd>');
				$("#dda_"+GJAD.index).click(function(){
					GJAD.delRules(spobj,type,$(this).parents("dd").attr("index"),0);
				});
				$("#clickHide_history").show();
				GJAD.history_num+=1;
				GJAD.index+=1;
				GJAD.fix_num();
			}
			$("#clickHide_history .clickHide_expand").click();
			$(".clickHide_def").hide();
		} // end if (hobj)
	},
	SetStyle:function(str){
		var cstr = "lenovo,gj10dna";
		if(cstr.indexOf(str)>=0){
			GJAD.styleStr = str;
		}else{
			GJAD.styleStr = "gj10dna";	
		}
	},
	StartCustom:function(str){
		var startEvents=function(){
			GJAD.initHtml(str);
			GJAD.setCover();
			GJAD.chooseAble = true;
			$(document).bind("mouseover",GJAD.clickHide_mouseOver);
			$(document).bind("mouseout",GJAD.clickHide_mouseOut);
			$(document).bind("mousedown",GJAD.clickHide_mouseClick);
			$(document).bind("mousemove",GJAD.clickHide_mouseMove);
		}

		if(!document.getElementById("clickHide_list")){
			startEvents();
		}
	},
	StopCustom:function(){
		GJAD.chooseAble = false;
		GJAD.resetAll();
	},
	clickHide_mouseOver:function(e){
		if(GJAD.chooseAble){
			if((e.target.id || e.target.className || e.target.src) && !($(e.target).width()>1024 && $(e.target).height()>900)){
	     	GJAD.selectElement = e.target;
		    var target_left = $(GJAD.selectElement).offset().left,
			    target_top = $(GJAD.selectElement).offset().top,
				target_width = $(GJAD.selectElement).innerWidth(),
				target_height = $(GJAD.selectElement).innerHeight();
				$('#clickHide_border_left').css({'left': target_left+ 'px','top': target_top + 'px','height': target_height});
				$('#clickHide_border_top').css({'left': target_left+ 'px','top': target_top + 'px','width': target_width});
				$('#clickHide_border_right').css({'left': target_left+target_width +'px','top': target_top + 'px','height': target_height});
				$('#clickHide_border_bottom').css({'left': target_left+ 'px','top': target_top + target_height+'px','width': target_width+2});
				//$('#clickHide_border_show').css({'left': target_left+ 'px','top': target_top + target_height+2+'px'}).html(GJAD.selectElement.nodeName.toLowerCase() +' [ '+target_height+' Ã— '+target_width+' ]');
				$('.clickHide_border').show();
				
				$(e.target).addClass("clickHide_mouse_normal");
				$(".clickHide_mouse_on").show().removeClass("clickHide_mouse_show");
				GJAD.mouse_tips = setTimeout("GJAD.showMouseTips()",200);
			}
	  	}
	},
	showMouseTips:function(){
		$(".clickHide_mouse_on").addClass("clickHide_mouse_show");
	},
	clickHide_mouseOut:function(e){
		$(e.target).removeClass("clickHide_mouse_normal");
		$('.clickHide_border').hide();
		clearTimeout(GJAD.mouse_tips);
		$(".clickHide_mouse_on").hide();
	},
	clickHide_mouseClick:function(e){
		//if(e.button == 2){
//			if($("#clickHide_new dd").length>0){
//				$("#clickHide_new dd:last a").click();	
//			}
//			return false;
//		}
		if(!GJAD.chooseAble || !e.target || $(e.target).parents("#clickHide_list").attr("id")=="clickHide_list" || $(e.target).attr("id")=="clickHide_list" || !e.target.nodeName=="HTML"){
			return false;
		}
		$(e.target).removeClass("clickHide_mouse_normal");
		var elt = e.target;
		if(elt.className && elt.className == "gj_adblock_cover") {
			elt = GJAD.selectElement.prisoner;
			var url = GJAD.selectElement.prisonerURL;
			$(e.target).hide();
		}else{
			var url = elt.src ? normalizeURL(relativeToAbsoluteUrl(elt.src)) : null;
		}
		var elementId = elt.id ? elt.id.split(' ').join('') : null;
		var elementClasses = elt.className ? elt.className.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '').split(' ') : null;
		var type = 1;
		var od_obj = null;
		var title = cutstr($.trim($("title").html()),20);
		
		clickHideFilters = new Array();
		selectorList = new Array();
		var bIsNotDiv = false;
		var strCssShow = "";
		var strResCssRule = "";
		if(elementId)
		{
			od_obj = "#" + elementId;
			clickHideFilters.push(document.location.host + "@@#" + elementId);
		}
		else if(elementClasses)
		{
			for(var i = 0; i < elementClasses.length; i++)
			{
			  selectorList.push("." + elementClasses[i]);
			  clickHideFilters.push(document.location.host + "@@." + elementClasses[i]);
			}
			od_obj = selectorList[0];
		}
		else if(url)
		{
			bIsNotDiv = true;
			type = 2;
			od_obj = url;
			clickHideFilters.push(relativeToAbsoluteUrl(url));
			
			// add a css rule.
			// add by magictong 2014/03/11 17:12:00
			var strSrc = url;
			if (elt.attributes && elt.attributes.length > 0)
			{
				// Get SRC from HTML
				for(var i = 0; i < elt.attributes.length; ++i)
				{
					if (elt.attributes[i].name == "src")
					{
						strSrc = elt.attributes[i].nodeValue;
						break;
					}
				}
			}
			
			var strCssRule = elt.tagName + "[src^='" + strSrc + "']";
			strCssShow = document.location.host + "@@" + strCssRule;
			strResCssRule = document.location.host+'<#>'+strCssRule+'<#>1<#>'+title;
		}
		var od_str = document.location.host+'<#>'+od_obj+'<#>'+type+'<#>'+title;
		
		if(type==1){
			$(od_obj).hide();
			//$(e.target).hide();
		}else{
			$(elt).hide();
			$(e.target).hide();
			//$("img[src='"+od_obj+"'],embed[src='"+od_obj+"'],iframe[src='"+od_obj+"']").hide();
		}

		if(od_obj!=null)
		{
			var ishide = $("#clickHide_new dd:visible").length==0 && GJAD.new_num!=0 ? "none" : "block";
			$("#clickHide_new").append('<dd od="'+od_str+'" style="display:'+ishide+'" index="'+GJAD.index+'"><span>'+clickHideFilters[0]+'</span><a href="javascript:void(0)" id="dda_'+GJAD.index+'">\u5220\u9664</a></dd>');
			$("#dda_"+GJAD.index).click(function(){
				GJAD.delRules(od_obj,type,$(this).parents("dd").attr("index"),1);
			});
			$("#clickHide_new").show();
			$('.clickHide_border').hide();
			$(".clickHide_def").hide();
			GJAD.hideObjArr[GJAD.index] = elt;
			GJAD.new_num+=1;
			GJAD.index+=1;
			GJAD.fix_num();
			GJAD.setCover();
			$(".clickHide_info").scrollTop(999);
		}
		if (bIsNotDiv && strCssRule)
		{
			var ishide = $("#clickHide_new dd:visible").length==0 && GJAD.new_num!=0 ? "none" : "block";
			$("#clickHide_new").append('<dd od="'+strResCssRule+'" style="display:'+ishide+'" index="'+GJAD.index+'"><span>'+strCssShow+'</span><a href="javascript:void(0)" id="dda_'+GJAD.index+'">\u5220\u9664</a></dd>');
			$("#dda_"+GJAD.index).click(function(){
				GJAD.delRules(strCssRule,type,$(this).parents("dd").attr("index"),1);
			});
			$("#clickHide_new").show();
			$('.clickHide_border').hide();
			$(".clickHide_def").hide();
			GJAD.hideObjArr[GJAD.index] = elt;
			GJAD.new_num+=1;
			GJAD.index+=1;
			GJAD.fix_num();
			GJAD.setCover();
			$(".clickHide_info").scrollTop(999);
		}
		//chrome fix
		//e.preventDefault();
        //return false;
	},
	clickHide_mouseMove:function(e){
		$(".clickHide_mouse_on").css({"top":e.pageY,"left":e.pageX+10});
		if(GJAD.dropAble){
			//var of = $("#clickHide_list").offset();
			$("#clickHide_list").css({"top":e.clientY-GJAD.posY,"left":e.clientX-GJAD.posX,"z-index":"9999999999"});
		}
	},
	setCover:function(){
		$(".gj_adblock_cover").remove();
		var elts = $('object:visible,iframe:visible');
			for(var i=0; i<elts.length; i++)
			GJAD.addElementCover(elts[i]);
	},
	addElementCover:function(elt){
		if(!elt)
			return null;
		  // If element doesn't have at least one of class name, ID or URL, give up
		  // because we don't know how to construct a filter rule for it
		  var url = getElementURL(elt);
		  if(!elt.className && !elt.id && !url)
			return;
		  var overlay = document.createElement('div');
		  overlay.prisoner = elt;
		  overlay.prisonerURL = url;
		  overlay.className = "gj_adblock_cover";
		  $(overlay).css({opacity:"0",filter: "alpha(opacity=0)", "background-color":"#ffffff",display:"inline-box", width: $(elt).width(), height:$(elt).height(), position:"absolute", overflow:"hidden", "z-index": "2147483646"});
		  var pos = $(elt).offset();
		  overlay.style.left = pos.left + "px";
		  overlay.style.top = pos.top + "px";
		  // elt.parentNode.appendChild(overlay, elt);
		  document.body.appendChild(overlay);
		  return overlay;
	},
	delRules:function(obj,type,index,ud){
		var aobj,anum;
		if(ud==1){
			aobj = "clickHide_new";
			GJAD.new_num -= 1;
			GJAD.new_num == 0 ? $("#clickHide_new").hide() : null;
		}else{
			aobj = "clickHide_history";
			GJAD.history_num -= 1;
			GJAD.history_num == 0 ? $("#clickHide_history").hide() : null;
			var od = $("#"+aobj+" dd[index='"+index+"']").attr("od");
			GJAD.delStr ? GJAD.delStr=GJAD.delStr+"<|>"+od : GJAD.delStr=od;
		}
		$("#"+aobj+" dd[index='"+index+"']").remove();
		if(type==1){
			$(obj).show();
		}else{
			//$("img[src='"+obj+"']").show();
			$(GJAD.hideObjArr[index]).show();
		}
		GJAD.fix_num();
		GJAD.setCover();
		return false;
	},
	allCancel:function(ud){
		if(ud==1){
			$("#clickHide_new dd").each(function(){
				$(this).children("a").click();
			})
		}else{
			$("#clickHide_history dd").each(function(){
				$(this).children("a").click();
			})
		}
		GJAD.fix_num();
	},
	allAdd:function(){
		var tp = "";
		$("#clickHide_new dd").each(function(){
			if(tp){
				tp=tp+"<|>"+$(this).attr("od");
			}else{
				tp=$(this).attr("od");
			}
		});
		GJAD.AddRules(tp);
		GJAD.DelRules(GJAD.delStr);
		if(tp!="" || GJAD.delStr){
            GJAD.Confirm();
			window.location.reload(true);
		};		
		GJAD.resetAll();
	},
	cancel:function(){
		if($("#clickHide_new dd:visible").length!=0 || GJAD.delStr){
            GJAD.Cancel();
			window.location.reload(true);
		};
		GJAD.resetAll();
	},
	resetAll:function(){
		GJAD.chooseAble = false;
		$(document).unbind("mouseover",GJAD.clickHide_mouseOver);
		$(document).unbind("mouseout",GJAD.clickHide_mouseOut);
		$(document).unbind("mousedown",GJAD.clickHide_mouseClick);
		$(document).unbind("mousemove",GJAD.clickHide_mouseMove);

		$("#clickHide_border_left,#clickHide_border_right,#clickHide_border_top,#clickHide_border_bottom,#clickHide_list,.clickHide_mouse_on").remove();
		$(".gj_adblock_cover").remove();
		GJAD.index=1;
		GJAD.history_num=0;
		GJAD.new_num=0;
	},
	fix_num:function(){
		var total = GJAD.history_num + GJAD.new_num;
			if(total==0){
				$(".clickHide_word_title").html('\u60a8\u8fd8\u6ca1\u6709\u4e3a\u5f53\u524d\u9875\u9762\u5efa\u7acb\u89c4\u5219');
			}else{
				$(".clickHide_def").hide();
				$(".clickHide_word_title").html('\u5df2\u4e3a\u5f53\u524d\u9875\u9762\u5efa\u7acb <span id="clickHide_num">0</span> \u6761\u8fc7\u6ee4\u89c4\u5219');
			}
		$("#clickHide_history_num").text(GJAD.history_num);
		$("#clickHide_new_num").text(GJAD.new_num);
		$("#clickHide_num").text(total);
	},
	loadScript:function(url,callback){
		var script = document.createElement("script");
		script.type = "text/javascript";
		if(script.readyState){//IE
			script.onreadystatechange = function(){
				if(script.readyState == "loaded" || script.readyState == "complete"){
					script.onreadystatechange = null;
					if(typeof callback==="function"){callback();}
				}
			}
		}else{ 
			script.onload = function(){
				if(typeof callback==="function"){callback();}
			}
		}	
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
}
document.body.onselectstart=function(){
	if(GJAD.dropAble){
		return false;
	}
}
// Extracts source URL from an IMG, OBJECT, EMBED, or IFRAME
function getElementURL(elt) {
  // Check children of object nodes for "param" nodes with name="movie" that specify a URL
  // in value attribute
  var url;
  if(elt.tagName.toUpperCase() == "OBJECT" && !(url = elt.getAttribute("data"))) {
    // No data attribute, look in PARAM child tags for a URL for the swf file
    //var params = $(elt).querySelectorAll("param[name=\"movie\"]");
	var params = $(elt).children("param[name='movie']");
    // This OBJECT could contain an EMBED we already nuked, in which case there's no URL
    if(params[0])
      url = params[0].getAttribute("value");
    else {
      params = $(elt).children("param[name='src']");
      if(params[0])
        url = params[0].getAttribute("value");
    }
  } else if(!url) {
    url = elt.getAttribute("src") || elt.getAttribute("href"); 
  }
  return url;
}
function relativeToAbsoluteUrl(url){
  // If URL is already absolute, don't mess with it
  if (!url || /^[\w\-]+:/i.test(url))
    return url;
  // Leading / means absolute path
  if(url[0] == '/')
    return document.location.protocol + "//" + document.location.host + url;
  // Remove filename and add relative URL to it
  var base = document.baseURI.match(/.+\//);
  if(!base)
    return document.baseURI + "/" + url;
  return base[0] + url;
}
function normalizeURL(url){
  var components = url.match(/(.+:\/\/.+?)\/(.*)/);
  if(!components)
    return url;
  var newPath = removeDotSegments(components[2]);
  if(newPath.length == 0)
    return components[1];
  if(newPath[0] != '/')
    newPath = '/' + newPath;
  return components[1] + newPath;
}
function removeDotSegments(u){
  var r = '', m = [];
  if (/\./.test(u)) {
    while (u !== undefined && u !== '') {
      if (u === '.' || u === '..') {
        u = '';
      } else if (/^\.\.\//.test(u)) { // starts with ../
        u = u.substring(3);
      } else if (/^\.\//.test(u)) { // starts with ./
        u = u.substring(2);
      } else if (/^\/\.(\/|$)/.test(u)) { // starts with /./ or consists of /.
        u = '/' + u.substring(3);
      } else if (/^\/\.\.(\/|$)/.test(u)) { // starts with /../ or consists of /..
        u = '/' + u.substring(4);
        r = r.replace(/\/?[^\/]+$/, '');
      } else {
        m = u.match(/^(\/?[^\/]*)(\/.*)?$/);
        u = m[2];
        r = r + m[1];
      }
    }
    return r;
  } else {
    return u;
  }
}
function cutstr(str,len){
   var str_length = 0;
   var str_len = 0;
      str_cut = new String();
      str_len = str.length;
      for(var i = 0;i<str_len;i++){
        a = str.charAt(i);
        str_length++;
        if(escape(a).length > 4){
         //ä¸­æ–‡å­—ç¬¦çš„é•¿åº¦ç»ç¼–ç ä¹‹åŽå¤§äºŽ4
         str_length++;
         }
         str_cut = str_cut.concat(a);
         if(str_length>=len){
         str_cut = str_cut.concat("...");
         return str_cut;
         }
    }
    //å¦‚æžœç»™å®šå­—ç¬¦ä¸²å°äºŽæŒ‡å®šé•¿åº¦ï¼Œåˆ™è¿”å›žæºå­—ç¬¦ä¸²ï¼›
    if(str_length<len){
     return  str;
    }
}
//ie indexOf
if(!Array.prototype.indexOf){
	Array.prototype.indexOf = function(val){
	   var value = this;
	   for(var i =0; i < value.length; i++){
		  if(value[i] == val) return i;
	   }
	   return -1;
	};
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.cmd == "click_hide")
	{
		GJAD.SetStyle(request.strStyleVer);
        GJAD.StartCustom(request.rules);
	}
  });

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
2016-03-20 01:31:47.889 c:\Users\Axioo\Favorites\ad.js:472 Uncaught TypeError: Cannot set property 'onselectstart' of null
2016-03-20 01:32:55.721 Error saving setting with name: eventListenerBreakpoints, value length: 538. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:32:55.760 Ten largest settings: 
2016-03-20 01:32:55.943 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:32:55.944 Setting: 'savedURLs', size: 3698
2016-03-20 01:32:55.944 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:32:55.944 Setting: 'breakpoints', size: 227
2016-03-20 01:32:55.944 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:32:55.945 Setting: 'watchExpressions', size: 45
2016-03-20 01:32:55.945 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:32:55.945 Setting: 'experiments', size: 2
2016-03-20 01:32:55.945 Setting: 'domBreakpoints', size: 2
2016-03-20 01:32:55.945 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:32:57.198 Error saving setting with name: eventListenerBreakpoints, value length: 1000. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:32:57.207 Ten largest settings: 
2016-03-20 01:32:57.384 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:32:57.385 Setting: 'savedURLs', size: 3698
2016-03-20 01:32:57.385 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:32:57.385 Setting: 'breakpoints', size: 227
2016-03-20 01:32:57.385 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:32:57.385 Setting: 'watchExpressions', size: 45
2016-03-20 01:32:57.385 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:32:57.386 Setting: 'experiments', size: 2
2016-03-20 01:32:57.386 Setting: 'domBreakpoints', size: 2
2016-03-20 01:32:57.386 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:32:58.568 Error saving setting with name: eventListenerBreakpoints, value length: 1121. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:32:58.576 Ten largest settings: 
2016-03-20 01:32:58.752 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:32:58.752 Setting: 'savedURLs', size: 3698
2016-03-20 01:32:58.753 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:32:58.753 Setting: 'breakpoints', size: 227
2016-03-20 01:32:58.753 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:32:58.753 Setting: 'watchExpressions', size: 45
2016-03-20 01:32:58.754 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:32:58.754 Setting: 'experiments', size: 2
2016-03-20 01:32:58.755 Setting: 'domBreakpoints', size: 2
2016-03-20 01:32:58.755 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:32:59.846 Error saving setting with name: eventListenerBreakpoints, value length: 1814. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:32:59.849 Ten largest settings: 
2016-03-20 01:33:00.029 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:00.029 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:00.030 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:00.030 Setting: 'breakpoints', size: 227
2016-03-20 01:33:00.030 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:00.030 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:00.030 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:00.030 Setting: 'experiments', size: 2
2016-03-20 01:33:00.031 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:00.031 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:01.100 Error saving setting with name: eventListenerBreakpoints, value length: 2028. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:01.107 Ten largest settings: 
2016-03-20 01:33:01.284 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:01.285 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:01.285 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:01.285 Setting: 'breakpoints', size: 227
2016-03-20 01:33:01.285 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:01.285 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:01.285 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:01.286 Setting: 'experiments', size: 2
2016-03-20 01:33:01.286 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:01.286 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:02.723 Error saving setting with name: eventListenerBreakpoints, value length: 2237. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:02.725 Ten largest settings: 
2016-03-20 01:33:02.898 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:02.899 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:02.900 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:02.900 Setting: 'breakpoints', size: 227
2016-03-20 01:33:02.900 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:02.900 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:02.901 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:02.901 Setting: 'experiments', size: 2
2016-03-20 01:33:02.901 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:02.901 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:07.872 Error saving setting with name: eventListenerBreakpoints, value length: 2609. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:07.878 Ten largest settings: 
2016-03-20 01:33:08.054 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:08.056 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:08.056 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:08.056 Setting: 'breakpoints', size: 227
2016-03-20 01:33:08.057 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:08.057 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:08.057 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:08.057 Setting: 'experiments', size: 2
2016-03-20 01:33:08.057 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:08.057 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:09.394 Error saving setting with name: eventListenerBreakpoints, value length: 4065. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:09.396 Ten largest settings: 
2016-03-20 01:33:09.595 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:09.595 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:09.595 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:09.595 Setting: 'breakpoints', size: 227
2016-03-20 01:33:09.596 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:09.596 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:09.596 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:09.597 Setting: 'experiments', size: 2
2016-03-20 01:33:09.597 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:09.597 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:10.618 Error saving setting with name: eventListenerBreakpoints, value length: 4718. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:10.624 Ten largest settings: 
2016-03-20 01:33:10.799 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:10.800 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:10.800 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:10.800 Setting: 'breakpoints', size: 227
2016-03-20 01:33:10.800 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:10.800 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:10.801 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:10.802 Setting: 'experiments', size: 2
2016-03-20 01:33:10.802 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:10.803 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:11.820 Error saving setting with name: eventListenerBreakpoints, value length: 4783. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:11.824 Ten largest settings: 
2016-03-20 01:33:11.996 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:11.998 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:11.998 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:11.999 Setting: 'breakpoints', size: 227
2016-03-20 01:33:12.000 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:12.000 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:12.000 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:12.000 Setting: 'experiments', size: 2
2016-03-20 01:33:12.000 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:12.001 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:17.127 Error saving setting with name: eventListenerBreakpoints, value length: 5437. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:17.129 Ten largest settings: 
2016-03-20 01:33:17.306 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:17.306 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:17.307 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:17.308 Setting: 'breakpoints', size: 227
2016-03-20 01:33:17.309 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:17.310 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:17.310 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:17.312 Setting: 'experiments', size: 2
2016-03-20 01:33:17.313 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:17.317 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:18.435 Error saving setting with name: eventListenerBreakpoints, value length: 5510. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:18.437 Ten largest settings: 
2016-03-20 01:33:18.611 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:18.611 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:18.611 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:18.611 Setting: 'breakpoints', size: 227
2016-03-20 01:33:18.612 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:18.612 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:18.612 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:18.612 Setting: 'experiments', size: 2
2016-03-20 01:33:18.612 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:18.616 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:19.831 Error saving setting with name: eventListenerBreakpoints, value length: 5697. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:19.833 Ten largest settings: 
2016-03-20 01:33:20.006 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:20.009 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:20.009 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:20.010 Setting: 'breakpoints', size: 227
2016-03-20 01:33:20.010 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:20.010 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:20.010 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:20.010 Setting: 'experiments', size: 2
2016-03-20 01:33:20.010 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:20.011 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:21.018 Error saving setting with name: eventListenerBreakpoints, value length: 5919. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:21.021 Ten largest settings: 
2016-03-20 01:33:21.196 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:21.196 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:21.196 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:21.196 Setting: 'breakpoints', size: 227
2016-03-20 01:33:21.197 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:21.197 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:21.197 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:21.197 Setting: 'experiments', size: 2
2016-03-20 01:33:21.198 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:21.198 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:28.137 Error saving setting with name: eventListenerBreakpoints, value length: 6057. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:28.138 Ten largest settings: 
2016-03-20 01:33:28.314 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:28.315 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:28.315 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:28.315 Setting: 'breakpoints', size: 227
2016-03-20 01:33:28.315 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:28.315 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:28.316 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:28.316 Setting: 'experiments', size: 2
2016-03-20 01:33:28.316 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:28.316 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:29.724 Error saving setting with name: eventListenerBreakpoints, value length: 6115. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:29.725 Ten largest settings: 
2016-03-20 01:33:29.898 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:29.899 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:29.899 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:29.900 Setting: 'breakpoints', size: 227
2016-03-20 01:33:29.900 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:29.900 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:29.900 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:29.900 Setting: 'experiments', size: 2
2016-03-20 01:33:29.901 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:29.901 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:33:31.123 Error saving setting with name: eventListenerBreakpoints, value length: 6832. Error: Failed to set the 'eventListenerBreakpoints' property on 'Storage': Setting the value of 'eventListenerBreakpoints' exceeded the quota.
2016-03-20 01:33:31.124 Ten largest settings: 
2016-03-20 01:33:31.302 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:33:31.303 Setting: 'savedURLs', size: 3698
2016-03-20 01:33:31.303 Setting: 'previouslyViewedFiles', size: 3149
2016-03-20 01:33:31.303 Setting: 'breakpoints', size: 227
2016-03-20 01:33:31.303 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:33:31.304 Setting: 'watchExpressions', size: 45
2016-03-20 01:33:31.304 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:33:31.304 Setting: 'experiments', size: 2
2016-03-20 01:33:31.304 Setting: 'domBreakpoints', size: 2
2016-03-20 01:33:31.304 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:34:04.713 Navigated to file:///C:/Users/Axioo/Favorites/tpc.html
2016-03-20 01:34:06.550 Error saving setting with name: previouslyViewedFiles, value length: 3189. Error: Failed to set the 'previouslyViewedFiles' property on 'Storage': Setting the value of 'previouslyViewedFiles' exceeded the quota.
2016-03-20 01:34:06.552 Ten largest settings: 
2016-03-20 01:34:06.742 Setting: 'consoleHistory', size: 5235316
2016-03-20 01:34:06.742 Setting: 'savedURLs', size: 3698
2016-03-20 01:34:06.742 Setting: 'previouslyViewedFiles', size: 3114
2016-03-20 01:34:06.743 Setting: 'breakpoints', size: 227
2016-03-20 01:34:06.743 Setting: 'eventListenerBreakpoints', size: 220
2016-03-20 01:34:06.743 Setting: 'watchExpressions', size: 45
2016-03-20 01:34:06.743 Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
2016-03-20 01:34:06.743 Setting: 'experiments', size: 2
2016-03-20 01:34:06.743 Setting: 'domBreakpoints', size: 2
2016-03-20 01:34:06.744 Setting: 'workspaceExcludedFolders', size: 2
2016-03-20 01:35:06.431 c:\Users\Axioo\Favorites\ad.js:472 Uncaught TypeError: Cannot set property 'onselectstart' of null(anonymous function) @ c:\Users\Axioo\Favorites\ad.js:472



