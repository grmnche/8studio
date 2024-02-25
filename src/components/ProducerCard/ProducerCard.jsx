import React from 'react';
import { producers } from '../Producers.jsx';

const ProducerCard = ({ index }) => {
  return (
    <div className="producer-card">
      <h4>{index === 0 ? 'Евгений Татаров' : 'Евгений Шириков'}</h4>

      <div className="producer-card__photo">
        <img src={producers[index].image} alt="" />

        <p className='status'>
          <span className="mx-2 2xl:my-2">
            {index === 0 ? 'Режиссёр' : 'Актёр'}
          </span>
          <span className="mx-2 2xl:my-2">Продюсер</span>
        </p>
      </div>
    </div>
  );
};

export default ProducerCard;
