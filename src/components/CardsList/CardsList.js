import React, { useEffect, useState } from 'react';
import  debounce  from 'lodash.debounce';
import instance from '../../api/instance';
import Card from '../Card/Card';
import './CardList.scss';
import './Search.scss';

const CardsList = () => {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    instance.get('/projects')
      .then((res) => {
        setCards(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSearchedInfo = debounce((text) => {
    instance.get(`/projects/search?q=${text}`)
      .then(res => setCards(res.data));
  }, 500);

  const handleSearch = (e) => {
    const inputText = e.currentTarget.value;
    getSearchedInfo(inputText);
  };

  return (
    <>
      <div className="searchInput">
        <input placeholder="Search" onChange={handleSearch} />
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
                        icon={item.url}
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
