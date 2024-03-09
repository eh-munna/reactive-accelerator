import { useState } from "react";

export default function PrivatePanel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  const onShow = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    </>
  );
}
