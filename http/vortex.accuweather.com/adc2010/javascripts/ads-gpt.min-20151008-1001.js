-Planet 9:
-My build:
-To be architectured by Muhammad Adi Nugroho, S. Adm. Neg.:
-Resources:
-Java Script Link Address:
http://vortex.accuweather.com/adc2010/javascripts/ads-gpt.min-20151008-1001.js
-To be avaluated in console:
//FILE: ..\adc2010\javascripts\Local\ads-gpt.min-20151007-1001.js
var googletag=googletag||{};googletag.cmd=googletag.cmd||[];var aadCustomSponsor=[],aadUrl={host:"http://ad.doubleclick.net/N6581/adj/",site:"accuwx.us."+apgPageInfoObj.ad_section+"/",zone:apgPageInfoObj.ad_page+";",ord:1E18*Math.random(),keys:""};if("undefined"==typeof apgUserInfoObj)var apgUserInfoObj={country:"",city:"",state:"",metro:"",zip:"",partner:"",lang:"",referer:"",userAgent:navigator.userAgent.toLowerCase()};
if("undefined"==typeof apgWxInfoObj)var apgWxInfoObj={ut:"0",cu:{wx:"",hi:"",wd:"",hd:"",uv:""},fc:[{wx:"",hi:"",lo:""},{wx:"",hi:"",lo:""},{wx:"",hi:"",lo:""}],ix:{fishing:1,arthritis:0},nwsalrt:null,alerts:{source:null,category:null,typeid:null},isday:1,lfs:{day:null,category:null,severity:null},hdln:null};
var TILE_SIZES={ATFPENCIL:[[980,30]],ATF728:[[728,90],[970,250],[750,100],[750,200],[750,300],[930,180],[950,90],[980,90],[980,120],[970,90],[960,90]],ATF300:[[300,250],[336,280],[300,1050],[250,360],[240,400]],ATF300_NONPROD:[[300,600]],ATF160:[[160,600],[120,600],[120,60],[120,240]],BTF160:[[160,600],[120,60],[120,240]],BTF300:[[300,250],[300,251],[250,360],[240,400]],BTF300_NONPROD:[[300,601]],BTF728:[[728,90],[728,91],[750,100],[950,90],[980,90],[970,90],[960,90]],ATFVIDEOCOMP300:[[300,250]]};
if("undefined"==typeof apgPageInfoObj)var apgPageInfoObj={ad_site:"us",section:"home",ad_section:"home",page:"index",ad_page:"",page_code:"",pageType:"content",pageExt:".asp",adPos:{tiles:[{divid:"header-davek-ps",atf:!0,name:"Tile1",sizes:{ATF728:!0,ATFPENCIL:!1},enabled:!0},{divid:"top-panel-body-rt-body-ps",atf:!0,name:"Tile2",sizes:{ATF300:!0,ATF300_NONPROD:!0,ATF160:!1},enabled:!0},{divid:"bottom-panel-body-ps",atf:!1,name:"Tile3",sizes:{BTF300:!0,BTF300_NONPROD:!0},enabled:!0},{divid:"footer-stevem-ps",
atf:!1,name:"Tile4",sizes:{BTF728:!0},enabled:!0},{divid:"adcVidCompanion300x250",atf:!0,name:"Tile5",sizes:{ATFVIDEOCOMP300:!0},enabled:!1,companion:!0}],prestitial:!1}};if("undefined"==typeof aadTestObj)var aadTestObj={};
var apgInfoObjs={apgUserInfoObj:apgUserInfoObj,apgWxInfoObj:apgWxInfoObj,apgPageInfoObj:apgPageInfoObj,aadTestObj:aadTestObj,tiles:[]},ValueCompare=function(){this.COMP_GT=function(a,b){return a>b};this.COMP_GTEQ=function(a,b){return a>=b};this.COMP_LT=function(a,b){return a<b};this.COMP_LTEQ=function(a,b){return a<=b};this.COMP_EQ=function(a,b){return a==b};this.COMP_NEQ=function(a,b){return a!=b};this.ExecTrue=function(a,b,c,d,e){c(a,b)&&d(a,b,e)}},Comparator=new ValueCompare,IndexThresholds={arthritis:{comp:Comparator.COMP_GT,
val:2},asthma:{comp:Comparator.COMP_GT,val:2},bbq:{comp:Comparator.COMP_GT,val:2},cold:{comp:Comparator.COMP_GT,val:2},dogwalk:{comp:Comparator.COMP_GT,val:2},flu:{comp:Comparator.COMP_GT,val:2},indoor:{comp:Comparator.COMP_GT,val:2},lawnmowing:{comp:Comparator.COMP_GT,val:2},migraine:{comp:Comparator.COMP_GT,val:2},outdoor:{comp:Comparator.COMP_GT,val:2},sports:{comp:Comparator.COMP_GT,val:2},schoolclosing:{comp:Comparator.COMP_GT,val:2},sinus:{comp:Comparator.COMP_GT,val:2},soil:{comp:Comparator.COMP_GT,
val:2},field:{comp:Comparator.COMP_GT,val:2},beach:{comp:Comparator.COMP_GT,val:2},biking:{comp:Comparator.COMP_GT,val:2},concert:{comp:Comparator.COMP_GT,val:2},construction:{comp:Comparator.COMP_GT,val:2},composting:{comp:Comparator.COMP_GT,val:2},dust:{comp:Comparator.COMP_GT,val:2},hunting:{comp:Comparator.COMP_GT,val:2},fishing:{comp:Comparator.COMP_GT,val:2},fueleconomy:{comp:Comparator.COMP_GT,val:2},golf:{comp:Comparator.COMP_GT,val:2},heart:{comp:Comparator.COMP_GT,val:2},hiking:{comp:Comparator.COMP_GT,
val:2},hvac:{comp:Comparator.COMP_GT,val:2},jogging:{comp:Comparator.COMP_GT,val:2},kite:{comp:Comparator.COMP_GT,val:2},mosq:{comp:Comparator.COMP_GT,val:2},sailing:{comp:Comparator.COMP_GT,val:2},running:{comp:Comparator.COMP_GT,val:2},schoolbus:{comp:Comparator.COMP_GT,val:2},skate:{comp:Comparator.COMP_GT,val:2},skiing:{comp:Comparator.COMP_GT,val:2},star:{comp:Comparator.COMP_GT,val:2},tennis:{comp:Comparator.COMP_GT,val:2},frizz:{comp:Comparator.COMP_GT,val:2},uvindex:{comp:Comparator.COMP_GT,
val:2},driving:{comp:Comparator.COMP_GT,val:2},travel:{comp:Comparator.COMP_GT,val:2},airq:{comp:Comparator.COMP_GT,val:3},pgrass:{comp:Comparator.COMP_GT,val:2},pmold:{comp:Comparator.COMP_GT,val:2},pweed:{comp:Comparator.COMP_GT,val:2},ptree:{comp:Comparator.COMP_GT,val:2}};
var QuantcastHandler=function(a){var f=this;this.getResults=function(b){for(var a=[],d=2;d<b.segments.length;d++)a.push(b.segments[d].id);f.mapResults(a)};this.mapResults=function(b){var g=(new Date).getMonth()+1;try{for(var d=[],c=0;c<b.length;c++)for(var e=0;e<a.qct.length;e++)if(a.qct[e].data==b[c]){a.qct[e].time=g;d.push(b[c]);break}for(c=0;c<b.length;c++)-1==d.toString().indexOf(b[c])&&a.qct.push({time:g,data:b[c]})}catch(f){}}},QuantHandler=new QuantcastHandler(DManager.sessData);
function quantCallback(a){QuantHandler.getResults(a)};
var AdTile=function(d,l,b,c,a){this.supportedSizes=c;this.name=l;this.id=d;this.atf=b;this.companion=a},AdManager=function(d,l,b,c,a,m,h){if(arguments.callee._adManagerInstance)return arguments.callee._adManagerInstance;arguments.callee._adManagerInstance=this;var e=this;this.awaitTiles=[];(function(a){var b=window.location.search.substring(1);if(b)for(var b=b.split("&"),e,f=0;f<b.length;f++)if(e=b[f].split("="),"adtestkey"==e[0].toLowerCase()){a.aadTestObj.key=e[1];a.apgPageInfoObj.ad_section="test";
console.log("Test Started: "+e[1]);break}})(a);l=a.apgPageInfoObj.ad_section;var g=function(a){e.adTiles=[];for(var b=0;b<a.length;b++)if(a[b].enabled){var c=[],f;for(f in a[b].sizes)1==a[b].sizes[f]&&(c=c.concat(TILE_SIZES[f]));c=new AdTile(a[b].divid,a[b].name,a[b].atf,c,a[b].companion);e.adTiles.push(c);e.adPos[c.name]=c;e.awaitTiles.push(0)}};this.Data=a;this.site=d;this.section=l;this.page=b;this.adPos=c;this.keyValues={};this.initGPT=function(){var b=!1,c=[];g(a.apgPageInfoObj.adPos.tiles);
for(var d=0;d<e.adTiles.length;d++)googletag.cmd.push(function(){var a=googletag.defineSlot("/6581/accuwx."+e.site+"."+e.section+"/"+e.page,e.adTiles[d].supportedSizes,e.adTiles[d].id);1==e.adTiles[d].atf?a.setTargeting("pos","top"):a.setTargeting("pos","bottom");1==e.adTiles[d].companion?b=!0:a.addService(googletag.pubads());c.push(a)});var f;f=0==a.apgPageInfoObj.adPos.prestitial?!1:a.apgUserInfoObj.device?!1:!0;googletag.cmd.push(function(){if(f){var a=googletag.defineOutOfPageSlot("/6581/accuwx."+
e.site+"."+e.section+"/"+e.page,"header-oop");a.addService(googletag.pubads());c.push(a);googletag.pubads().addEventListener("slotRenderEnded",function(b){b.slot==a&&0==b.isEmpty&&gaManager.trackEvent("Advertising","OutOfPageAd",b.lineItemId,"",1)})}});googletag.cmd.push(function(){if(b)for(var a in c)c[a].addService(googletag.companionAds())});googletag.cmd.push(function(){googletag.pubads().enableSingleRequest();googletag.enableServices()})};this.clearSupportedSizes=function(a){e.adPos[a].supportedSizes=
[]};this.addSupportedSize=function(a,b){e.adPos[a].supportedSizes.push(b)};this.displayAd=function(a){try{googletag.cmd.push(function(){googletag.display(a);e.awaitTiles.pop();window.aad_getCustomSponsors(e.awaitTiles)})}catch(b){e.awaitTiles.pop(),window.aad_getCustomSponsors(e.awaitTiles),gaManager.trackEvent("PostScribe_"+a,"TryError",b,1,!0)}};var k=[];this.queueTargeting=function(a,b){k.push({key:a,value:b})};this.addTargetingToService=function(a,b){var c=function(a){return a instanceof Array?
a:isNaN(a)?a:a.toString()},f=function(a,b,f){f&&(e.keyValues[b]=f,a.setTargeting(b,c(f)))};(function(a,b){var c=function(a,c){switch(a){case "hi":case "lo":1==b.ut&&(c=9*parseInt(c)/5+32);c=5*Math.round(c/5);break;case "wx":c=parseInt(c)}return c},e;for(e in b.cu){var d=b.cu[e],d=c(e,d);f(a,"cu"+e,d)}for(var g=0;g<b.fc.length-1;g++)for(e in b.fc[g])"dp"!=e&&"np"!=e&&(d=b.fc[g][e],d=c(e,d),f(a,"fc"+(g+1)+e,d));c="";g=parseInt(b.hr);d=b.fc[0].np.lp;g=b.fc[17<g?1:0].dp.lp;""!=d&&""!=g&&(d=parseFloat(d)+
parseFloat(g),g=1==b.ut?25:1,d>=g&&(c+="rain_gte1"));""!=b.fc[2].dp.lp&&""!=b.fc[2].np.lp&&(d=parseFloat(b.fc[2].dp.lp)+parseFloat(b.fc[2].np.lp),g=1==b.ut?25:1,d>=g&&(c+=(0<c.length?",":"")+"rain_gte1_48h"));0<c.length&&f(a,"customwx",c);f(a,"ut",b.ut);f(a,"isday",b.isday);f(a,"nwsalrt",b.nwsalrt);b.alerts&&(f(a,"alertssource",b.alerts.source),f(a,"alertscategory",b.alerts.category),f(a,"alertstypeid",b.alerts.typeid));b.lfs&&(f(a,"lfsday",b.lfs.day),f(a,"lfscategory",b.lfs.category),f(a,"lfsseverity",
b.lfs.severity));Comparator.AddIndex=function(b,c,e){f(a,"ix"+e,"1")};for(e in b.ix)try{b.ix[e]&&Comparator.ExecTrue(b.ix[e],IndexThresholds[e].val,IndexThresholds[e].comp,Comparator.AddIndex,e)}catch(h){}})(a,h.sessData.wx);(function(a,c){c.device&&f(a,"dvc",c.device);f(a,"zip",c.zip);f(a,"city",c.city);f(a,"state",c.state);f(a,"country",c.country);f(a,"partner",c.sessionPartner);f(a,"metro",c.metro);f(a,"dma",c.dma);f(a,"lang",c.lang);f(a,"fdate",c.weatherDate);h.sessData.tpid&&f(a,"tpid",h.sessData.tpid);
b.apgUserInfoObj.device&&f(a,"dvc",b.apgUserInfoObj.device);h.sessData.state&&h.sessData.state!=c.state&&f(a,"strav","1");(h.sessData.trv||h.sessData.zip&&h.sessData.zip.substring(0,2)!=c.zip.substring(0,2))&&f(a,"ctrav","1")})(a,b.apgUserInfoObj);f(a,"page_code",b.apgPageInfoObj.page_code);if(h.sessData.allowTarget){for(var d=[],g=0;g<h.sessData.acl.length;g++)d.push(h.sessData.acl[g].c);f(a,"lst",d)}f(a,"pgview",h.sessData.pgv);f(a,"ulang",(navigator.language?navigator.language:navigator.userLanguage).toLowerCase());
var d=[],m;for(m in h.sessData.qct)h.sessData.qct[m].time&&h.sessData.qct[m].data&&d.push(h.sessData.qct[m].data);f(a,"qcs",d);b.aadTestObj.key&&f(a,"test",b.aadTestObj.key);for(g=0;g<k.length;g++)f(a,k[g].key,k[g].value)}},SessData=function(){this.trv=this.ses="";this.pgv=null;this.state=this.zip="";this.wx=apgInfoObjs.apgWxInfoObj;this.acl="";this.allowTarget="1";this.qct="";this.tpid=this.aidx=this.acl=null},Devices={android:"android",iphone:"iphone",ipad:"ipad",maemo:"maemo",playstation:"playstation",
nintendo:"nintendo",xbox:"xbox",archos:"archos"},AdDataManager=function(d,l){var b=this;this.sessData=new SessData;this.getPersistedData=function(){this.getQuantcast=function(a){var b=(new Date).getMonth()+1,c=0<b-3?b-3:b+9,e=[];if(a){a=a.toString().split("|");for(var d=0;d<a.length;d+=2){var k;a:{k=a[d];if(4>b){if(k>=c||k<=b){k=!0;break a}}else if(k>=c&&k<=b){k=!0;break a}k=!1}k&&e.push({time:a[d],data:a[d+1]})}}return e};d.getData("aad",localStorage);d.getData("aas",sessionStorage);d.getData("quantcastTarget",
"undefined");d.getData("acm","undefined");d.getData("acl",localStorage);var c=d.data.acl;b.sessData.acl=c?JSON.parse(c):[];d.hasData("quantcastTarget")?b.sessData.qct=b.getQuantcast(d.data.quantcastTarget):b.sessData.qct=b.getQuantcast(d.getChip("aad","qct"));b.sessData.pgv=d.getChip("aas","p");b.sessData.pgv||(b.sessData.pgv=1);b.sessData.ses=d.getChip("aas","x");b.sessData.trv=d.getChip("aas","t");b.sessData.zip=d.getChip("aas","z");b.sessData.state=d.getChip("aas","s");c=d.getChip("aas","w");b.sessData.wx=
c?JSON.parse(c):l.apgWxInfoObj;c=d.getData("adctpid","undefined");b.sessData.tpid=c?c:null;b.sessData.allowTarget=(d.getChip("acm","aat"),!0);b.sessData.ses||acm.isOldIE||document.write('<script src="http://pixel.quantserve.com/api/segments.json?a=p-4b4gl_1fWISuU&callback=quantCallback">\x3c/script>')};this.setDevice=function(b){void 0===b.userAgent&&(b.userAgent=navigator.userAgent);for(var a in Devices)if(-1!=b.userAgent.indexOf(Devices[a])){b.device=Devices[a];break}};this.setPersistedData=function(c){d.saveData("aad",
d.objToStr(b.sessData.qct,"qct"),365,!1,localStorage);var a=[];a.push("&x=1");b.sessData.trv?a.push("&t=1"):b.sessData.zip||a.push("&z="+c.zip);b.sessData.state||a.push("&s="+c.state);a.push("&p="+(parseInt(b.sessData.pgv)+1).toString());b.sessData.wx&&a.push("&w="+JSON.stringify(b.sessData.wx));d.saveData("aas",a.join(""),d.ThirtyMinutes,!1,sessionStorage)};this.updateWithServerData=function(c){for(var a in c.apgWxInfoObj)switch(a){case "ix":b.sessData.wx[a]=""==b.sessData.wx[a]?{}:b.sessData.wx[a];
for(var d in c.apgWxInfoObj[a])c.apgWxInfoObj[a][d]&&(b.sessData.wx[a][d]=c.apgWxInfoObj[a][d]);break;case "cu":case "alerts":case "lfs":b.sessData.wx[a]=""==b.sessData.wx[a]?{}:b.sessData.wx[a];for(var h in c.apgWxInfoObj[a])c.apgWxInfoObj[a][h]&&(b.sessData.wx[a][h]=c.apgWxInfoObj[a][h]);break;case "fc":for(var e=0;e<c.apgWxInfoObj[a].length;e++){e in b.sessData.wx[a]||(b.sessData.wx[a][e]={});for(var g in c.apgWxInfoObj[a][e])if(c.apgWxInfoObj[a][e][g]&&(b.sessData.wx[a][e][g]=c.apgWxInfoObj[a][e][g],
"dp"==g||"np"==g))for(var k in c.apgWxInfoObj[a][e][g])c.apgWxInfoObj[a][e][g][k]&&(b.sessData.wx[a][e][g][k]=c.apgWxInfoObj[a][e][g][k])}break;default:c.apgWxInfoObj[a]&&(b.sessData.wx[a]=c.apgWxInfoObj[a].toString())}};this.getPersistedData();this.updateWithServerData(l);this.setDevice(l.apgUserInfoObj)},LocalAdDataManager=new AdDataManager(DManager,apgInfoObjs),LocalAdManager=new AdManager(apgInfoObjs.apgPageInfoObj.ad_site,apgInfoObjs.apgPageInfoObj.ad_section,apgInfoObjs.apgPageInfoObj.ad_page,
apgInfoObjs.apgPageInfoObj.adPos,apgInfoObjs,DManager,LocalAdDataManager);
var crtg_nid="3852",crtg_cookiename="crtg_accwea",crtg_varname="crtg_content";function crtg_getCookie(b){var a,d,e,c=document.cookie.split(";");for(a=0;a<c.length;a++)if(d=c[a].substr(0,c[a].indexOf("=")),e=c[a].substr(c[a].indexOf("=")+1),d=d.replace(/^\s+|\s+$/g,""),d==b)return unescape(e);return""}var crtg_content=crtg_getCookie(crtg_cookiename),crtg_rnd=Math.floor(99999999999*Math.random());
(function(){var b=location.protocol+"//rtax.criteo.com/delivery/rta/rta.js?netId="+escape(crtg_nid),b=b+("&cookieName="+escape(crtg_cookiename)),b=b+("&rnd="+crtg_rnd),b=b+("&varName="+escape(crtg_varname)),a=document.createElement("script");a.type="text/javascript";a.src=b;a.async=!0;0<document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0].appendChild(a):0<document.getElementsByTagName("body").length&&document.getElementsByTagName("body")[0].appendChild(a)})();
for(var crtg_split=crtg_content.split(";"),criteoParams=[],ParamKey="",i=1;i<crtg_split.length;i++)ParamKey=""+crtg_split[i-1].split("=")[0]+"",criteoParams.push(""+crtg_split[i-1].split("=")[1]+"");0<criteoParams.length&&LocalAdManager.queueTargeting(ParamKey,criteoParams);
googletag.cmd.push(function(){LocalAdManager.addTargetingToService(googletag.pubads(),apgInfoObjs);LocalAdManager.initGPT();LocalAdDataManager.setPersistedData(apgInfoObjs.apgUserInfoObj)});var adManagerCopy=LocalAdManager;
if("undefined"==typeof acfgThreeDaySponsor)var acfgThreeDaySponsor=[],acfgThreeDaySponsorAssets=[],acfgCampaignTakeover=[],acfgPtoSkins=[],acfgInterestSponsors=[],acfgInterestSponsorAssets=[],acfgInterestColumnSponsors=[],acfgInterestColumnSponsorAssets=[],acfgFeedSponsors=[],acfgGeneralSponsors=[],acfgGeneralSponsorAssets=[],acfgFeedSponsorAssets=[];var aad_sponsorObjFx={},aadPencilType="RollOpenRollClose",aadPencilCampaignID="Unknown";
function aad_activatePencil(a){function c(){clearTimeout(b);e=!0;f.unbind("mousedown");f.unbind("mouseout");f.unbind("mouseover");try{gaManager.trackEvent("Advertising",aadPencilCampaignID,"PencilOpen")}catch(k){}f.css({display:"none"});g.animate({height:"300px"},200,function(){"RollOpenRollClose"!=aadPencilType&&"ClickOpenRollClose"!=aadPencilType||g.bind("mouseout",function(){g.unbind("mouseout");d.animate({height:"30px"},200);g.animate({height:"0px"},200,function(){g.css({display:"none"});f.css({display:"block"});
setTimeout(function(){aad_activatePencil(a)},1E3)})})});d.animate({height:"300px"},200)}aadPencil=!0;var b,e=!1,d=$(document.getElementById(a)),g=d.contents().find("#aadPencilOn"),f=d.contents().find("#aadPencilOff");g.css({display:"none"});f.css({display:"block"});switch(aadPencilType){case "RollOpenRollClose":case "RollOpenClickClose":f.bind("mouseout",function(){e||clearTimeout(b)});f.bind("mouseover",function(){b=setTimeout(c,200)});break;case "ClickOpenClickClose":case "ClickOpenRollClose":f.css("cursor",
"pointer");f.bind("mousedown",function(){c()});break;case "Auto1OpenClickClose":setTimeout(c,1E3);break;case "Auto2OpenClickClose":setTimeout(c,2E3);break;case "Auto3OpenClickClose":setTimeout(c,3E3);break;case "Auto4OpenClickClose":setTimeout(c,4E3);break;case "Auto5OpenClickClose":setTimeout(c,5E3)}}
function aad_activatePrestitial(a,c,b,e){$(parent.document).ready(function(){$("body").prepend('<div id="aadPrestPanelCon"></div>');try{var d=window.frames[e].document.getElementById("ad-prestitial-panel"),g=parent.document.getElementById("aadPrestPanelCon"),f=d.parentNode,k=d.nextSibling===g?d:d.nextSibling;g.parentNode.insertBefore(d,g);f.insertBefore(g,k);aad_openAdPrestitial(a,c,b,e)}catch(m){}})}
function aad_openAdPrestitial(a,c,b,e){function d(){f&&clearTimeout(f);$("#ad-prestitial-content").remove();aad_HideAdPanels(!1);$("#ad-prestitial-panel").unmodalize().unaffix().fadeOut()}a||(a=aadPrestitialConfig.width);c||(c=aadPrestitialConfig.height);e={timer:17E3,bgColor:"#6d8ec8",opacity:"0.8",position:"n"};if(b&&"object"==typeof b)for(var g in e)b[g]&&(e[g]=b[g]);a=parseInt(a);c=parseInt(c);$("#ad-prestitial-panel").css({width:a+160+"px",height:c+30+"px"});$("#ad-prestitial-content").css({width:a+
"px",height:c+"px"});$("#ad-prestitial-panel").affix({w:e.position}).modalize({css:{opacity:e.opacity,backgroundColor:e.bgColor}}).show();aad_HideAdPanels(!0);$(".close-prestitial").click(function(){d()});var f=setTimeout(d,e.timer)}
function google_ad_request_done(a){var c=[];c.push('<h4>Ads by Google <span class="rt">');c.push('<a href="'+google_info.feedback_url+'" target="_blank">What\'s this?</a></span></h4>');c.push('<div class="clearfix"></div>');for(var b=0;b<a.length;b++)c.push('<h5><a href="'+a[b].url+'" target="_blank">'),c.push(a[b].line1),c.push("</a></h5><p>"),c.push(a[b].line2),c.push('<br /><a href="'+a[b].url+'" target="_blank">'),c.push(a[b].visible_url),c.push("</a></p>");$("#ad-links-content").html(c.join(""))}
function aad_addTrackingPixels(a){a&&"undefined"!=typeof acm_trackingPixels&&(a.constructor===Array?acm_trackingPixels=acm_trackingPixels.concat(a):acm_trackingPixels.push(a))}function aad_addAdditionalTags(a){a&&"undefined"!=typeof acm_additionalAdTags&&(a.constructor===Array?acm_additionalAdTags=acm_additionalAdTags.concat(a):acm_additionalAdTags.push(a))}function aad_GaTrackImps(a,c){try{gaManager.trackEvent("Internal Ad Tracking",a,"AD_Impression",parseInt(c))}catch(b){}}
function aad_GaTrackClicks(a,c){try{gaManager.trackEvent("Internal Ad Tracking",a,"AD_Click",parseInt(c))}catch(b){}}function aad_GaTrackPrestitial(a,c){try{gaManager.trackEvent("Advertising","Prestitial",null,null,!0)}catch(b){}}
aad_sponsorObjFx.get_sponsor=function(a,c){if("undefined"!=typeof apgInfoObjs.aadTestObj.key){for(var b=0;b<a.length;b++)if(apgInfoObjs.aadTestObj.key.toLowerCase()==a[b].assetId.toLowerCase())return a[b];return!1}for(var e=new Date,b=0;b<a.length;b++)if(aad_DateFx.inRange(e,a[b].start,a[b].end)){if(a[b].sections)for(var d=0;d<a[b].sections.length;d++)if(a[b].sections[d].toLowerCase()==apgInfoObjs.apgPageInfoObj.section.toLowerCase()||"ros"==a[b].sections[d].toLowerCase())return a[b];if(a[b].groups)for(d=
0;d<a[b].groups.length;d++)if(-1!=apgInfoObjs.apgPageInfoObj.page.toLowerCase().indexOf(a[b].groups[d].toLowerCase())||"ros"==a[b].groups[d].toLowerCase())return a[b];if(a[b].pages)for(d=0;d<a[b].pages.length;d++)if(a[b].pages[d].toLowerCase()==apgInfoObjs.apgPageInfoObj.page.toLowerCase()||"ros"==a[b].pages[d].toLowerCase())return a[b];if(a[b].columns&&apgInfoObjs.apgPageInfoObj.col_code)for(d=0;d<a[b].columns.length;d++)if(apgInfoObjs.apgPageInfoObj.col_code[0].toLowerCase()==a[b].columns[d].cat.toLowerCase()&&
("*"==a[b].columns[d].subCat||a[b].columns[d].subCat.toLowerCase()==apgInfoObjs.apgPageInfoObj.col_code[1].toLowerCase()&&("*"==a[b].columns[d].idx||a[b].columns[d].idx.toLowerCase()==apgInfoObjs.apgPageInfoObj.col_code[2].toLowerCase())))return a[b]}return!1};aad_sponsorObjFx.get_adServer_sponsor=function(a,c){if(!a||!c)return!1;for(var b=0;b<a.length;b++)if(a[b].sponsor&&a[b].type.toLowerCase()==c.toLowerCase()&&0==a[b].run)return a[b].run=!0,a[b].sponsor;return!1};
aad_sponsorObjFx.get_assets=function(a,c){if("undefined"!=typeof a)if("string"==typeof a)for(var b=0;b<c.length;b++){if(c[b].id.toString().toLowerCase()==a.toLowerCase())return c[b]}else if(a.assetId)for(b=0;b<c.length;b++)if(c[b].id.toString().toLowerCase()==a.assetId.toString().toLowerCase())return a.pixels&&(c[b].pixels?c[b].pixels.concat(a.pixels):c[b].pixels=a.pixels),a.tags&&(c[b].tags?c[b].tags.concat(a.tags):c[b].tags=a.tags),c[b];return!1};
function aad_setThreeDaySponsor(a){function c(a){if(a){a.pixels&&aad_addTrackingPixels(a.pixels);a.tags&&aad_addAdditionalTags(a.tags);a.gaImp&&a.gaImp.label&&aad_GaTrackImps(a.gaImp.label,a.gaImp.max_imps?a.gaImp.max_imps:0);$("#forecast-feed").addClass("davek");$("#forecast-feed-3day-sponsor").css({height:"320px","background-image":"url("+a.imgSrc+")","background-repeat":"no-repeat","background-position":"left bottom"});$(".forecast-status .nub").css("background","none");if(a.flashSrc){var c=a.flashSrc+
"?clickurl="+a.href;-1!=a.flashSrc.indexOf("?")&&(c=a.flashSrc+"&clickurl="+a.href);$("#forecast-feed-3day-sponsor").append('<div id="threeDayFlash"></div>');$("#threeDayFlash").flash({wmode:"transparent",allowScriptAccess:"always",src:c,width:"612",height:"50"})}else a.href&&($("#forecast-feed-3day-sponsor").append('<div id="threeDayClk"></div>'),c=$("#threeDayClk"),c.css({width:"612px",height:"50px",cursor:"pointer"}),a.target?c.click(function(){window.open(a.href,a.target,"")}):c.click(function(){window.open(a.href,
"_blank","")}));acmIE6pngFix("#forecast-feed-3day-sponsor",a.imgSrcIE6)}}(a=(a=aad_sponsorObjFx.get_adServer_sponsor(a,"3day"))?a:aad_sponsorObjFx.get_sponsor(acfgThreeDaySponsor,"3day"))&&(a=aad_sponsorObjFx.get_assets(a,acfgThreeDaySponsorAssets))&&c(a);return!1}
function aad_setPageTakeOverSkin(a){function c(a){$("#pto-skin").flash({wmode:"transparent",allowScriptAccess:"always",src:a.flashSrc,width:a.width,height:a.height})}function b(a,b){a&&b&&($(b).css("background-image","url("+a+")"),acmIE6pngFix(b))}function e(a,b){a&&b&&($(b).html('<img src="'+a+'" />'),acmIE6pngFix(b))}function d(a){var b=$(".panel-warning");a.threeDay&&0!=b.length?(a=b.outerHeight()+"px",$("#pto-skin-bg").css("background-position","center "+a),$("#pto-skin").css("margin-top",a),
$("#pto-skin-lt").css("margin-top",a),$("#pto-skin-rt").css("margin-top",a),$("#wrap-content").css("background-position","center "+a)):(b=$(".interest-charts"),0!=b.length&&(a=$("#panel-main").offset().top-$("#wrap-content").offset().top+$("#panel-main").height()-$("#pto-skin-lt").height()+"px",$("#pto-skin-lt").css("margin-top",a)))}function g(a){if(a.atf300bg){var b=$("#wrap-content").offset().top-$("#aadTop300").offset().top,c=$(".panel-warning");0!=c.length&&(b+=c.outerHeight());$("#aadTop300").css({background:"url("+
a.atf300bg+") no-repeat center "+b+"px"})}}function f(a){if(a){a.pixels&&aad_addTrackingPixels(a.pixels);a.tags&&aad_addAdditionalTags(a.tags);a.gaImp&&a.gaImp.label&&aad_GaTrackImps(a.gaImp.label,a.gaImp.max_imps?a.gaImp.max_imps:0);$("#wrap-content").prepend('<div id="pto-skin-bg"><div id="pto-skin"></div></div><div id="pto-skin-tp"></div>');$("#content").append('<div id="pto-skin-lt"></div><div id="pto-skin-rt"></div>');if(a.pgBg.clr||a.pgBg.img)$("#wrap.h-c #wrap-content").css({background:"none",
filter:"none"}),$("#wrap.h-s #wrap-content").css({background:"none",filter:"none"}),$("#wrap.h-cl #wrap-content").css({background:"none",filter:"none"}),$("#wrap.h-r #wrap-content").css({background:"none",filter:"none"}),$("#wrap.h-t #wrap-content").css({background:"none",filter:"none"}),$("#wrap.h-f #wrap-content").css({background:"none",filter:"none"}),$("#wrap.h-su #wrap-content").css({background:"none",filter:"none"});a.pgBg.clr&&($("#wrap-content").css("background-color",a.pgBg.clr),$("#footer").css("background-color",
a.pgBg.clr));a.pgBg.img&&($("#wrap-content").css({"background-image":"url("+a.pgBg.img+")","background-position":"center top"}),a.pgBg.rpt&&$("#wrap-content").css("background-repeat",a.pgBg.rpt));a.pgBg.navClr&&($(".panel-tab-buttons li a").css("color",a.pgBg.navClr),$(".panel-tab-buttons li.current a").css("color","#fff"),$("#nav-sub li a").css("color",a.pgBg.navClr),$("#nav-sub li a.current").css("color","#fff"));a.col2Transparent&&($(".column-2 .panel-body").first().css("background","transparent"),
$(".column-2 .panel").addClass("sponsored"),$(".column-2 .sponsored .panel-foot").css("background-image","url(http://vortex.accuweather.com/adc2010/images/bg-panel-foot-strong-trans.png)"));if(a.flashSrc||a.img.bg){$("#wrap-content").css("position","relative");var f=$("#wrap-content").offset(),l=$("body").innerWidth();$("#pto-skin-bg").offset(f);$("#pto-skin-tp").offset(f);$("#content").css("position","relative");$("#pto-skin").css({width:a.width+"px","margin-left":-Math.round(a.width/2)+"px"});$("#pto-skin-tp").css({width:l+
"px"});a.img.topHeight?$("#pto-skin-tp").css("height",a.img.topHeight+"px"):$("#pto-skin-tp").css("height",a.height+"px");$("#pto-skin-bg").css({width:l+"px",height:Number(a.height)+120+"px"});if(a.img.topShadow){var h;"shadow"==a.img.topShadow?(h="pto-skin-tp-s",$("#pto-skin-tp").html('<div class="pto-skin-tp-outer" id="pto-skin-tp-s"></div>')):"glow"==a.img.topShadow&&(h="pto-skin-tp-g",$("#pto-skin-tp").html('<div class="pto-skin-tp-outer" id="pto-skin-tp-g"></div>'));$("#pto-skin-tp").css("height",
$("#pto-skin-tp").height()+50+"px");$("#"+h).css({width:"auto",height:$("#pto-skin-tp").height()+"px"})}$(window).resize(function(){var a=$("body").innerWidth();$("#pto-skin-bg").css("width",a+"px");$("#pto-skin-tp").css("width",a+"px")});a.flashSrc&&a.useFlashImg?(c(a),b(a.img.bg,"#pto-skin-bg"),b(a.img.top,"#pto-skin-tp"),e(a.img.left,"#pto-skin-lt"),e(a.img.right,"#pto-skin-rt"),d(a)):a.flashSrc?(c(a),acm_hasFlash||b(a.img.bg,"#pto-skin-bg")):(b(a.img.bg,"#pto-skin-bg"),b(a.img.top,"#pto-skin-tp"),
e(a.img.left,"#pto-skin-lt"),e(a.img.right,"#pto-skin-rt"),d(a));g(a);0!=$(".panel-group").length&&$("#pto-skin-rt").css("right","3px")}a.href&&($("#wrap-content").css("cursor","pointer"),$(".column-1").css("cursor","auto"),$(".column-2").css("cursor","auto"),$("#offers").css("cursor","auto"),$(".logo-ad").css("cursor","auto"),$("#wrap-content").bind("click",function(b){var c=$(".column-1").offset().left-3;(205<b.pageY&&b.pageX<c||b.pageX>c+990)&&window.open(a.href,"_blank","")}))}}if(a=(a=aad_sponsorObjFx.get_adServer_sponsor(a,
"pto"))?a:aad_sponsorObjFx.get_sponsor(acfgCampaignTakeover,"pto"))if(a=aad_sponsorObjFx.get_assets(a,acfgPtoSkins))return f(a),a.threeDay&&(aad_setCustomSponsor(a.id,"3day"),aad_setThreeDaySponsor(aadCustomSponsor)),a.col2&&(aad_setCustomSponsor(a.id,"interestcolumn"),aad_setInterestColumnSponsor(aadCustomSponsor)),a.interestSection&&(aad_setCustomSponsor(a.id,"interest"),aad_setInterestPageSponsor(aadCustomSponsor)),!0;return!1}var AwaitTiles=!1,AwaitConfig=!1;
function aad_getCustomSponsors(a){a&&0==a.length&&(1==AwaitConfig&&HandleCustomSponsor(),AwaitTiles=!0)}function HandleCustomSponsor(){aad_setPageTakeOverSkin(aadCustomSponsor)||aad_setThreeDaySponsor(aadCustomSponsor);aad_ShowTestAds()}function aad_setCustomSponsor(a,c){a&&(gaManager.trackEvent("Advertising","CustomSponsorship/"+c,a),aadCustomSponsor.push({sponsor:a,type:c,run:!1}),1==AwaitTiles&&HandleCustomSponsor(),AwaitConfig=!0)}
function aad_trackCampaign(a){gaManager.trackEvent("Advertising",a,"Campaign_Tracker")}function aad_HideIndexCol2Sponsor(){$(document).ready(function(){$("body.forecast .rec").remove()})}
function aad_HideEdCalCloumnContent(){$(".sponsor-col2 .wx-matters").css("background","none");$(".sponsor-col2 .wx-matters .panel-body-content").css("display","none");$(".sponsor-col2 .wx-matters .subtle-head").css("background","none");$(".sponsor-col2 .wx-matters a").css("display","none");$(document).ready(function(){$(".sponsor-col2 .subtle .divide").each(function(){$(this).css("display","none")})})}function aad_RemoveSponsoredLinks(){$(document).ready(function(){$("#ad-links").remove()})}
function aad_Col2AllowOverflow(){$(document).ready(function(){$(".column-2 .panel").first().addClass("allow-overflow")})}function aad_Col2IndexShortDescription(){$("span#ixDescrip").css("display","none");$("span#ixDescripShort").css("display","inline");$(".column-2 .panel-sml-body-content").first().height(55)}
function aad_DisableAd(a){switch(a.toLowerCase()){case "atf300":aadTags.tile2=null;break;case "btf300":aadTags.tile3=null;break;case "btf728":aadTags.tile4=null;break;case "links":aadSponsoredLinksObj.show_links=!1}}function aad_IsTopAd300x600(a){return!1}
function aad_setPencilAd(){if("us"==apgInfoObjs.apgPageInfoObj.ad_site&&aadPencil)try{var a=document.getElementById("header-logo-search"),c=document.getElementById("header-davek"),b=a.parentNode,e=a.nextSibling===c?a:a.nextSibling;c.parentNode.insertBefore(a,c);b.insertBefore(c,e);$("#header-logo-search").css("margin-top","4px");$("#header-davek").css("margin-top","2px")}catch(d){}}
function aad_HideAdPanels(a){a?($("#aadTop300").hide(),$("#header-davek").hide(),$("#aadBot300").hide(),$(".logo-ad").hide()):($("#aadTop300").show(),$("#header-davek").show(),$("#aadBot300").show(),$(".logo-ad").show())}function aad_RemoveEmptyAdPanels(){$(window).load(function(){(0<$("#ad-links").length&&100>$("#ad-links").height()||0==aadSponsoredLinksObj.show_links)&&$("#ad-links").remove();0<$("#aadBot300").length&&100>$("#aadBot300").height()&&$("#aadBot300").remove()})}
function aad_ShowTestAds(){if("undefined"!=typeof acfgTestObj&&aadTestObj.key)for(var a=0;a<acfgTestObj.length;a++)if(aadTestObj.key.toLowerCase()==acfgTestObj[a].key.toLowerCase()){"function"==typeof acfgTestObj[a].fx.atf300&&acfgTestObj[a].fx.atf300();"function"==typeof acfgTestObj[a].fx.atf728&&acfgTestObj[a].fx.atf728();"function"==typeof acfgTestObj[a].fx.btf728&&acfgTestObj[a].fx.btf728();"function"==typeof acfgTestObj[a].fx.btf300&&acfgTestObj[a].fx.btf300();"function"==typeof acfgTestObj[a].fx.pencil&&
acfgTestObj[a].fx.pencil();break}}function aad_getColumn2Code(a){};
var aadUrlVideo={host:"http://pubads.g.doubleclick.net/gampad/ads",correlator:aadUrl.ord},adModule=null;function getVideoCompanionSizes(){var a=aad_updateObjFx.ad_sizes(),b=[],d;for(d in a)for(var e=0;e<a[d];e++)b.push(a[d][e]);return b.join(",")}
function aad_getKeyValuePairsDFPVideo(a){var b=[],d=[],e=LocalAdManager.keyValues,c;for(c in e)if(e[c])if(a)-1==aadYxExclude.toString().indexOf(c)&&(-1!=c.indexOf("ix")?-1!=c.indexOf("bus")?d.push("bus"):d.push(c.substring(2,7)):(b.push(c),b.push("%3D"),b.push(e[c]),b.push("%26")));else if(e[c]instanceof Array)for(var f=0;f<e[c].length;f++)b.push(c),b.push("%3D"),b.push(e[c][f]),b.push("%26");else b.push(c),b.push("%3D"),b.push(e[c]),b.push("%26");a&&0<d.length&&(b.push("ixv%3D"),b.push(d.toString()),
b.push("%26"));a||aadTestObj.key&&b.push("test%3D"+aadTestObj.key+"%26");return b.join("").split(" ").join("_").toLowerCase()}
function aad_getVideoTagDFP(a){aadTestObj.key&&console.log(a);try{for(var b=0;b<a.tags.length;b++)if("noad"==a.tags[b].toLowerCase())return""}catch(d){}aadTestObj.key&&console.log("noad not found");a=[];a.push(aadUrlVideo.host+"?");a.push("sz=400x300&");aadTestObj.key?a.push("iu=/6581/accuwx.us.test/video&"):a.push("iu=/6581/accuwx.us."+apgPageInfoObj.ad_section+"/"+apgPageInfoObj.ad_page+"&");a.push("impl=s&");a.push("ciu_szs=300x250&");a.push("gdfp_req=1&");a.push("env=vp&");a.push("output=xml_vast2&");
a.push("unviewed_position_start=1&");a.push("correlator="+aadUrl.ord+"&");a.push("url=http://www.accuweather.com/en/weather-video/&");a.push("description_url="+encodeURI(document.URL)+"&");a.push("cust_params=");try{a.push(aad_getKeyValuePairsDFPVideo())}catch(e){aadTestObj.key&&console.log(e)}aadTestObj.key&&console.log(a.join("").split("&&").join("&"));return a.join("").split("&&").join("&")}
function aad_getVideoAdOverlay(a,b){if("video"!=a)return"";var d="video-overlay";-1!=aadUrl.zone.indexOf("/")&&(d=aadUrl.zone.split("/")[0]+"/"+d);return aad_getVideoTagDFP({zone:d,tags:b})}function adVideoInPage(a,b){return aad_getVideoAdOverlay(a,b)}function aad_getVideoAdPage(a,b){return"video"!=a?"":aad_getVideoTagDFP({zone:"video",tags:b})};

