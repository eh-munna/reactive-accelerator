import Recipe from './Recipe';

export default function Orders() {
  return (
    <>
      <h1 className="my-3 text-lg">Spiced Chai Recipe</h1>
      <Recipe drinkers={2} />
      <Recipe drinkers={4} />
    </>
  );
}
