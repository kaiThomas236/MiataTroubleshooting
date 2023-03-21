var url = window.location.href;

// var id;
// var welc = true;

// var n = url.lastIndexOf('/');
// if (url.substring(n) == "/index.html"){
//     id = "welcome";
// } else {
//     var k = url.lastIndexOf('#');
//     id = url.substring(k).substring(1);
// }


// var active = document.getElementById(id);
// console.log(active.classList);
// active.classList.add("section-active");

var n = url.lastIndexOf('/');
if (url.substring(n) == "/index.html"){
    window.location.href = url+"#welcome";
}
