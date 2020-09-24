import React from 'react';
import Card from './Card/Card';
import '../Styles/CardList.scss';

const CardsList = (props) => (
  <div className="cardListContainer">
    {
        props.items.length
          ? (
            <div className="cardList">
              {props.items.map((item) => <Card name={item.name} text={item.text} icon={item.icon} />)}
            </div>
          )
          : <div className="noResults">No Results</div>
      }
  </div>
);

export default CardsList;
