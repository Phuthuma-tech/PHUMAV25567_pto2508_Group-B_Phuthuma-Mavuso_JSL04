/**
 * JSL04 – Dynamic Task Board + Modal (Single-File Solution)
 * --------------------------------------------------------
 * - Dynamically renders tasks into To Do / In Progress / Done columns
 * - Opens a modal on task click to edit title, description, and status
 * - Updates the UI after saving changes
 * - Beginner-friendly with clear descriptive comments
 *
 * How to use:
 * 1) Include this file after your HTML markup for the board and modal.
 * 2) Ensure your HTML has elements with the following IDs:
 *    - Columns: col-todo, col-in-progress, col-done
 *    - Modal wrapper: task-modal
 *    - Backdrop: modal-backdrop
 *    - Modal fields: field-title, field-description, field-status
 *    - Buttons: btn-close, btn-cancel
 *    - Form: task-form
 */

/**************************************
 * 1) Initial Data (provided example) *
 **************************************/
const initialTasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript 💛", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Keep on Going 🏆", description: "You're almost there", status: "doing" },
  { id: 11, title: "Learn Data Structures and Algorithms 📚", description: "Study fundamental data structures and algorithms to solve coding problems efficiently", status: "todo" },
  { id: 12, title: "Contribute to Open Source Projects 🌐", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 13, title: "Build Portfolio Projects 🛠️", description: "Create a portfolio showcasing your skills and projects to potential employers", status: "done" },
];

/*******************************************
 * 2) App State – clone data into memory    *
 *******************************************/
let tasks = initialTasks.map(t => ({ ...t }));
let currentTaskId = null; // holds ID of task being edited

/*******************************************
 * 3) DOM Lookups – cache frequently used   *
 *******************************************/
const columns = {
  "todo": document.getElementById("col-todo"),
  "in-progress": document.getElementById("col-in-progress"),
  "done": document.getElementById("col-done"),
};

const modal = document.getElementById("task-modal");
const backdrop = document.getElementById("modal-backdrop");
const form = document.getElementById("task-form");
const fieldTitle = document.getElementById("field-title");
const fieldDesc = document.getElementById("field-description");
const fieldStatus = document.getElementById("field-status");
const btnClose = document.getElementById("btn-close");
const btnCancel = document.getElementById("btn-cancel");

/*******************************************
 * 4) Utilities                            *
 *******************************************/
/** Normalize custom statuses to board statuses. */
function normalizeStatus(status) {
  const s = String(status || '').toLowerCase();
  if (s === 'doing' || s === 'in progress') return 'in-progress';
  if (s === 'in-progress') return 'in-progress';
  if (s === 'done') return 'done';
  return 'todo';
}

/** Escape HTML to safely inject text. */
function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/*******************************************
 * 5) Rendering                            *
 *******************************************/
/** Render all tasks into the appropriate columns. */
function renderBoard() {
  // Clear columns
  Object.values(columns).forEach(col => { if (col) col.innerHTML = ''; });

  // Create and append each task card
  tasks.forEach(task => {
    const colKey = normalizeStatus(task.status);
    const col = columns[colKey] || columns['todo'];
    if (!col) return;

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'task';
    card.setAttribute('data-id', String(task.id));
    card.setAttribute('aria-label', `Open task ${task.title}`);
    card.innerHTML = `
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.description)}</p>
    `;

    col.appendChild(card);
  });
}

/*******************************************
 * 6) Modal Lifecycle                      *
 *******************************************/
/** Open modal for a specific task ID. */
function openModal(taskId) {
  const task = tasks.find(t => String(t.id) === String(taskId));
  if (!task) return;

  currentTaskId = task.id;
  fieldTitle.value = task.title || '';
  fieldDesc.value = task.description || '';
  fieldStatus.value = normalizeStatus(task.status);

  modal.hidden = false;
  backdrop.hidden = false;
  // Focus first field for accessibility
  requestAnimationFrame(() => fieldTitle.focus());
}

/** Close modal and reset state. */
function closeModal() {
  modal.hidden = true;
  backdrop.hidden = true;
  currentTaskId = null;
}

/** Save current modal form values into state and re-render. */
function saveTaskChanges() {
  if (currentTaskId == null) return;
  const i = tasks.findIndex(t => String(t.id) === String(currentTaskId));
  if (i === -1) return;

  const title = fieldTitle.value.trim();
  if (!title) {
    fieldTitle.focus();
    fieldTitle.setCustomValidity('Title is required');
    fieldTitle.reportValidity();
    setTimeout(() => fieldTitle.setCustomValidity(''), 1200);
    return;
  }

  tasks[i] = {
    ...tasks[i],
    title,
    description: fieldDesc.value.trim(),
    status: fieldStatus.value,
  };

  renderBoard();
  closeModal();
}

/*******************************************
 * 7) Event Wiring                         *
 *******************************************/
// Open modal when any task card is clicked (event delegation on document)
document.addEventListener('click', (e) => {
  const card = e.target.closest?.('.task');
  if (!card) return;
  const id = card.getAttribute('data-id');
  if (id) openModal(id);
});

// Close actions
btnClose?.addEventListener('click', closeModal);
btnCancel?.addEventListener('click', closeModal);
backdrop?.addEventListener('click', closeModal);

// Save on form submit
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  saveTaskChanges();
});

// Escape key closes modal
document.addEventListener('keydown', (e) => {
  if (!modal.hidden && e.key === 'Escape') {
    e.preventDefault();
    closeModal();
  }
});

/*******************************************
 * 8) Initialize                          *
 *******************************************/
renderBoard();
