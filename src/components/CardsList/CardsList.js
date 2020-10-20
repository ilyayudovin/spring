import React, { useEffect, useState } from 'react';
import instance from './../../api/instance';
import Card from '../Card/Card';
import './CardList.scss';
import './Search.scss';
import cardsInfo from '../../jsonInfo/CardsInfo';

const CardsList = () => {
  const [cards, setCards] = useState(cardsInfo);

  const handleChange = (e) => {
    const inputText = e.currentTarget.value;
    instance.get(`/projects/${inputText}`)
      .then((res) => {
        setCards(res.data.projectsInfo);
      })
      .catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    instance.get('/projects')
      .then((res) => {
        setCards(res.data.projectsInfo);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <div className="searchInput">
        <input placeholder="Search" onChange={handleChange} />
      </div>
      <div className="cardListContainer">
        {
          cards.length
            ? (
              <div className="cardList">
                {
                  cards
                    .map((item) => (
                      <Card
                        key={item.name}
                        name={item.name}
                        text={item.text}
                        icon={item.icon}
                      />
                    ))
                }
              </div>
            )
            : <div className="noResults">No Results</div>
        }
      </div>
    </>
  );
};

export default CardsList;
