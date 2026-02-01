# This module handles the graphical user interface (GUI) for the Task Management System.
# It uses Tkinter to provide an interactive interface for users to manage their tasks.
# The GUI interacts with the backend logic in `tasks.py` and `storage.py` to perform operations.

import tkinter as tk
from tkinter import messagebox, simpledialog
from .storage import load_tasks, save_tasks
from .tasks import add_task, complete_task, delete_task

class TaskManagerApp:
    def __init__(self, root, db_path):
        self.root = root
        self.root.title("Task Management System")
        self.db_path = db_path
        self.tasks = load_tasks(self.db_path)

        self.task_listbox = tk.Listbox(root, width=50, height=15)
        self.task_listbox.pack(pady=10)

        self.add_button = tk.Button(root, text="Add Task", command=self.add_task)
        self.add_button.pack(side=tk.LEFT, padx=5)

        self.complete_button = tk.Button(root, text="Complete Task", command=self.complete_task)
        self.complete_button.pack(side=tk.LEFT, padx=5)

        self.delete_button = tk.Button(root, text="Delete Task", command=self.delete_task)
        self.delete_button.pack(side=tk.LEFT, padx=5)

        self.refresh_task_list()

    def refresh_task_list(self):
        self.task_listbox.delete(0, tk.END)
        for task in self.tasks:
            status = "[Done]" if task["completed"] else "[Pending]"
            self.task_listbox.insert(tk.END, f"{status} {task['title']}")

    def add_task(self):
        title = tk.simpledialog.askstring("Add Task", "Enter task title:")
        if title:
            self.tasks.append({"id": len(self.tasks) + 1, "title": title, "completed": False})
            save_tasks(self.db_path, self.tasks)
            self.refresh_task_list()
        else:
            messagebox.showwarning("Warning", "Task title cannot be empty.")

    def complete_task(self):
        selected = self.task_listbox.curselection()
        if selected:
            index = selected[0]
            self.tasks[index]["completed"] = True
            save_tasks(self.db_path, self.tasks)
            self.refresh_task_list()
        else:
            messagebox.showwarning("Warning", "No task selected.")

    def delete_task(self):
        selected = self.task_listbox.curselection()
        if selected:
            index = selected[0]
            del self.tasks[index]
            save_tasks(self.db_path, self.tasks)
            self.refresh_task_list()
        else:
            messagebox.showwarning("Warning", "No task selected.")

if __name__ == "__main__":
    DB_PATH = "data/tasks.csv"
    root = tk.Tk()
    app = TaskManagerApp(root, DB_PATH)
    root.mainloop()