import Clock from './components/Clock';

function App() {
  return (
    <>
      <h1 className="text-3xl text-center my-2 font-semibold font-sans">
        Getting started with React: Describing the UI
      </h1>

      <div className="container mx-auto px-4 py-3">
        {/* <Gallery />

        <Person /> */}

        {/* <PackingLists /> */}

        {/* <List /> */}

        {/* <Orders /> */}

        <Clock time={new Date()} />
      </div>
    </>
  );
}

export default App;
