export default function taskReducers(tasks, action) {
  if (action.type === 'added') {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === 'changed') {
    return tasks.map((task) =>
      task.id === action.task.id ? action.task : task
    );
  } else if (action.type === 'deleted') {
    return tasks.filter((task) => task.id !== action.task.id);
  } else {
    throw new Error('Invalid action type: ' + action.type);
  }
}
