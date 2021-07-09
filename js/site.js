"use strict"


let count = 0;

function addTask() {
    count++;
    let Tasktemplate = `<li class="item list-group-item">Task ${count}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += Tasktemplate;
}

document.getElementById("btn-task").onclick = function() {
    addTask();
}