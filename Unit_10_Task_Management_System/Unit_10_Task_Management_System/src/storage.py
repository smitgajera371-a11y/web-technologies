import csv, os

# This module handles data persistence for the Task Management System.
# It uses CSV files to store task data and ensures that data is loaded and saved correctly.

FIELDS = ["id", "title", "description", "completed"]

def load_tasks(path):
    if not os.path.exists(path):
        return []

    tasks = []
    try:
        with open(path, newline='', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                tasks.append({
                    "id": row["id"],
                    "title": row["title"],
                    "description": row["description"],
                    "completed": row["completed"] == "True"
                })
    except FileNotFoundError:
        print("Error: Data file not found. Starting with an empty task list.")
    except csv.Error:
        print("Error: Corrupted data file. Starting with an empty task list.")
    except Exception as e:
        print(f"Unexpected error: {e}. Starting with an empty task list.")

    return tasks

def save_tasks(path, tasks):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        for task in tasks:
            writer.writerow(task)