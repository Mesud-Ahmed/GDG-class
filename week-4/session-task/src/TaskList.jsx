import TaskItem from "./TaskItem";

export default function TaskList({ tasks, deleteTask, updateTask }) {
    return (
        <div className="w-80">
            {tasks.length === 0 ? (
                <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
                ))
            )}
        </div>
    );
}
