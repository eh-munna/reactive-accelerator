import { useState } from 'react';
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

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchBox />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
