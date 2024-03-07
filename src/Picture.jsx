/* 


Make it so that clicking on the picture removes the background--active CSS class from the outer <div>, but adds the picture--active class to the <img>. Clicking the background again should restore the original CSS classes.

Visually, you should expect that clicking on the picture removes the purple background and highlights the picture border. Clicking outside the picture highlights the background, but removes the picture border highlight.

*/

import { useState } from 'react';

export default function Picture() {
  //   const [hasBg, setHasBg] = useState(true);
  //   const [hasBorder, setHasBorder] = useState(true);

  const [active, setIsActive] = useState(true);

  //   const handleBg = () => {
  //     setHasBg(!hasBg);
  //     setHasBorder(!hasBorder);
  //   };
  //   const handleBorder = () => {
  //     setHasBorder(!hasBorder);
  //     setHasBg(!hasBg);
  //   };

  const handleActive = () => {
    setIsActive(!active);
  };

  return (
    // <div
    //   onClick={handleBg}
    //   className={`container mx-auto ${hasBg ? 'bg-purple-500' : 'bg-red-500'}`}
    // >
    //   <img
    //     onClick={handleBorder}
    //     className={`flex justify-center items-center flex-col mx-auto ${
    //       hasBorder ? 'border border-red-50' : 'border-0'
    //     }`}
    //     alt="Rainbow houses in Kampung Pelangi, Indonesia"
    //     src="https://i.imgur.com/5qwVYb1.jpeg"
    //   />
    // </div>
    <div
      onClick={handleActive}
      className={`container mx-auto ${active ? 'bg-purple-500' : 'bg-white'}`}
    >
      <img
        onClick={handleActive}
        className={`flex justify-center items-center flex-col mx-auto border-4 ${
          active ? 'border-white' : 'border-purple-500'
        }`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
