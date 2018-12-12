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
	
