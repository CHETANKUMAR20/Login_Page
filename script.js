function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        newTask.onclick = function() {
            this.remove();
        };

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

