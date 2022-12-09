var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var newDes = document.getElementById('description').value;



  var li = document.createElement('li');

  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));
 
  li.appendChild(document.createTextNode(" " + newDes));


  var deleteBtn = document.createElement('button');


  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  
  var editButton = document.createElement('button');
  editButton.appendChild(document.createTextNode('EDIT'));

  li.appendChild(editButton);

  itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
 // var descItems = desItems.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
      //description.style.display = 'block';

    } else {
      item.style.display = 'none';
     // description.style.display = 'block';
    }
  });
  
}

