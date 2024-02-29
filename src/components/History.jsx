/* eslint-disable react/prop-types */
export default function History({ moves }) {
  return (
    <>
      <h1 className="px-2 py-3 text-xl">Game History</h1>
      <ul className="px-3 space-y-2">{moves}</ul>
    </>
  );
}
