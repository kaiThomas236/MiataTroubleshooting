var url = window.location.href;
window.onload = welcomeFunc();
var n = url.lastIndexOf('.');

function welcomeFunc () {
    if (url.substring(n) == ".com") {
        window.location.href = url + "#welcome";
    }
};


if (url.substring(n) == ".com") {
    window.location.href = url + "#welcome";
}



