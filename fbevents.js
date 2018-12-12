-runned:
<script>
        !function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js'
        );
        fbq('init', '876971395725974');
        fbq('track', 'PageView');
        // 如果是注册成功页
        if (getConf('pageType') === 'regsuccess') {
            // alert(getConf('pageType'));
            fbq('track', 'CompleteRegistration');
        }
        // 如果是充值页
        if (getConf('pageType') === 'topupnew') {
            // alert(getConf('pageType'));
            fbq('track', 'Purchase', {value: '0.00', currency:'USD'});
        }
    </script>

-returned:

https://www.facebook.com/tr/?id=876971395725974&ev=PageView&dl=https%3A%2F%2Faplikasiadi2.blogspot.com%2F2018%2F12%2Fscript-cliponyu.html&rl=&if=false&ts=1544617555724&sw=1024&sh=1366&v=2.8.34&r=stable&ec=0&o=30&fbp=fb.2.1544609158209.1862539373&it=1544617552444&coo=false

http://img.baidu.com/hunter/cliponyu.js?st=-17878

https://connect.facebook.net/en_US/fbevents.js
-fbevents.js hacked:
            s.parentNode.insertBefore(t, s)
}(

https://connect.facebook.net/signals/config/876971395725974?v=2.8.34&r=stable
-stable hacked:
function c(a){var c=g.createElement("script");c.src=a;c.async=!0;a=b();a&&a.parentNode?a.parentNode

function y(a,b,c){d.

function(b){return b===a})==!1)&&

,userData:b||{},eventCount:0};N.push(d);O[a]=d;b!=null&&$("identity");V();R.

);break;case"init":M=!0;U.

function ia(){while(a.queue.length&&!G.isLocked()){var b=a.queue.shift();S.

(function(){i

function(b){return 

return Array.prototype.map.

,each:function(a,b){r.

length===0&&
	
value:function(a){this.

value:function(a){this.configsLoaded[a]=!0,this.locks.

}});instance.

c.__fbEventsPlugin===1&&(H[b]=c,H[b].

registerPlugin("global_config",
     
	       
