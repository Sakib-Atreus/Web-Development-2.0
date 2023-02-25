function todoJSON(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTODO(data))
}

function displayTODO(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoStyle');
        todoDiv.innerHTML = `
        <h3>User ID : ${todo.userId}</h3>
        <h4>Title : ${todo.title}</h4>
        <p>Is completed : ${todo.completed === true ? 'complete': 'not complete'}
        `
        todoContainer.appendChild(todoDiv);
    }
}

todoJSON();