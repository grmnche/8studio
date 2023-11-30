import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({className}) => {
  return (
    <NavLink to="/" end>
      <img
        className={`logo ${className} w-14 lg:w-24 fixed bottom-14 lg:bottom-12 right-4 2xl:right-20`}
        src="./images/logo.svg"
        alt=""
      />
    </NavLink>
  );
};

export default Logo;
