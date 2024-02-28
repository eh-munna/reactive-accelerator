import Card from './Card';

export default function Person() {
  const user = {
    notable: 'Scientists',
    name: 'Maria Skłodowska',
    profession: 'physicist and chemist',
    numberOfAwards: 4,
    awards:
      '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
    discovered: 'polonium',
  };

  return (
    <>
      <Card user={user} />
    </>
  );
}
