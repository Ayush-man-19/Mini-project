function add()
{
    var x = document.getElementById("todoList").value;
    k = x[0].toUpperCase() + x.slice(1);
    var list = document.createTextNode(k);
    var newItem = document.createElement("li");
    newItem.appendChild(list);
    document.getElementById("hero").appendChild(newItem);
}


function remove()
{
   var list = document.getElementById("hero");
   list.removeChild(list.childNodes[0]);
}
