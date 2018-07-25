var todos = ["item 1", "item 2", "item 3"]

console.log(todos)

todos.push("item 4")
todos.push("item 5")

todos[0] = "item 1 updated"

todos.splice(0, 1);

todos.splice(0, 3);

function displayTodos {
    console.log("My Todos:", todos);
}

function changeTodo(position, newValue ) {
todos[position] = newValue;
displayTodos(); 
}

function deleteTodo(position) {
	todos.splice(position, 1)
	displayTodos();
}



