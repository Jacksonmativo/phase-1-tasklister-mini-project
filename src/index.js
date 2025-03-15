document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  if (!form) {
      console.error("Form element not found!");
      return;
  }

  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskInput = document.getElementById("new-task-description");
      if (!taskInput) {
          console.error("Task input element not found!");
          return;
      }

      const priorityInput = document.getElementById("task-priority");

      if (taskInput.value.trim() === "") return;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput.value;

      // Handle priority if it exists
      if (priorityInput) {
          switch (priorityInput.value) {
              case "high":
                  taskItem.style.color = "red";
                  break;
              case "medium":
                  taskItem.style.color = "orange";
                  break;
              case "low":
                  taskItem.style.color = "green";
                  break;
          }
      }

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
          taskItem.remove();
      });

      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      taskInput.value = ""; // Clear input field
  });
});
