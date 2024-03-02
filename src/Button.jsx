export default function Button({ onSmash, children }) {
  return (
    <button
      onClick={onSmash}
      className="border border-indigo-200 px-2 py-1 rounded-md"
    >
      {children}
    </button>
  );
}
