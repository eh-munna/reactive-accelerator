/* eslint-disable react/prop-types */
export default function Square({ value }) {
  const handleClick = () => {};

  return (
    <>
      <button
        className="border border-indigo-400 text-xl font-semibold h-12 w-12 m-2 text-gray-200"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}
