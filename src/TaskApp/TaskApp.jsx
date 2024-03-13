import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (tasks) => {
    const nextTaskId = tasks.reduce((prevId, currId) =>
      prevId && prevId.id > currId.id ? prevId.id + 1 : currId.id + 1
    );
    return nextTaskId;
  };

  const handleAddTask = (taskText) => {
    const newTask = {
      id: getNextId(tasks),
      text: taskText,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTextChange = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = (task) => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);
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
