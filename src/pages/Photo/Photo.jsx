import React, { Fragment, useRef, useState } from 'react';
import Logo from '../../components/Logo';
import RainButton from '../../components/Animation/RainButton';
import PhotoCard from '../../components/PhotoCard';

import { imagesDML, imagesPuncher } from '../../components/Photos.jsx';

const photos = [...imagesDML, ...imagesPuncher];

const Photo = () => {
  const [clicked, setClicked] = useState(false);
  const [clickX, setClickX] = useState(0);
  const divRef = useRef();

  const handleMouseDown = (e) => {
    setClicked(true);
    setClickX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (clicked && divRef.current) {
      divRef.current.scrollLeft =
        divRef.current.scrollLeft + (clickX - e.clientX);
      setClickX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  function addPhoto() {
    return photos.map((photo, index) => {
      return <PhotoCard key={index} index={index} />;
    });
  }

  return (
    <Fragment>
      <div className="inner-page flex">
        <div
          className="photos"
          ref={divRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="photos-container 2xl:w-full h-full 2xl:h-2/3 grid 2xl:inline-block">
            {addPhoto()}
          </div>
        </div>

        <RainButton />
        <Logo />
      </div>
    </Fragment>
  );
};

export default Photo;
