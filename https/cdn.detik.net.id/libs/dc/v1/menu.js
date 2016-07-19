-My build of DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad++ (HTML Editor):
-Via Node.js:
To be runned:
https://cdn.detik.net.id/libs/dc/v1/menu.js :
>
> var dtkNavMenu = [
...     {
...         title:'detikcom',
...         link:'http://www.detik.com/',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_detikcom.png',
...         isNew:false
...     },
...     {
...         title:'detikNews',
...         link:'http://news.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_news.png',
...         isNew:false
...     },
...     {
...         title:'detikFinance',
...         link:'http://finance.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_finance.png',
...         isNew:false
...     },
...     {
...         title:'detikHot',
...         link:'http://hot.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_hot.png',
...         isNew:false
...     },
...     {
...         title:'detikInet',
...         link:'http://inet.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_inet.png',
...         isNew:false
...     },
...     {
...         title:'detikSport',
...         link:'http://sport.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_sport.png',
...         isNew:false
...     },
...     {
...         title:'Sepakbola',
...         link:'http://sport.detik.com/sepakbola',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_sepakbola.png',
...         isNew:false
...     },
...     {
...         title:'detikOto',
...         link:'http://oto.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_oto.png',
...         isNew:false
...     },
...     {
...         title:'detikFood',
...         link:'http://food.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_food.png',
...         isNew:false
...     },
...     {
...         title:'detikHealth',
...         link:'http://health.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_health.png',
...         isNew:false
...     },
...     {
...         title:'Wolipop',
...         link:'http://wolipop.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_wolipop.png',
...         isNew:false
...     },
...     {
...         title:'detikTravel',
...         link:'http://travel.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_travel.png',
...         isNew:false
...     },
...     {
...         title:'detiktv',
...         link:'http://tv.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_tv.png',
...         isNew:false
...     },
...     {
...         title:'detikFoto',
...         link:'http://foto.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_foto.png',
...         isNew:false
...     },
...     {
...         title:'Pasangmata',
...         link:'https://pasangmata.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_pasangmata.png',
...         isNew:false
...     },
...     {
...         title:'detikForum',
...         link:'http://forum.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_forum.png',
...         isNew:false
...     },
...     {
...         title:'Blogdetik',
...         link:'http://blog.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_blogdetik.png',
...         isNew:false
...     },
...     {
...         title:'Morning Friends',
...         link:'http://tv.detik.com/morningfriends',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_mf.png',
...         isNew:false
...     },
...     {
...         title:'detikRewards',
...         link:'https://rewards.detik.com',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_rewards.png',
...         isNew:false
...     },
...     {
...         title:'Solusi UKM',
...         link:'http://solusiukm.detik.com/?utm_source=desktopdetik&utm_medium
=navbar&utm_campaign=solusiukm',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_solusiukm.ico',
...         isNew:true
...     },
...     {
...         title:'dNewGeneration',
...         link:'http://www.detik.com/dnewgeneration/?utm_source=desktopdetik&u
tm_medium=navbar&utm_campaign=dnewgeneration',
...         img:'//cdn.detik.net.id/libs/dc/v1/image/fmb_dnewg.png',
...         isNew:true
...     }
... ], dtkNavMenuStr = '', dtkNavMenuMobileStr = '';
undefined
>
> var parseSecond = function() {
...     var result = "desktop",
...         tmp = [];
...     var items = location.search.substr(1).split("&");
...     for (var index = 0; index < items.length; index++) {
.....         tmp = items[index].split("=");
.....         if (tmp[0] === 'ui') result = decodeURIComponent(tmp[1]);
.....     }
...     return result;
... }
undefined
>
> for (var i = 0;i < dtkNavMenu.length; i++) {
...
...     var attr = {cls:'', label:''};
...
...     if (dtkNavMenu[i].isNew)
...         var attr = {cls:'sp', label:' <strong>new</strong>'};
...
...     dtkNavMenuStr += ' <a href="'+dtkNavMenu[i].link+'" class="'+attr.cls+'"
 target="_blank"><img src="'+dtkNavMenu[i].img+'"> <span>'+dtkNavMenu[i].title+'
</span>'+attr.label+'</a>';
...     dtkNavMenuMobileStr += ' <option value="'+dtkNavMenu[i].link+'">'+dtkNav
Menu[i].title+'</option>';
... }
' <option value="http://www.detik.com/">detikcom</option> <option value="http://
news.detik.com">detikNews</option> <option value="http://finance.detik.com">deti
kFinance</option> <option value="http://hot.detik.com">detikHot</option> <option
 value="http://inet.detik.com">detikInet</option> <option value="http://sport.de
tik.com">detikSport</option> <option value="http://sport.detik.com/sepakbola">Se
pakbola</option> <option value="http://oto.detik.com">detikOto</option> <option
value="http://food.detik.com">detikFood</option> <option value="http://health.de
tik.com">detikHealth</option> <option value="http://wolipop.detik.com">Wolipop</
option> <option value="http://travel.detik.com">detikTravel</option> <option val
ue="http://tv.detik.com">detiktv</option> <option value="http://foto.detik.com">
detikFoto</option> <option value="https://pasangmata.detik.com">Pasangmata</opti
on> <option value="http://forum.detik.com">detikForum</option> <option value="ht
tp://blog.detik.com">Blogdetik</option> <option value="http://tv.detik.com/morni
ngfriends">Morning Friends</option> <option value="https://rewards.detik.com">de
tikRewards</option> <option value="http://solusiukm.detik.com/?utm_source=deskto
pdetik&utm_medium=navbar&utm_campaign=solusiukm">Solusi UKM</option> <option val
ue="http://www.detik.com/dnewgeneration/?utm_source=desktopdetik&utm_medium=navb
ar&utm_campaign=dnewgeneration">dNewGeneration</option>'
>
> if (parseSecond()=='mobile')
...     dtkmenu([dtkNavMenuMobileStr]);
ReferenceError: location is not defined
    at parseSecond (repl:4:13)
    at repl:1:5
    at REPLServer.defaultEval (repl.js:272:27)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:441:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
    at REPLServer.Interface._onLine (readline.js:224:10)
    at REPLServer.Interface._line (readline.js:566:8)
> else
...     dtkmenu(['<div class=menu_k>'+dtkNavMenuStr+'<div class=clearfix></div><
/div>']);
...
...
...
