var itemList = document.querySelector('#items');

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';\

//console.log(itemList.childNodes);

//console.log(itemList.firstElementChild);

// console.log(itemList.lastElementChild);

// itemList.lastElementChild.style.color='green';

var newDiv = document.createElement('div');

newDiv.className='hello';

var newDivText =document.createTextNode('hello world');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

//console.log(newDiv);

container.insertBefore(newDiv, h1);

var Item=document.querySelector('.list-group-item');

Item.insertBefore(newDiv,Item.firstElementChild);


