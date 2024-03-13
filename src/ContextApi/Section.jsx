import { LevelContext } from './contexts/LevelContext';

export default function Section({ children, level }) {
  return (
    <>
      <LevelContext.Provider value={level}>
        <section>{children}</section>
      </LevelContext.Provider>
    </>
  );
}
