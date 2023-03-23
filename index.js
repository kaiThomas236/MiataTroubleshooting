var url = window.location.href;
var n = url.lastIndexOf('.');

if (url.substring(n) == ".com" || url.substring(n) == ".com/") {
    console.log("in the if out the func")
    window.location.href = url + "#welcome";
}




