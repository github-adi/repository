-Sources:
-https://platform.twitter.com/js/button.b059c0eb61ea902a882e5c5b3c66a17a.js:
-Evaluate in console:
__twttrll([1],{78:function(t,a,e){var n=e(79);t.exports=n.build([e(83)])},83:function(t,a,e){function n(t){return"large"===t?"l":"m"}function s(t){t.params({screenName:{required:!0},lang:{required:!0,transform:g.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:n},showScreenName:{fallback:!0},showCount:{fallback:!0},partner:{fallback:p(o.val,o,"partner")},count:{},preview:{}}),t.define("getUrlParams",function(){return l.compact({id:this.id,lang:this.params.lang,size:this.params.size,screen_name:this.params.screenName,show_count:"none"===this.params.count?!1:this.params.showCount,show_screen_name:this.params.showScreenName,preview:this.params.preview,partner:this.params.partner,dnt:m.enabled(),time:+new Date})}),t.around("widgetDataAttributes",function(t){return l.aug({"screen-name":this.params.screenName},t())}),t.around("scribeNamespace",function(t){return l.aug(t(),{page:"button",section:"follow"})}),t.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"none"===this.params.count?"nocount":"withcount"].join(":")+":"})}),t.override("render",function(){var t=h(f,{lang:this.params.lang}),a=c.encode(this.getUrlParams()),e=u.base()+t+"#"+a;return this.scribeImpression(),r.all([this.sandbox.setTitle(b),this.sandbox.addClass(w),this.sandbox.loadDocument(e)])})}var r=e(2),i=e(79),o=e(16),u=e(84),m=e(36),h=e(85),l=e(14),c=e(28),p=e(20),d=e(86),g=e(87),f=d.followButtonHtmlPath,b="Twitter Follow Button",w="twitter-follow-button";t.exports=i.couple(e(90),e(91),s)},85:function(t,a){function e(t,a){return t.replace(n,function(t,e){return void 0!==a[e]?a[e]:t})}var n=/\{\{([\w_]+)\}\}/g;t.exports=e},86:function(t,a){t.exports={tweetButtonHtmlPath:"/widgets/tweet_button.baa54ded21a982344c4ced326592f3de.{{lang}}.html",followButtonHtmlPath:"/widgets/follow_button.baa54ded21a982344c4ced326592f3de.{{lang}}.html",hubHtmlPath:"/widgets/hub.baa54ded21a982344c4ced326592f3de.html"}},200:function(t,a,e){var n=e(79);t.exports=n.build([e(201)])},201:function(t,a,e){function n(t){return"large"===t?"l":"m"}function s(t){return f.contains(C,t)}function r(t){return w.hashTag(t,!1)}function i(t){var a=/\+/.test(t)&&!/ /.test(t);return a?t.replace(/\+/g," "):t}function o(t){t.params({lang:{required:!0,transform:_.matchLanguage,fallback:"en"},size:{fallback:"medium",transform:n},type:{fallback:"share",validate:s},text:{transform:i},screenName:{transform:w.screenName},buttonHashtag:{transform:r},partner:{fallback:x(l.val,l,"partner")},via:{},related:{},hashtags:{},url:{}}),t.define("getUrlParams",function(){var t=this.params.text,a=this.params.url,e=this.params.via,n=this.params.related,s=g.getScreenNameFromPage();return"share"===this.params.type?(t=t||m.title,a=a||g.getCanonicalURL()||h.href,e=e||s):s&&(n=n?s+","+n:s),f.compact({id:this.id,lang:this.params.lang,size:this.params.size,type:this.params.type,text:t,url:a,via:e,related:n,button_hashtag:this.params.buttonHashtag,screen_name:this.params.screenName,hashtags:this.params.hashtags,partner:this.params.partner,original_referer:h.href,dnt:p.enabled(),time:+new Date})}),t.around("widgetDataAttributes",function(t){return"mention"==this.params.type?f.aug({"screen-name":this.params.screenName},t()):"hashtag"==this.params.type?f.aug({hashtag:this.params.buttonHashtag},t()):f.aug({url:this.params.url},t())}),t.around("scribeNamespace",function(t){return f.aug(t(),{page:"button",section:this.params.type})}),t.define("scribeImpression",function(){this.scribe({action:"impression"},{language:this.params.lang,message:[this.params.size,"nocount"].join(":")+":"})}),t.override("render",function(){var t,a=d(k,{lang:this.params.lang}),e=b.encode(this.getUrlParams()),n=c.base()+a+"#"+e;switch(this.params.type){case"hashtag":t=H;break;case"mention":t=B;break;default:t=z}return this.scribeImpression(),u.all([this.sandbox.setTitle(P),this.sandbox.addClass(y),this.sandbox.addClass(t),this.sandbox.loadDocument(n)])})}var u=e(2),m=e(9),h=e(13),l=e(16),c=e(84),p=e(36),d=e(85),g=e(38),f=e(14),b=e(28),w=e(27),v=e(79),x=e(20),N=e(86),_=e(87),k=N.tweetButtonHtmlPath,P="Twitter Tweet Button",y="twitter-tweet-button",z="twitter-share-button",H="twitter-hashtag-button",B="twitter-mention-button",C=["share","hashtag","mention"];t.exports=v.couple(e(90),e(91),o)}});
Error saving setting with name: consoleHistory, value length: 6132500. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
undefined
Error saving setting with name: savedURLs, value length: 3883. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
Error saving setting with name: savedURLs, value length: 3924. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5234863
Setting: 'previouslyViewedFiles', size: 4052
Setting: 'savedURLs', size: 3514
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 13
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2

