import newShoppingListItem, { addButton, updateButton } from "./elements.js";
import {
  addItemBtn,
  clearBtn,
  filterInput,
  itemList,
  newItemInput,
} from "./shopping-list.js";

let editMode = false;

const shoppingCart = () => JSON.parse(localStorage.getItem("shopping-cart"));

const updateStorage = cart =>
  localStorage.setItem("shopping-cart", JSON.stringify(cart));

function addItem(e) {
  e.preventDefault();
  const item = newItemInput.value;
  const newItem = newShoppingListItem(item);

  if (editMode) {
    const listItemToRemove = itemList.querySelector(".edit");
    const item = listItemToRemove.firstChild.textContent;

    removeItemFromStorage(item);
    listItemToRemove.remove();
  }

  addItemToDOM(newItem);
  clearInput(newItemInput);
  reloadUI();
}

function itemAlreadyExistsInCart(item) {
  const cart = shoppingCart();
  return cart.includes(item);
}

function addItemToDOM(item) {
  const value = item.firstChild.textContent;
  if (itemAlreadyExistsInCart(value)) {
    alert("Item is already in cart");
    return;
  } else {
    addItemToStorage(item);
    itemList.appendChild(item);
  }
}

function addItemToStorage(item) {
  const cart = shoppingCart();
  cart.push(item.firstChild.textContent);
  updateStorage(cart);
}

function displayItems() {
  const cart = shoppingCart();
  if (cart) {
    cart.forEach(item => itemList.appendChild(newShoppingListItem(item)));
    reloadUI();
  }
}

function setEditMode() {
  editMode = true;
  addItemBtn.classList.replace("btn-primary", "btn-warning");
  addItemBtn.innerHTML = updateButton;
}

function editItem(e) {
  const btnsContainer = e.currentTarget.parentElement;
  const listItem = btnsContainer.parentElement;
  listItem.classList.add("edit");
  newItemInput.value = listItem.firstChild.textContent;
  setEditMode();
}

function filterItems(e) {
  const cart = shoppingCart();

  cart.forEach(item => {
    const listItem = [...document.querySelectorAll("li")].find(
      li => li.firstChild.textContent === item
    );
    const text = listItem.firstChild.textContent;

    if (!text.match(new RegExp(e.target.value, "i"))) {
      listItem.classList.add("hidden");
    } else {
      listItem.classList.remove("hidden");
    }
  });
}

function removeItem(e) {
  const btnsContainer = e.currentTarget.parentElement;
  const listItem = btnsContainer.parentElement;
  const item = listItem.firstChild.textContent;

  if (listItem.classList.contains("rmv-item")) {
    if (confirm("Are you sure?")) {
      removeItemFromStorage(item);
      listItem.remove();
    }
  }
  reloadUI();
}

function removeItemFromStorage(item) {
  const cart = shoppingCart();
  updateStorage(cart.filter(cartItem => cartItem !== item));
}

function clearItems() {
  if (confirm("Are you sure?")) {
    itemList.querySelectorAll("li").forEach(item => item.remove());
    updateStorage([]);
    reloadUI();
  }
}

function clearInput(input) {
  input.value = "";
}

function reloadUI() {
  editMode = false;
  addItemBtn.innerHTML = addButton;
  addItemBtn.classList.replace("btn-warning", "btn-primary");

  if (itemList.firstChild) {
    filterInput.classList.remove("hidden");
    clearBtn.classList.remove("hidden");
  } else {
    filterInput.classList.add("hidden");
    clearBtn.classList.add("hidden");
  }
}

export { addItem, editItem, removeItem, clearItems, filterItems, displayItems };
