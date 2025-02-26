import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function App() {
    const [tasks, setTasks] = useState([]);

    // Add a new task
    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), ...task }]);
    };

    // Delete a task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Update a task
    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        </div>
    );
}
