import { useState } from 'react';
import Items from './Items';

export default function TodoList() {
  const todoLists = [
    { id: 1, title: 'Clean Room', selected: false },
    { id: 2, title: 'Call Mom', selected: false },
    { id: 3, title: 'Call Dad', selected: false },
  ];

  const [todos, setTodos] = useState(todoLists);

  const handleSelect = (id) => {
    const selectTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          selected: !todo.selected,
        };
      }
      return todo;
    });
    setTodos(selectTodo);
  };

  const listItems = todos.map((item) => (
    <Items key={item.id} item={item} onSelect={handleSelect} />
  ));

  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
