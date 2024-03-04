import { useState } from 'react';
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];
export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  const handleClick = () => {
    const newMove = shapes.map((shape) => {
      if (shape.type === 'square') {
        return { ...shape };
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setShapes(newMove);
  };

  return (
    <>
      <div className="pb-8">
        <button
          className="border border-indigo-200 rounded-md p-2"
          onClick={handleClick}
        >
          Move circles down!
        </button>
      </div>
      <div className="relative">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              background: 'purple',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === 'circle' ? '50%' : '',
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>
    </>
  );
}
