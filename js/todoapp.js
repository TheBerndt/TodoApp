import { addTodo, display, getFromStorage } from './todofunctions.js';

//lets make sure document is loaded
window.onload = () => {
  //variables
  const form = document.getElementById('form');
  const todolist = document.getElementById('todolist');
  const deletebtn = document.getElementsByClassName('delete');
    
  //get todos from localstorage if present
  getFromStorage();
  
  //form onsubmit function that executes addTodo() and display()
  form.onsubmit = () => {

    //prevent forms default submit behaviour
    event.preventDefault();

    //call addTodo() and render them using display()
    addTodo();
    display();
  };

  //a button to clear all todos and reload document
  const clear = document.querySelector('.clearbtn');
  clear.addEventListener('click', function () {
    if (confirm('Are you sure you want to clear all items?')) {
      todolist.innerHTML = '';
      localStorage.clear();
      location.reload();
    } else {
      //
    }
  
  });

};
