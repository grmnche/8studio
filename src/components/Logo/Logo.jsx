import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({className}) => {
  return (
    <NavLink to="/" end>
      <img
        className={`logo ${className} fixed`}
        src="./images/logo.png"
        alt=""
      />
    </NavLink>
  );
};

export default Logo;
