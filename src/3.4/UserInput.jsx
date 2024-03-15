import { useState } from 'react';

const initialInput = {
  id: 0,
  name: '',
};

export default function UserInput() {
  const [inputs, setInputs] = useState([initialInput]);

  const handleAddInput = () => {
    const nextInputId = inputs[inputs.length - 1].id + 1;
    const newInput = {
      id: nextInputId,
      name: '',
    };
    setInputs([...inputs, newInput]);
    console.log(inputs);
  };

  const handleInputChange = (id, value) => {
    const updatedInputs = inputs.map((input) => {
      if (input.id === id) {
        return {
          ...input,
          name: value,
        };
      }
      return input;
    });
    setInputs(updatedInputs);
  };

  return (
    <>
      <div className="mt-2">
        {inputs.map((input) => (
          <input
            key={input.id}
            className="mb-2 p-1"
            value={input.name}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder="Add new input"
          />
        ))}
      </div>

      <div>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </>
  );
}
