import React from 'react';

import restaurantChefs from '../../assets/images/restaurant-chef-b.jpg';
import restaurant from '../../assets/images/restaurant.jpg';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            We are a family-owned Mediterranean restaurant, dedicated to
            traditional recipes served with a modern twist.
          </p>
        </div>

        <div className="owners">
          <img id="chefs" src={restaurantChefs} alt="male owner" />
          <img id="restaurant" src={restaurant} alt="female owner" />
        </div>
      </div>
    </>
  );
};

export default About;
