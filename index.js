var url = window.location.href;
window.onload = welcomeFunc();
var n = url.lastIndexOf('.');
console.log(url.substring(n));


function welcomeFunc () {
    console.log(url.substring(n));
    if (url.substring(n) == ".com") {
        console.log("in the if in the func")
        window.location.href = url + "#welcome";
    }
};


if (url.substring(n) == ".com") {
    console.log("in the if out the func")
    window.location.href = url + "#welcome";
}



