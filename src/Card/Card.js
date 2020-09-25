import React from 'react';
import './Card.scss';

const Card = ({ name, icon, text }) => (
  <div className="card">
    <div className="cardContent">
      <div className="imgContainer">
        <img alt="icon" className="icon" src={icon} />
      </div>
      <div className="cardTextContainer">
        <h3>{name}</h3>
        <p className="cardText">{text}</p>
      </div>
    </div>
  </div>
);

export default Card;
