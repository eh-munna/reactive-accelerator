/* eslint-disable react/prop-types */
export default function PlacesTree({ id, placesById, parentId, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li className="ml-8 list-inside list-decimal mb-1">
      {place.title}
      <button
        onClick={() => onComplete(parentId, id)}
        className="ml-2 border border-indigo-100 px-1 mb-1"
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol className="mb-1">
          {childIds.map((childId) => (
            <PlacesTree
              key={childId}
              id={childId}
              placesById={placesById}
              parentId={id}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
