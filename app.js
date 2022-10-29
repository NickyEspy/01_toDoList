/* Display '
    - Create Title 'To-Do List'
    - Create Input Form
    - Create Button for adding new Tasks
    - Create Ordered List for tasks
    - Add an 'Edit' Button and 'Remove' Button for each task
*/

/* Logic
    - Input form captures new Task
    - Clicking submit button creates new LI element (with edit/remove buttons)
    and adds it to the ordered list
    - Clicking edit button changes text of the LI item
    - Clicking Remove button removes LI element from ordered list
 */

let btnSubmit = document.getElementById("btn-submit");
let list = document.getElementById("list");
let listItems = document.querySelectorAll("li");
let btnsRemove = document.getElementsByClassName("btn-remove");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let newTask = document.getElementById("input-form").value;
  let listItem = document.createElement("li");
  let btnRemove = document.createElement("button");
  btnRemove.classList.add("btn-remove");
  btnRemove.innerText = "Remove";
  listItem.innerText = newTask;
  document.getElementById("input-form").value = "";
  listItem.append(btnRemove);
  list.append(listItem);
  btnRemove.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
});
