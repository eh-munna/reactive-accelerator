// eslint-disable-next-line react/prop-types
export default function Card({ user }) {
  // eslint-disable-next-line react/prop-types
  const { notable } = user;
  return (
    <>
      <div>
        <h1>{notable}</h1>
      </div>
    </>
  );
}
