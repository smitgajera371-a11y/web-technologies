import unittest
from tkinter import Tk
from src.gui import TaskManagerApp

class TestGUI(unittest.TestCase):

    def setUp(self):
        self.root = Tk()
        self.app = TaskManagerApp(self.root, "data/tasks.csv")

    def tearDown(self):
        self.root.destroy()

    def test_add_task(self):
        # Simulate adding a task
        self.app.tasks.append({"id": 1, "title": "Test Task", "completed": False})
        self.app.refresh_task_list()
        self.assertEqual(len(self.app.tasks), 1)

    def test_complete_task(self):
        # Simulate completing a task
        self.app.tasks.append({"id": 1, "title": "Test Task", "completed": False})
        self.app.tasks[0]["completed"] = True
        self.app.refresh_task_list()
        self.assertTrue(self.app.tasks[0]["completed"])

if __name__ == "__main__":
    unittest.main()