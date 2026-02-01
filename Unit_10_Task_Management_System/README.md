# Unit 10 Task Management System

## Problem Statement
The Task Management System is designed to help users efficiently manage their tasks. It allows users to add, view, update, and delete tasks while ensuring data persistence. The system aims to improve productivity by providing a user-friendly interface for task organization.

## Functional Requirements
- Add new tasks with details such as title, description, and due date.
- View all tasks in a list format.
- Update existing tasks.
- Delete tasks.
- Save tasks persistently to a file.

## Non-Functional Requirements
- **Usability**: The system should have a simple and intuitive interface.
- **Reliability**: The system should handle errors gracefully, such as missing or corrupted data files.
- **Performance**: The system should perform operations (e.g., adding, updating tasks) quickly.
- **Maintainability**: The codebase should be modular and easy to understand.

## Design Rationale
The system is designed with a modular architecture to ensure separation of concerns:
- `main.py`: Entry point for the application.
- `src/gui.py`: Handles the graphical user interface using `Tkinter`.
- `src/tasks.py`: Manages task-related operations such as adding, listing, and completing tasks.
- `src/storage.py`: Handles data persistence using CSV files.
- `src/utils.py`: Provides utility functions for user interaction.

This design ensures that each module has a clear responsibility, making the system easier to maintain and extend.

## Testing Strategy
- **Manual Testing**:
  - Verify all GUI interactions (e.g., adding, completing, and deleting tasks).
  - Test edge cases such as empty task titles and corrupted data files.
- **Unit Testing**:
  - Validate core functions in `tasks.py`.
  - Ensure data loading and saving in `storage.py` work as expected.

## Challenges
- Designing a user-friendly GUI that integrates seamlessly with the backend logic.
- Handling edge cases such as corrupted data files and invalid user inputs.

## How to Run
1. Ensure Python is installed on your system.
2. Run the application using the following command:
   ```
   python main.py
   ```

## Key Features
- Modular architecture with separate components for data handling, business logic, and utilities.
- Persistent data storage using CSV files.
- Error handling for invalid inputs and file operations.
- User-friendly GUI built with `Tkinter`.

## Version Control
The project is under Git version control with multiple commits demonstrating development progression. Commit messages are meaningful and describe the changes made.