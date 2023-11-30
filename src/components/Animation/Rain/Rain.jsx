import React, { useEffect, useRef } from 'react';

const Rain = () => {
  const raindropRef = useRef(null);
  const backRowRef = useRef(null);

  useEffect(() => {
    let increment = 0;
    let raindrops = '';
    let backDrops = '';

    while (increment < 60) {
      let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      let randoDuration = Math.random() * (1.4 - 0.4) + 0.4;

      increment += randoFiver;

      raindrops += `<div class="raindrop" style="left: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"><div class="raindrop-stem" style="animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"></div><div class="raindrop-splat" style="animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"></div></div>`;

      backDrops += `<div class="raindrop" style="right: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"><div class="raindrop-stem" style="animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"></div><div class="raindrop-splat" style="animation-delay: 0.${randoHundo}s; animation-duration: ${randoDuration}s;"></div></div>`;
    }

    raindropRef.current.innerHTML = raindrops;
    backRowRef.current.innerHTML = backDrops;
  }, []);

  return (
    <React.Fragment>
      <div className="rain-container rain-front-row" ref={raindropRef}></div>
      <div className="rain-container back-row-container" ref={backRowRef}></div>
    </React.Fragment>
  );
};

export default Rain;
