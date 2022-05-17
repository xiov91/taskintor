var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    //creates task item
    var listItemEl = document.createElement("li");
    //style task item
    listItemEl.className = "task-item";
    //add the text
    listItemEl.textContent = "This is a new task.";
    //add it to the bottom
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);