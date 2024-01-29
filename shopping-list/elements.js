import { editItem, removeItem } from "./actions.js";

const addButton = "<i class='fa-solid fa-plus me-1'></i> Add Item";
const updateButton = "<i class='fa-solid fa-pen me-1'></i> Update Item";

const newIcon = classList => {
  const icn = document.createElement("i");
  icn.className = classList;
  return icn;
};

const newButton = classList => {
  const btn = document.createElement("button");
  btn.className = classList;
  return btn;
};

const newRemoveButton = () => {
  const rmvBtn = newButton("rmv-item-btn btn btn-danger ms-2");
  rmvBtn.appendChild(newIcon("fa-solid fa-xmark"));
  rmvBtn.addEventListener("click", removeItem);
  return rmvBtn;
};

const newEditButton = () => {
  const editBtn = newButton("edit-item-btn btn btn-warning me-2");
  editBtn.appendChild(newIcon("fa-solid fa-pen"));
  editBtn.addEventListener("click", editItem);
  return editBtn;
};

const itemButtons = () => {
  const container = document.createElement("span");
  container.classList.add("px-2", "d-flex", "justify-content-between");
  container.appendChild(newEditButton());
  container.appendChild(newRemoveButton());
  return container;
};

const newShoppingListItem = item => {
  const listItem = document.createElement("li");
  const itemName = document.createTextNode(item);

  const itemId = item
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((_, idx) => item.codePointAt(idx))
    .reduce((total, cur) => total + cur, 0)
    .toString();

  listItem.className =
    "rmv-item list-group-item list-group-item-info d-flex justify-content-between align-items-center";
  listItem.setAttribute("id", itemId);
  listItem.appendChild(itemName);
  listItem.appendChild(itemButtons());

  return listItem;
};

export default newShoppingListItem;
export { addButton, updateButton };
