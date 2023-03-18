const btnAdd = document.querySelector(".add");
const btnDelete = document.querySelector(".delete");
const todoValue = document.querySelector(".input").value;
const todoWrapper = document.querySelector(".item-wrapper");

var deleteIsAvailable = false;

const todo = JSON.parse(localStorage.getItem("data"));
if (todo !== null) {
  todo.forEach((element, index) => {
    todoWrapper.innerHTML += `
        <div class="item">
            <p class="item-title">${element.name}</p>
            <button onclick="deleteItem('${index}')" class="delete">X</button>
        </div>
    `;
  });
}
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  // Get the HTML Element
  const todoValue = document.querySelector(".input").value;
  const todoWrapper = document.querySelector(".item-wrapper");

  // Insert the data to local storage
  if (localStorage.getItem("data") !== null) {
    const data = JSON.parse(localStorage.getItem("data"));
    data.push({
      name: todoValue,
    });

    localStorage.setItem("data", JSON.stringify(data));
  } else {
    const data = [
      {
        name: todoValue,
      },
    ];
    localStorage.setItem("data", JSON.stringify(data));
  }
  todoWrapper.innerHTML = "";
  const todo = JSON.parse(localStorage.getItem("data"));
  if (todo !== null) {
    todo.forEach((element, index) => {
      todoWrapper.innerHTML += `
          <div class="item">
              <p class="item-title">${element.name}</p>
              <button onclick="deleteItem('${index}')" class="delete">X</button>
          </div>
      `;
    });
  }
  if (btnDelete === null) {
    deleteIsAvailable = true;
  }
  console.log(deleteIsAvailable);
});

function deleteItem(value) {
  const data = JSON.parse(localStorage.getItem("data"));
  const deleted = data
    .filter((data) => data.name === value)
    .map((data) => data.name);

  data.splice(value, 1);
  localStorage.setItem("data", JSON.stringify(data));
  window.location.href = "/";
}
