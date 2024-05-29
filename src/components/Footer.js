import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Icons/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="Secondary Logo" />
      </div>
      <nav className="links">
        <h5>QUICK LINKS</h5>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>

      <address className="contact">
        <h5>CONTACT</h5>
        <ul>
          <li>1234 Somewhere Road #8254</li>
          <li>(+91) XXXXX84223</li>
          <li>contact@littlelemon.com</li>
        </ul>
      </address>

      <aside className="social">
        <h5>CONNECT WITH US</h5>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </aside>
    </footer>
  );
}

export default Footer;
