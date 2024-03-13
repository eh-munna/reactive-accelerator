import Task from './Task';

export default function TaskList({ tasks, onDeleteTask, onTextChange }) {
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
