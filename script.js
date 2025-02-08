function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim() !== "" && taskTime.value !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<span class="task-text">${taskInput.value}</span>
                        <span class="task-time">(${taskTime.value})</span>
                        <button onclick="editTask(this)">✏️</button>
                        <button onclick="toggleTask(this)">✅</button>
                        <button onclick="removeTask(this)">❌</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
        taskTime.value = "";
    }
}

function removeTask(button) {
    button.parentElement.remove();
}

function editTask(button) {
    const newText = prompt("Editar tarefa:", button.parentElement.querySelector('.task-text').textContent);
    if (newText !== null) {
        button.parentElement.querySelector('.task-text').textContent = newText;
    }
}

function toggleTask(button) {
    button.parentElement.classList.toggle('completed');
}