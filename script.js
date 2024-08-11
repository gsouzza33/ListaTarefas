document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list')

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !==''){
            const li = document.createElement('li');
            li.textContent = taskText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Concluir';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir'
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }
});