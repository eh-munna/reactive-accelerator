import { useState } from 'react';
import Panel from './Panel';
import PrivatePanel from './PrivatePanel';

export default function Accordion() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <hr />
      <div>These will share the state</div>
      <hr />
      <Panel
        title="About"
        isActive={isActive === true}
        onShow={() => setIsActive(true)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        title="Etymology"
        isActive={isActive === false}
        onShow={() => setIsActive(false)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>

      <hr />
      <div>These will work privately</div>
      <hr />

      <PrivatePanel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </PrivatePanel>
      <PrivatePanel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </PrivatePanel>
    </>
  );
}
