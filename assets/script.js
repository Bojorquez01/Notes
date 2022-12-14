const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    taskContent.appendChild(checkComplete());
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent)

    list.appendChild(task);
    console.log(content);
}

btn.addEventListener("click", createTask);
const checkComplete = () =>{
    const i = document.createElement("i");
    i.classList.add("far fa-check-square icon");

    return i;
}

const deleteIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas fa-plus-circle");

    return i;
}