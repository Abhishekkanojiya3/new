console.log(document.domain);
console.log(document.title);
//console.log(document.all);
//document.title='hello';


//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
document.getElementById('header-title').style.fontWeight = "bold";
document.getElementById("header-title").style.color = "green";