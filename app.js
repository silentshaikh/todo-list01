let todoInp = document.getElementById("todo-input");
let todoAdd = document.getElementById("btn1");
let clearBtn = document.getElementById("btn2");
let parList = document.getElementById("todo-list");
const addList = () => {
    let getTodo = localStorage.getItem("TodoList");
    if(getTodo === null){
        myObj = [];
    }else{
        myObj = JSON.parse(getTodo);
    }
    let todolist = ``;

    myObj.forEach((element,index) => {
        todolist += `  <li>
            <p id="para">${element.todoList}</p>
        <i id="edit" title="Edit" onclick="todoEdit(this)" class="fa-solid fa-pen-fancy"></i>
            <i id="delete" title="Delete" onclick="todoDelete(${index})" class="fa-solid fa-trash"></i>
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
        if(getTodo === null){
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
    addList();
}
todoAdd.addEventListener("click",addFunc);

function todoDelete(index){
    let getTodo = localStorage.getItem("TodoList");
    if(getTodo === null){
        myObj = [];
    }else{
        myObj = JSON.parse(getTodo);
    }
    myObj.splice(index,1);
    localStorage.setItem("TodoList",JSON.stringify(myObj));
    addList();
};
function todoEdit(e){
    let myTask = e.previousElementSibling;
    todoInp.value = myTask.innerText;
    todoDelete(e);
}
// clearBtn.addEventListener("click",() => {
//     let getTodo = localStorage.getItem("TodoList");
//     if(getTodo === null){
//         myObj = [];
//     }else{
//         myObj = JSON.parse(getTodo);
//     }
//     myObj.splice(0,myObj.length);
//     localStorage.setItem("TodoList",JSON.stringify(myObj));
//     addList();
// })