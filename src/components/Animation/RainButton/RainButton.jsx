import React, { useContext } from 'react';
import { AnimationContext } from '../../../contexts/AnimationContext.jsx';

const RainButton = ({className}) => {
  const { handleRainControl } = useContext(AnimationContext);

  return (
    <button
      onClick={handleRainControl}
      className={`rain-btn ${className} fixed bottom-14 left-8 lg:left-20 w-8 lg:w-14 h-8 lg:h-14`}
    ></button>
  );
};

export default RainButton;
