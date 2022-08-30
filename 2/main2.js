//Criar uma lista com nome de oito frutas.

var fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Huckleberry'];
var fruitList = document.createElement('ul');

fruitList.setAttribute('id', 'fruitList');
document.body.appendChild(fruitList);
for (var i = 0; i < fruits.length; i++) {
  var fruit = document.createElement('li');
  fruit.innerHTML = fruits[i];
  fruitList.appendChild(fruit);
}

//A cada letra digitada no campo de pesquisa, procurar na lista.

var searchField = document.getElementById('searchField');
var fruitList = document.getElementById('fruitList');

searchField.addEventListener('keyup', function() {
  var searchValue = searchField.value.toLowerCase();
  var fruitItems = fruitList.getElementsByTagName('li');
  for (var i = 0; i < fruitItems.length; i++) {
    var fruit = fruitItems[i].innerHTML.toLowerCase();
    if (fruit.indexOf(searchValue) > -1) {
      fruitItems[i].style.display = 'block';
    } else {
      fruitItems[i].style.display = 'none';
    }
  }
});


//Criar uma função que adiciona itens a lista.

var searchField2 = document.getElementById('searchField2');

function mais() {
  var x = document.createElement("li");
  var t = document.createTextNode("This is a paragraph.");
  x.appendChild(t);
  document.getElementById('tarefas').appendChild(x);
}
