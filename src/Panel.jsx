export default function Panel({ title, isActive, children, onShow }) {
  console.log(isActive);
  return (
    <>
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    </>
  );
}
