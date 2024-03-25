const makeTodo = document.getElementById("make-todo");
const checkTodo = document.getElementById("check-todo");
const clearTodo = document.getElementById("clear-todo");
const searchActivity = document.getElementById("search-activity");
const addActivity = document.getElementById("add-activity");
const todoList = document.getElementById("todo-list");
const activityGroup = document.getElementsByClassName("activity-group")[0];
const containerTodoList = document.getElementsByClassName(
  "container-todo-list"
)[0];

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

  let buttonCLose = document.createElement("button");
  buttonCLose.textContent = "close";

  // pemberian style untuk setiap element
  boxAddActivity.className = "add-activity-box";
  h3BoxAddActivity.className = "h3-box-add-activity";
  h3BoxAddActivity.textContent = "Create your activity";
  buttonBoxAddActivity.className = "button-box-add-activity";

  // membuat waktu otomatis pada todo
  const dateToday = new Date().toISOString().split("T")[0];
  dateBoxAddActivity.value = dateToday;

  // memasukkan element ke dalam element induk
  boxAddActivity.appendChild(h3BoxAddActivity);
  boxAddActivity.appendChild(titleBoxAddActivity);
  boxAddActivity.appendChild(detailBoxAddActivity);
  boxAddActivity.appendChild(dateBoxAddActivity);
  boxAddActivity.appendChild(buttonBoxAddActivity);
  boxAddActivity.appendChild(buttonCLose);
  activityGroup.appendChild(boxAddActivity);

  // array sebagai penampung object activitas
  const activities = [];

  // event yang terjadi ketika button di klik
  buttonBoxAddActivity.addEventListener("click", () => {
    // menampung semua nilai dari box add activity
    let titleValue = titleBoxAddActivity.value;
    let detailValue = detailBoxAddActivity.value;
    let dateValue = dateBoxAddActivity.value;

    // object untuk setiap component
    const activityComponent = {
      title: titleValue,
      detail: detailValue,
      date: dateValue,
    };

    // membuat variable untuk setiap anggota komponen todo activity
    const titleActivity = document.createElement("p");
    const detailActivity = document.createElement("p");
    const dateActivity = document.createElement("p");
    const todoActivity = document.createElement("div");

    // memberikan style pada setiap komponen
    todoActivity.className = "todo-activity";

    // memasukkan nilai ke dalam setiap anggota komponen activity
    titleActivity.textContent = activityComponent.title;
    detailActivity.textContent = activityComponent.detail;
    dateActivity.textContent = activityComponent.date;

    // memasukkan setiap anggota kedalam element induknya
    todoActivity.appendChild(titleActivity);
    todoActivity.appendChild(detailActivity);
    todoActivity.appendChild(dateActivity);
    containerTodoList.appendChild(todoActivity);

    // melakukan push ke dalam array activities
    activities.push(activityComponent);

    buttonCLose.addEventListener("click", () => {
      boxAddActivity.remove(activityGroup);
    });
  });
  // mencetak kedalam console
  console.log(activities);
});
