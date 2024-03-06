import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import SearchBox from './SearchBox';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

export default function TaskBoard() {
  const initialTask = {
    id: crypto.randomUUID(),
    isBookmarked: false,
    title: 'Hello',
    description:
      'Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.',
    tags: ['Web', 'Python', 'API'],
    priority: 'High',
  };

  const [tasks, setTasks] = useState([initialTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
      setTaskToUpdate(null);
    }
    setShowModal(false);
  };

  const handleEditTask = (currentTask) => {
    setTaskToUpdate(currentTask);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTaskToUpdate(null); //
  };

  return (
    <>
      {showModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onSave={handleAddTask}
          onClose={handleCloseModal}
        />
      )}

      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchBox />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions handleModal={() => setShowModal(true)} />
            <TaskList tasks={tasks} onEdit={handleEditTask} />
          </div>
        </div>
      </section>
    </>
  );
}
