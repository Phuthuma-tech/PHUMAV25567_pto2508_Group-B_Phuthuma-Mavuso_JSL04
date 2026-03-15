# JSL04 Project Brief: Dynamic Task Display & Modal View

## Overview

In this project, you will dynamically display tasks from the **given initial data** on the DOM using JavaScript. Tasks should be placed into the correct **Kanban board columns** based on their status, and clicking a task should open a **modal** where users can view and modify task details. The project emphasizes **DOM manipulation, event handling, modular JavaScript structure, and responsive UI implementation.**

## Before You Begin

**Check the project user stories in your student dashboard and the updated Figma Design** before you start building.

## Figma Design Link

Check the updated Figma Design: [Figma Link](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=Ki0CZk0RAjrk9Fhs-0)

## Key Objectives

### Dynamic Task Display & Interaction

- Dynamically generate **task elements** from the given initial data and insert them into the DOM.
- Ensure tasks are placed in the **correct columns** ("To Do", "In Progress", "Done") based on their status.
- Clicking a task should **open a modal** displaying its details.
- The modal should include:
  - **Editable input fields** for the task title and description.
  - **A select dropdown** showing the current status with other status options available.
  - **A close button** that allows users to exit the modal easily.

### Design & Responsiveness

- Ensure the **modal matches the Figma design**, including a **backdrop effect** for focus.
- Implement a **fully responsive modal** that works on both desktop and mobile devices.

### Code Structure & Maintainability

- Structure JavaScript using **modular, single-responsibility functions**.
- Use **descriptive and meaningful variable and function names** for clarity.
- Add **JSDoc comments** to major functions, describing their purpose, parameters, and return values for better documentation.

## Expected Outcome

A fully functional **dynamic task board** where tasks appear under the correct columns, and users can **open a modal to view/edit** task details. The project will follow **clean, well-documented, and maintainable code practices**, ensuring a professional and scalable implementation.

# Kanban Task Management - Dynamic Board

To help me stand out as a developer, a professional README should not just list facts, but serve as the "front door" to my project. Based on the JSL04 Project Brief and my specific requirements, here is a polished, professional version of the README.

A sleek, interactive Kanban board built with modern JavaScript. This application dynamically renders project tasks from a data source, allowing users to visualize workflows and manage task states through an intuitive, responsive interface inspired by Figma industry standards.

## 🚀 Overview
The **Kanban Task Management** board is a front-end solution designed to help teams organize tasks into "To Do," "Doing," and "Done" categories. This project demonstrates advanced DOM manipulation, modular JavaScript architecture, and high-fidelity UI implementation including a customized modal system with a focus-driven backdrop effect.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure for accessible web content.
* **CSS3:** Custom properties (CSS variables), Flexbox, Grid, and responsive media queries.
* **JavaScript (ES6+):** Modular logic, DOM injection, and event handling.
* **Google Fonts:** "Plus Jakarta Sans" for professional typography.

## ✨ Features
* **Dynamic Task Injection:** Tasks are automatically generated and sorted into their respective columns based on their status in the `initialData.js` file.
* **Interactive Modal System:** * Clicking any task card opens a detailed view.
    * View and edit task titles and descriptions.
    * Update task status via a dropdown menu.
* **Enhanced UI/UX:**
    * **Backdrop Effect:** Dims the background and blurs the board to focus user attention on the active modal.
    * **Quick Close:** A high-visibility "Red Cross" (❌) emoji close button located in the top-right corner.
* **Responsive Design:** Optimized for Desktop, Tablet, and Mobile viewing (no overlaps or layout breaks).
* **Live Counters:** Dynamic column headers that display the total number of tasks currently in each stage.

## ⚙️ Setup Instructions
To get this project running locally on your machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Phuthuma-tech/PHUMAV25567_pto2508_Group-B_Phuthuma-Mavuso_JSL04.git(https://github.com/Phuthuma-tech/PHUMAV25567_pto2508_Group-B_Phuthuma-Mavuso_JSL04.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd jsl04-kanban-board
    ```
3.  **Launch the Application:**
    * Open `index.html` directly in your browser, OR
    * Use the **Live Server** extension in VS Code for real-time updates.

## 📖 Usage & Interaction
* **Viewing Tasks:** Upon loading, the board will automatically display all tasks stored in `initialTasks`.
* **Editing a Task:**
    1.  Click directly on any task card (e.g., "Launch Epic Career 🚀").
    2.  The modal window will appear, pre-filled with that task's specific information.
* **Updating Status:** Change the dropdown in the modal to move a task to a different column.
* **Closing the Modal:**
    * Click the ❌ in the top right corner.
    * Or, click anywhere on the dark backdrop area outside the modal.

## 📁 Project Structure
```plaintext
├── assets/             # Images, logos, and favicons
├── initialData.js      # Source data array containing task objects
├── scripts.js          # Core logic (DOM manipulation & Event Listeners)
├── styles.css          # Global styles and responsive modal layout
└── index.html          # Main application entry point