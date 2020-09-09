//suorita varmmuuden vuoksi onload funtion sisälä
window.onload = () => {
  console.log("page loaded");

  //hae muuttujiin tarvittavat html elementit
  let form = document.getElementById("form");
  let todolist = document.getElementById("todolist");
  let icons = document.getElementsByClassName('deletebutton');

  //form submit = funktio joka luo listan todo-elementit ja lisää sen listaan
  form.onsubmit = (e) => {
    //luo todo-elementin tarvitsemat elementit
    //lista
    let li = document.createElement("li");

    //delete nappi
    let delbtn = document.createElement("div")
    delbtn.className = "deletebutton";
    let svg = document.createElement('img');
    svg.id = "deleteicon"
    svg.src="icons/del.svg"
    delbtn.appendChild(svg);
    let icontext = document.createElement("p");
    icontext.innerHTML = "Delete";
    delbtn.appendChild(icontext);
    

    //kommentit span
    let comments = document.createElement("span");
    //todo input sisältö
    let content = form.todo.value;
    //comments input sisältö
    let commentsText = form.comments.value;
    //timestamp
    let timeStamp = document.createElement("p");
    let time = new Date();

    //lisää listaelementtiin sisältö, kommentit, delete nappi ja timestamppi
    li.append(content);

    li.appendChild(comments).append(`Comments: ${commentsText}`);
    comments
      .appendChild(timeStamp)
      .append(`Created on: ${time.toLocaleDateString()}`);
    //timeStamp.appendChild(del);
    li.appendChild(delbtn);
    //lisää listaelementti kilkkeineen listaan
    //todolist.appendChild(li);
    
    //lisätään listaan, uusin tulee aina ylimmäksi
    todolist.insertAdjacentElement('afterbegin', li);
   

    deleteTodo();

    event.preventDefault();
  };


  //lisätään jokaiseen ikoniin eventti joka poistaa isäntäelementin (li)
  let deleteTodo = () => {
    for (let i of icons) {
       i.addEventListener('click', () => {
           i.parentElement.remove();
           event.stopPropagation();
       })
    }
   }
   

};


//const del = document.querySelector("del");

//tee logiikka joka poistaa itemin =>

//let comments = document.forms.form.comments;

const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  todolist.innerHTML = "";
  console.log("clear painettu");
});

/*  let onSubmit = (e) => {
    let li = document.createElement("li");
    let log = `Form submitted! Time Stamp: ${e.timeStamp}`;
    ul.appendChild(li).append(todo.value);
    console.log("todoon menee: " + todo);
  };
}; */

/* 
const deltodo = deltodo => {
    li.addEventListener("click", () => {
        li.remove();
        event.stopPropagation();
    } )
}


 */

/* todoInput.addEventListener('submit', validateForm = () => {
    let todoItem = document.forms.todoForm.todo.value;
    if (todoItem == null || todoItem == "") {
        alert.log("Form must not be empty!");
        return false;
    }
    console.log("Todoitem has content:" + todoItem)
}) */
//add new todo
/* let keyCode;
input.addEventListener('keydown', (e) => {
  keyCode = e.keyCode
  console.log(keyCode)
  if (keyCode === 13) {
      console.log("enter painettu")
      let li = document.createElement("li")
      let todotext = input.value;
      ul.appendChild(li).append(todotext)
      //reset input
      input.value = "";

      deltodo();
  }
}); */

//delete todo
