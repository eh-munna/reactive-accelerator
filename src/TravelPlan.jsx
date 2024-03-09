import { useState } from 'react';
import PlacesTree from './PlacesTree';
import { initialTravelPlan } from './data/flatten';
export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <ol className="list-inside list-decimal mb-1">
        {planetIds.map((id) => (
          <PlacesTree
            key={id}
            id={id}
            placesById={plan}
            parentId={0}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
