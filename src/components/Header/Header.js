import React from 'react';
import Nav from '../../components/Navbar/Navbar';
import logo from '../../assets/Icons/Logo.png';

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
