import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MobileNavElement.scss';
import lists from '../../ExpandListItems.json';
import MobileExpandList from '../../components/MobileExpandList/MobileExpandList';

const MobileNavElement = ({ name }) => {
  const list = lists.list[name];
  const listLength = lists.list[name].length;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div onClick={handleMouseClick} role="presentation" className="mobileNavElement">
        {name}
        {
          !!listLength && <div className={`arrow ${isExpanded ? 'arrowReverse' : ''}`} />
        }
      </div>
      {
        !!listLength && <MobileExpandList isExpanded={isExpanded} list={list} />
      }
    </>
  );
};

MobileNavElement.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MobileNavElement;
