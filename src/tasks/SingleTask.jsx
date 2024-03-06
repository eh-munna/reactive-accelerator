/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';

export default function SingleTask({ task, onEdit, onDelete, onFavToggle }) {
  return (
    <tr className="border-b border-[#2E3443]">
      <td>
        <button onClick={() => onFavToggle(task.id)}>
          {task.isBookmarked ? (
            <FaStar color="yellow" />
          ) : (
            <FaStar color="gray" />
          )}
        </button>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, idx) => (
            <li key={idx}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
