import { addTodo, display, getFromStorage } from './todofunctions.js';

//varmistetaan että dokumentti on ladannut
window.onload = () => {
  //haetaan elementtejä muuttujiin
  let form = document.getElementById('form');
  let todolist = document.getElementById('todolist');
  let deletebtn = document.getElementsByClassName('delete');
    
  //haetaan ensin local storagesta todot
  getFromStorage();
  
  //form submit = funktio joka luo listan todo-elementit ja lisää sen listaan
  form.onsubmit = () => {

    //estetään formin default submit
    event.preventDefault();

    //kutsutaan addTodo() ja esitetään ne listalla, display()
    addTodo();
    display();
  };

  //tehdään nappi joka tyhjentää listan sisällön
  const clear = document.querySelector('.clearbtn');
  clear.addEventListener('click', function () {
    if (confirm('Are you sure you want to clear all items?')) {
      todolist.innerHTML = '';
      localStorage.clear();
      location.reload();
    } else {
      //
    }
    
    //console.log('clear painettu');
  });

};
