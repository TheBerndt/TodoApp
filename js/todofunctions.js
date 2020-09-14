//array mihin tallennetaan todo-objekti
let todos = [];

//addTodo() joka luo todon sisällön
const addTodo = () => {
  //muuttujia -->
  let title = form.todo.value;
  let comments = form.comments.value;
  let time = new Date();
  let timeStamp = time.toLocaleDateString();

  //luodaan todo-objekti
  let todo = {
    id: Date.now(),
    title: title,
    comments: comments,
    time: timeStamp,
    delete: "Delete",
  };

  //pushataan luotu objekti -> todo array
  todos.push(todo);
  addToStorage(todos);
  form.todo.value = "";
  form.comments.value = "";
};

//display() jonka funktio on lisätä todos sisältö arraysta html listaelementtiin <p> elementteinä template literaalien avulla
const display = () => {
  todolist.innerHTML = "";
  for (let item of todos) {
    if (!todos.includes(item.id)) {
      let li = document.createElement("li");
      li.setAttribute("key", item.id);
      li.innerHTML = `<p class='content'>${item.title}</p> <p class='comments'>${item.comments}</p> <p class='timeStamp'> Created on: ${item.timeStamp} </p> <u class="deletebtn">Delete</u>`;
      todolist.insertAdjacentElement("afterbegin", li);
    }
  }
};

//addStorage() joka lisää localstorageen todos arrayn
const addToStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//getFromStorage() joka hakee localstoragesta sen hetkisen todos arrayn, huolehtii että todo-lista on ajantasalla
const getFromStorage = () => {
  const storedItems = localStorage.getItem('todos');
  if (storedItems) {
    todos = JSON.parse(storedItems);
    display(todos);
  }
};

//deleteTodo() hakee parametrina annetun listan key-attribuutin avulla ja filtteröi siitä uuden arrayn joka tallennetaan todos arrayhin
const deleteTodo = (key) => {
  console.log('deleted key: ', key);
  todos = todos.filter((item) => item.id != key);
  console.log('todos after filter: ', todos);
  addToStorage(todos);
  display();
  event.stopPropagation();
};

//lisää eventlistenerin jokaiseen deletebutton luokan elementtiin joka kutsuu deleteTodo() funktiota painettaessa
todolist.addEventListener('click', () => {
  if (event.target.classList.contains('deletebtn')) {
    const key = event.target.parentElement.getAttribute('key');
    console.log('target key: ', key);
    deleteTodo(key);
    console.log('delete event target ', event.target.parentElement);
  }
});

//moduuliexportilla funktiot todoapp.js käyttöön
export { addTodo, display, addToStorage, getFromStorage, deleteTodo };
