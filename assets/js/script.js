var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    event.preventDefault();

    //creates task item
    var listItemEl = document.createElement("li");
    //style task item
    listItemEl.className = "task-item";
    //add the text
    listItemEl.textContent = "This is a new task.";
    //add it to the bottom
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);