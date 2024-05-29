import Nav from './Nav';
import logo from '../assets/Icons/Logo.png';

import React from 'react';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
