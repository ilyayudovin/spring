import React, { useState } from 'react';
import '../Header/Header.scss';
import { AnimateOnChange } from 'react-animation';
import ExpandedList from '../ExpandedList/ExpandedList';
import lists from '../ExpandedListItems.json';

const NavElement = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className="navElementContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <li className={!lists.list[name].length && 'hoverableExpandedItem'}>
          <div>
            <span className="navElementName">{ name }</span>
            {
            !!lists.list[name].length && <div className="arrow" />
          }
          </div>
        </li>
        <AnimateOnChange>
          {
            isExpanded && !!lists.list[name].length && <ExpandedList list={lists.list[name]} />
          }
        </AnimateOnChange>
      </div>
    </>
  );
};

export default NavElement;
