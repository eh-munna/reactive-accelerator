import { useState } from 'react';

let index = 0;
export default function List() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItems = () => {
    setItems([...items, { id: index++, name: name }]);
  };

  const handleDelItems = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  };

  const listItem = items.map((item) => (
    <li key={item.id}>
      {item.name} <button onClick={() => handleDelItems(item.id)}>del</button>
    </li>
  ));

  return (
    <>
      <input
        className="mx-3 p-1 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="mx-3 p-1 border border-indigo-300 rounded-md"
        onClick={handleAddItems}
      >
        Add Item
      </button>
      <ul>{listItem}</ul>
    </>
  );
}
