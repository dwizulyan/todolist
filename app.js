// Load user name from local storage or prompt for it
if (!localStorage.getItem("name")) {
  const name = prompt("Siapa Nama anda ?");
  localStorage.setItem("name", name);
}

// Set up hamburger menu
const NAVIGATION_MENU_HEIGHT = "30px";
const hamburgerButton = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".nav-menu");
const navigationItem = document.querySelector(".change-name");
hamburgerButton.addEventListener("click", function () {
  if (navigationMenu.style.height === NAVIGATION_MENU_HEIGHT) {
    navigationMenu.style.height = "0";
    navigationItem.style.display = "none";
  } else {
    navigationMenu.style.height = NAVIGATION_MENU_HEIGHT;
    navigationItem.style.display = "block";
  }
});

// Set up todo list
const btnAdd = document.querySelector(".add");
const btnDelete = document.querySelector(".delete");
const input = document.querySelector(".input");
const itemWrapper = document.querySelector(".item-wrapper");
const title = document.querySelector(".title");
title.innerHTML = `${localStorage.getItem("name")}'s Todo List`;

function renderTodoList() {
  const todo = JSON.parse(localStorage.getItem("data")) || [];
  itemWrapper.innerHTML = todo
    .map(
      (element, index) => `
    <div class="item">
      <p class="item-title">${element.name}</p>
      <button onclick="deleteItem(${index})" class="delete">X</button>
    </div>
  `
    )
    .join("");
}

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  const todoValue = input.value.trim();
  if (!todoValue) return;
  const todo = JSON.parse(localStorage.getItem("data")) || [];
  todo.push({ name: todoValue });
  localStorage.setItem("data", JSON.stringify(todo));
  input.value = "";
  renderTodoList();
});

function deleteItem(index) {
  const todo = JSON.parse(localStorage.getItem("data")) || [];
  todo.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(todo));
  renderTodoList();
}

function gantiNama() {
  promptNamaBaru();
}

function promptNamaBaru() {
  let newName = prompt("Ganti nama anda dengan nama baru anda :");

  while (newName.trim() === "") {
    alert("nama tidak boleh kosong");
    newName = prompt("Ganti nama anda dengan nama baru anda :");
  }

  localStorage.setItem("name", newName);
  window.location.href = "/";
}

// Render initial todo list
renderTodoList();

// testing
