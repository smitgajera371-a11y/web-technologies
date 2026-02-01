import uuid

# This module handles task-related operations such as adding, listing, and completing tasks.
# It ensures that the task data is manipulated correctly and integrates with the GUI and storage modules.

def add_task(tasks):
    title = input("Enter task title: ").strip()
    if not title:
        print("Task title cannot be empty.")
        return

    description = input("Enter description (optional): ").strip()
    tasks.append({
        "id": str(uuid.uuid4())[:8],
        "title": title,
        "description": description,
        "completed": False
    })
    print("Task added successfully.")

def list_tasks(tasks):
    if not tasks:
        print("No tasks available.")
        return

    for i, task in enumerate(tasks, start=1):
        status = "Done" if task["completed"] else "Pending"
        print(f"{i}. [{status}] {task['title']} - {task['description']}")

def complete_task(tasks):
    if not tasks:
        print("No tasks to complete.")
        return

    list_tasks(tasks)
    index = int(input("Enter task number to complete: ")) - 1
    if tasks[index]["completed"]:
        print("Task already completed.")
    else:
        tasks[index]["completed"] = True
        print("Task marked as completed.")

def delete_task(tasks):
    if not tasks:
        print("No tasks to delete.")
        return

    list_tasks(tasks)
    index = int(input("Enter task number to delete: ")) - 1
    del tasks[index]
    print("Task deleted successfully.")