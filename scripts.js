/**
 * JSL04 Project: Dynamic Task Display & Modal View
 * * This script handles the dynamic rendering of Kanban tasks from initial data,
 * manages the visibility of the task editing modal, and ensures the UI
 * reflects the current state of the task board.
 */

// --- DOM ELEMENT SELECTIONS ---

/** * Object containing references to the column containers where tasks are injected.
 */
const columnContainers = {
  todo: document.querySelector('#todo-tasks-container'),
  doing: document.querySelector('#doing-tasks-container'),
  done: document.querySelector('#done-tasks-container')
};

/**
 * Object containing references to modal-related DOM elements.
 */
const modalElements = {
  modal: document.getElementById('task-modal'),
  backdrop: document.getElementById('modal-backdrop'),
  titleInput: document.getElementById('edit-task-title'),
  descInput: document.getElementById('edit-task-desc'),
  statusSelect: document.getElementById('edit-task-status'),
  closeBtn: document.getElementById('close-modal-btn')
};

// --- CORE FUNCTIONS ---

/**
 * Initializes the board by clearing existing HTML placeholders and 
 * rendering tasks from the source data.
 * * @returns {void}
 */
function initBoard() {
  // Clear the placeholder tasks currently hardcoded in the HTML
  Object.values(columnContainers).forEach(container => {
    container.innerHTML = '';
  });

  // Check if initialTasks is defined in initialData.js before attempting to render
  if (typeof initialTasks !== 'undefined') {
    initialTasks.forEach(task => {
      const taskElement = createTaskElement(task);
      // Append the task to the container that matches its status property
      if (columnContainers[task.status]) {
        columnContainers[task.status].appendChild(taskElement);
      }
    });
  }
  
  // Refresh the count display in the column headers
  updateColumnHeaders();
}

/**
 * Creates and returns a DOM element representing a single task card.
 * * @param {Object} task - The task object.
 * @param {number} task.id - Unique identifier for the task.
 * @param {string} task.title - The name/title of the task.
 * @param {string} task.description - Detailed information about the task.
 * @param {string} task.status - The current column (todo, doing, done).
 * @returns {HTMLElement} The constructed task-div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div');
  taskDiv.textContent = task.title;

  /**
   * Event Listener: Opens the modal when the task card is clicked.
   * We pass the specific task object to ensure the modal displays correct data.
   */
  taskDiv.addEventListener('click', () => {
    openEditModal(task);
  });

  return taskDiv;
}

/**
 * Populates the modal input fields with the selected task's data 
 * and toggles the visibility of the modal and backdrop.
 * * @param {Object} task - The specific task object to be displayed in the modal.
 * @returns {void}
 */
function openEditModal(task) {
  // Populate the form fields with the task's existing details
  modalElements.titleInput.value = task.title;
  modalElements.descInput.value = task.description;
  modalElements.statusSelect.value = task.status;

  // Show the modal and the semi-transparent backdrop
  modalElements.modal.style.display = 'block';
  modalElements.backdrop.style.display = 'block';
}

/**
 * Hides the modal and backdrop from the UI.
 * * @returns {void}
 */
function closeModal() {
  modalElements.modal.style.display = 'none';
  modalElements.backdrop.style.display = 'none';
}

/**
 * Synchronizes the column header text to reflect the actual 
 * number of tasks currently rendered in each column.
 * * @returns {void}
 */
function updateColumnHeaders() {
  const todoCount = columnContainers.todo.children.length;
  const doingCount = columnContainers.doing.children.length;
  const doneCount = columnContainers.done.children.length;

  document.getElementById('toDoText').textContent = `TODO (${todoCount})`;
  document.getElementById('doingText').textContent = `DOING (${doingCount})`;
  document.getElementById('doneText').textContent = `DONE (${doneCount})`;
}

// --- EVENT LISTENERS ---

/**
 * Attach listeners to UI elements for closing the modal via the button 
 * or by clicking on the background backdrop.
 */
modalElements.closeBtn.addEventListener('click', closeModal);
modalElements.backdrop.addEventListener('click', closeModal);

/**
 * Ensures the board is rendered only after the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  initBoard();
});