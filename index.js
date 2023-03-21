var url = window.location.href;
window.onload = welcomeFunc();

function welcomeFunc () {
    var n = url.lastIndexOf('/');
    if (url.substring(n) == "/index.html") {
        window.location.href = url + "#welcome";
    }
};

var n = url.lastIndexOf('/');
if (url.substring(n) == "/index.html") {
    window.location.href = url + "#welcome";
}



