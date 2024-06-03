import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" activeClassName="active">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" activeClassName="active">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
