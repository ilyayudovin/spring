import React from 'react';
import PropTypes from 'prop-types';
import '../Header/Header.scss';
import ExpandList from '../ExpandList/ExpandList';
import lists from '../../ExpandListItems.json';

const NavElement = ({ name }) => {
  const list = lists.list[name];
  const listLength = lists.list[name].length;

  return (
    <>
      <div className="navElementContainer">
        <li className={!listLength && 'hoverableExpandedItem'}>
          <div>
            <span className="navElementName">{name}</span>
            {
              !!listLength && <div className="arrow" />
            }
          </div>
        </li>
        {
          !!listLength && <ExpandList list={list} />
        }
      </div>
    </>
  );
};

NavElement.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavElement;
