import React from 'react';
import bruchetta from '../../assets/images/bruchetta.svg';
import salad from '../../assets/images/greek-salad1.jpg';
import dessert from '../../assets/images/lemon-dessert1.jpg';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Specials() {
  return (
    <>
      <div className="specials-container">
        <div className="specials-head">
          <h3>This Week Specials!</h3>
          <button id="button">Online Menu</button>
        </div>

        <div className="cards">
          <Card style={{ width: '25.5rem' }}>
            <Card.Img variant="top" src={salad} />
            <Card.Body>
              <div className="card-title-price">
                <Card.Title>Greek Salad</Card.Title>
                <p className="price">$12.99</p>
              </div>
              <Card.Text>
                The famous Greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </Card.Text>
              <Button variant="primary">Order a delivery</Button>
              <FontAwesomeIcon icon={faMotorcycle} />
            </Card.Body>
          </Card>

          <Card style={{ width: '25.5rem' }}>
            <Card.Img variant="top" src={bruchetta} />
            <Card.Body>
              <div className="card-title-price">
                <Card.Title>Bruschetta</Card.Title>
                <p className="price">$5.99</p>
              </div>
              <Card.Text>
                Our Bruschetta is made from homemade grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. Topped
                with fresh vegetables.
              </Card.Text>
              <Button variant="primary">Order Delivery</Button>
              <FontAwesomeIcon icon={faMotorcycle} />
            </Card.Body>
          </Card>

          <Card style={{ width: '25.5rem' }}>
            <Card.Img variant="top" src={dessert} />
            <Card.Body>
              <div className="card-title-price">
                <Card.Title>Lemon Cake</Card.Title>
                <p className="price">$5.00</p>
              </div>
              <Card.Text>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </Card.Text>
              <Button variant="primary">Order a delivery</Button>{' '}
              <FontAwesomeIcon icon={faMotorcycle} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Specials;
