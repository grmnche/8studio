import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import RainButton from '../Animation/RainButton';
import Ripple from '../Animation/Ripple';

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

            {isHoveredProducers && <Ripple />}
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

            {isHoveredFilm && <Ripple />}
          </NavLink>
        </div>

        <RainButton />
        <NavLink
          to="/about"
          end
          className="about-us tracking-wide absolute text-xl md:text-3xl lg:text-5xl"
        >
          <p>О нас</p>
        </NavLink>
      </div>
    </Fragment>
  );
}

export default Navbar;
