import { addItem, clearItems, displayItems, filterItems } from "./actions.js";

if (!localStorage.getItem("shopping-cart")) {
  localStorage.setItem("shopping-cart", JSON.stringify([]));
}

const itemForm = document.getElementById("item-form");
const addItemBtn = document.getElementById("add-item-btn");
const newItemInput = document.getElementById("item-input");
const filterInput = document.getElementById("filter-items-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear-btn");

function init() {
  itemForm.addEventListener("submit", addItem);
  clearBtn.addEventListener("click", clearItems);
  filterInput.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);
}

export { newItemInput, addItemBtn, itemForm, itemList, filterInput, clearBtn };

init();
