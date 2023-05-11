import './styles.css';
import { renderTodoList, tasks } from './index.js';

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const addTask = () => {
  const input = document.querySelector('#type-todo');
  const todoList = document.getElementById('todo-list');
  const errorMessage = document.querySelector('#error-message');

  const newTask = {
    description: input.value.trim(),
    completed: false,
    index: tasks.length,
  };

  if (newTask.description !== '') {
    tasks.push(newTask);
    saveTasksToLocalStorage();

    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', (event) => {
      const { index } = event.target.parentNode.dataset;
      tasks[index].completed = event.target.checked;
      saveTasksToLocalStorage();

      if (event.target.checked) {
        event.target.parentNode.classList.add('completed');
      } else {
        event.target.parentNode.classList.remove('completed');
      }
    });

    const taskName = document.createTextNode(`   ${newTask.description}`);
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode('   '));
    listItem.appendChild(taskName);

    const moreButton = document.createElement('button');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = taskName.nodeValue.trim();
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          taskName.nodeValue = `   ${inputField.value.trim()}`;
          listItem.removeChild(inputField);
          listItem.appendChild(checkbox);
          listItem.appendChild(document.createTextNode('   '));
          listItem.appendChild(taskName);
          editButton.style.display = 'none';
          moreButton.style.display = 'inline-block';
          tasks[listItem.dataset.index].description = inputField.value.trim();
          saveTasksToLocalStorage();
        }
      });

      listItem.removeChild(taskName);
      listItem.appendChild(inputField);
      inputField.focus();
    });

    moreButton.textContent = '•••';
    moreButton.classList.add('more-button');
    moreButton.addEventListener('click', () => {
      editButton.style.display = 'inline-block';
      moreButton.style.display = 'none';
    });

    moreButton.style.float = 'right';
    moreButton.style.marginRight = '10px';
    moreButton.style.border = 'none';
    moreButton.style.backgroundColor = 'white';
    editButton.style.float = 'right';
    editButton.style.marginRight = '10px';

    listItem.appendChild(moreButton);
    listItem.appendChild(editButton);
    editButton.style.display = 'none';

    listItem.dataset.index = tasks.length - 1;
    todoList.appendChild(listItem);

    const hr = document.createElement('hr');
    todoList.appendChild(hr);

    input.value = '';
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Task cannot be empty';
  }
};

// Add an event listener to the Add button
const addButton = document.querySelector('.add');
addButton.addEventListener('click', addTask);

const clearCompletedTasks = () => {
  const todoList = document.getElementById('todo-list');
  const tasks = todoList.getElementsByTagName('li');

  // Loop through all the tasks in the todo list
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    const task = tasks[i];

    // If the task is completed (i.e., its checkbox is checked)
    if (task.querySelector("input[type='checkbox']").checked) {
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

const clearButton = document.getElementById('submit');
clearButton.addEventListener('click', clearCompletedTasks);

function loadTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.length = 0;
  tasks.push(...storedTasks);
  renderTodoList();
}

loadTasksFromLocalStorage();
