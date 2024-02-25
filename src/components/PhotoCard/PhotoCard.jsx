import React from 'react';
import { imagesDML, imagesPuncher } from '../Photos.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const photos = [...imagesDML, ...imagesPuncher];

const PhotoCard = ({ index }) => {
  return (
    <div className="photo-card pointer-events-none h-full inline-block py-3 2xl:my-0">
      <LazyLoadImage
        alt="..."
        src={photos[index].image}
        effect="blur"
        className="h-full w-full"
      />
    </div>
  );
};

export default PhotoCard;
