const items = document.querySelector(".items");
const section = document.querySelector("section");
const addBtn = document.querySelector(".button");
const input = document.querySelector(".text");

const addItem = () => {
  const input = document.querySelector(".text");
  if (input.value === "") {
    input.focus();
    return;
  }
  const item = createItem(input);
  items.appendChild(item);

  input.value = "";
  input.focus();
};

function createItem(input) {
  const li = document.createElement("li");
  li.setAttribute("class", "item__row");

  const div = document.createElement("div");
  div.setAttribute("class", "item");
  const span = document.createElement("span");
  span.setAttribute("class", "item__name");
  span.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = "❌";

  deleteBtn.addEventListener("click", () => {
    items.removeChild(li);
  });
  div.appendChild(span);
  div.appendChild(deleteBtn);
  li.appendChild(div);
  return li;
}
addBtn.addEventListener("click", () => {
  addItem();
  items.scrollIntoView({ block: "end" });
});
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
    items.scrollIntoView({ block: "end" });
  }
});
