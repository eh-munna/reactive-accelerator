export default function Recipe({ drinkers }) {
  return (
    <>
      <h2 className="my-2 text-base">For {drinkers} people</h2>

      <ul className="list-disc list-inside">
        <li>Boil {drinkers} cups of water.</li>
        <li>
          Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
        </li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ul>
    </>
  );
}
