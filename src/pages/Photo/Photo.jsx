import React, { Fragment, useRef, useState } from 'react';
import Logo from '../../components/Logo';
import RainButton from '../../components/Animation/RainButton';

import { imagesDML, imagesPuncher } from '../../components/Photos.jsx';

import '../../images/photos/process/DML1.jpg';
import '../../images/photos/process/DML2.jpg';
import '../../images/photos/process/DML3.jpg';
import '../../images/photos/process/DML4.jpg';
import '../../images/photos/process/DML5.jpg';
import '../../images/photos/process/DML6.jpg';
import '../../images/photos/process/DML7.jpg';
import '../../images/photos/process/DML8.jpg';
import '../../images/photos/process/DML9.jpg';
import '../../images/photos/process/DML10.jpg';
import '../../images/photos/process/DML11.jpg';
import '../../images/photos/process/DML12.jpg';
import '../../images/photos/process/DML13.jpg';
import '../../images/photos/process/DML14.jpg';
import '../../images/photos/process/DML15.jpg';
import '../../images/photos/process/DML16.jpg';
import '../../images/photos/process/DML17.jpg';
import '../../images/photos/process/DML18.jpg';

import '../../images/photos/process/puncher1.jpg';
import '../../images/photos/process/puncher2.jpg';
import '../../images/photos/process/puncher3.jpg';
import '../../images/photos/process/puncher4.jpg';
import '../../images/photos/process/puncher5.jpg';
import '../../images/photos/process/puncher6.jpg';
import '../../images/photos/process/puncher7.jpg';
import '../../images/photos/process/puncher8.jpg';
import '../../images/photos/process/puncher9.jpg';
import '../../images/photos/process/puncher10.jpg';
import '../../images/photos/process/puncher11.jpg';
import '../../images/photos/process/puncher12.jpg';
import '../../images/photos/process/puncher13.jpg';
import '../../images/photos/process/puncher14.jpg';
import '../../images/photos/process/puncher15.jpg';
import '../../images/photos/process/puncher16.jpg';
import '../../images/photos/process/puncher17.jpg';
import '../../images/photos/process/puncher18.jpg';
import '../../images/photos/process/puncher19.jpg';
import '../../images/photos/process/puncher20.jpg';
import '../../images/photos/process/puncher21.jpg';
import '../../images/photos/process/puncher22.jpg';
import '../../images/photos/process/puncher23.jpg';
import '../../images/photos/process/puncher24.jpg';
import '../../images/photos/process/puncher25.jpg';
import '../../images/photos/process/puncher26.jpg';
import '../../images/photos/process/puncher27.jpg';
import '../../images/photos/process/puncher28.jpg';
import '../../images/photos/process/puncher29.jpg';
import '../../images/photos/process/puncher30.jpg';
import '../../images/photos/process/puncher31.jpg';
import '../../images/photos/process/puncher32.jpg';
import '../../images/photos/process/puncher33.jpg';
import '../../images/photos/process/puncher34.jpg';
import '../../images/photos/process/puncher35.jpg';
import '../../images/photos/process/puncher36.jpg';
import '../../images/photos/process/puncher37.jpg';
import '../../images/photos/process/puncher38.jpg';
import '../../images/photos/process/puncher39.jpg';
import '../../images/photos/process/puncher40.jpg';
import '../../images/photos/process/puncher41.jpg';
import '../../images/photos/process/puncher42.jpg';
import '../../images/photos/process/puncher43.jpg';
import '../../images/photos/process/puncher44.jpg';
import '../../images/photos/process/puncher45.jpg';
import '../../images/photos/process/puncher46.jpg';
import '../../images/photos/process/puncher47.jpg';
import '../../images/photos/process/puncher48.jpg';

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

  function PhotoCard({ index }) {
    return (
      <div className="pointer-events-none h-full inline-block py-3 2xl:my-0 mx-4">
        <img className="h-full w-full" alt="..." src={photos[index].image} />
      </div>
    );
  }

  function addPhoto() {
    return photos.map((photo, index) => {
      return <PhotoCard key={index} index={index} />;
    });
  }

  return (
    <Fragment>
      <div className="flex w-full">
        <div
          className="photos w-screen h-full 2xl:h-screen 2xl:flex 2xl:overflow-y-hidden 2xl:overflow-x-scroll 2xl:items-center"
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
