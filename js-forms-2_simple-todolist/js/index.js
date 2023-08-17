console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const headlineInput = event.target.elements.headline.value;
  const taskInput = event.target.elements.task.value;

  console.log(headlineInput, taskInput);
  addTodo(headlineInput, taskInput);
  form.reset();
});

function addTodo(headline, task) {
  const todo = document.createElement("li");
  todo.textContent = `${headline} ➡️ ${task}`;
  todoList.append(todo);
}
