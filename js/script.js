const makeTodo = document.getElementById("make-todo");
const checkTodo = document.getElementById("check-todo");
const clearTodo = document.getElementById("clear-todo");
const searchActivity = document.getElementById("search-activity");
const addActivity = document.getElementById("add-activity");
const todoList = document.getElementById("todo-list");
const activityGroup = document.getElementsByClassName("activity-group")[0];

addActivity.addEventListener("click", () => {
  // mebuat element box activity
  let boxAddActivity = document.createElement("div");
  let h3BoxAddActivity = document.createElement("h3");
  let titleBoxAddActivity = document.createElement("input");
  titleBoxAddActivity.type = "text";
  titleBoxAddActivity.placeholder = "type title activity";

  let detailBoxAddActivity = document.createElement("input");
  detailBoxAddActivity.type = "text";
  detailBoxAddActivity.placeholder = "type detail activity";

  let dateBoxAddActivity = document.createElement("input");
  dateBoxAddActivity.type = "date";

  let buttonBoxAddActivity = document.createElement("button");
  buttonBoxAddActivity.textContent = "add to TODO List";

  // pemberian style untuk setiap element
  boxAddActivity.className = "add-activity-box";
  h3BoxAddActivity.className = "h3-box-add-activity";
  h3BoxAddActivity.textContent = "Create your activity";
  buttonBoxAddActivity.classList = "button-box-add-activity";

  // membuat waktu otomatis pada todo
  const dateToday = new Date().toISOString().split("T")[0];
  dateBoxAddActivity.value = dateToday;

  // memasukkan element ke dalam element induk
  boxAddActivity.appendChild(h3BoxAddActivity);
  boxAddActivity.appendChild(titleBoxAddActivity);
  boxAddActivity.appendChild(detailBoxAddActivity);
  boxAddActivity.appendChild(dateBoxAddActivity);
  boxAddActivity.appendChild(buttonBoxAddActivity);
  activityGroup.appendChild(boxAddActivity);
});
