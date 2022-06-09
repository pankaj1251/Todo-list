//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event-listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event){
    //prevent form from submitting;
    event.preventDefault();

    // create todo div;
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li;
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;    // we have todo-input class for text section in form, so we select its value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); // add this li to div;

    //now we have to create two buttons;

    //create "checked" button
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = "<i class='fas fa-check'></i>";
    checkedButton.classList.add("checked-button");
    todoDiv.appendChild(checkedButton);

    //create "trash" button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //now append everything to ul list;
    todoList.appendChild(todoDiv);    //todoList is defined above;

    //clear todo input value
    todoInput.value="";
}

function deleteCheck(event){
    /* to select the clicked item
    console.log(event.target); */

    const item = event.target;

    //DELETE TODO
    if(item.classList[0] === 'trash-button'){
        // item.remove(); it only deletes the button 
        //so we access its parent and delete it;
        const rem = item.parentElement;

        //animation
        rem.classList.add("fall");
        // rem.remove(); //{we cant remove like this bc transition finishes immidiately here thats ehy we use an eventListener}
        rem.addEventListener('transitionend', function(){
            rem.remove();
        })
    }

    //CHECK TODO
    if(item.classList[0]==='checked-button'){
        const chk = item.parentElement;
        chk.classList.toggle("completed");
    }
}