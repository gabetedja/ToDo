const taskInput = document.getElementById("taskInput"); //these constants are so we can read and edit the list accordingly
const toDoList = document.getElementById("list-items");

function addTask() {
    if(taskInput.value === '') {
        alert("Please write a task"); //error handling for if no task is added
} 
    else {
        let li = document.createElement("li"); //if user inputted task, creates element and displays said element
        li.innerHTML = taskInput.value;
        toDoList.appendChild(li);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "\u00d7";
        deleteButton.className = "deleteButton";

       /* const editButton = document.createElement("button");
        editButton.textContent = "\u270e";
        editButton.className = "editButton";*/
       
        li.appendChild(deleteButton);
        //li.appendChild(editButton);
        

        saveList();
    }   
    taskInput.value = ""; //after task added, box is cleared 
}



toDoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked"); //toggles the checked status for any lines
    }
    else if (e.target.classList.contains("deleteButton")){
        e.target.parentElement.remove();
        saveList();
    }
}, false);  

function saveList() {
    localStorage.setItem("data", toDoList.innerHTML);
}
function showList() {
    toDoList.innerHTML = localStorage.getItem("data");
}

showList();