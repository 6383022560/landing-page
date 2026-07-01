    const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.onclick = function () {

    if(taskInput.value === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskInput.value;

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    let del = document.createElement("button");
    del.textContent = "Delete";

    del.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(del);

    taskList.appendChild(li);

    taskInput.value = "";
};