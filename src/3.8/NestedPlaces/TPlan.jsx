import { useState } from 'react';
import PlacesTree from './PlacesTree';
import { initialTravelPlan } from './places';

export default function TPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];
  const planetIds = root.childIds;

  function handleComplete(parentId, childId) {
    // const parent = plan[parentId];
    // // Create a new version of the parent place
    // // that doesn't include this child ID.
    // const nextParent = {
    //   ...parent,
    //   childIds: parent.childIds.filter((id) => id !== childId),
    // };
    // setPlan([...plan.filter((p) => p.id !== parentId), nextParent]);
  }

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlacesTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
