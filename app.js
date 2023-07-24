let todoList = document.getElementById("todo-list");
let todoInput = document.getElementById("todo-input");
let todoAdd = document.getElementById("btn1");
let todoClr = document.getElementById("btn2");
let editBtn = document.getElementById("edit-btn");
let deleteBtn = document.getElementById("delete-btn");
let crd = document.getElementById("crd");


todoAdd.addEventListener("click", () => {
    if (todoInput.value === "") {
        alert("Enter a List");
    } else {
        let list = ` 
        <p id="para">${todoInput.value}</p>
        `;
        // <i  class="fa-solid fa-ellipsis-vertical"></i>
        let creLi = document.createElement("li");
        let barBe = document.createElement("i");
        creLi.setAttribute("id", "tod-list");
        barBe.setAttribute("class", "fa-solid fa-ellipsis-vertical");
        creLi.innerHTML = list;
        creLi.appendChild(barBe);
        // barBe.setAttribute("id", "togl")
        todoList.appendChild(creLi);
        todoInput.value = "";

        // console.log(todoTogl);
        let todoTogl = creLi.children[1];
        // toggle button
        let togg = () => {
            crd.classList.toggle("show");
        }
        todoTogl.addEventListener("click", togg);

        //Edit
        let todoPara = document.getElementById("para");
        editBtn.addEventListener("click", () => {
            if (todoInput.value === "") {
                todoInput.value = todoPara.innerText;
            } else if (todoInput.value !== "") {
                todoPara.innerText = todoInput.value;

                todoInput.value = "";
            };


        });
        //delete
        let todList = document.getElementById("tod-list");
        deleteBtn.addEventListener("click", () => {
            todList.remove();
            crd.remove();

        });


    };

});
//Clear
todoClr.addEventListener("click", () => {
    todoList.innerHTML = "";
});




