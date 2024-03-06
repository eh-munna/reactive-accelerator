/* eslint-disable react/prop-types */
import SingleTask from './SingleTask';

export default function TaskList({ tasks, onEdit, onDelete, onFavToggle }) {
  // console.log(object);
  return (
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {' '}
                Title{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {' '}
                Description{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {' '}
                Tags{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {' '}
                Priority{' '}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {' '}
                Options{' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <SingleTask key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onFavToggle = {onFavToggle}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
