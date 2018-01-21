let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let dltButton = document.createElement("button");
let dltButtonText = document.createTextNode("Delete");
let dltButton2 = document.querySelector(".deleteitem");


function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(dltButton);
  dltButton.setAttribute("class", "deleteitem");
  dltButton.appendChild(dltButtonText);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
}

function crossItem() {
  console.log("Working?")
  this.parentNode.toggle("done");
}

function deleteItem() {
  console.log("DELETE!!!!")
  this.parentNode.removeChild(this);
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

li.addEventListener("click", crossItem)

dltButton2.addEventListener("click", deleteItem)
