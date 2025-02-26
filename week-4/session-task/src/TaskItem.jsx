export default function TaskItem({ task, deleteTask, updateTask }) {
    return (
        <div className="bg-white p-3 mb-2 shadow-md rounded-md flex justify-between items-center">
            <div>
                <h2 className={`font-bold ${task.completed ? "line-through text-gray-400" : ""}`}>
                    {task.title}
                </h2>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => updateTask(task.id, { completed: !task.completed })}
                    className={`px-3 py-1 rounded text-white ${task.completed ? "bg-gray-500" : "bg-green-500"}`}
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
