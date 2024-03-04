import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  });

  const handleNameChange = (firstName, lastName) => {
    setPerson({
      firstName: firstName,
      lastName: lastName,
    });
  };

  const handleAgeChange = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <div>
      <h1 className="text-xl my-2">Changing Object Property Value</h1>

      <h2 className="text-lg my-2">Initial Render</h2>

      <ul>
        <li>First Name: {person.firstName}</li>
        <li>Last Name: {person.lastName}</li>
        <li>Age: {person.age}</li>
      </ul>
      <h2 className="text-lg my-2">Now Trigger Render</h2>

      <button
        className="border border-indigo-50 p-1 rounded-md"
        onClick={() => {
          handleNameChange('Doe', 'John');
        }}
      >
        Click To Change
      </button>
      <button
        className="border border-indigo-50 p-1 rounded-md"
        onClick={handleAgeChange}
      >
        Click To Change Age
      </button>
    </div>
  );
}
