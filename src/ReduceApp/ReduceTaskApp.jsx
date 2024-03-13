import { useReducer } from 'react';
import AddTask from './ReduceAddTask';
import TaskList from './ReduceTaskList';
import taskReducers from './reducers/taskReducers';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function ReduceTaskApp() {
  const [tasks, dispatch] = useReducer(taskReducers, initialTasks);

  const getNextId = (tasks) => {
    const nextTaskId = tasks.reduce((prevId, currId) =>
      prevId && prevId.id > currId.id ? prevId.id + 1 : currId.id + 1
    );
    return nextTaskId;
  };

  const handleAddTask = (taskText) => {
    const newTask = {
      type: 'added',
      id: getNextId(tasks),
      text: taskText,
    };
    dispatch(newTask);
  };

  const handleTextChange = (task) => {
    dispatch({
      type: 'changed',
      task: task,
    });
  };

  const handleDeleteTask = (task) => {
    dispatch({
      type: 'deleted',
      task: task,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onTextChange={handleTextChange}
      />
    </>
  );
}
