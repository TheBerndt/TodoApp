//save all todos into array
let todos = [];

//addTodo function creates addtodo objects and pushes them into array and localstorage
const addTodo = () => {
  //variables -->
  const title = form.todo.value;
  const comments = form.comments.value;
  const time = new Date().toLocaleString()

  //create todo object
  let todo = {
    id: Date.now(),
    title: title,
    comments: comments,
    time: time,
    delete: "Delete",
  };

  //push to array, call addToStorage
  todos.push(todo);
  addToStorage(todos);
  form.todo.value = "";
  form.comments.value = "";
};

//function that renders todos from arrays, uses template literals to construct the li html
const display = () => {
  todolist.innerHTML = "";
  for (let item of todos) {
    if (!todos.includes(item.id)) {
      const li = document.createElement("li");
      li.setAttribute("key", item.id);
      li.innerHTML = `<p class='content'>${item.title}</p> <p class='comments'>${item.comments}</p> <p class='timeStamp'> Created on: ${item.time} </p> <u class="deletebtn">Delete</u>`;
      todolist.insertAdjacentElement("afterbegin", li);
    }
  }
};

//function that adds todos to localstorage in JSON format
const addToStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//function that gets todos from localstorage, parses them from JSON
const getFromStorage = () => {
  const storedItems = localStorage.getItem('todos');
  if (storedItems) {
    todos = JSON.parse(storedItems);
    display(todos);
  }
};

//delete function, uses key to filter todos from array, creates new array and adds it to storage
const deleteTodo = (key) => {
  console.log('deleted key: ', key);
  todos = todos.filter((item) => item.id != key);
  console.log('todos after filter: ', todos);
  addToStorage(todos);
  display();
  event.stopPropagation();
};

//creates eventlistener to deletebuttons, assigns key to delete buttons parent = li item
todolist.addEventListener('click', () => {
  if (event.target.classList.contains('deletebtn')) {
    const key = event.target.parentElement.getAttribute('key');
    console.log('target key: ', key);
    deleteTodo(key);
    console.log('delete event target ', event.target.parentElement);
  }
});

//exports to todoapp.js
export { addTodo, display, addToStorage, getFromStorage, deleteTodo };
