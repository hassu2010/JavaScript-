const main = document.createElement('main');
main.style.height = '100vh';
main.style.background = 'linear-gradient(135deg, #7cff02ff, #ff6600ff)';
main.style.display = "flex";
main.style.justifyContent = 'center';
main.style.alignItems = "center";
document.body.style.margin = "0";
document.body.appendChild(main);

// box
const box = document.createElement('div');
box.style.height = "450px";
box.style.width = "380px";
box.style.background = "#fff";
box.style.borderRadius = "16px";
box.style.padding = "20px";
box.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
box.style.display = "flex";
box.style.flexDirection = "column";
main.appendChild(box);

// title
const todo = document.createElement("h1");
todo.textContent = "To-Do List";
todo.style.margin = "0 0 20px";
todo.style.textAlign = "center";
todo.style.fontFamily = "Arial, sans-serif";
box.appendChild(todo);

// input container
const inputBox = document.createElement("div");
inputBox.style.display = "flex";
inputBox.style.gap = "10px";
inputBox.style.marginBottom = "15px";
box.appendChild(inputBox);

// input
const input = document.createElement("input");
input.placeholder = "Enter your task";
input.style.flex = "1";
input.style.padding = "12px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #ccc";
input.style.outline = "none";
inputBox.appendChild(input);

// button
const addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.style.padding = "12px 18px";
addButton.style.border = "none";  
addButton.style.borderRadius = "8px";
addButton.style.background = "#b75ef3ff";
addButton.style.color = "#fff";
inputBox.appendChild(addButton);

// list
const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";
list.style.margin = "0";
list.style.flex = "1";
list.style.overflowY = "scroll";   
list.style.scrollbarWidth = "none";
list.style.msOverflowStyle = "none";
box.appendChild(list);


list.style.cssText += `
  scrollbar-width: none;
`;


// add task
addButton.addEventListener("click", function () {
  const value = input.value;
  if (!value) return;

  // item
  const item = document.createElement("li");
  item.style.background = "#f7f7f7";
  item.style.padding = "12px";
  item.style.marginBottom = "10px";
  item.style.borderRadius = "8px";
  item.style.fontSize = "14px";
  item.style.display = "flex";
  item.style.justifyContent = "space-between";
  item.style.alignItems = "center";

  //  task text 
const text = document.createElement("span");
text.textContent = value;

// edit input
const editInput = document.createElement("input");
editInput.type = "text";
editInput.value = value;
editInput.style.display = "none";
editInput.style.flex = "1";

  // buttondiv
  const buttonDiv = document.createElement("button");
    buttonDiv.style.display ="flex";
    buttonDiv.style.gap = "8px";
    buttonDiv.style.border = "none";
  // edit button
  const editBtn = document.createElement("div");
  editBtn.textContent = "Edit";
  editBtn.style.padding = "12px 18px";
  editBtn.style.border = "none";
  editBtn.style.borderRadius = "8px";
  editBtn.style.background = "rgba(0, 0, 0, 1)";
  editBtn.style.color = "#ffffffff";

  editBtn.addEventListener("click", function () {
  const isEditing = editInput.style.display === "inline-block";

  if (!isEditing) {
    // start editing
    editInput.style.display = "inline-block";
    text.style.display = "none";
    editBtn.textContent = "Save";
    editInput.focus();
  } else {
    // save edit
    if (editInput.value.trim() !== "") {
      text.textContent = editInput.value;
    }
    editInput.style.display = "none";
    text.style.display = "inline";
    editBtn.textContent = "Edit";
  }
  editInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    editBtn.click();
  }
});
});


  // delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.padding = "12px 18px";
  delBtn.style.border = "none";
  delBtn.style.borderRadius = "8px";
  delBtn.style.background = "rgba(0, 0, 0, 1)";
  delBtn.style.color = "#ffffffff";

  delBtn.addEventListener("click", function () {
    list.removeChild(item);
  });

  item.appendChild(text);
item.appendChild(editInput);
  item.appendChild(buttonDiv);
  buttonDiv.appendChild(editBtn);
  buttonDiv.appendChild(delBtn);

  list.appendChild(item);
  list.scrollTop = list.scrollHeight;
  input.value = "";
  
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

