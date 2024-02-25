import React, { useContext } from 'react';
import { AnimationContext } from '../../../contexts/AnimationContext.jsx';

const RainButton = ({className}) => {
  const { handleRainControl } = useContext(AnimationContext);

  return (
    <img
      onClick={handleRainControl}
      className={`rain-btn ${className} fixed`}
      src='./images/drop.png'
    ></img>
  );
};

export default RainButton;
