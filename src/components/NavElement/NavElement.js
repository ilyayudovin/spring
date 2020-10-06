import React from 'react';
import PropTypes from 'prop-types';
import '../Navigation/Header.scss';
import ExpandList from '../ExpandList/ExpandList';
import lists from '../../ExpandListItems.json';

const NavElement = ({ name }) => {
  const list = lists[name];
  const listLength = lists[name].length;

  return (
    <div className="navElementContainer">
      <li className={!listLength ? 'hoverableExpandedItem' : ''}>
        <div>
          <span className="navElementName">{name}</span>
          {
            !!listLength && <div className="arrow" />
          }</div>
      </li>
      {
        !!listLength && <ExpandList list={list} />
      }
    </div>
  );
};

NavElement.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavElement;
