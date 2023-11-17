# React Task Management App

## Overview

This is a simple React task management app that facilitates the creation, deletion, updating, and movement of tasks between two lists. Additionally, the app provides the functionality to export tasks to an Excel file.

## Components

### App.js

The main component responsible for setting up the overall structure of the app. It manages the state of tasks and provides functions for adding, deleting, updating, and moving tasks.

### TaskList.js

A component designed to display a list of tasks. It receives tasks as props and renders individual `TaskCard` components.

### TaskCard.js

Represents a single task within the app. This component handles task editing, updating, deletion, and movement between lists.

### ExcelExportButton.js

A button component specifically created to trigger the export of tasks to an Excel file. It utilizes the `xlsx` library for Excel file manipulation.