Error saving setting with name: consoleHistory, value length: 5625872. Error: Failed to set the 'consoleHistory' property on 'Storage': Setting the value of 'consoleHistory' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5235078
Setting: 'previouslyViewedFiles', size: 3674
Setting: 'savedURLs', size: 3629
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 45
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
(a,c){if("undefined"!=typeof a)if("string"==typeof a)for(var b=0;b<c.length;b++){if(c[b].id.toString().toLowerCase()==a.toLowerCase())return c[b]}else if(a.assetId)for(b=0;b<c.length;b++)if(c…
Error saving setting with name: savedURLs, value length: 3674. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5235078
Setting: 'previouslyViewedFiles', size: 3674
Setting: 'savedURLs', size: 3629
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 45
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
Error saving setting with name: savedURLs, value length: 3719. Error: Failed to set the 'savedURLs' property on 'Storage': Setting the value of 'savedURLs' exceeded the quota.
Ten largest settings: 
Setting: 'consoleHistory', size: 5235078
Setting: 'previouslyViewedFiles', size: 3674
Setting: 'savedURLs', size: 3629
Setting: 'breakpoints', size: 227
Setting: 'watchExpressions', size: 45
Setting: 'lastSelectedSourcesSidebarPaneTab', size: 7
Setting: 'domBreakpoints', size: 2
Setting: 'eventListenerBreakpoints', size: 2
Setting: 'experiments', size: 2
Setting: 'workspaceExcludedFolders', size: 2
