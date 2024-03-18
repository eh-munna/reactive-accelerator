export default function PlacesTree({ placesById, id }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <>
      <li>{place.title}</li>
      <button>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlacesTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </>
  );
}
