import React from 'react';
import logo from '../../assets/Icons/Logo.svg';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="Secondary Logo" />
      </div>
      <div className="data">
        <div className="links">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" className="a">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="a">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="a">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations" className="a">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/order-online" className="a">
                Order Online
              </Link>
            </li>
            <li>
              <Link to="/login" className="a">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h5>Contact</h5>
            <li>
              <a href="tel:your-phone-number">Phone Number</a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Your+Address"
                target="_blank"
                rel="noopener noreferrer"
              >
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul className="social-icons">
            <h5>Social Media</h5>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
