import { useState } from 'react';

export default function Task({ task, onDeleteTask, onTextChange }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onTextChange({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => onTextChange({ ...task, done: e.target.checked })}
      />

      {taskContent}
      <button onClick={() => onDeleteTask(task)}>Delete</button>
    </label>
  );
}
