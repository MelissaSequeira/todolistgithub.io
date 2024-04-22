function additeminbox() {
    var addeditem = document.querySelector('.added-item');
    var typeditem = document.querySelector('.itemtext');
    
    if (typeditem.value !== "") {
        let makeli = document.createElement("div");
        makeli.innerHTML = ` 
        <table>
          <tr>
             <td class="addedrow">${typeditem.value}</td>
             <td><button class="done-btn btns">Undone</button></td>
             <td><button class="edit-btn btns">Edit</button></td>
             <td><button class="delete-btn btns">Delete</button></td>
          </tr>
        </table>
        `;
        addeditem.querySelector("#taskList").appendChild(makeli);
        typeditem.value = ""; // Clear the input field after adding the item
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('done-btn')) {
        var button = event.target;
        var row = button.closest('tr');
        if (button.textContent === "Undone") {
            button.textContent = "Done";
            // Additional actions for marking as done
        } else {
            button.textContent = "Undone";
            // Additional actions for marking as undone
        }
    }
    if (event.target.classList.contains('edit-btn')) {
        var button = event.target;
        var row = button.closest('tr');
        var taskText = row.querySelector('.addedrow').textContent;
        var newText = prompt("Edit Task:", taskText);
        if (newText !== null) {
            row.querySelector('.addedrow').textContent = newText;
            // Additional actions for saving the edited text
        }
    }
    if (event.target.classList.contains('delete-btn')) {
        var button = event.target;
        var row = button.closest('tr');
        row.remove(); // Remove the entire row
        // Additional actions for deleting the task
    }
});
