/*
save or store items
load items
render or show items
add items
remove items
*/

let items = [];
const stroageKey = "item";

const itemsDiv = document.getElementById("items");

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItems(idx)

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(stroageKey);
    if (oldItems) items = JSON.parse(oldItems);
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(stroageKey, stringItems);
}

function addItems() {
    const input = document.getElementById("itemInput");
    const task = input.value;
    if (!task) {
        alert("You cannot add an empty item");
        return;
    }
    items.push(task);
    renderItems();
    input.value = "";
    saveItems();
}

function removeItems(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems)