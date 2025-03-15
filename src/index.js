document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  if (!form) {
      console.error("Form not found! Test environment may be missing elements.");
      return;
  }

  const taskList = document.getElementById("tasks");
  if (!taskList) {
      console.error("Task list not found!");
      return;
  }

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskInput = document.getElementById("new-task-description");
      if (!taskInput) {
          console.error("Task input not found!");
          return;
      }

      if (taskInput.value.trim() === "") return;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput.value;

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", () => {
          taskItem.remove();
      });

      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
      taskInput.value = ""; // Clear input
  });
});
