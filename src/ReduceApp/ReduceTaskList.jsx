import Task from './ReduceTask';

export default function ReduceTaskList({ tasks, onDeleteTask, onTextChange }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onTextChange={onTextChange}
          />
        </li>
      ))}
    </ul>
  );
}
