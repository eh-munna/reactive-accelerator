const Item = ({ name, isPacked }) => {
  //   if (isPacked) {
  //     return <li>{`${name} ✅`}</li>;
  //   } else {
  //     return <li>{`${name} not yet`}</li>;
  //   }

  //   return <li>{`${name}${isPacked ? ' ✅' : ': not yet'}`}</li>;
  return (
    <li>
      {name} {isPacked && ' ✅'}
    </li>
  );
};

export default function PackingLists() {
  return (
    <>
      <Item name="Pen" isPacked={false} />
      <Item name="Pencil" isPacked={true} />
      <Item name="Notebook" isPacked={false} />
    </>
  );
}
