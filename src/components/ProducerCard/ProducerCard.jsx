import React from 'react';
import { producers } from '../Producers.jsx';

const ProducerCard = ({ index }) => {
  return (
    <div className="producer relative flex justify-center items-center 2xl:h-auto w-10/12 2xl:w-2/5 mx-auto 2xl:mx-0">
      <span className="producer-name absolute -top-12 2xl:-top-24 -left-1 2xl:left-20 leading-[2.2rem] md:leading-[3rem] lg:leading-[4rem]">
        Евгений
        <br />
        {index === 0 ? 'Татаров' : 'Шириков'}
      </span>
      <div className="photo-status-container relative mx-auto 2xl:mx-0 w-full lg:w-1/2">
        <figure className="mx-auto w-full">
          <img
            className="producer-photo w-full 2xl:w-full"
            src={producers[index].image}
            alt=""
          />
          <figcaption>
            <p className="-bottom-8 2xl:top-4 2xl:right-none absolute inline-block left-0 2xl:-right-6 2xl:top-32 uppercase tracking-widest 2xl:writing-vertical-rl text-sm md:text-lg lg:text-xl 2xl:text-base">
              <span className="mx-2 2xl:my-2">
                {index === 0 ? 'Режиссёр' : 'Актёр'}
              </span>
              <span className="mx-2 2xl:my-2">Продюсер</span>
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ProducerCard;
