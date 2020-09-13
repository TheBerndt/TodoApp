window.onload = () => {
  console.log("page loaded");

  //hae muuttujiin tarvittavat html elementit
  let form = document.getElementById("form");
  let todolist = document.getElementById("todolist");
  let icons = document.getElementsByClassName("deletebutton");

  //form submit = funktio joka luo listan todo-elementit ja lisää sen listaan
  form.onsubmit = () => {
    //luo todo-elementin tarvitsemat elementit
    let content_container = document.createElement("div");
    content_container.id = "content-container"
    let li = document.createElement("li");
    li.className = "flexchild";

    //todo sisältö
    let content = document.createElement("p");
    content.id = "content";
    content.append(form.todo.value);

    //kommentit sisältö
    let comments = document.createElement("span");
    comments.id = "comments";
    comments.append(form.comments.value);
    
    //timestamp
    let timeStamp = document.createElement("p");
    timeStamp.id = "timeStamp";
    let time = new Date();
    timeStamp.append(`Created on: ${time.toLocaleDateString()}`);

    //delete nappi
    let delbtn = document.createElement("div");
    delbtn.className = "deletebutton";
    let svg = document.createElement("img");
    svg.id = "deleteicon";
    svg.src = "icons/del.svg";
    delbtn.appendChild(svg);

    //lisää listaelementtiin sisältö, kommentit, delete nappi ja timestamppi
    content_container.appendChild(content);
    content_container.appendChild(delbtn);
    content_container.appendChild(comments);
    content_container.appendChild(timeStamp)
    li.appendChild(content_container);

    //lisätään listaan, uusin tulee aina ylimmäksi
    todolist.insertAdjacentElement("afterbegin", li);

    //lisätään eventhandlerin lisäävä funktio luotavaan todo-listaelementtiin
    deleteTodo();

    event.preventDefault();
  };

  //lisätään jokaiseen deleteikoniin eventti joka poistaa isäntäelementin (li)
  let deleteTodo = () => {
    for (let i of icons) {
      i.addEventListener("click", () => {
        i.parentElement.parentElement.remove();
        event.stopPropagation();
      });
    }
  };
};

//tehdään nappi joka tyhjentää listan sisällön
const clear = document.querySelector(".clearbtn");

clear.addEventListener("click", function () {
  todolist.innerHTML = "";
  console.log("clear painettu");
});
