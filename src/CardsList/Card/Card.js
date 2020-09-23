import React from 'react';
import '../../Styles/Card.scss';

const Card = (props) => {
  return (
    <a className='card'>
      <div className='cardContent'>
        <div className='imgContainer'>
          <img className='icon' src={props.icon}/>
        </div>
        <div className='cardTextContainer'>
          <h3>{props.name}</h3>
          <p className='cardText'>{props.text}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
