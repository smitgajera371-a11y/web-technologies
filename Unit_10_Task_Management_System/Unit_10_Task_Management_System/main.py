from src.gui import TaskManagerApp
import tkinter as tk

if __name__ == "__main__":
    DB_PATH = "data/tasks.csv"
    root = tk.Tk()
    app = TaskManagerApp(root, DB_PATH)
    root.mainloop()