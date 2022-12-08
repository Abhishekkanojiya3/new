var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;


  var li = document.createElement('li');

  li.className = 'list-group-item';
  
  li.appendChild(document.createTextNode(newItem));

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

