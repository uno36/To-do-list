import './styles.css';

const todoList = document.getElementById('todo-list');

function saveData() {
  localStorage.setItem('data', todoList.innerHTML);
}

const addTask = () => {
  const input = document.getElementById('type-todo');
  const todoList = document.getElementById('todo-list');
  const errorMessage = document.getElementById('error-message');
  const tasks = todoList.getElementsByTagName('li');

  // Check if the input field is empty
  if (input.value.trim() === '') {
    errorMessage.textContent = 'Input field cannot be empty!';

    setTimeout(() => {
      errorMessage.textContent = '';
    }, 2000);
    saveData();
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');

  // Create a checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.verticalAlign = 'middle';
  checkbox.checked = false;

  // Set the index of the task
  const taskIndex = tasks.length;
  listItem.setAttribute('data-index', taskIndex);

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
    saveData();
  });

  // Create a text node with the input value
  const taskName = document.createTextNode(`   ${input.value}`);

  // Add the checkbox and task name to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode('   '));
  listItem.appendChild(taskName);

  // Create an edit button
  const moreButton = document.createElement('button');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.float = 'right';
  editButton.style.marginRight = '10px';
  editButton.addEventListener('click', () => {
    // Create an input field with the current task name as its value
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = taskName.nodeValue.trim();
    inputField.addEventListener('keydown', (e) => {
      // If the user hits enter, save the changes and turn the input field back into text
      if (e.key === 'Enter') {
        taskName.nodeValue = `   ${inputField.value.trim()}`;
        listItem.removeChild(inputField);
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode('   '));
        listItem.appendChild(taskName);
        editButton.style.display = 'none';
        moreButton.style.display = 'inline-block';
      }
      saveData();
    });

    // Replace the task name with the input field
    listItem.removeChild(taskName);
    listItem.appendChild(inputField);
    inputField.focus();
    saveData();
  });

  moreButton.textContent = '•••';
  moreButton.style.float = 'right';
  moreButton.style.cursor = 'pointer';
  moreButton.style.backgroundColor = 'transparent';
  moreButton.style.border = 'none';
  moreButton.style.marginRight = '10px';
  moreButton.addEventListener('click', () => {
    editButton.style.display = 'inline-block';
    moreButton.style.display = 'none';
    saveData();
  });

  // Add the more button and edit button to the list item
  listItem.appendChild(moreButton);
  listItem.appendChild(editButton);
  editButton.style.cursor = 'pointer';
  editButton.style.display = 'none';

  // Add the edit button to the list item
  listItem.appendChild(editButton);

  // Add the list item to the todo list
  todoList.appendChild(listItem);

  // Add an hr element below the new list item
  const hr = document.createElement('hr');
  todoList.appendChild(hr);

  // Clear the input field
  input.value = '';

  // Clear the error message
  errorMessage.textContent = '';
  saveData();
};

const input = document.getElementById('type-todo');
input.addEventListener('keydown', (event) => {
  // Check if the pressed key is the "Enter" key
  if (event.key === 'Enter') {
    // Prevent the default behavior of the "Enter" key, which is to submit the form
    event.preventDefault();

    // Call the add task
    addTask();
    saveData();
  }
});

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
  saveData();
};

const clearButton = document.getElementById('submit');
clearButton.addEventListener('click', clearCompletedTasks);

function showTask() {
  todoList.innerHTML = localStorage.getItem('data');
}

showTask();