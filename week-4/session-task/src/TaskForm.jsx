import { useState } from "react";

export default function TaskForm({ addTask, existingTask, updateTask }) {
    const [task, setTask] = useState(
        existingTask || { title: "", description: "", dueDate: "", completed: false }
    );

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingTask) {
            updateTask(existingTask.id, task);
        } else {
            addTask(task);
        }
        setTask({ title: "", description: "", dueDate: "", completed: false });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md w-80 mb-4">
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
            />
            <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                required
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
            />
            <input
                type="date"
                name="dueDate"
                required
                value={task.dueDate}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                {existingTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}
