import React from 'react';
import '../Header/Header.scss';
import ExpandedList from '../ExpandedList/ExpandedList';
import lists from '../ExpandedListItems.json';

const NavElement = ({ name }) => {

  return (
    <>
      <div className="navElementContainer" >
        <li className={!lists.list[name].length && 'hoverableExpandedItem'}>
          <div>
            <span className="navElementName">{ name }</span>
            {
            !!lists.list[name].length && <div className="arrow" />
          }
          </div>
        </li>
        {
          !!lists.list[name].length && <ExpandedList list={lists.list[name]} />
        }
      </div>
    </>
  );
};

export default NavElement;
