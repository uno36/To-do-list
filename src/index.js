import './styles.css';

const tasks = [];

function renderTodoList() {
  const todoList = document.getElementById('todo-list');
  tasks.sort((a, b) => a.index - b.index);
  todoList.innerHTML = tasks
    .map(
      (task) => `<li class="todo-item ${task.completed ? 'completed' : ''}">
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.description}</span>
          <hr class="todo-hr">
        </li>`,
    )
    .join('');
}

renderTodoList();
export { tasks, renderTodoList };