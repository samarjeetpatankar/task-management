# React Task Manager

## Overview
This is a simple React application for managing tasks. Users can create tasks, mark them as completed, update task names, and delete tasks. The application also allows exporting the task list to an Excel file.

## Usage
### Add a Task:
1. Enter the task name in the input field.
2. Click the "Add Task" button.

### Update Task:
1. Click the "Update" button on a task card.
2. Modify the task name in the displayed input field.
3. Click the "Submit" button to update the task.

### Mark Task as Completed/Incomplete:
- Click the corresponding button on a task card to change its status.

### Delete a Task:
- Click the "Delete" button on a task card to remove the task.

### Export to Excel:
- Click the "Export to Excel" button to download the task list as an Excel file.

## File Structure
The project has the following file structure:

- **src:** Contains the source code.
  - **Components:** React components used in the application.
  - **Redux:** Redux store configuration.
- **App.js:** Main component and application entry point.
- **public:** Static assets and HTML template.
- **README.md:** Project documentation.

## Components
1. **App.js:** The main component that renders the task manager application. It includes the task creation form, export button, and task lists.

2. **CreateTask.js:** A component for adding new tasks. It includes a form with an input field and a submit button.

3. **ListCmp.js:** A component for displaying task lists. It receives an array of tasks and renders them as cards.

4. **TaskCard.js:** A component representing an individual task card. It includes buttons for updating, marking as completed/incomplete, and deleting a task.

## Redux Store
The application uses Redux for state management. The store configuration is located in the Redux/Store.js file.
