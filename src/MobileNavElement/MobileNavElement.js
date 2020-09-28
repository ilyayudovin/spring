import React, { useState } from 'react';
import './MobileNavElement.scss';
import Collapse from '@material-ui/core/Collapse';
import lists from '../ExpandedListItems.json';
import MobileExpandedList from '../MobileExpandedList/MobileExpandedList';

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
        !!listLength && <Collapse in={isExpanded}><MobileExpandedList list={list} /></Collapse>
      }
    </>
  );
};

export default MobileNavElement;
