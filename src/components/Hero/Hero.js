import React from 'react';
import styles from './Hero.module.css'; // Importiere das CSS-Modul
import HeroImage from '../../assets/images/HeroImage.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, dedicated to
          traditional recipes served with a modern twist.
        </p>

        <Link to="/reservations">
          <button id="button" to="/reservations">
            Reserve a Table
          </button>
        </Link>
      </div>

      <div className={styles.featured}>
        <img src={HeroImage} alt="restaurantFood" />
      </div>
    </section>
  );
}

export default Hero;
