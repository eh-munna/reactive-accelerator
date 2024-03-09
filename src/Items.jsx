// /* eslint-disable react/prop-types */
export default function Items({ item, onSelect }) {
  return (
    <>
      <li
        className={`cursor-pointer mb-2 border border-t-0 border-r-0 border-l-0 ${
          item.selected
            ? 'text-green-500  border-b-indigo-500'
            : 'text-indigo-500 border-b-green-500'
        }`}
        onClick={() => onSelect(item.id)}
      >
        {item.title}
      </li>
    </>
  );
}
