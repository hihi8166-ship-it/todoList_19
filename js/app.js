const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input"); // 검색창에 입력한 값 가져옴
const todoList = document.querySelector("#todo-list"); // ul
const message = document.querySelector("#message");

let todos = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = todoInput.value;

  const newTodo = {
    id: Date.now().toString() + "-" + Math.random().toString(36).slice(2, 8),
    text: text,
    completed: false,
  };
  todos.push(newTodo);
  todoInput.value = "";

  console.log(todos);

  saveTodos();

  todos.forEach(function (todo) {
    const item = document.createElement("li");
    item.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "수정";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "text-button delete-button";
    deleteButton.textContent = "삭제";

    item.append(checkbox, text, editButton, deleteButton);
    todoList.append(item);
    // <li class = "todo-item"></li>
    // <input type = "checkbox" class = "todo-checkbox" />
  });

  //   const item = document.createElement("li");
  //   item.textContent = text;
  //   todoList.append(item);
});

function saveTodos() {
  try {
    localStorage.setItem("daily-note", JSON.stringify(todos));
  } catch (error) {
    message.textContent = "저장되지 않았습니다.";
  }
}
