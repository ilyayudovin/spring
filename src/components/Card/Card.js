import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ name, icon, text }) => (
  <div className="card">
    <div className="imgContainer">
      <img alt="icon" className="icon" src={icon} />
    </div>
    <div className="cardTextContainer">
      <h3>{name}</h3>
      <p className="cardText">{text}</p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
