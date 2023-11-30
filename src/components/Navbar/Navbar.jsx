import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import RainButton from '../Animation/RainButton';

export function Navbar() {
  const [isHoveredProducers, setIsHoveredProducers] = useState(false);
  const [isHoveredFilm, setIsHoveredFilm] = useState(false);

  return (
    <Fragment>
      <div className="navbar">
        <div id="infinity">
          <NavLink
            id="infinity-photo"
            to="/photo"
            end
            onMouseEnter={() => setIsHoveredProducers(true)}
            onMouseLeave={() => setIsHoveredProducers(false)}
          >
            <div className="nav-item">
              <span>Фото</span>
            </div>
            {isHoveredProducers && (
              <>
                <div className="ripple extra-small"></div>
                <div className="ripple small"></div>
                <div className="ripple medium"></div>
                <div className="ripple large"></div>
                <div className="ripple extra-large"></div>
              </>
            )}
          </NavLink>
          <NavLink
            id="infinity-film"
            to="/film"
            end
            onMouseEnter={() => setIsHoveredFilm(true)}
            onMouseLeave={() => setIsHoveredFilm(false)}
          >
            <div className="nav-item">
              <span>Проекты</span>
            </div>
            {isHoveredFilm && (
              <>
                <div className="ripple extra-small"></div>
                <div className="ripple small"></div>
                <div className="ripple medium"></div>
                <div className="ripple large"></div>
                <div className="ripple extra-large"></div>
              </>
            )}
          </NavLink>
        </div>

        <RainButton />
        <NavLink
          to="/about"
          end
          className="about-us tracking-wide absolute bottom-16 right-10 lg:right-20 text-xl md:text-3xl lg:text-5xl"
        >
          О нас
        </NavLink>
      </div>
    </Fragment>
  );
}

export default Navbar;
