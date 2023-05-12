const todoList = document.getElementById('todo-list');
const items = {};

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(items));
};

const addTask = (text) => {
  const index = Object.keys(items).length;
  const task = document.createElement('li');
  task.draggable = true;
  task.dataset.index = index;
  task.innerHTML = `
    <div>
      <input type="checkbox" name="task-${index}" id="task-${index}">
      <label for="task-${index}">${text}</label>
      <button class="delete-btn" data-index="${index}">Delete</button>
    </div>
  `;
  todoList.appendChild(task);
  items[index] = { text, completed: false };
  saveTasksToLocalStorage();
};

const clearCompletedTasks = () => {
  const tasks = todoList.getElementsByTagName('li');

  // Loop through all the tasks in the todo list
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    const task = tasks[i];

    // If the task is completed (i.e., its checkbox is checked)
    if (task.querySelector("input[type='checkbox']").checked) {
      // Update the items object's 'completed' key value
      const { index } = task.dataset;
      items[index].completed = true;

      // Remove the task and the hr element after it
      const hr = task.nextElementSibling;
      todoList.removeChild(task);
      if (hr && hr.tagName === 'HR') {
        todoList.removeChild(hr);
      }
    }
  }
  saveTasksToLocalStorage();
};

const deleteTask = (index) => {
  const task = todoList.querySelector(`li[data-index="${index}"]`);
  if (task) {
    todoList.removeChild(task);
    delete items[index];
    saveTasksToLocalStorage();
  }
};

const handleDragStart = (event) => {
  const { index } = event.target.dataset;
  event.dataTransfer.setData('text/plain', index);
};

const handleDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

const handleDrop = (event) => {
  event.preventDefault();
  const index1 = event.dataTransfer.getData('text/plain');
  const index2 = event.target.dataset.index;
  if (index1 !== index2) {
    const task1 = todoList.querySelector(`li[data-index="${index1}"]`);
    const task2 = todoList.querySelector(`li[data-index="${index2}"]`);
    const temp = task1.innerHTML;
    task1.innerHTML = task2.innerHTML;
    task2.innerHTML = temp;
    items[index1].text = task1.querySelector('label').textContent;
    items[index2].text = task2.querySelector('label').textContent;
    saveTasksToLocalStorage();
  }
};

todoList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    const { index } = event.target.parentNode.parentNode.dataset;
    items[index].completed = event.target.checked;
    saveTasksToLocalStorage();
  } else if (event.target.classList.contains('delete-btn')) {
    const { index } = event.target.dataset;
    deleteTask(index);
  }
});

export default {
  handleDragStart, handleDragOver, handleDrop,
};