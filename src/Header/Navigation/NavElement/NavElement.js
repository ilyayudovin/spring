import React, { useState } from 'react';
import '../../../Styles/Header.scss';
import { AnimateOnChange } from 'react-animation';
import ExpandedList from './ExpandedList/ExpandedList';
import lists from '../../../ExpandedListItems.json';

const NavElement = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let chosenList;
  Object.keys(lists.list).forEach((key) => {
    if (key === name) {
      chosenList = key;
    }
  });

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className="navElementContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <li className={!lists.list[chosenList].length && 'hoverableExpandedItem'}>
          <div>
            <span className="navElementName">{ name }</span>
            {
            !!lists.list[chosenList].length && <div className="arrow" />
          }
          </div>
        </li>
        <AnimateOnChange>
          {
            isExpanded && !!lists.list[chosenList].length && <ExpandedList list={lists.list[chosenList]} />
          }
        </AnimateOnChange>
      </div>
    </>
  );
};

export default NavElement;
