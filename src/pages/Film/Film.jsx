import React, { Fragment, useEffect, useState } from 'react';
import { films } from '../../components/Films.jsx';
import '../../images/films/DML.jpg';
import '../../images/films/puncher.jpg';
import DescriptionPanel from '../../components/DescriptionPanel.jsx';
import Logo from '../../components/Logo';
import RainButton from '../../components/Animation/RainButton';

//noop
const noop = () => {};

const Film = () => {
  const [filmIsClicked, setFilmIsClicked] = useState(false);
  const [selectedFilmIndex, setSelectedFilmIndex] = useState(0);

  const handleFilmClick = (index) => {
    setFilmIsClicked((filmIsClicked) => !filmIsClicked);
    setSelectedFilmIndex(index);
  };

  const FilmCard = ({ className, index, onClick }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
      setIsMouseOver((isMouseOver) => !isMouseOver);
    };

    return (
      <div className={className}>
        <div className="relative h-full 2xl:h-screen flex items-center justify-center">
          <img
            onClick={() => onClick(index)}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
            className={`film-poster w-full 2xl:w-auto 2xl:h-3/4 ${
              isMouseOver ? 'shadow' : ''
            }`}
            src={films[index].image}
            alt="..."
          />
          {isMouseOver ? (
            <div className="trailer-text">
              {index === 0 ? (
                <div className="trailer-text-inner">Трейлер</div>
              ) : (
                <div className="trailer-text-inner leading-big">Скоро...</div>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {filmIsClicked ? <div className="trailer-bg"></div> : ''}

      {filmIsClicked ? (
        <div className="trailer">
          <div className="player-container fixed flex items-center">
            <button
              onClick={handleFilmClick}
              className="absolute -right-8 top-0"
            >
              <div className="cancel-container"></div>
            </button>
            {films[selectedFilmIndex].trailer}
          </div>
        </div>
      ) : (
        ''
      )}

      <div
        className={`film-preview 2xl:w-full 2xl:h-screen flex justify-center items-center`}
      >
        <div className="h-full md:h-full mb-20 flex items-center 2xl:flex-row flex-col">
          <FilmCard
            onClick={handleFilmClick}
            className="film-card my-12 mx-4"
            index={0}
          />

          <FilmCard onClick={noop} className="film-card my-12 mx-4" index={1} />
        </div>
      </div>

      <RainButton />
      <Logo />
    </Fragment>
  );
};

export default Film;
