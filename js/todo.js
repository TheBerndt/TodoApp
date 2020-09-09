window.onload = () => {
  console.log("page loaded");

  //hae muuttujiin tarvittavat html elementit
  let form = document.getElementById("form");
  let todolist = document.getElementById("todolist");
  let icons = document.getElementsByClassName('deletebutton');

  //form submit = funktio joka luo listan todo-elementit ja lisää sen listaan
  form.onsubmit = () => {
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

  //lisätään jokaiseen deleteikoniin eventti joka poistaa isäntäelementin (li)
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


//let comments = document.forms.form.comments;

const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  todolist.innerHTML = "";
  console.log("clear painettu");
});

