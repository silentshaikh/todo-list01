let todoInp = document.getElementById("todo-input");
let todoAdd = document.getElementById("btn1");
let clearBtn = document.getElementById("btn2");
let parList = document.getElementById("todo-list");
const addList = () => {
    let getTodo = localStorage.getItem("TodoList");
    if(getTodo == null){
        myObj = [];
    }else{
        myObj = JSON.parse(getTodo);
    }
    let todolist = ``;

    myObj.forEach((element,index) => {
        todolist += `  <li id="${index}">
            <p id="para">${element.todoList}</p>
        <i id="edit" onclick="todoEdit(this)"  title="Edit" class="fa-solid fa-pen-fancy"></i>
            <i id="delete" onclick="todoDelete(this)" title="Delete" class="fa-solid fa-trash"></i>
        </li>
       
        `;
    })
    parList.innerHTML = todolist;

}
addList();


const addFunc = () => {
    let getTodo = localStorage.getItem("TodoList");
    if(todoInp.value === ""){
        alert("Please Fill the Input");
    }else{
        if(getTodo == null){
            myObj = [];
        }else{
            myObj = JSON.parse(getTodo);
        }
            myObj.push({
                todoList:todoInp.value,
            });
    };
    
    localStorage.setItem("TodoList",JSON.stringify(myObj));
    todoInp.value = "";
    console.log(myObj);
    addList();
}
todoAdd.addEventListener("click",addFunc);

const todoDelete = (e) => {
    let todoDel = e.parentElement.id;
    let getTodo = localStorage.getItem("TodoList");
    if(getTodo == null){
        myObj = [];
    }else{
        myObj = JSON.parse(getTodo);
    }
    myObj.splice(todoDel,1);
    localStorage.setItem("TodoList",JSON.stringify(myObj));
    addList();
};
const todoEdit = (e) => {
    let myTask = e.previousElementSibling;
    todoInp.value = myTask.innerText;
    console.log(myTask);
    todoDelete(e);
    
}
clearBtn.addEventListener("click",() => {
    let getTodo = localStorage.getItem("TodoList");
    if(getTodo === null){
        myObj = [];
    }else{
        myObj = JSON.parse(getTodo);
    }
    myObj.splice(0,myObj.length);
    localStorage.setItem("TodoList",JSON.stringify(myObj));
    addList();
})