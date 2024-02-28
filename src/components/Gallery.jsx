import Profile from './Profile';

export default function Gallery() {
  let name = 'John';
  let age = 30;
  let location = 'New York';

  return (
    <>
      <h1 className="my-3 text-lg">
        Displaying profiles using reusable components
      </h1>
      <div className="grid grid-cols-3">
        <Profile />
        <Profile />
        <Profile />
      </div>
      <div>
        <Profile name={name} age={age} location={location} />
      </div>
    </>
  );
}
