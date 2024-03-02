import Button from './Button';

export default function Toolbar() {
  return (
    <div
      className="border border-md border-gray-50 p-8"
      onClick={() => console.log(`Div is clicked`)}
    >
      <Button
        onSmash={(e) => {
          e.stopPropagation();
          console.log(`Button is clicked`);
        }}
      >
        Click Button
      </Button>
    </div>
  );
}
