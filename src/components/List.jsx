const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  },
  {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  },
  {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  },
];

export default function List() {
  const listItems = people.map((person) => (
    <li className="list-inside list-disc" key={person.id}>
      {person.name}: {person.profession}
    </li>
  ));

  const chemists = people
    .filter((person) => person.profession === 'chemist')
    .map((person) => (
      <li className="list-inside list-disc" key={person.id}>
        {person.name}: {person.profession}
      </li>
    ));

  return (
    <>
      <h1 className="my-3 text-lg">
        Displaying every person from list of members
      </h1>

      <ul>{listItems}</ul>

      <h1 className="my-3 text-lg">
        Displaying only show people whose profession is &quot;chemist&quot;
      </h1>

      <ul>{chemists}</ul>
    </>
  );
}
